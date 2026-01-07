export const runtime = "nodejs";

type Msg = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const { input, history } = (await req.json()) as {
      input: string;
      history?: Msg[];
    };

    if (!input || !input.trim()) {
      return Response.json({ error: "Empty input" }, { status: 400 });
    }

    const endpoint = process.env.AZURE_OPENAI_ENDPOINT; // e.g. https://xxx.openai.azure.com
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT; // your deployment name
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION || "2024-02-15-preview";

    if (!endpoint || !apiKey || !deployment) {
      return Response.json(
        { error: "Server is not configured (missing Azure OpenAI env vars)." },
        { status: 500 }
      );
    }

    // 你的「職場專家」系統提示（可放 env：CAREER_EXPERT_SYSTEM_PROMPT）
    const systemPrompt =
      process.env.CAREER_EXPERT_SYSTEM_PROMPT ||
      `你是一位專業職涯顧問。請用繁體中文回答，重點清楚、可執行。
1) 先問 1-3 個必要澄清問題（若資訊不足）
2) 給結構化建議：重點結論 / 具體做法 / 範例
3) 避免過度承諾；不提供法律/醫療建議。`;

    const messages: Msg[] = [
      { role: "system", content: systemPrompt },
      ...(Array.isArray(history) ? history.slice(-12) : []),
      { role: "user", content: input.trim() },
    ];

    const url = `${endpoint.replace(/\/$/, "")}/openai/deployments/${encodeURIComponent(
      deployment
    )}/chat/completions?api-version=${encodeURIComponent(apiVersion)}`;

    // Azure OpenAI chat/completions 路徑格式
    // POST {endpoint}/openai/deployments/{deployment-id}/chat/completions?api-version=...
    // :contentReference[oaicite:2]{index=2}

    const aoaiResp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        messages,
        temperature: 0.4,
        max_tokens: 700,
      }),
    });

    if (!aoaiResp.ok) {
      const text = await aoaiResp.text();
      return Response.json(
        { error: "Azure OpenAI call failed", detail: text },
        { status: 500 }
      );
    }

    const data = await aoaiResp.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? "";

    return Response.json({ reply });
  } catch (e: any) {
    return Response.json({ error: "Unexpected error", detail: String(e) }, { status: 500 });
  }
}

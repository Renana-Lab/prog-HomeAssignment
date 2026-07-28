export type BackendResult = {
  id: string;
  wallet: string;
  experimentId: number;
  txHash: string;
  note: string;
};

export async function loadResults(wallet: string): Promise<BackendResult[]> {
  const response = await fetch(`http://localhost:8787/api/results/${wallet}`);

  if (!response.ok) {
    throw new Error("Failed to load results");
  }

  const data = await response.json();
  return data.results;
}

export async function saveResult(input: {
  wallet: string;
  experimentId: number;
  txHash: string;
  note: string;
  payloadHash: string;
}): Promise<BackendResult> {
  const response = await fetch("http://localhost:8787/api/results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to save result");
  }

  const data = await response.json();
  return data.result;
}

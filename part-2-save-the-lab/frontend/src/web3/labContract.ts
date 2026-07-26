import { BrowserProvider, Contract } from "ethers";
import { decodeLabRegistryAbi } from "./encodedAbi";

export type Experiment = {
  id: bigint;
  title: string;
  owner: string;
  active: boolean;
};

export const LAB_REGISTRY_ADDRESS = "0x0000000000000000000000000000000000000000";

export const LAB_REGISTRY_ABI = decodeLabRegistryAbi();

type EthereumWindow = Window & {
  ethereum?: unknown;
};

export async function getLabContract(): Promise<Contract> {
  const ethereum = (window as EthereumWindow).ethereum;

  if (!ethereum) {
    throw new Error("No wallet provider found");
  }

  const provider = new BrowserProvider(ethereum);
  const signer = await provider.getSigner();

  return new Contract(LAB_REGISTRY_ADDRESS, LAB_REGISTRY_ABI, signer);
}

export async function loadExperiments(contract: Contract): Promise<Experiment[]> {
  const tx = await contract.getAllExperiments();
  await tx.wait();

  return tx as Experiment[];
}

export async function submitResultOnChain(
  contract: Contract,
  experimentId: bigint,
  metadataUri: string,
): Promise<void> {
  const tx = await contract.submitResult(experimentId, metadataUri);
  await tx.wait();
}

import { CosmosEvent} from "@subql/types-cosmos";

export async function handleEvent(event: CosmosEvent): Promise<void> {
  if (event.block.header.height === 19828278) {
    // logger.info(event); --> return undefined
    console.log(event) // return nothing
  }
}
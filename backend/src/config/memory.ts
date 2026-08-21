import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";
import { resolve } from "node:path";

const dbPath = resolve(process.cwd(), "mastra.db");

export const memoryStore = new LibSQLStore({
  id: "meeting-assistant-memory",
  url: `file:${dbPath}`,
});

export function createAgentMemory() {
  return new Memory({
    storage: memoryStore,
    options: {
      lastMessages: 4,
      workingMemory: {
        enabled: true,
        scope: "resource",
        template: `Timezone; default meeting length; preferred hours; usual invitees; notes.`,
      },
    },
  });
}

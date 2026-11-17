
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

// 1. Create MCP client
const client = new Client({
    name: "calculator-client",
    version: "1.0.0"
});

// 2. Create transport to launch and communicate with MCP server
const transport = new StdioClientTransport({
    command: "node",
    args: ["src/server.js"]
});

async function main() {
    try {
        // 3. Connect client to server
        await client.connect(transport);

        console.log("Connected to Calculator MCP Server!");

        // 4. Discover available tools
        const tools = await client.listTools();

        console.log("\nAvailable tools:");
        console.log(tools.tools);

        // 5. Invoke subtraction tool
        const result = await client.callTool({
            name: "sub",
            arguments: {
                a: 20,
                b: 5
            }
        });

        console.log("\nTool execution result:");
        console.log(result.content);

    } catch (error) {
        console.error("Client error:", error);
    } finally {
        // 6. Close connection
        await client.close();
    }
}

main();

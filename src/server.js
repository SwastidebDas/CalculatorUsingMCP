
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import {
    add,
    sub,
    multiply,
    divide
} from "./operations/calculator.js";

// 1. Create the MCP server
const server = new McpServer({
    name: "calculator-mcp",
    version: "1.0.0"
});

// 2. Register the addition tool
server.registerTool(
    "add",
    {
        description: "Adds two numbers",
        inputSchema: {
            a: z.number(),
            b: z.number()
        }
    },
    async ({ a, b }) => {
        const result = add(a, b);

        return {
            content: [
                {
                    type: "text",
                    text: String(result)
                }
            ]
        };
    }
);

// 3. Register the subtraction tool
server.registerTool(
    "sub",
    {
        description: "Subtracts the second number from the first",
        inputSchema: {
            a: z.number(),
            b: z.number()
        }
    },
    async ({ a, b }) => {
        const result = sub(a, b);

        return {
            content: [
                {
                    type: "text",
                    text: String(result)
                }
            ]
        };
    }
);

// 4. Register multiplication
server.registerTool(
    "multiply",
    {
        description: "Multiplies two numbers",
        inputSchema: {
            a: z.number(),
            b: z.number()
        }
    },
    async ({ a, b }) => {
        const result = multiply(a, b);

        return {
            content: [
                {
                    type: "text",
                    text: String(result)
                }
            ]
        };
    }
);

// 5. Register division
server.registerTool(
    "divide",
    {
        description: "Divides the first number by the second",
        inputSchema: {
            a: z.number(),
            b: z.number()
        }
    },
    async ({ a, b }) => {
        const result = divide(a, b);

        return {
            content: [
                {
                    type: "text",
                    text: String(result)
                }
            ]
        };
    }
);

// 6. Connect the server using STDIO transport
const transport = new StdioServerTransport();

await server.connect(transport);

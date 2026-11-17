# Calculator MCP – Learning MCP with JavaScript

A beginner-friendly project built to practice and understand the **Model Context Protocol (MCP)** using JavaScript.

The project demonstrates how existing JavaScript functions can be exposed as MCP tools through an MCP server and accessed by an MCP client.

**Note:** This is purely a learning and practice project, created to explore MCP fundamentals and understand how MCP server-client communication works.

## Features

- Basic calculator operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Exposes JavaScript functions as MCP tools.
- Implements an MCP server using the official MCP SDK.
- Implements a separate MCP client.
- Supports tool discovery and tool invocation.
- Uses STDIO transport for client-server communication.

## Tech Stack

- JavaScript (Node.js)
- Model Context Protocol SDK
- Zod
- STDIO Transport

## Project Structure

```text
CalculatorUsingMCP/
│
├── src/
│   ├── operations/
│   │   └── calculator.js
│   │
│   └── server.js
│
├── client.js
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd CalculatorUsingMCP
```

### 2. Install dependencies

```bash
npm install
```

If dependencies are not already listed in `package.json`, install them using:

```bash
npm install @modelcontextprotocol/sdk zod
```

### 3. Run the MCP client

```bash
node client.js
```

The client launches the MCP server using STDIO transport, discovers the available tools, and invokes the selected calculator operation.

## Concepts Practiced

Through this project, I aim to understand:

1. What the Model Context Protocol is.
2. How to create an MCP server using JavaScript.
3. How to register JavaScript functions as MCP tools.
4. How an MCP client connects to an MCP server.
5. How tool discovery works through `listTools()`.
6. How tools are invoked through `callTool()`.
7. How STDIO transport facilitates communication between an MCP client and server.

## Purpose

This project is part of my hands-on learning journey with MCP.

The primary objective is to understand the underlying concepts through a small, practical implementation before moving towards more advanced MCP integrations and AI-powered tool calling.

**Status:** Learning / Practice Project
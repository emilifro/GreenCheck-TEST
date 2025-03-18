# Green Check 🌱

A command-line tool for measuring the energy consumption and performance metrics of your code. Green Check helps developers understand and optimize their code's environmental impact.

## Features ✨
- Measures energy consumption of code execution
- Tracks execution time and memory usage
- Supports multiple programming languages
- Analyzes staged Git changes
- Provides optimization suggestions

## Requirements 📋

Before installing, ensure you have:

- Rust (for installation)
- Git
- Node.js (for JavaScript files)
- Python3 (for Python files)
- G++ (for C++ files)

## Installation 💻

Install Green Check using Cargo:

```bash
cargo install green-check
```

## Usage 🚀

### Analyze Staged Files

1. Stage your changes:

```bash
git add your-file.js your-file.py
```

2. Run Green Check:

```bash
green-check
```

### Analyze Specific Files

```bash
green-check path/to/your/file.js
```

## Supported File Types 📝
- JavaScript (.js)
- Python (.py)
- Rust (.rs)
- C++ (.cpp, .h)

## Output Metrics 📊

Green Check provides the following metrics:

- **Execution Time**: How long the code takes to run
- **Energy Consumption**: Estimated energy usage in Joules
- **Peak Memory Usage**: Maximum memory consumption in MB
- **Code Analysis**: Suggestions for energy optimization
# 📂 mytree

A simple CLI tool that prints your project's directory tree using **emojis** and **colors**, making it fun and readable at a glance.

---

## 🚀 Installation

```bash
npm install -g mytree
```

This installs the global `mytree` command so you can run it from anywhere in your terminal.

---

## 🧭 Usage

```bash
mytree [directory] [-i item1,item2,...] [--all | -a]
```

- `directory` (optional): The folder path to visualize. Defaults to the current directory (`.`).
- `-i` (optional): Comma-separated list of files or folders to ignore.
- `--all` or `-a` (optional): Show hidden files and folders (those starting with a dot).

---

### 📌 Examples

```bash
# Show the tree of the current directory (hidden files/folders excluded)
mytree

# Show the tree of ./src (hidden files/folders excluded)
mytree ./src

# Ignore node_modules and dist folders
mytree . -i node_modules,dist

# Show everything, including hidden files and folders
mytree --all

# Show everything in ./src and ignore .git folder
mytree ./src -i .git --all
```

---

## 🧪 Testing Locally

If you want to test your local changes **without publishing** to npm, use:

```bash
npm link
```

Run this in your project root. This makes your local package available globally.

Then run:

```bash
mytree
```

It will execute your local code.

To remove the linked package and revert to the installed npm version, run:

```bash
npm unlink -g mytree
```

---

## 🎨 Emoji Legend

| Extension       | Emoji | Description       |
| --------------- | ----- | ----------------- |
| `.js`           | ⚙️    | JavaScript        |
| `.ts`           | 🔧    | TypeScript        |
| `.jsx`, `.tsx`  | ⚛️    | React JSX/TSX     |
| `.json`         | 🗂️    | JSON files        |
| `.md`           | 📝    | Markdown          |
| `.html`         | 🌐    | HTML files        |
| `.css`          | 🎨    | CSS stylesheets   |
| `.py`           | 🐍    | Python            |
| `.ipynb`        | 📙    | Jupyter Notebook  |
| `.java`         | ☕    | Java              |
| `.sh`           | 🐚    | Shell script      |
| `.yml`, `.yaml` | ⚙️    | YAML config files |
| Other files     | 📄    | Generic file      |
| Folders         | 📁    | Folder            |

---

## 🛠️ Requirements

- Node.js v14 or higher
- npm

---

## 📄 License

ISC

---

## ✍️ Author

Carlos Urías – [carlosurias.com](https://carlosurias.com)

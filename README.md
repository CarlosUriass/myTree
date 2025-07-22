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
mytree [directory] -i item1,item2,...
```

- `directory` (optional): The folder path to visualize. Defaults to the current directory (`.`).
- `-i` (optional): Comma-separated list of files or folders to ignore.

---

### 📌 Examples

```bash
# Show the tree of the current directory
mytree

# Show the tree of ./src
mytree ./src

# Ignore node_modules and dist folders
mytree . -i node_modules,dist
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


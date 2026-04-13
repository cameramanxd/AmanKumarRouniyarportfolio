# Folder Structure Guide

```
amankumarrouniyar-main/
├── src/                          # Source code
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # UI components (shadcn)
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── pages/                    # Page components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utilities and helpers
│   ├── assets/                   # Images, videos, icons
│   ├── test/                     # Test files
│   ├── App.tsx                   # Main App
│   └── main.tsx                  # Entry point
│
├── public/                       # Static assets
│   ├── CV.txt
│   └── robots.txt
│
├── dist/                         # Build output (auto-generated)
├── node_modules/                 # Dependencies (auto-generated)
│
├── Configuration Files
│   ├── vite.config.ts           # Vite config
│   ├── tsconfig.json            # TypeScript config
│   ├── tailwind.config.ts       # Tailwind CSS
│   ├── package.json             # Project metadata
│   ├── bun.lockb                # Bun lockfile
│   └── .env.example             # Environment variables template
│
├── .gitignore                    # Git ignore rules
├── .github/                      # GitHub Actions, workflows
├── .git/                         # Git history
│
└── README.md                     # Project documentation
```

## Setup for Development

1. **Create `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Fill in your actual values in `.env` - this file is in .gitignore

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run development server**:
   ```bash
   bun run dev
   ```

## Important Files to NEVER Commit

- `.env` - Contains sensitive data
- `node_modules/` - Auto-generated
- `dist/` - Build output
- `.DS_Store` - macOS files
- `*.log` - Log files

## Best Practices

✅ Keep sensitive data in `.env` (git-ignored)
✅ Use `.env.example` as template for other developers
✅ Only track source code and config templates
✅ Delete unused branches and files regularly

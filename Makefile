.PHONY: dev test lint build fmt preview clean help

help:
	@echo "Targets:"
	@echo "  dev      — start Vite dev server"
	@echo "  test     — unit tests (vitest) + e2e (playwright)"
	@echo "  lint     — eslint + prettier check + svelte-check"
	@echo "  build    — production build (adapter-static)"
	@echo "  preview  — serve the production build locally"
	@echo "  fmt      — auto-format sources"
	@echo "  clean    — remove build artifacts"

dev:
	npm install --no-audit --no-fund
	npm run dev

test:
	npm run test:unit -- --run
	npm run test:e2e

lint:
	npm run lint
	npm run check

build:
	npm run build

preview:
	npm run preview

fmt:
	npm run format

clean:
	rm -rf node_modules .svelte-kit build .vite dist

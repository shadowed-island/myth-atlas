.PHONY: help desktop-build desktop-dist desktop-dist-mac-arm desktop-dist-mac-arm64 desktop-dist-win-intel desktop-dist-win-x64 desktop-dist-all

PNPM ?= pnpm
ELECTRON_MIRROR ?= https://cdn.npmmirror.com/binaries/electron/
ELECTRON_BUILDER = $(PNPM) exec cross-env ELECTRON_MIRROR=$(ELECTRON_MIRROR) electron-builder --config electron-builder.json

help:
	@printf '%s\n' \
		'Available targets:' \
		'  make desktop-build            Build the exported renderer and Electron entry points' \
		'  make desktop-dist             Package the macOS arm64 desktop app' \
		'  make desktop-dist-mac-arm     Package the macOS arm desktop app' \
		'  make desktop-dist-mac-arm64   Package the macOS arm64 desktop app' \
		'  make desktop-dist-win-intel   Package the Windows Intel/x64 desktop app' \
		'  make desktop-dist-win-x64     Package the Windows x64 desktop app' \
		'  make desktop-dist-all         Package both macOS arm64 and Windows x64 desktop apps'

desktop-build:
	$(PNPM) run desktop:build

desktop-dist: desktop-dist-mac-arm64

desktop-dist-mac-arm: desktop-dist-mac-arm64

desktop-dist-mac-arm64: desktop-build
	$(ELECTRON_BUILDER) --mac dir zip --arm64

desktop-dist-win-intel: desktop-dist-win-x64

desktop-dist-win-x64: desktop-build
	$(ELECTRON_BUILDER) --win nsis zip --x64

desktop-dist-all: desktop-dist-mac-arm64 desktop-dist-win-x64

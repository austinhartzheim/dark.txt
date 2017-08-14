all:
	mkdir -p build
	cd src && zip -r -FS ../build/dark.txt.zip *

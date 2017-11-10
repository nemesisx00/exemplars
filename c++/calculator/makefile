srcDir = src/
buildDir = build/
binDir = bin/

buildArgs = -std=c++14 -g

appname = calculator.exe

objects = main.o \
			calculator.o \
			interaction.o \
			operation.o

all: cls clean $(appname)
	echo All done

$(appname): $(addprefix $(buildDir), $(objects))
	g++ $(buildArgs) -o $(binDir)$@ $^

$(buildDir)%.o: $(srcDir)%.cc
	g++ $(buildArgs) -o $@ -c $<

clean:
	rm -rf $(buildDir)*
	rm -rf $(binDir)*

cls:
	clear

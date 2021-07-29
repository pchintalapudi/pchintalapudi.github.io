export const projects = [
    {
        "id": "vm",
        "name": "Virtual Machine",
        "description": "This project, written entirely in C++, has a main goal of producing a working virtual machine using no more than the C++ standard library and a few platform-specific APIs for virtual memory and memory-mapped files (Windows-only at the moment) that implements a garbage-collected language running on a compiled bytecode. The VM and bytecode are modeled loosely off the specifications of the JVM and CLR, minus multithreading-specific instructions. While the core parts of the virtual machine are complete, its friend projects to [create a standard library](https://github.com/pchintalapudi/vm-lib) for its custom bytecode and [write a compiler](https://github.com/pchintalapudi/bcode-compiler) for that bytecode are ongoing. Thus far, the project has taught me a lot about how the JVM and CLR and other virtual machines work under the hood, and I expect the projects to continue teaching me new things for a while to come.",
        "tags": [
            "c++",
            "templates",
            "memory",
            "management",
            "file",
            "garbage",
            "collection",
            "computer",
            "programming",
            "code"
        ],
        "start": "06-2020",
        "end": null,
        "github": "https://github.com/pchintalapudi/virtual-machine"
    },
    {
        "id": "planner",
        "name": "Course Planner",
        "description": "My course planner, inspired and partially reverse-engineered from [CourseRoad](https://courseroad.mit.edu), was created because my schedule of classes put some strain on the more official site. In my version, I adopted a more asynchronous design, which allows the website to display content and react to user input even as resources are still loading. It also takes heavy advantage of the localStorage API to cache class descriptions and store the user's schedule. Also, I brought back a feature from an older version of CourseRoad, namely prerequisite and corequisite links. This was originally dropped as drawing the links requires breaking component boundaries and is at odds with how Vue is designed, but I was able to add hooks into resize listeners and my own modification APIs to simply redraw minimal amounts of the graph on changes to courses.",
        "tags": [
            "typescript",
            "vue",
            "html",
            "css",
            "computer",
            "programming",
            "code"
        ],
        "start": "12-2019",
        "end": "01-2020",
        "github": "https://github.com/pchintalapudi/courses",
        "link": "https://pchintalapudi.github.io/courses"
    },
    {
        "id": "drawer",
        "name": "Molecule Drawer",
        "description": "This project in particular has been a long journey, from its original inception in JavaFX and Java to its current form in Vue.js and Typescript. Modeled after ChemDraw, the drawer uses SVG and a healthy amount of CSS to render beautiful pictures of molecules drawn in both line structures and an almost-3D mode (it fakes it using gradients and 2D shapes on the same plane). I was able to learn a decent amount of CSS transforms and geometry of mouse translation, as well as designing and redesigning many aspect of the program as it progressed through many UX and language iterations.",
        "tags": [
            "typescript",
            "vue",
            "html",
            "css",
            "javafx",
            "java",
            "computer",
            "programming",
            "code"
        ],
        "start": "06-2018",
        "end": "07-2019",
        "github": "https://github.com/pchintalapudi/mdraw",
        "link": "https://pchintalapudi.github.io/mdraw"
    },
    {
        "id": "browser",
        "name": "Rendering Engine",
        "description": "For a long time, I had a pet project to build a rendering engine (like Blink or Gecko). My main takeaway from this experience is that this is HARD. There's a reason why Edge and Opera have moved from their own implementations to Blink. However, even though I wasn't able to make too much headway on the project, I did get a good look at two things: V8's native API, and the specifications underlying the DOM models. The experience with DOM model specifications proved to be very invaluable as I progressed into writing HTML/CSS/Javascript and scraping data from websites, and I was able to take what I had seen of the V8 API into account while building my own virtual machine.",
        "tags": [
            "c++",
            "java",
            "v8",
            "dom",
            "html",
            "javascript",
            "computer",
            "programming",
            "code"
        ],
        "start": "08-2019",
        "end": "01-2020",
        "github": "https://github.com/pchintalapudi/v8-render-engine"
    },
    {
        "id": "simulator",
        "name": "VEX In The Zone Simulator",
        "description": "This was my first production-quality project, where I built a simulator for the VEX 2017-2018 challenge [In The Zone](https://www.youtube.com/watch?v=1Yo_mlR1VJU). This project taught me a lot about the non-code parts of programs, like documentation and configuration files, as well as being my first real foray into optimizing the user experience. This project was where I first learned that multithreading could be used to speed up a program, my first time using a server in Java (no more than a bare ServerSocket-Socket pair), and a place where I figured out what things could go wrong in a multithreaded program and how to fix them.",
        "tags": [
            "java",
            "javafx",
            "css",
            "multithreading",
            "computer",
            "programming",
            "code"
        ],
        "start": "08-2017",
        "end": "04-2018",
        "github": "https://github.com/pchintalapudi/itz"
    },
    {
        "id": "calc",
        "name": "JavaFX Graphing Calculator",
        "description": "This project was inspired by a challenge in AP Calculus BC to create a program that could take derivatives and output their graphs. I expanded beyond the parameters of the problem to also implement my own shunting-yard based expression parser, as well as graphing non-polynomial functions and integrals as well as derivatives. Although this project is not on GitHub, it is mentioned here because this was the project where I learned about what factors actually affected performance: caching, branch prediction and speculative execution, and most importantly algorithmic optimizations as opposed to peephole microoptimizations. In fact, one of my most memorable experiences on this project was converting the function evaluator from running on 4 threads to running on a single thread and observing a 5X speedup, simply from the effects of cache thrashing and heavily improved branch prediction. Eventually I converted it back to a multithreaded evaluator, but this time I took the aforementioned factors into account and achieved a modest speedup over the single-threaded evaluator.",
        "tags": [
            "java",
            "javaFX",
            "multithreading",
            "design",
            "patterns",
            "computer",
            "programming",
            "code"
        ],
        "start": "10-2017",
        "end": "04-2018"
    }
]
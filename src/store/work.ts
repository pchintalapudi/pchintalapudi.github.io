export const work = [
    {
        "id":"julia",
        "company":"JuliaLab",
        "role":"Undergraduate Researcher",
        "start":"03-2021",
        "end":null,
        "tags":[
            "cs",
            "research"
        ],
        "supervisors": [
            {
                "title": "Professor",
                "name": "Alan Edelman"
            },
            {
                "title": "Supervisor",
                "name": "Valentin Churavy"
            },
            {
                "title": "Mentor",
                "name": "Takafumi Arakaki"
            }
        ],
        "description": "Building off my past experiences in [performance engineering](#6.172) and outlining a [virtual machine](#vm), I worked in MIT's JuliaLab to improve the Julia compiler. Over the course of a semester I extended some of the Julia-specific passes in the runtime's compiler's LLVM optimization pipeline to minimize allocations. Specifically, I implemented multiple optimizations, including adjusting the code generator to avoid emitting useless instructions, hoisting allocations and write barriers out of loops, and teaching the compiler to hoist allocations out of specific branch idioms."
    },
    {
        "id":"docai",
        "company": "doc.ai",
        "role": "Software Engineering Intern",
        "start": "01-2021",
        "end": "02-2021",
        "tags": [
            "cs",
            "internship"
        ],
        "supervisors": [
            {
                "title": "Manager",
                "name": "Chethan Sarabu"
            },
            {
                "title": "Mentor",
                "name": "Jeremy Hartman"
            },
            {
                "title": "Mentor",
                "name": "Joel Kardaal"
            }
        ],
        "description": "At [doc.ai](doc.ai), I got my first taste of practical machine learning in a startup environment. Working with another intern from MIT, I developed a program that could parse clinical protocol PDFs using [pdfminer.six](https://github.com/pdfminer/pdfminer.six) into a document tree and then use [spacy.io](https://spacy.io)'s natural language functionality to classify the nodes of the document tree as different sections of the protocol. In terms of non-code experiences, I learned to effectively use git branches and merging, to use HomeBrew on macOS as a package manager, and the importance of maintaining open and responsive communication channels with other teams dependent on our code."
    },
    {
        "id": "mcafee",
        "company": "McAfee LLC",
        "role": "Software Engineering Intern",
        "start": "06-2020",
        "end": "08-2020",
        "tags": [
            "cs",
            "internship"
        ],
        "supervisors": [
            {
                "title": "Manager",
                "name": "Ritu Jain"
            }
        ],
        "description": "At [McAfee](https://www.mcafee.com/enterprise/en-us/solutions/cloud-security.html), I worked with a team on implementing security controls for [Connected Apps](https://www.youtube.com/watch?v=uazaXeCpEA4), 3rd party apps that can be installed into platforms such as G Suite and Office 365. Within the team, I worked on multiple projects, including securing endpoints with Spring Security, creating an automation test suite to verify page loads and estimate page load times, and adding new functionality to the application by creating new endpoints to support data aggregation into a chart view. Besides the actual code though, I also learned many other aspects of robust production-level programming, such as Jira issue tracking, the SVN version control system, automation testing using [Cypress](https://www.cypress.io/), the Maven build system, and Jenkins continuous integration."
    },
    {
        "id": "la",
        "company": "MIT EECS Department",
        "role": "Lab Assistant for 6.009",
        "start": "09-2019",
        "end": "05-2020",
        "description": "As a lab assistant for MIT's [6.009 Fundamentals of Programming](https://py.mit.edu) course, I had the responsiblities of both helping students understand and complete the problems on their assignments as well as assessing students on their solutions to the assignments in the class. In addition to learning new strategies of explaining ideas and code to other people, this job helped me develop skills in analyzing other people's code to quickly locate bugs and performance hotspots, and exposed me to many different styles of code and approaches to solving problems.",
        "tags": [
            "cs",
            "internship"
        ],
        "supervisors": []
    },
    {
        "id": "broad",
        "company": "Broad Institute of MIT and Harvard",
        "role": "Undergraduate Researcher",
        "start": "09-2019",
        "end": "01-2020",
        "description": "At the [Broad](https://www.broadinstitute.org/), my project involved working with VK2 cells, a human vaginal epithelial cell line, and characterizing their growth patterns in preparation for [co-culturing experiments](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/coculture) with different types of bacteria. The cells were grown in PDMS microwells using supplemented keratinocyte cell media, and were stained with DAPI and phalloidin to both assess confluence and to validate staining on [PDMS](https://www.acs.org/content/acs/en/molecule-of-the-week/archive/p/polydimethylsiloxane.html) microwells.",
        "supervisors": [
            {
                "title": "Principal Investigator",
                "name": "Paul Blainey"
            },
            {
                "title": "Mentor",
                "name": "Cheri Ackerman"
            }
        ],
        "tags": [
            "bio",
            "research"
        ]
    },
    {
        "id": "sandia",
        "company": "Sandia National Laboratories",
        "role": "Undergraduate Intern R&D",
        "start": "06-2019",
        "end": "08-2019",
        "description": "My research project at [Sandia National Labs](https://www.sandia.gov/locations/livermore_california.html) was focused on mesenchymal stem cells, and characterizing their potential antibacterial properties. In support of this goal, I learned to make and pour agar plates and LB broth, culture bacterial and mammalian cells in a variety of environments, transfect and clone plasmids into mammalian and bacterial cells, and harvest DNA from bacteria for sequencing. From an assaying perspective, I learned the basics of flow cytometry and colony counting to assess antibacterial activity.",
        "supervisors": [
            {
                "title": "Principal Investigator",
                "name": "Raga Krishnakumar"
            },
            {
                "title": "Mentor",
                "name": "Matthew Hirakawa"
            },
            {
                "title": "Mentor",
                "name": "Nikki Tjahjono"
            }
        ],
        "tags": [
            "bio",
            "internship"
        ]
    },
    {
        "id": "koch",
        "company": "Koch Institute for Integrative Cancer Research",
        "role": "Undergraduate Researcher",
        "start": "02-2019",
        "end": "05-2019",
        "description": "As an undergraduate working in the [Koch Institute](https://ki.mit.edu/), I worked on assaying cells for proteins that complexed with [MENA](https://en.wikipedia.org/wiki/Ena/Vasp_homology_proteins), an actin regulator. In the process, I picked up several fundamental lab techniques, including aseptic handling, cell culture, Western blots, and co-immunoprecipitation. I also worked on a project to assess hypoxia in frozen mouse breast tumors, which allowed me to develop skills in tumor sectioning and slide staining.",
        "supervisors": [
            {
                "title": "Principal Investigator",
                "name": "Frank Gertler"
            },
            {
                "title": "Mentor",
                "name": "Elen Torres"
            }
        ],
        "tags": [
            "bio",
            "research"
        ]
    }
];
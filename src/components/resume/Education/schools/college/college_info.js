const colleges = [
    {
        date: "2004 - 2006",
        name: "Keene State College",
        major: "Music Education",
        pic: require(`../../../../../assets/images/KSC.jpg`),
        logo: require(`../../../../../assets/images/KSC_logo.gif`),
        description: `I majored in Music Education, did my field work educating people of all ages.  I performed on stage 
with the symphonic band, and had my senior recital.`,
        more: [
            {
                pic: require(`../../../../../assets/images/MaxMonadnock.JPG`),
                description: `At the top of Mount Monadnock!`
            },
            {
                pic: require(`../../../../../assets/images/KeeneMiddleSchool.JPG`),
                description: `This is Jim DePalo.  He taught band at Keene Middle School for 33 years and today is retired. This
was during my field study to be a teacher.`
            },
            {
                pic: require(`../../../../../assets/images/SeniorRecital.jpg`),
                description: `Announcing my senior recital before graduation.  The title was "Bach to Basics."`
            }
        ]
    },
    {
        date: "2000 - 2004",
        name: "South Suburban College",
        major: "Philosophy & Music Composition",
        pic: require(`../../../../../assets/images/SSC.jpg`),
        logo: require(`../../../../../assets/images/SSC_logo.png`),
        description: `I studied Philosophy & composition.  I can honestly say that my time studying philosophy was the most
important in my life for defining who I am and guiding me on a path in knowing who I wanted to be.`,
        more: [
            {
                pic: require(`../../../../../assets/images/MaestroMax.jpg`),
                description: `It's Maestro Max, hopefully one day learns how to groom himself after being an artist.`
            },
            {
                pic: require(`../../../../../assets/images/MaxRecital.jpg`),
                description: `Conducting a self-composed woodwind quintet.`
            }
        ]
    }
]

export default colleges;
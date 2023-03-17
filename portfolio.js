const views = {
    "about": `
        <section id="about" class="section">
            <h2>About</h2>
            <p>Kyle is a Dad of three kids. He is interested in how computers and technology will shape their daily lives. <br><br>
            Technology's potential exponentially grows and he would like to help them and his communities make responsible decisions about how to use it. <br><br>
            He believes that technology will one day be advanced in many more ways than the human conciousness. Because it will be indistinguishable yet different
            in many ways, we as a community will be forced to change. He believes we should be concious about those changes. He encourages us to make those choices with reverence, respect, and appreciation for the tech we create.
            <br><br>
            He is most interested in AI, technologies role to solve community problems like affordable housing, mental health, and poor civic/ government communication. He believes the technology we create while legally can be owned by an individual,
            it's reach is universal and it's consequences are owned by all of us.
            <br><br> And of course the arts. He loves a good movie and maintains
            The Truman Show is the greatest film of his generation perhaps all time. It's followed closely by Princess Monanoke, Kiki's Delivery Service, the documentary and In and of Itself. That Lana Del Rey's Album Born to Die: Paradise Edition is the greatest record
            released. That art like technology, is a product of many humans that are different than us. And there's no way to learn without first listening closely. 
            <p>
        </section>
        `,
    "skills": `
        <section id="skills" class="section">
            <h2>Skills</h2>
            <p>Kyle has implented web apps using the following tools & skills:<p>
            <ul>
            <li>javascript</li>
            <li>css</li>
            <li>api's (postman, axios requests/endpoints)</li>
            <li>external libraries (node, rollbar, json) </li>
            <li>hosted with aws, and bluehost</li>
            <li>Database posts and queries using PostreqSQL (sequelize)</li>
            <li></li>
            </ul>
        </section>
    `,
    "projects": `
        <section id="projects" class="section">
            <h2>Projects</h2>
            <p>Hey Dad: An Ai tool used to be a mentor, answering your questions as if a nuturing kind father figure
            <ul>
            <li>node.js<li>
            <li>openAI API<li>
            <li>bit.io databases with PostReqSQL<li>
            <li>axios requests<li>
            <li>styling with CSS<li>
            <li>Server hosting with AWS<li>
            </ul>

            <br><br>

            You can watch a video how Trish, a 19 yr-old college student, is using hey dad here:
            <br><br>
             https://www.loom.com/share/d014a39824194dd88eaa1a918c6483c0

            You can check out the code for the app here:
            <br><br>
            https://github.com/kborcik/capstone
            <br><br>
            You can of course use the app for yourself here:
            <br><br>
            http://35.172.182.106/
            <p>
        </section>
    `,
    "contact": `
        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>More about Kyle can be viewed on his linked in: https://www.linkedin.com/in/kyle-borcik-939a2894/
        <br><br>
        He uploads regularly to Github at: https://github.com/kborcik
        <br><br>
        Kyle can be reached via email at kyleborcikdreams@gmail.com<p>
        </section>
    `
}
const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')
console.log(navLinks)

const changeView = evt => {
    let view = evt.target.id
    main.innerHTML = views[view]
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', changeView)
}
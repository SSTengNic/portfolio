// Template
// const BloglistObject = {
//     heading: ``,
//     modalHeader: ``,
//     modalBodyHeading1: ``,
//     modalBodyHeading2: ``,
//     modalBodyHeading3: ``,
//     modalBodyDescription1: ``,
//     modalBodyDescription2: ``,
//     modalBodyDescription3: ``,
//     modalBodyVideo: ``,
// };

const BloglistObject = {
  heading: `MERN Stack & MySQL Bloglist`,
  subheading: `Feb 2024`,
  modalHeader: `Building a Bloglist Application`,
  modalBodyHeading1: `MERN Stack and MySQL Backend`,
  modalBodyHeading4: `Improvements`,
  modalBodyDescription1: (
    <>
      This web application is a showcase of my FullStack skills, featuring a{" "}
      <b>React.js frontend🌐,</b> an <b>Express backend⚙️,</b> and{" "}
      <b>Node.js🟢</b> powering the backend logic. Two similar versions are
      built to handle two distinct databases: one for <b>MongoDB🗄️</b> and
      another for <b>MySQL🛢️</b>, each implemented with{" "}
      <b>CRUD functionality.</b>
    </>
  ),
  modalBodyDescription2: (
    <>
      Building both databases allowed me to grasp the nuances{" "}
      <b>between relational and document-based database systems.</b>{" "}
      Additionally, I've taken care to ensure consistency and efficiency across
      both the frontend and backend codebases. Despite minor differences, the
      frontend seamlessly integrates with the backend, delivering a
      <b>cohesive user experience🎉.</b>
    </>
  ),
  modalBodyDescription3: (
    <>
      This project has been instrumental in enhancing my understanding of
      FullStack development, equipping me with valuable insights into{" "}
      <b>building robust</b> and <b>scalable web applications🚀.</b>
    </>
  ),
  modalBodyDescription4: (
    <>
      Some main improvements of this app would be to{" "}
      <b>improve the UI of the frontend.</b> Currently, I did not implement any
      designs to make the app look better🎨, but rather I focused on wanting to
      learn how full stack application works.
    </>
  ),
  modalBodyDescription5: (
    <>
      Moreover, I could continue to implement more features, such as a{" "}
      <b>comment section💬,</b> or a <b>personal profile page</b> where users
      can see all of their own posts only📄, or also tap into other people's
      profiles to see their blogs. Doing so, would be akin to designing
      something similar to a social media app📱.
    </>
  ),
};

const PromptlyObject = {
  heading: `Promptly, the AI-powered Journal`,
  subheading: `Jan 2025 - Present`,
  modalHeader: `Building a Programming Application`,
  modalBodyHeading1: `How it all started`,
  modalBodyHeading2: `Current features and the near future`,
  modalBodyHeading3: `Just the beginning`,

  modalBodyDescription1: (
    <>
      Back in 2024, My friend and I started brainstorming ideas for an impactful
      AI-powered startup, which led to the concept of an AI Journal. While we
      had initially shelved the idea due to the many competitors and
      alternatives in the market, I couldn’t shake the belief that there’s still
      room to create something truly unique. I decided to revisit and pursue
      this project, driven by a personal connection to the vision. At the very
      least, this journey offers an incredible opportunity to explore and
      experiment with the cutting-edge AI tools available today. The
      possibilities are endless, and I’m excited to see where this idea can go.
    </>
  ),
  modalBodyDescription2: (
    <>
      As of 23/1/2025, the core features of the journal have been implemented.
      These include a login system powered by JWTokens and bcrypt, a
      user-friendly signup page, and most importantly, an AI-powered feature
      that prompts users to reflect on their day. While these features are
      functional, there’s plenty of room for improvement, and I’m committed to
      refining them further. The next major focus is developing a summarization
      feature, enabling users to summarize their daily entries and generate a
      weekly report of their journaling activity.
    </>
  ),
  modalBodyDescription3: (
    <>
      I plan to document my journey of building this project as much as possible
      to showcase the inner workings of the application and share insights along
      the way. If you’re curious to try it out, have ideas for collaboration, or
      want to share your thoughts as a potential user, I’d love to connect with
      you! Let’s make something amazing together.
    </>
  ),

  modalBodyDescription4: <></>,

  modalBodyVideo: `https://www.youtube.com/embed/5dN-vkAV3Kc?si=oihl9fLdq2N07x4-`,
};

const PPPPObject = {
  heading: `Python Practice Programming Platform`,
  subheading: `Nov 2024`,
  modalHeader: `Building a Programming Application`,
  modalBodyHeading1: `Building with intention`,
  modalBodyHeading3: `Tech Stack`,
  modalBodyHeading4: `Conclusion`,
  modalBodyDescription1: (
    <>
      During my exchange program at Aalto University, I enrolled in the course{" "}
      <b>Designing and Building Scalable Web Applications</b> 📚. The course
      challenged students to develop a scalable Python practice programming
      platform using a modern web stack, including technologies like{" "}
      <b>Svelte, Deno, and PostgreSQL 💻. </b>
    </>
  ),
  modalBodyDescription2: (
    <>
      While working on the project, I wanted to ensure that the platform was
      built with the intention of genuinely helping others. I decided to design
      the application to be more engaging and fun, specifically targeting kids
      who are just starting to learn Python. To make the platform more
      enjoyable, I incorporated playful features such as{" "}
      <b>flip-card animations </b> and <b>celebratory confetti effects 🎉</b>{" "}
      upon completing tasks. These elements were designed to create a positive
      and motivating user experience, making learning Python less intimidating
      and more interactive.
    </>
  ),

  modalBodyDescription3: (
    <>
      For the tech stack, I used <b>Svelte, TailwindCSS, and Astro</b> for the
      frontend, while the backend relied on <b>Deno and PostgreSQL</b>. It was
      my first time using these frameworks, and I found them refreshingly
      straightforward compared to my usual MERN (MongoDB, Express, React,
      Node.js) stack. What stood out most in this project was learning how to
      use <b>Docker 🐳</b> to manage and run multiple applications
      simultaneously, including <b>NGINX configurations</b>, the frontend,
      backend, and <b>publisher-subscriber components.</b> Additionally,
      implementing WebSockets to maintain a continuous connection was a
      game-changer for real-time interactions within the platform.
    </>
  ),

  modalBodyDescription4: (
    <>
      Overall, I thoroughly enjoyed building this project—not just for the
      technical growth but also for the opportunity to design something
      meaningful and impactful. The experience taught me invaluable lessons that
      I’m excited to apply to my future projects.
    </>
  ),

  modalBodyVideo: `https://www.youtube.com/embed/IViJhOtFFb0?si=G1I_CkgN9F5n6z-F`,
};

export default { BloglistObject, PPPPObject, PromptlyObject };

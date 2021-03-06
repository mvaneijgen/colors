export const state = () => ({
  title: "4.096",
  tagline: "Colors",
  url: "https://mvaneijgen.nl/colors",
  api: "",
  repo: "https://github.com/mvaneijgen/colors",
  // description: "",
  description: `
    <p>In the #HEX color format there are an overwelming number of colors, more than 16 milion that is!</p>
    <p>Most of these colors are so close to eachother that they are almost the same and to cut down on decicion overload, I've cut the amount down to 4096 colors</p> 
    <p>This is done by only including colors that are made up of only three characters, this is possible because '#00aabb' is the same as '#0ab'.</p>
    <p>Having these colors helps accomplice two things, make colors easier to rember and help you be more creative. I find that having less choice and more limitations make me be more creative. A great inside from this came from the movie The Five Obstructions by Lars von Trier.</p>
    `,
  //------------------------------------------------------//
  // Site content
  //------------------------------------------------------//
  about_text: `
  <p>As a long distance push boarder myself, I’ve found it difficult to find the right setup for me, which resulted in doing some mispurchases.</p>
  <p>I believe the community has the knowledge, therefore it just needs to be easier to share setups, to get & give effective feedback via online platforms.</p>
  <p>That is why I've build this tool to make it easy to share your current, your dream or your complicated setup.</p>
  <p>The tool can also be used to request feedback on a specific part.Just leave that part empty and share the URL to <a href="https://www.reddit.com/r/longboarding/" target="_blank">/r/longboarding</a>, Discord or any other platform of your choosing and have the community discus on that part and share suggestions.</p>
  `,
  //------------------------------------------------------//
  // About me
  //------------------------------------------------------//
  me: {
    name: "Mitchel van Eijgen",
    tagline: "Graphic designer who loves technology",
    email: "mvaneijgen@gmail.com",
    phone: "06 38 63 27 35",
    address: "Lange Herenvest 122<br/>2011 BX Haarlem",
    social: {
      twitter: "mvaneijgen",
      github: "mvaneijgen",
      linkedin: "mvaneijgen",
      codepen: "mvaneijgen",
      reddit: "mvaneijgen",
    },
    avatar: 'http://0.gravatar.com/avatar/8a68ce0259bbb16411035e487ecb27c5',
    url: "mvaneijgen.nl",
  },
  //------------------------------------------------------//
  // Tools {object}
  //------------------------------------------------------//
  toolsUsed: [
    {
      title: "Vue.js/Nuxt.js",
      about:
        "Everything you see here is powered by Vue.js with a Nuxt.js shell.",
      url: "https://vuejs.org",
      image: "vue.png",
    },
    // {
    //   title: "Wordpress",
    //   about:
    //     "And then in particular, the Wordpress Rest API. This hosts all this app its data.",
    //   url: "https://wordpress.org",
    //   image: "wordpress.png",
    // },
    {
      title: "Greensock",
      about: "For all these awesome SVG animations.",
      url: "https://greensock.com",
      image: "greensock.png",
    },
    {
      title: "Github pages",
      about: "The site is hosted on the powerful servers of Github (for free).",
      url: "https://pages.github.com",
      image: "github-pages.png",
    },
    // {
    //   title: "Sketch",
    //   about:
    //     "All UI sketches were first drawn in Sketch to get a feel for the general layout and figure out what components need to be realized.",
    //   url: "https://www.sketchapp.com",
    //   image: "sketch.png",
    // },
    // {
    //   title: "Affinity Designer",
    //   about:
    //     "Most of the SVG on the site are hand drawn using Affinity Designer. A great alternative if you don't want to be locked in to the Adobe suite.",
    //   url: "https://affinity.serif.com/designer/",
    //   image: "affinity-designer.png",
    // },
  ],
  //------------------------------------------------------//
  // Site call to actions
  //------------------------------------------------------//
  callToActions: [
    {
      title: "Are you missing a feature?",
      description:
        "Leave an issue on Github",
      type: "cta--alt",
      // cta: "Upload your own",
      // url: "/submit",
      externalurl: "/submit",
    },
    // {
    //   title: "Have multiple products to add?",
    //   description:
    //     "If you have a large collection of products, we wil help you by adding them all at once.Just get in contact with us.",
    //   cta: "Contact",
    //   type: "",
    //   url: "/submit",
    // },
    // {
    //   title: "Want to help moderate this site?",
    //   description:
    //     "If you want to help making this site even better, I would love to hear from you. Just shoot me a message!",
    //   cta: "Contact",
    //   type: "",
    //   url: "/contact",
    // },
  ],
  //------------------------------------------------------//
  // Longboard communities
  //------------------------------------------------------//
  communities: [
    {
      title: "/r/longboarding",
      platform: "Reddit",
      members: "71k",
      url: "https://reddit.com/r/longboarding/",
    },
    {
      title: "Distance Skateboarding Worldwide",
      platform: "Facebook",
      members: "2000+",
      url: "https://www.facebook.com/groups/429473203919081/",
    },
    {
      title: "Discord /r/longboarding",
      platform: "Discord",
      members: "1000+",
      url: "https://discordapp.com/invite/unnhjay",
    },
  ],
  //------------------------------------------------------//
  // Site Roadmap/todos
  //------------------------------------------------------//
  todos: [
    {
      name: "Keep save state after refresh",
      description: "",
    },
    {
      name: "Allow saving multiple setups",
      description: "",
    },
    {
      name: "Create a list of most visited/popular setups",
      description: "",
    },
    {
      name: "Allow for a visual way to have two different trucks/wheels",
      description: "",
    },
    {
      name:
        "Add a distinctive element that you're looking to upgrade a particular item",
      description: "",
    },
    {
      name:
        "Do a reimport of a lot of trucks and wheels that have the wrong images",
      description: "",
    },
    {
      name: "Refactor all the code",
      description: "",
    },
  ],
  specialThanks: [
    {
      name: "aiyekara",
      realname: "",
      url: "//reddit.com/u/aiyekara",
    },
    {
      name: "aureex",
      realname: "",
      url: "https://www.reddit.com/user/aureex",
    },
    {
      name: "FrodoTBaggins88",
      realname: "",
      url: "https://www.reddit.com/user/FrodoTBaggins88",
    },
    {
      name: "JBizzy",
      realname: "",
      url: "",
    },
  ],
});

export const getters = {
  getDefaults: state => key => {
    return state[key];
  },
};

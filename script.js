const banner_help = `
██╗  ██╗███████╗██╗     ██████╗ 
██║  ██║██╔════╝██║     ██╔══██╗
███████║█████╗  ██║     ██████╔╝
██╔══██║██╔══╝  ██║     ██╔═══╝ 
██║  ██║███████╗███████╗██║     
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                    
`;
const project_banner=`
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝                                                                  
`
const date_started = 1697291453512
let millis=Date.now()-date_started;
let seconds = Math.floor( millis/ 1000)
let minutes = Math.floor(seconds/60)
let hours=Math.floor(minutes/60)
let days=Math.floor(hours/24)
seconds-=minutes*60
minutes-=hours*60
hours-=days*24
const links_banner=`
██╗     ██╗███╗   ██╗██╗  ██╗███████╗
██║     ██║████╗  ██║██║ ██╔╝██╔════╝
██║     ██║██╔██╗ ██║█████╔╝ ███████╗
██║     ██║██║╚██╗██║██╔═██╗ ╚════██║
███████╗██║██║ ╚████║██║  ██╗███████║
╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝`
const about_banner = `
██╗  ██╗██╗  ██╗███████╗██████╗ 
██║  ██║██║  ██║╚══███╔╝╚════██╗
███████║███████║  ███╔╝  █████╔╝
██╔══██║╚════██║ ███╔╝   ╚═══██╗
██║  ██║     ██║███████╗██████╔╝
╚═╝  ╚═╝     ╚═╝╚══════╝╚═════╝                          
`;
const date_banner = `
██████╗  █████╗ ████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ██║███████║   ██║   █████╗  
██║  ██║██╔══██║   ██║   ██╔══╝  
██████╔╝██║  ██║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                               
`;

const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#8080ff",
    maincolor: "#8080ff",
    greenblue: "#0CBAA6",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700w,top=10,height=768,width=1024"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

async function typeSentence(sentence, eleRef, delay = 100,rand=0) {
  const letters = sentence.split("");
  let i = 0;
  delay+=Math.random()*rand
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return (letters.length*100);
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function showGreetings() {
  const greetings = `
    ${color("maincolor", "..............")}                                     ${color("maincolor", "3rm471")}${color("white", "@")}${color("maincolor", "kali")}
    ${color("maincolor", "            ..,;:ccc,.")}                             -----------------
    ${color("maincolor", "          ......''';lxO.")}                           OS: Kali GNU/Linux Rolling in Ubuntu x86_64
    ${color("maincolor", ".....''''..........,:ld;")}                           Host: System Product Name System Version
    ${color("maincolor", "           .';;;:::;,,.x,")}                          Kernel: 4.4.0-210-generic
    ${color("maincolor", "      ..'''.            0Xxoc:,.  ...")}              Uptime: ${days} days, ${hours} hours, ${minutes} minutes
    ${color("maincolor", "  ....                ,ONkc;,;cokOdc',. ")}           Packages: 209 (dpkg)
    ${color("maincolor", " .                   OMo")}           ${color("white", "':ddo.")}          Shell: bash 5.2.15
    ${color("maincolor", "                    dMc               :OO;")}         Terminal: /dev/pts/1
    ${color("maincolor", "                    0M.                 .:o.")}       CPU: Ryzen 5 5500 (8) @ 3.6GHz
    ${color("maincolor", "                    ;Wd")}                            GPU: GeForce RTX 3060 VENTUS 2X 12GB OC
    ${color("maincolor", "                     ;XO,")}                          Memory: 6800MiB / 15944MiB (42%)
    ${color("maincolor", "                       ,d0Odlc;..")}
    ${color("maincolor", "                           ..',;:cdOOd::,.")}
    ${color("maincolor", "                                    .:d;.':;.")}
    ${color("maincolor", "                                       'd,  .'")}
    ${color("maincolor", "                                         ;l   ..")}
    ${color("maincolor", "                                          .o")}
    ${color("maincolor", "                                            c")}
    ${color("maincolor", "                                            .")}
  `;

}

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">sudo</span> => command allows Linux users to have temporary access to sensitive areas of the system
        <br>
        <span class="cmd">about</span> => my info
        <br>
        <span class="cmd">go list</span> => use to open url (try:<span style="color:#63b5cf;" >go list</span>)
        <br>
        <span class="cmd">projects list</span> => use to open one of my projects (try:<span style="color:#63b5cf;">projects list</span>)
        <br>
        <span class="cmd">ping</span> => use to check your internet connection
        <br> 
        <span class="cmd">pwd</span> => use to check your path
        <br> 
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:#63b5cf;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("maincolor", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    projects: function(name) {
      let project_banner_ = project_banner;
      let projects = [
          {
              lang: "Python",
              name: "PyObfuscator",
              link: "https://github.com/ErmalHasani/PyObfuscator",
              desc: "A tool for obfuscating Python scripts to protect source code.",
          },
          {
              lang: "Bash",
              name: "Advanced-Iptables-Firewall",
              link: "https://github.com/ErmalHasani/Advanced-Iptables-Firewall",
              desc: "A tool for obfuscating Python scripts to protect source code.A powerful firewall tool leveraging iptables for enhanced network protection and traffic control.",
          },
          // Add more projects here
      ];
  
      if (name === "list") {
          let project_text = "";
          projects.forEach((project) => {
              project_text += `
                  <br>
                  <span style="color:#ff9933;">[${project.lang}]</span> <span>${project.name}</span>
                  <br>
                  <span style="color:#98fb98;">[URL]</span> <a href="${project.link}" target="_blank">${project.link}</a>
                  <br>
                  <span style="color:#a320ce;">[Description]</span> ${project.desc}
                  <br>
              `;
          });
  
          const banner = `${color("blue", project_banner_)}`;
          this.echo(banner);
          this.echo($(`${project_text}`));
      } else {
          this.echo("Invalid command. Use 'projects list' to view all projects.");
      }
  },
    
    
    // am
    about: function () {
      let value1 = Math.floor(Math.random() * 1000);
      const about = $(`
        <span>IGN : <span id="IGN${value1}"></span><span style="color:#63b5cf;" id="Name${value1}"></span>
        <br>
        Status : <span id="Status${value1}" style="color:#63b5cf"></span>
        <br>
        Description : <span id="Description${value1}"></span><span style="color:#63b5cf;" id="Description2${value1}"></span>.
        <br>
        Mail : <span style="color:#63b5cf;" id="Mail${value1}"></span>
        <br>
        Github : <span style="color:#63b5cf;" id="Github${value1}">  </span>(<span class="cmd">try:</span> go github)</span>
        `, value1);
      typeSentence("", "#IGN" + value1.toString());
      setTimeout(() => { typeSentence("3rm471", "#Name" + value1.toString()); }, 900)
      setTimeout(() => { typeSentence("Alive", "#Status" + value1.toString()); }, 2300);
      setTimeout(() => { typeSentence("I'm interested in ", "#Description" + value1.toString()); }, 3900);
      setTimeout(() => { typeSentence("Data science, Machine learning, Whitehat & Devops Engineer", "#Description2" + value1.toString()); }, 6200);
      setTimeout(() => { typeSentence("info@iam3rm471.h4ck.me", "#Mail" + value1.toString()); }, 9000);
      setTimeout(() => { typeSentence("ErmalHasani", "#Github" + value1.toString()); }, 13700);

      const banner = `${color("maincolor", about_banner)}`;
      this.echo(banner);
      this.echo(about);
    },
    //cls
    cls: function () {
      location.reload();
    },
    //go
    go: function (web) {
      if (web == "github") {
        const github = `https://github.com/ErmalHasani`;
        go_url(github);
      } else if (web == "discord") {
        const discord = `https://discord.gg/k4studios`;
        go_url(discord);
      } else if (web=="replit") {
        const replit = `https://replit.com/@iam3rm471`
        go_url(replit)
        
      } else if (web=="list") {
        const list = $(`
        <span>
        <a href="https://github.com/ErmalHasani" target="_blank" style="color:#ffbfbd;text-decoration:none">[Github]</a> : ErmalHasani (<span style="color:#63b5cf;">go github</span>)
        <br>
        `)
        ;
        const banner = `${color("maincolor", links_banner)}`;
        this.echo(banner);
        this.echo(list);
        this.echo(color("blue", "ATTENTION! This command will redirect to the github."));
      } else {
        this.echo(color("red", "err! try: go list"));
      }
    },
    // date
    date: function () {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    //neofetch
    neofetch: function () {
      const greetings = `
    ${color("maincolor", "..............")}                                     ${color("maincolor", "3rm471")}${color("white", "@")}${color("maincolor", "kali")}
    ${color("maincolor", "            ..,;:ccc,.")}                             -----------------
    ${color("maincolor", "          ......''';lxO.")}                           OS: Kali GNU/Linux Rolling in Ubuntu x86_64
    ${color("maincolor", ".....''''..........,:ld;")}                           Host: System Product Name System Version
    ${color("maincolor", "           .';;;:::;,,.x,")}                          Kernel: 4.4.0-210-generic
    ${color("maincolor", "      ..'''.            0Xxoc:,.  ...")}              Uptime: ${days} days, ${hours} hours, ${minutes} minutes
    ${color("maincolor", "  ....                ,ONkc;,;cokOdc',. ")}           Packages: 209 (dpkg)
    ${color("maincolor", " .                   OMo")}           ${color("white", "':ddo.")}          Shell: bash 5.2.15
    ${color("maincolor", "                    dMc               :OO;")}         Terminal: /dev/pts/1
    ${color("maincolor", "                    0M.                 .:o.")}       CPU: Ryzen 5 5500 (8) @ 3.6GHz
    ${color("maincolor", "                    ;Wd")}                            GPU: GeForce RTX 3060 VENTUS 2X 12GB OC
    ${color("maincolor", "                     ;XO,")}                          Memory: 6800MiB / 15944MiB (42%)
    ${color("maincolor", "                       ,d0Odlc;..")}
    ${color("maincolor", "                           ..',;:cdOOd::,.")}
    ${color("maincolor", "                                    .:d;.':;.")}
    ${color("maincolor", "                                       'd,  .'")}
    ${color("maincolor", "                                         ;l   ..")}
    ${color("maincolor", "                                          .o")}
    ${color("maincolor", "                                            c")}
    ${color("maincolor", "                                            .")}
  `;
      this.echo(greetings);
    },
    //ls
    ls: function () {
      const ls1 = `${color("greenblue","bin")}  ${color("maincolor", "boot  dev  etc  home")}  ${color("greenblue", "lib  lib64")}  ${color("maincolor", "media  mnt  opt  proc  root  run")}  ${color("greenblue", "sbin")}  ${color("maincolor", "srv  sys")}  ${color("green", "tmp")}  ${color("maincolor", "usr  var")}`;
      this.echo(ls1)
    },
    //sudo
    sudo: function () {
      const usage = `Usage: sudo -h | -K | -k | -V
      Usage: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]
      Usage: sudo -l [-ABkNnS] [-g group] [-h host] [-p prompt] [-U user]
                  [-u user] [command [arg ...]]
      Usage: sudo [-ABbEHkNnPS] [-r role] [-t type] [-C num] [-D directory]
                  [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
                  [-u user] [VAR=value] [-i | -s] [command [arg ...]]
      Usage: sudo -e [-ABkNnS] [-r role] [-t type] [-C num] [-D directory]
                  [-g group] [-h host] [-p prompt] [-R directory] [-T timeout]
                  [-u user] file ...`;
      this.echo(usage)
    },
    //function
    credits: function () {
      const credits1 = `${color("maincolor", "Big shoutout to my talented friends at")} ${color("red", "K4 Studios")}${color("maincolor", ". Your creativity and passion have added a unique and magical touch to our journey. Thanks for the incredible moments and endless inspiration!")}
      ${color("maincolor", "")}
      `;
      this.echo(credits1)
    },
    //ping
    ping: function () {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "Connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected?")}`;
        this.echo(istato);
      }
    },
    //pwd
    pwd: function () {
      const loc = location.href;
      const pwd = $(`<p>` + loc + `</p>`);
      this.echo(pwd);
    },
    // src
  },  
  {
    greetings: `
    ${color("maincolor", "..............")}                                     ${color("maincolor", "3rm471")}${color("white", "@")}${color("maincolor", "kali")}
    ${color("maincolor", "            ..,;:ccc,.")}                             -----------------
    ${color("maincolor", "          ......''';lxO.")}                           OS: Kali GNU/Linux Rolling in Ubuntu x86_64
    ${color("maincolor", ".....''''..........,:ld;")}                           Host: System Product Name System Version
    ${color("maincolor", "           .';;;:::;,,.x,")}                          Kernel: 4.4.0-210-generic
    ${color("maincolor", "      ..'''.            0Xxoc:,.  ...")}              Uptime: ${days} days, ${hours} hours, ${minutes} minutes
    ${color("maincolor", "  ....                ,ONkc;,;cokOdc',. ")}           Packages: 209 (dpkg)
    ${color("maincolor", " .                   OMo")}           ${color("white", "':ddo.")}          Shell: bash 5.2.15
    ${color("maincolor", "                    dMc               :OO;")}         Terminal: /dev/pts/1
    ${color("maincolor", "                    0M.                 .:o.")}       CPU: Ryzen 5 5500 (8) @ 3.6GHz
    ${color("maincolor", "                    ;Wd")}                            GPU: GeForce RTX 3060 VENTUS 2X 12GB OC
    ${color("maincolor", "                     ;XO,")}                          Memory: 6800MiB / 15944MiB (42%)
    ${color("maincolor", "                       ,d0Odlc;..")}
    ${color("maincolor", "                           ..',;:cdOOd::,.")}         ${color("maincolor", "   ")}
    ${color("maincolor", "                                    .:d;.':;.")}
    ${color("maincolor", "                                       'd,  .'")}
    ${color("maincolor", "                                         ;l   ..")}
    ${color("maincolor", "                                          .o")}
    ${color("maincolor", "                                            c")}
    ${color("maincolor", "                                            .'")}
    ${color("maincolor", "                                             .")}
    `,
    prompt() {
      return `${color("gray","┌──(")}${color("red", "3rm471")}${color("red", "@kali")}${color("gray",")-[")}${color("red","~/")}]
${color("gray","└─\$")} `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);

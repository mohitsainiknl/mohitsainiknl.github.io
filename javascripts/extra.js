
document.addEventListener('DOMContentLoaded', function() {
    // loading complete...

    const content_upper = `
    <style>
        .profile {
            text-align: center;
            padding-bottom: 2rem;
            border-bottom: 3px solid gray;
        }
        .profile img {
            border-radius: 50%;
        }
        .profile .title {
            margin-top: .9rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: #868686;
            text-transform: uppercase;
        }
        .profile .sub_title {
            margin-top: 0.6rem;
            color: #272727;
        }
    
    </style>
    
    <div class='profile'>
        <a href="."><img src="assets/Mohit_Saini1600.jpg" alt="Mohit Saini" width="150"/></a>
        <div class="title">Mohit Saini</div>
        <div class="sub_title">Technical Artist - Tools & Piplelines</div>
    </div>`

    const content_lower1 = `
    <style>
        .link {
            display: flex;
            padding: .1rem 0;
            color: #272727;
        }

        .link>* {
            margin: .15rem;
            align-self: center;
        }

        .link>svg {
            width: 20px;
            margin-left: 0;
            fill: currentColor;
        }

        .link>span {
            padding-bottom: .1rem;
            color: inherit;
        }

        .link:hover {
            color: #5b81ed;
        }
    </style>

    <div class='links' style="padding: 2rem 0 1.5rem .6rem">
        <div class="md-nav__title" style="font-size: .7rem; padding: 0 0 .55rem 0;">Links</div>
        <a class="link" href="http://www.github.com/mohitsainiknl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span>github.com/mohitsainiknl</span>
        </a>
        <a class="link" href="http://www.linkedin.com/in/mohitsainiknl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            <span>linkedin.com/in/mohitsainiknl</span>
        </a>
        <a class="link" href="http://www.youtube.com/@mohitsainiknl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>youtube.com/@mohitsainiknl</span>
        </a>
        <a class="link" href="mailto:mohitsainiknl2@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
            <span>mohitsainiknl2@gmail.com</span>
        </a>
    </div>`;


    var sidebar = document.getElementsByClassName("md-sidebar__inner")[0];
    var container = document.createElement("div");
    container.style.fontSize = "0.67rem"
    container.innerHTML = content_upper + content_lower1;
    sidebar.insertBefore(container, sidebar.firstChild);


    document.getElementsByClassName("md-nav__title")[1].innerText = " Pages ";
    

    document.getElementsByClassName("md-header__button")[0].remove();

}, false);

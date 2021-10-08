## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./design/screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/ppk-1996/time-tracking-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework

### What I learned

I'm using the same react component for every activity as well as for daily, monthly and yearly data. The following show the code from Card.jsx component which render card with dynamic colors, text, and images. You can see the empty div before the img which cut out the top part of the image as a styling.

```JSX
   <div className="md:col-span-1 pt-3 relative z-20 w-full">
      <section className={`${color} rounded-xl pt-10 relative z-10`}>
        <div className="absolute -top-2.5 right-7 z-20 bg-veryDarkBlue w-1/2 h-2.5"></div>
        <img src={getImage(title)} className="absolute -top-2 right-3 z-10" />

        <div className="p-6 rounded-lg bg-darkBlue relative z-10  hover:opacity-90">
          <div className="flex justify-between relative">
            <h2 className="text-lg font-medium">{title}</h2>
            <button className="w-4 hover:opacity-80" type="button">
              <img src={ellipsis} className="object-contain" />
            </button>
          </div>
          <div className="flex justify-between items-center md:block">
            <p className="text-3xl font-light">{current}hrs</p>

            <p className="text-sm text-desaturatedBlue">
              {previousText} - {previous}hrs
            </p>
          </div>
        </div>
      </section>
    </div>
```

### Continued development

I couldn't figured out how to add white overlay when hover on the card. So I just use opacity-80 when hover. I will come back to this project when I found the solution.

### Useful resources

- [StackOverFlow Answer by Evan Almeida](https://stackoverflow.com/a/66593793) - This helped me with the bug where the tailwind colors are not working in production.

## Author

- Website - [Pyae Phyo Kyaw](https://www.sudohex.com)
- Frontend Mentor - [@ppk-1996](https://www.frontendmentor.io/profile/ppk-1996)

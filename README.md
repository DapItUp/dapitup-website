## DapItUp
---

# Overview
This is just to overview what the build system is doing and how it works, kind of.
Essentially it is using a build system called Gulp (which is a NodeJS plugin) that manages tasks that your app can do.
---

# How do I get it to work?
Well... This is the fun part.
You need to make sure you have [NodeJS](https://nodejs.org/en/), Ruby (default on Mac) & its bundles installed.
Once you have all of that, you're ready to run the build process (which hopefully works on your guys first run).

To start with everything, you need to open up `Terminal` and go to your directory:
```
ls # To see what is in your directory when you open
cd ~/TO_YOUR_DIRECTORY/dapitup
```

For example if you have your project file on your desktop you can do this:
```
cd ~/Desktop/dapitup
```

Once you're in your directory you can go ahead and run these next commands:
```
# Once you know Ruby is installed (you can check by running ruby in the command line)
gem install bundler -v 1.10.6
gem install sass -v 3.4.19

# Then we need to install Node packages by using the Node Package Manager (NPM)
npm install

# Once that is installed you'll have bower! Which is a client side package manager (everything is moving to NPM in the future, so don't get too used to bower)
bower install
```

* Note
Essentially these are package managers doing their job. If you want to add a script to the package manager, you would do so in `./gulp-tasks/scripts.js` and there are an array of scripts that will be ran.
---

# Compiled Build
Once you run these tasks you will now have a new command line item installed called `gulp`. Awesome! [Gulp](http://gulpjs.com/) is our streamlined build system that manages our tasks and automates our SCSS compiling, our build compiling and our Javascript concatenation.

Being as it you should be in your directory as it is. Meaning you can run Gulp from here!

```
gulp
```
This will start to automate your build process and put everything into a `/dist` folder. Yay!

If you want a minified production version of the code you can add `--production`
```
gulp --production # Or if you're lazy, like me --p will suffice
```

* Notes!
Do NOT edit anything in the `/dist` folder, because it will not save! The dist folder is a compiled build of everything in your source (`src`) folder. So only edit things in your source folder, the build process will rebuild everything automatically!
---

# But Mike, we need to push the website up to our github repo!
Okay, okay. I hear you, I understand you. In fact I couldn't understand you more.
![loud and clear](https://media.giphy.com/media/JBX6uzBGsq4z6/giphy.gif)

Essentially what we are going to do is have a separate repo for your code. Once for your source, and one for your website (the actual pieces of the src.)

When you get your second repo set up for your code (keep the one for the website, please, I'll set most of this up just to make sure) you can run a new gulp task!

```
gulp deploy
```
And that will run your code to the repo you can set up!

# Okay, that's great and all. But isn't this a bit overcomplicated?
Well, yes. It is complicated and it does add complexity to your build process. But, hear me out, this is a streamlined system many companies (including my own) use to manage our applications. So using this would basically make you do these steps.

* Start development (run `gulp`)
* Finish everything!
* Commit changes to `dapitup-website`
* Re-run gulp with the fancy `--p` argument (`gulp --p`)
* Deploy your `dist` folder to your other repository (`gulp deploy`)
* Done!

That is it, everything else is managed for you. Simple as that.


# Final Thoughts?
![My image](https://media.giphy.com/media/9MNH93c2V3O24/giphy.gif)

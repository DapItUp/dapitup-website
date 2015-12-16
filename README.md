## DapItUp
---

# Overview
This is just to overview what the build system is doing and how it works, kind of.
Essentially it is using a build system called Gulp (which is a NodeJS plugin) that manages tasks that your app can do.
---

# What tech are we using here?
* [NodeJS](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Browsersync](https://www.browsersync.io/)
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

# Okay, that's great and all. But... Why?
You're probably thinking to yourself.
![omg](https://media.giphy.com/media/1LgB3PLIC01AA/giphy.gif)

Which I don't blame you. It is complicated and it does add complexity to your build process. But, hear me out, this is a streamlined system many companies (including my own) use to manage our applications. So using this would basically make you do these steps.

* Start development (run `gulp`)
* Finish everything!
* Commit changes to `dapitup-website`
* Re-run gulp with the fancy `--p` argument (`gulp --p`)
* Deploy your `dist` folder to your other repository (`gulp deploy`)
* Done!

That is it, everything else is managed for you. Simple as that.
* SCSS - Compiled
* JS - Cleaned up to your liking
* Injections and managing files? - Gulp-Inject handles that for you
* Adding packages???? - Forgot about that.

# Adding Package
So under the scary `gulp-tasks` file you should see a `scripts.js` folder that looks a bit like this:
```
/**
 * Scripts Task
 * -------------------------------------
 *
 * @description
 * This manages all of our JS scripts we are including.
 */

// Modules
// -------------------------------------

// Includes
// -------------------------------------
var js = {
    libs: [
        // Libraries
        './bower_components/jquery/dist/jquery.js',
        './src/**/*.js'
    ]
};


// Exports
// -------------------------------------
module.exports = {
    app: app,
    files: js
};

// App Fn
// -------------------------------------
function app(gulp, $, pkg, argv) {
    return function () {
        var production = argv.production || argv.p;
        var development = argv.development || argv.dev;

        // Application
        return gulp.src(js.libs)
            .pipe($.if(production, $.uglify()))
            .pipe($.concat('dapitup-' + pkg.version + '.js'))
            .pipe(gulp.dest('./dist/assets/js/'));
    }
}

```

What is this? Its just a bunch of code??
Yes, it is. That is what runs it. If you wanted to add a package to your code you would do so like this:
```
bower install PACKAGE_NAME --save
```

Or if you're unlucky and have to run everything with sudo because you get a `EPERM` or `EACCESS` error.
```
sudo bower install PACKAGE_NAME --save --allow-root
```

After that your would go to `js` variable and add a new file like so:
(Here we will add the `interact` package, sudo is in brackets just in case you need it.)
```
[sudo] bower install interact --save [--allow-root]
```
Then in `scripts.js`
```
var js = {
    libs: [
        // Libraries
        './bower_components/jquery/dist/jquery.js',
        './bower_components/interact/dist/interact.js',
        './src/**/*.js'
    ]
};
```

# But I want minified!!1!11!!
Run `gulp --p` and that will minify all your assets (do this always before you run `gulp deploy`)

# Okay, I pushed everything up but all it did was create a branch of `gh-pages`. Why?!?
This is what deploy does, it doesn't commit to your master by any means. That would be quite bad if you pushed up bad code. You have to manually handle it from here. I use SourceTree to manage the repositories.

What you have to do is go into your WEBSITE repo via SourceTree, you'll see a weird commit there on another branch. (Under the sidebar, `REMOTES`, gh-pages)
Right Click it, push it up to master and you're done. Your changes are now in the master branch. All is well!

# Final Thoughts?
![tenouttaten](https://media.giphy.com/media/9MNH93c2V3O24/giphy.gif)

Of course, if you have any questions. You can text me, I don't have any problem with helping you guys out! Just thought this would be a good way of introducing you guys to some crazy cool systems.

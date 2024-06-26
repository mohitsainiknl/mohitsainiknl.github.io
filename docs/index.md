
# Projects

Welcome to my portfolio,

*Where creativity meets innovation!*

Within these sections, you'll find a diverse showcase of
my projects spanning various domains, each a testament to my passion for technology and software development.



## Graphics Engine Development

When I am learning/using software like Blender, Maya, and Unreal for animation and gaming, I started making plugins for these software packages. However, I wanted a playground where I could easily create 3D tools. Having experience in OpenGL and Vulkan, I decided to develop a graphics engine called Tiler.


### Tiler - Graphics Engine

[Repository](https://github.com/mohitsainiknl/Tiler) (work-in-progress)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/tiler-starter-project.png" width="700" alt="Tiler Starter Project">
            <figcaption>Tiler Starter Project</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/tiler-car-normals.png" width="700" alt="Tiler Testing Options">
            <figcaption>Tiler Testing Options</figcaption>
        </div>
    </div>
</div>

**Project Description:**

This graphics engine functions as a modular state machine, offering a range of capabilities including:

- Rendering 2D and 3D scenes
- Switching between different graphics APIs
- Providing a text editor for shaders
- Implementing post-processing effects

*Tiler*, currently, serves as a playground for developing algorithms related to geometry, UVs, materials, and animation. It will soon incorporate tools for these tasks.

**Key Components:**

- **Shader Language:** GLSL
- **Graphics API:** OpenGL (with [glad](https://github.com/Dav1dde/glad)) and soon Vulkan
- **Windowing System:** [SDL](https://github.com/libsdl-org/SDL)
- **GUI Library:** [ImGui](https://github.com/ocornut/imgui)
- **Asset Importers:** [Assimp](https://github.com/assimp/assimp) and [stb](https://github.com/nothings/stb)
- **Math Library:** [glm](https://github.com/g-truc/glm)


## Blender 3D Addons

Within the realm of 3D design and animation, my exploration extends to the development of Blender 3D Addons.
With a keen eye for addressing specific needs in the creative process, these addons introduce new tools, features,
and automation, amplifying the capabilities of Blender for artists and animators



### Custom Tools - Generative Rigs

[Code](https://github.com/mohitsainiknl/blender-addons/tree/master/Custom%20Tools) (July 2023)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/custom-tools-addon-ui.png" width="700" alt="Custom Tools Addon By MohitSainiKnl">
            <figcaption>Custom Rigging Tools Blender Addon</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/custom-tools-addon-scale-fix-demo.gif" width="800" alt="Custom Tools Addon Scale Fix Demo By MohitSainiKnl">
            <figcaption>Scale Fix Tool in Custom Tools</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/custom-tools-addon-tweak-twist-demo.gif" width="800" alt="Custom Tools Addon Tweak and Twist Demo By MohitSainiKnl">
            <figcaption>Twist and Tweak Tool in Custom Tools</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/custom-tools-addon-v1-spine-demo.gif" width="800" alt="Custom Tools Addon v1 Spine Demo By MohitSainiKnl">
            <figcaption>Generative Spine Tools in Custom Tools</figcaption>
        </div>
    </div>
</div>

This add-on help in creating other tools, those tools automatically available to all
the instances of blender by hiding the complex build/refeshing work itself.

??? note "Tools Created By This Addon"

    List of main tools created:

    - **Reset Constraints -** to fix the retargeting of targets in bone constaints, especially when scaling.
    - **Twist & Tweak -** to generate customizable twists and tweak in any rig.
    - **Add Chain Controls -** powerful tool for hendling bone chains with many options.
    - **Add Spine Pivot -** to generate a [biped spine](https://www.youtube.com/watch?v=-Wm_WVcbxEM) with swichable pivot.

    and, many more. 



### CUI - Custom UI for Rigs

[Code](https://github.com/mohitsainiknl/blender-addons/blob/master/custom-rig-ui-blender-addon.py) (May 2023)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/cui-addon-home.png" width="800" alt="Custom UI Addon By MohitSainiKnl">
            <figcaption>Custom Rig UI Blender Addon</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/cui-edit-buttons-demo.gif" width="300" style="width: 300px;" alt="Custom UI Button Editor By MohitSainiKnl">
            <figcaption>Button Editing in CUI Addon</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/cui-interface-buttons-demo.gif" width="300" style="width: 300px;" alt="Custom UI Utils By MohitSainiKnl">
            <figcaption>Interface Options in CUI Addon</figcaption>
        </div>
    </div>
</div>

This is a powerful tool for creating user interface of the rig. this tool lets user to link any path to button
(all widgets in blender have the full path in context menu), even from other editor like geometry nodes and shader editor.



### GLink - Live Link Graphs

[Code](https://github.com/mohitsainiknl/blender-addons/blob/master/glink-blender-addon.py) (November 2022)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/glink-blender-addon-ui.png" width="700" alt="Graph Link Addon By MohitSainiKnl">
            <figcaption>Graph Link Blender Addon</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/glink-addon-graph-demo.gif" width="800" alt="Graph Link Addon Demo By MohitSainiKnl">
            <figcaption>Graph Update Demo of GLink Addon</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/glink-addon-aim-demo.gif" width="800" alt="Graph Link Addon Aim Space Demo By MohitSainiKnl">
            <figcaption>GLink Addon for Space Switching</figcaption>
        </div>
    </div>
</div>

This Addon helps user to automatically update f-curves in blender graph editor, which is helpful in when using *space switching techniques* like - `Aim Space` and `World Space`.

This also include Glink Manager, which helps in managing lots of graph-links, example - using this in create walk cycle, linking one side to another.




## WebApp Using npm/Webpack

Venturing into the world of web development, my WebApp Using NPM Packages section underscores the utilization of Node Package Manager (NPM).



### Website for Levins Pharmadeals Pvt

[Repository](https://github.com/mohitsainiknl/website-demo-levins) (July 2022)

<figure markdown>
![MS Paint Project By MohitSainiKnl](assets/website-demo-levins.png)
<figcaption>Home Page of Levins Website</figcaption>
</figure>

**[Checkout Live Demo](http://levins.vercel.app/)**

I created this website for [Levins Pharmadeals Pvt](https://lpil.in/). This website contain images in .svg format which helps in scaling and animation.

??? note "Technical Details"

    List of technologies used in this project:

    - **Webpack** - for creating the build of project.
    - **Bootstrap** - for creating custom theme for website.
    - **SASS** - for simplified CSS code generation.
    
    see [package.json](https://github.com/mohitsainiknl/website-demo-levins/blob/master/package.json) for more info



### Website for Limeless Media Pvt

[Repository](https://github.com/mohitsainiknl/website-demo-limeless) (Feb 2022)

<figure markdown>
![MS Paint Project By MohitSainiKnl](assets/website-demo-limeless.png)
<figcaption>Home Page of Limeless Website</figcaption>
</figure>


**[Checkout Live Demo](http://limeless.vercel.app/)**

And this website is created for [Limeless Media Pvt](https://www.linkedin.com/company/limeless-media/).

??? note "Technical Details"

    List of technologies used in this project:

    - **Webpack** - for creating the build of project.
    - **Bootstrap** - for creating custom theme for website.
    - **SASS** - for simplified CSS code generation.
    
    see [package.json](https://github.com/mohitsainiknl/website-demo-limeless/blob/master/package.json) for more info




## Java Swing Applications

Delving into the realm of desktop application development, the Java Swing Applications section showcases my proficiency
in crafting intuitive and interactive user interfaces using the Java Swing framework.



### MS Paint

[Repository](https://github.com/mohitsainiknl/MSPaint) (July 2021)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/mspaint.png" alt="MS Paint Project By MohitSainiKnl">
            <figcaption>User Interface of Paint Project</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OcuZua8UmmA?si=FGRSUZsSbG6NPsEa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <figcaption>Youtube Video of Paint Project</figcaption>
        </div>
    </div>
</div>

I tried to upgrade Microsoft Paint, and developed it in JavaSE with Swing framework.
Features:

- Can use Layers and Filters
- PNG support (without losing transparency)
- Support Windows, MacOS and Linux

[Download exe/jar files](https://github.com/mohitsainiknl/MSPaint/tree/master/publish) (Reqire JavaSE to run). 



### Snake Game

[Repository](https://github.com/mohitsainiknl/Java-SnakeGame) (June 2021)

<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/snake-game-01.png" alt="Snake Game Project By MohitSainiKnl">
            <figcaption>User Interface of Snake Game Project</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/snake-game-02.png" alt="Snake Game Graph View By MohitSainiKnl">
            <figcaption>Graph View of Snake Game</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/snake-game-03.png" alt="Snake Game as Line By MohitSainiKnl">
            <figcaption>Snake as Line in Snake Game</figcaption>
        </div>
    </div>
    <div class="item" style="display: flex; justify-content: center;">
        <div class="inner-item">
            <iframe width="560" height="315" style="align-self: center;"src="https://www.youtube-nocookie.com/embed/UuUIlnP-P94?si=h-bptrCjxjMr-HPX" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen>
            </iframe>
        <figcaption>Youtube Video of This Project</figcaption>
        </div>
    </div>
</div>

*Challenge your reflexes with the classic Snake Game!*

If you want to know, "How's the snake moving in the JPanel?", may this Show Controls option will help you. Snake can move in
both light and dark colored lines, as shown in image above. Moreover, you can also change the speed of the snake, here.



### MS Notepad

[Repository](https://github.com/mohitsainiknl/MSNotepad) (May 2021)


<div class="owl-carousel owl-theme">
    <div class="item">
        <div class="inner-item">
            <img src="assets/msnotepad.png" alt="MS Notepad Project By MohitSainiKnl">
            <figcaption>User Interface of Notepad Project</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/msnotepad-font.png" width="426" alt="MS Notepad Font Dialog By MohitSainiKnl">
            <figcaption>Font Dialog for Font Customization</figcaption>
        </div>
    </div>
    <div class="item">
        <div class="inner-item">
            <img src="assets/msnotepad-find-replace.png" width="404" alt="MS Notepad Find/Replace Dialogs By MohitSainiKnl">
            <figcaption>Find and Replace Dialogs</figcaption>
        </div>
    </div>
</div>

*Witness the simplicity and power of MS Notepad!*

MSNotepad is a simple text editor, with cross platform support, and a basic text-editing program which enables computer
users to create documents. It is light-weight editor which entirely looks like Microsoft Windows' Notepad.

MSNotepad writes the settings of the application in the Settings.txt file, before closing the application. And load it
again at the starting of the application.


---
layout: post
img : "5.jpeg"
title : "Artificial Imagination"
sub-title: "Ever wondered what it would take to have a machine conceive of hyper-realistic images?"
tags: machine-learning artificial-intelligence Recent
img_title: "Artificial Imagination"
img_sub_title: ""
bg_color: "#fe339e"
redirect_from: /artificial-imagination-4081d5510271/
---

> “Imagination: the faculty or action of forming new ideas, or images or concepts of external objects not present to the senses.”
> - Oxford English Dictionary

How many flowers does a human need to see before they can imagine a new one? Or, ever wondered what it would take to have a machine conceive of hyper-realistic images? Thanks to [Generative Adversarial Networks](https://openai.com/blog/generative-models/), machines are now able to generate new images based on a decent amount of existing photos.

#### What we already know

We’ve been able to have software recognize objects in images for quite some time now. This is often done by a so-called [convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network). A neural network that, in short, is inspired by how animals observe objects.

![](https://cdn-images-1.medium.com/max/600/1*aHUzNHRwEUrPBcOHfrFg-A.jpeg)

Completely random image run through the YOLO CNN

You can already find many open source software projects [[1](https://github.com/tiny-dnn/tiny-dnn), [2](http://pjreddie.com/darknet/yolo/)] and even [services](https://cloud.google.com/vision) that offer you the fully implemented and pre-trained models to do the recognition for you. The image on the left is such an example. I ran it through the You Only Look Once ([YOLO](http://pjreddie.com/darknet/yolo/)) software, and with a few minor tweaks it gave me the correct output: a person with a tie and a bottle. It is not hard to imagine that large models trained to achieve this outcome can also be reversed in usage. Like, using the query: “A man wearing a tie and holding a bottle” to have the computer find an existing, corresponding image.

![](https://cdn-images-1.medium.com/max/800/1*hQyif82jYdFVZdzTcunH0g.jpeg)

Search for: “A man wearing a tie and holding a bottle”.

#### Generative Adversarial Networks, A New Paradigm

But now we are at the brink of a new paradigm in deep learning, visual recognition or, dare I write it, artificial intelligence. The first attempt was made to generate (or, in fancy terminology _synthesize_) images based on text input or a set of [vectors](http://carpedm20.github.io/faces/).

![](https://cdn-images-1.medium.com/max/800/1*k21JjsAXROVWmXw54D_qsA.png)

Figure 4 from the StackGAN paper

> The most important thing to realize is that the generated images in the bottom row are non-existent in real life!

The images displayed above are generated in two stages. Stage-I GAN generates a sketch based on the input text. Stage-II GAN optimizes the images and generates high-quality images. What is interesting to know, is that the images are trained with the same training material like the above examples. By competing against each other in a so called [zero-sum](https://en.wikipedia.org/wiki/Zero-sum_game) game, two neural networks try to generate a picture that is as realistic as possible based on an existing data set.

### What might this do in the future?

All similar research starts in a lab - in these kinds of projects, the lab is often openly available on [Github](https://github.com/bobvanluijt/StackGAN) (or [here](https://github.com/bobvanluijt/DCGAN-tensorflow), or [here](https://github.com/soumith/dcgan.torch)). The images generated in the above example are sometimes flawed, but it is not hard to imagine that this will improve shortly, based on the vast amounts of resources available to solve these kinds of problems and the amounts of images available online to learn from. With this, the most important step has been taken: the introduction of Generative Adversarial Networks. Now the that cure is found, the medicine only needs to be developed.

This is where it gets exciting.

I would not be surprised to soon be able to generate whole new worlds that do not exist right now, or that Generative Adversarial Networks understand the context of an array of images to create realistic videos. I am definitely going to play with the software to see what the possibilities are and I would like to invite you to do the same!

### Want to know more?

If you want to have more in-depth information, you can read the original published paper [here](https://arxiv.org/pdf/1612.03242v1.pdf) - or watch this comprehensive movie from Two Minute Papers. Or you can train your own model using [HyperGAN](https://github.com/255BITS/HyperGAN)!

<iframe src="https://www.youtube.com/embed/rAbhypxs1qQ?feature=oembed" width="700" height="393" frameborder="0" scrolling="no"></iframe>

Image Synthesis From Text With Deep Learning | Two Minute Papers

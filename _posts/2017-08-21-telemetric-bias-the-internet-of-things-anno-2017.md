---
layout: post
img : "10.jpeg"
title : "Telemetric Bias & the Internet of things anno 2017"
sub-title: "“Telemetric bias? What’s that?” he asked."
img_title: "Telemetric Bias"
img_sub_title: "& the Internet of things anno 2017"
bg_color: ""
tags: Internet-of-Things Telemetric-Bias Semanticweb Semantics
---

> Not all those who wander are lost.
>  — Tolkien

Someone asked what I do in the field of the Internet of Things (IoT). I described how I work on ways of capturing events in the physical world in a digital format, how even a piece of chocolate or the leaves of a tree could be part of the Internet. His response was one I’ve gotten used to over time: “Awesome, but this isn’t IoT, is it?” “Oh yes, it is,” I always tell them. “The reason why you think this is that you suffer from a mild form of telemetric bias.”

“Telemetric bias? What’s that?” he asked. Telemetric bias is the belief that equipping an existing product with a sensor makes it part of the IoT. “You could compare it to having I cold,” I said. A common cold gives you a runny nose, and telemetric bias gives you things like SMALT, “[The World’s First Interactive Centerpiece](http://www.mysmalt.com/).” It is a salt dispenser with an Internet connection. Don’t get me wrong. It is not my goal to mock SMALTs. Seriously, they did everything right. It has the typical IoT-startup website, an [IndieGoGo](https://www.indiegogo.com/projects/smalt-the-world-s-first-interactive-centerpiece-health) campaign, and the typical [eerie video](https://www.youtube.com/watch?v=o2e1x5IaO7k) all “prototype-ready” equivalents have. What they did is exactly what IoT means in 2017, and what makes me worry about the future.

The problem lies in the fact that the possibilities and opportunities that were still open when Internet of Things was still an abstract term seem to have vanished. That is a serious issue for a market that is expected to have [investments up to $60 trillion by 2020](https://goo.gl/ij9aFL).

The goal of this article is to point out why I believe this is happening and to get the brain juices flowing again as they did in the mid-2000’s when we were still hacking, wandering, and looking at how we could “break the fourth wall” of our screen into the physical world.

### The Four Truths of the Internet of Things

In 1999, Kevin Ashton coined the term Internet of Things in a presentation to Proctor & Gamble.

> The fact that I was probably the first person to say “Internet of Things” doesn’t give me any right to control how others use the phrase. But what I meant, and still mean, is this: Today computers — and, therefore, the Internet — are almost wholly dependent on human beings for information. […]. Conventional diagrams of the Internet include servers and routers and so on, but they leave out the most numerous and important routers of all: people. […] And that’s a big deal. We’re physical, and so is our environment. Our economy, society and survival aren’t based on ideas or information — they’re based on things. You can’t eat bits, burn them to stay warm or put them in your gas tank. Ideas and information are important, but things matter much more. Yet today’s information technology is so dependent on data originated by people that our computers know more about ideas than things.

> If we had computers that knew everything there was to know about things — using data they gathered without any help from us — we would be able to track and count everything, and greatly reduce waste, loss and cost. We would know when things needed replacing, repairing or recalling, and whether they were fresh or past their best.

> - Kevin Ashton, [RFID Journal](http://www.rfidjournal.com/articles/view?4986) 2009.

There are four interesting things that Kevin talks about;

1.  The most important objects in the Internet-diagrams are absent: People.
2.  Capturing data about things in the real [physical] world.
3.  The Internet is dependent on humans for information.
4.  Radio-frequency identification (RFID) and sensor technology enable computers to observe, identify, and understand the world — without the limitations of human-entered data.

This allows us to capture the initial Internet of Things into this quadrant.

![](https://cdn-images-1.medium.com/max/800/1*EOII3j8atdqSppbxUo6RYQ.png)

Internet of Things core


### From Physical to Digital & How to Observe

We somehow need to go from information that is physically available to a digital representation. To do this, we need to observe the information and make sense out of it. Observing alone is not enough, though. Take these strawberries for example.

> [](https://twitter.com/social_brains/status/836088599418281984)

The first thing you might say while describing strawberries is that they are red. However, clearly, the above image contains strawberries but without any red. To even go a step further, some people see the red in the strawberries, but all red is removed from the image. This tells us that we need a way to observe the strawberries, but we also need a way to describe the information to turn it into knowledge.

We need a sense-device, that is, a sensor, and we need a brain.

The above diagram shows exactly what the two differences between the present and the past are:
We have had humans function as observers and sense-makers and store their knowledge in books. Now, we can store this information in digital formats, share it globally, and interconnect with it.
We have machines doing the observations for us (often called: devices) and machines (often in the cloud) that can make sense of them. This is why machine learning and the amount of available computing power in the cloud is so vital for us.

### The Senses

Humans have many sensors. The traditional ones; a pair of ears to hear, a pair of eyes to see, a nose to smell, a tongue to taste, and skin and nerves to feel. Also, non-traditional ones like proprioception to sense balance.

Humans are amazing Internet of Things devices! We use our biological functions to sense. However, the telemetric values that, for example, our eyes send to our brain (red, green, and blue waves of light) are not what we observe. They are a means to observe.

We can even go as far as saying that the Internet of Things existed the moment the World Wide Web became available. Humans who observed the world entered information into our digital systems and exchanged this information via the web.

> Humans are the first Internet of Things sensors.

### The Brain

The brain gives meaning and translates the information into knowledge. A particular combination of sensorial input results in your knowing that you are eating a strawberry.

In IoT, we need the exact same thing. We need sensors that receive input from the environment and a central processing unit that translates these data into usable knowledge.

The amazing thing is that a machine can have many, many more senses than a human, like echolocation (a sonar), magnetoception (a magnetic field detector), and many others.

![](https://cdn-images-1.medium.com/max/1000/1*fPw2dldsgBDbI2HAxKLKDQ.png)


### Sensing by Proxy

<iframe src="https://www.youtube.com/embed/M1VO92jWCTo?feature=oembed" width="525" height="295" frameborder="0" scrolling="no"></iframe>


We do not have to sense something directly to express it as an IoT object. We can also have systems that observe something and distill data to identify different entities.

The video below is a simple example I created a few months ago. It uses a computer vision service to collect information from a video. This resulted in an IoT object [camera] that can perceive the humans in the movie.

### A Semantic Internet of Things

To conclude, I believe that we have taken a wrong turn by focussing too much on market-fit physical devices with an internet connection. We should focus much more on the role of capturing knowledge from the physical world into our digital systems. We also need to do this in a human-focused way.

I believe the answer to this lies in semantics, web semantics to be more precise. The coming articles I will devote to this specific topic. If you’re interested and want to stay up to date on the developments in this industry, you can sign up for my newsletter by following [this link](http://bit.ly/bobs-nwslttr).

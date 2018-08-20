---
layout: post
img : "11.png"
title : "Semantic Internet of Things"
sub-title: "Thoughts on a Semantic Internet of Things"
img_title: "Semantic Internet of Things"
img_sub_title: "part 1 - Semantic"
bg_color: ""
tags: artificial-intelligence semanticweb internet-of-things semantic-iot iot
redirect_from: /semantic-internet-of-things-42811e1ca7a7/
---

I believe that it will not be long before the Internet and the Web will [break the fourth wall](https://alwaysactingup.wordpress.com/what-is-the-4th-wall/) and become truly [ubiquitous](https://en.wikipedia.org/wiki/Ubiquitous_computing). However, I also believe that this breakthrough is juxtaposed with the poor [computational design](https://computationaldesign.org/) of the representation of the physical world in digital systems, which results in a tremendous loss of knowledge. In this blog post, I will explain why I believe we should look at merging the digital with the physical in a semantic way. I will also suggest a more progressive definition of what I believe the Internet of Things should be by adopting the Web 3.0 frameworks as proposed by Tim Berners-Lee et al. This blog is the first in a series of blogs of unknown length. I will share the results of my search on what I believe it means to merge the physical properly with the digital.

> “But what is new is that it [IoT] has arrived. It is here after three or four major iterations. This accounts for its strange conceptual shape, its speed and depth of convergence across domains and technologies. We are at the very beginning of getting a grasp on it and maybe it will be difficult to with the tools we have today as it truly has escaped its confines and is now out there, in the wild.
>  — [Rob van Kranenburg](http://www.theinternetofthings.eu/rob-van-kranenburg), [The Internet of Things is Not New](http://www.theinternetofthings.eu/rob-van-kranenburg-there-misunderstanding-internet-things-not-new).

### The Total Turing Test

In 1950, the scientist Alan Turing proposed a way to validate intelligence in machines through the Turing Test. To achieve this, the machine should be able to solve at least the following four issues; it should be able to process natural language, it should be able to store the knowledge it observes, it should be able to draw conclusions based on the knowledge it has stored and it should be able to learn to adjust to new circumstances. In the book [Artificial Intelligence: A Modern Approach](http://aima.cs.berkeley.edu/), which is used in over 1300 universities and over 110 countries, the authors add two more properties to the list of interactions with the physical world. First, there is computer vision, which I will refer to as computer senses because vision is just one possible way to sense information from the physical world, and secondly, there is robotics to manipulate the physical world.

![](https://cdn-images-1.medium.com/max/800/1*z0iUqZ_0soqJaZgRXV3TYQ.png)


As depicted in the previous image, our key goal is to be in control of the information and knowledge hiding in plain sight in the physical world. If we want to represent things in a digital network like the Internet, we should not look at ways to capture knowledge by digitally sensing information from it, but we should ask how we can represent the concept that the thing entails. I carefully use the word “thing” rather than, for example, “object” because a thing can also represent a concept, action, event, thought, or utterance, which an object cannot do.

Those physical things are connected through actions that imply behavior. For example, the two “things” Alice and Bob are connected through the action of liking each other, which we semantically would call the predicate.


![](https://cdn-images-1.medium.com/max/800/1*XXDGY03uAsBMFKycnMY7bA.png)

Example of triplets as described in the [RDF Primer 1.1](https://www.w3.org/TR/2014/NOTE-rdf11-primer-20140225/#section-triple).


Our key to capturing and representing the knowledge held in the physical world is the use of language because it allows us to describe the context and sub-context of things in the physical world.

### The Role of Language

What makes a chair a chair? And how can we store information about the concept of a chair in such a way that we can relate it to behavior and other concepts around us? In my search for an answer to this, a friend pointed me towards a concept in analytical philosophy, which is known as the [linguistic-turn](https://en.wikipedia.org/wiki/Linguistic_turn), and Wittgenstein’s role in it. This is a movement in Western philosophy that focuses on the relationship between philosophy and language. One of the key points is that, for example, a chair is not just “a chair” and nothing else, but that it is rather a collection of characteristics that form the concept of a chair. And these characteristics, for example, the legs of the chair, would have other sub-characteristics like the type of wood it is made of. This principle goes on and on in many dimensions, opposed to what Jacques Derrida called the metaphysical core, every concept being individually labeled. The conclusion that we can draw from this is that what we call reality is actually a convention of naming and grouping information in a symbolic system, which we call language.


![](https://cdn-images-1.medium.com/max/800/1*WId96DtlXHDbSkbTxLCj9Q.png)

In philosophy, the left is believed to be true. In digital databases, however, we often use labels as depicted on the right side.


I believe this to be of importance because in digital technology, we tend to label things in column or key-value structures resulting in the issue that the contextual knowledge surrounding the concept disappears completely. What was debunked in the linguistic turn is something we actively do in digital technology: we label things. This is worsened by the use of so-called data lakes or, as I like to call them, data garbage dumps. The data lake, [as described on KD Nuggets](http://www.kdnuggets.com/2015/09/data-lake-vs-data-warehouse-key-differences.html), “holds a vast amount of raw data in its native format, including structured, semi-structured, and unstructured data” and should be beneficial to data scientists because it would give them large agility over usage. I believe this to be untrue because there is no such thing as unstructured data. As I wrote in [my blog on Telemetric Bias](https://bob.wtf/telemetric-bias-the-internet-of-things-anno-2017-121034b54b6d), I believe that all information gathered from the physical world is already ordered in a specific, and often biased, way.

These insights lead to the following conclusions:

1\. To capture concepts from the physical world, we need to store the relations that they have to each other to create a network of concepts that represent other concepts rather than label them.

2\. We should use the same symbolic system (language) to define these concepts in the physical world like the one we use when defining and storing them in the digital world. We can do this through semantics.

### Web Semantics & Web 3.0

Writing about semantics and the Internet of Things cannot be done without mentioning the concept of the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) as proposed by Tim Berners-Lee in a 2001 [article in Scientific American Magazine](https://www.scientificamerican.com/magazine/sa/2001/05-01/#article-the-semantic-web). The word “semantic” stands for meaning in language or logic, and the key is the word “meaning.” If you read the word “chair,” a chain of relations is set off in your mind that creates the conceptual representation of a chair. However, in a traditional database or on a website for that matter, the word “chair” has no meaning whatsoever. It is just a row of ASCII numbers (99 104 97 105 114) stored in a database.

Traditionally, all knowledge represented on the internet is written and interpreted by humans. The belief is that in the next paradigm shift in the Web (Web 3.0) not only humans but also machines will be able to contribute or consume knowledge. And this is important because as I wrote in my blog post about telemetric bias, Kevin Ashton, who coined the term Internet of Things, is mostly concerned with machines not contributing to the wealth of human generated knowledge on the web. There is a direct overlap with what Tim Berners-Lee tries to accomplish, with the big difference that Kevin Ashton’s idea involves the actual physical world, not only the representation of it.

If you read the sentence, “Alice sits on a chair,” you might understand that it means that the person, Alice, sits on a sitting device called a chair. You might even notice that it is most probably some sort of a dining chair because she sits on it rather than in it. A machine does not know this; a machine just represents the characters on a screen, we need to help it to understand the actual concepts that they represent. Frameworks like the Resource Description Framework do exactly this. It allows you to represent concepts rather than just words on a web page.

### The Problem of the Database

> “An imaginary circle of empathy is drawn by each person. It circumscribes the person at some distance, and corresponds to those things in the world that deserve empathy. I like the term “empathy” because it has spiritual overtones. A term like “sympathy” or “allegiance” might be more precise, but I want the chosen term to be slightly mystical, to suggest that we might not be able to fully understand what goes on between us and others, that we should leave open the possibility **that the relationship can’t be represented in a digital database**.
>  — [Jaron Lanier](http://www.jaronlanier.com/), [You Are Not a Gadget](https://www.goodreads.com/work/quotes/6878840)

But even if we capture physical concepts semantically with frameworks like, for example, the [Resource Description Framework](http://www.dlib.org/dlib/may98/miller/05miller.html), we are still left with the storage of this information. We can’t just drop this information in a data lake. We need to properly connect the concepts. But to accomplish this, we need a special database, not the traditional ones like relational or key-value ones, but so called Graph Databases. One of the downsides of these types of databases was the amount of CPU and memory power it took to store the graph of knowledge. But thanks to the digital cloud revolution that happened just before the 2010’s, [the pricing for storage and processing power went down drastically](http://-%20http://www.mkomo.com/assets/hd-cost-graph-small.png). It became possible to actually build databases that could store these information representations of the physical world!

For the business-minded readers of this blog, do not underestimate this. Chances are that your business, because of understandable legacy reasons, is built on top of databases that are not able to capture and represent these types of data. You might be storing quantitatively more (big) data, but qualitatively the value is going down! Tremendously valuable information might get lost in translation because the actual concept that you try to store gets lost.

![](https://cdn-images-1.medium.com/max/800/1*KoouGm7tArPNVHK3fhwpoA.png)

Storing information semantically in relational, vs graph databases.


### Conclusion

Capturing information from the physical world is not new; we have done it for centuries through language, first spoken and later written. But what is new, is that we now have enough computing power and pragmatic frameworks available to represent the physical world in a structural way to truly capture the vast amount of knowledge that hides in plain sight and which will allow us to create new, life changing services, products, communities, platforms and so on like the Web 2.0 did at the turn of the century.

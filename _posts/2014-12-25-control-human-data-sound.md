---
layout: post
img : "control(human,data,sound).jpeg"
title : "control(human, data, sound)"
sub-title: "A story about how I created music out of data"
tags: art technology popular-and-trending
img_title: "control(human, data, sound)"
img_sub_title: ""
bg_color: ""
page_img: "https://cdn-images-1.medium.com/max/1400/1*64Ya1l78749KTNMkSTzj9Q.jpeg"
redirect_from: /about-my-latest-work-control-human-data-sound-7d31c123f4ee/
---
# A story about how I created music out of data
# control(human, data, sound)

<iframe src="https://www.youtube.com/embed/TlUoTNzPuf8?feature=oembed" width="640" height="480" frameborder="0" scrolling="no"></iframe>


I have created a music composition based completely on variables. To be more precise: variables that I get from a [Brain Sensing headband](http://www.choosemuse.com).

The composition itself has form and instrumentation. But all variables- keys, tempo, duration, note length, panning etcetera- are determined by the variables that I get delivered through the headband.

I asked a dancer to react, in an improvisation, to the music and ‘choices’ that come from his own brain.

### The idea

For quite some time I have been interested in all the data that is being harvested. I’m not particularly in favor or against it, I’m just interested in what data actually means. What does it mean to have huge amounts of data available on a computer? And indeed, a computer, not a human being. A human being is able to contextualize data, and it’s the context that gives data its value. But a computer merely observes my data, based on algorithms that try to give context. That context makes sense sometimes, but often it doesn’t make sense at all. In the meantime, the data just sits there as a source of information, without any meaning. And the bigger the pile of data gets, the more meaningless it becomes.

> “This project is an exploration of the meaning of data vs. context”

I am interested in what could happen if one day, data is harvested from the source of all our precious thoughts: our brain. My project [_control(human, data, sound)_](https://vimeo.com/114393301)is an abstraction of that idea. I use large chunks of data created by neurons of the dancer’s brain. All variables are open to his input, but I, through my composition, determine the context of his data.

### How does one go from data to music?

<iframe src="https://player.vimeo.com/video/114440097" width="525" height="295" frameborder="0" scrolling="no"></iframe>

I made the composition using Node.js and Logic Pro X. The first thing I needed to do was reading out the actual data coming from the headband. Fortunately, the Brain Sensing Headband had a great [developer kit](http://www.choosemuse.com/developer-kit/) that I could use for downloading the data and browsing through the data. Next I had to create a function that actually retrieves the data and turns it into a number (for my fellow nerds: an Integer) that I could use in the composition.

> This is essentially a musical composition, though I had to use a lot of technology to get there.

I needed to integrate MIDI into Node.js, which was quite tricky, despite having a library available on NPM.org that I could use (the MIDI library). I needed to translate all the data into binary information: MIDI binary information to be precise.

Luckily, there is a complete [overview of binary MIDI commands on midi.org](http://www.midi.org/techspecs/midimessages.php).

![](/assets/images/13-1.png)

Excerpt of binary MIDI commands on [MIDI.org](http://midi.org)

<iframe src="https://www.youtube.com/embed/ux-jPk_jK5U?feature=oembed" width="350" height="197" frameborder="0" scrolling="no"></iframe>

When I was done setting up the Node.js MIDI interface, I was able to send single MIDI notes through to Logic and play a simple synthesizer. After setting up the interface, I could start drawing out the composition. I took a simple A-B-A’ form to execute. The tempi and key (if needed) would be set in the beginning and for the rest all variables were open. I also needed to choose my instruments. I chose 14 instruments from 3 libraries, which were strings and string section effects from Project SAM’s Symphobia 2 series, Eduardo Tarilonte’s Epic World and Best Service’s Synth Werk.
Last but not least I needed an interface, so I created a three column interface displaying all the information about the composition while it was playing.

![](/assets/images/13-2.png)

This is the player in the console.

The first column represents the output of the requested data. In the example there are only small numbers (this is a fast rhythm section) but the numbers may range from 0 to 84.000\. In the second column I use this data to generate MIDI data. For example, to play a note on channel 1, I needed to send three sets of data: MIDI note channel 1 (10010000), the note number (middle C = 111100) and velocity (highest = 127 = 1111111). Then I needed to send a different signal to stop the note again. So in this example I have four variables that I could take from the headband: channel, note, velocity and duration. If you get this, you probably can imagine that I can do the same for multiple notes at the same time, and even multiple notes on the same channel. I can also do this for effect, panning and many other things.

So, below is what a function may look like. It is the _counterpoint_ function that I use as the beginning of the B section, you can see it very well on the video.

![](/assets/images/13-3.png)

An example of how these variables may be used in a function.

### Read, change and comment on my composition!

I would love to hear what you guys think about the composition. You can leave your comments here on Medium, on [Twitter](https://twitter.com/bobvanluijt), and of course the complete source code is on [Github](https://github.com/kubrickology/Brain-Music).

Thanks for watching and listening. If you like it, a share would be appreciated!

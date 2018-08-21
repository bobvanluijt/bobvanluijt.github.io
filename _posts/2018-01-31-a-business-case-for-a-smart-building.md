---
layout: post
img : "12.png"
title : "A Business Case for a Smart Building"
sub-title: "A business case for a smart building and a strategy to help you get there."
img_title: "A business case for a smart building"
img_sub_title: "and a strategy to help you get there"
bg_color: "#00d75b"
tags: internet-of-things smart-buildings strategy business-case technology
redirect_from: /a-business-case-for-a-smart-building-bbe434d04847/
---

During my work as a digital technology consultant in the realm of the Internet of Things, I often encounter people who ask me what the direct benefits are of investing in a smart building or smart warehouse and what the viable strategies are to accomplish these benefits. In this article, I will describe the core principles for a viable business case in depth, and I’ll explain what you can do strategically to position yourself to achieve these goals.

Because in the end, the million dollar question that we all need to answer is: _Why would you invest in a smart building?_

### Why Is This Question So Difficult To Answer?

Chances are, you are reading this because you are looking for an answer to the question of how to construct a business case or execution strategy for a smart building or warehouse. Creating such a case often turns out to be extremely difficult because of the cocktail of the traditional industries of construction and development and the fast-moving pace in which the digital technology landscape is moving.

Traditional business cases (i.e., CAPEX on solar panels is high, but OPEX is lower to such a degree that it becomes valuable) are not suited anymore. Digital business cases are complex and require a different way of forward-looking. Because of this, it comes as no surprise to me that companies like [Elon Musk’s Boring](https://www.wired.com/story/elon-musk-boring-company-culver-city/) or [Google’s sister company Sidewalk Labs](https://www.wsj.com/articles/SB10001424053111903480904576512250915629460) are moving toward construction and city development, the market is ready to be [disrupted](https://hbr.org/2015/12/what-is-disruptive-innovation).

To understand what is so significantly different and what is changing the landscape of traditional development and construction, it is important to understand what the role of software has been in recent years during the boom of the internet and the web.

### Software Is Eating The World

The famous quote “software is eating the world” by Marc Andreessen in 2011, lies at the core of the smart building strategy.

> […] Software is also eating much of the value chain of industries that are widely viewed as primarily existing in the physical world. In today’s cars, software runs the engines, controls safety features, entertains passengers, guides drivers to destinations and connects each car to mobile, satellite and GPS networks. The days when a car aficionado could repair his or her own car are long past, due primarily to the high software content. The trend toward hybrid and electric vehicles will only accelerate the software shift — electric cars are completely computer controlled. And the creation of software-powered driverless cars is already under way at Google and the major car companies.  
>  — [Wall Street Journal, 2011](https://www.wsj.com/articles/SB10001424053111903480904576512250915629460)

Vendors of hardware for the office or home (i.e., coffee machines, elevators, etcetera) have figured out that the most viable upsell for them lies in products and services that are mostly software based. If you buy X (where X can be anything physical, like a coffee machine, an elevator, a bike, a solar panel, and so on), you can additionally purchase add-ons like smart apps, smart screens, analytics tools, device management platforms, etcetera. The average offering from a single hardware vendor contains up to 30% of these upsells!

![](https://cdn-images-1.medium.com/max/800/1*tXp0kWf7uIABENQw-cOnkA.png)

ALARM! Vendor of hardware wants to control your data streams!


Although the status quo is “outsourcing of smartness,” the problems that arise from this are almost uncontrollable when set in motion. The most prominent issues are;

1.  **Vendor lock-in.** All those services are almost never one hundred percent aligned with the wishes of the client. This means that every edit and every addition needs to be done manually against high costs or is not even possible at all.
2.  **No control over content.** The user experience of the applications is the user experience that the vendor deems to be the right one. If it is not aligned with the wishes or quality standards of the client, it is almost impossible to change it, leaving you with an application that almost nobody uses.
3.  **Data ownership.** Any form of prediction (for example, occupation rates) is based on machine learning models. To make the machine “learn,” you need to train it; this training is done on _your_ data. The problem with this is that if a company sells you a solution, you know it is trained on other companies’ data sources. They resell the models, the original data of which you own, meaning that you potentially lose tremendous amounts of income by simply outsourcing the training of those models.
4.  **Who owns the truth?** Multiple platforms store data in multiple ways. This results in systems being unaligned and selling different truths. For example, some building management software start counting from the ground floor up, meaning you often see buildings with, for example, 26 floors and floor 98 and 99, which are the parking garage or basement. If you do this on a large scale, with multiple buildings, you easily lose control, especially in automated environments.
5.  **High additional costs.** Last but certainly not the least are the additional costs. As mentioned previously, you sometimes pay up to 30% in additional costs for software-based tools that you might not need if you control the data sources.

The best example of these issues in practice can be seen in Deloitte’s office in Amsterdam, The Edge.

> Both Deloitte, the building’s main tenant, and OVG, the developer, are open about the fact that The Edge is an experimental project and that not everything has worked. One of its biggest challenges is making sense of the mountains of data generated by the sensors. Maintaining the smartness of The Edge has, Mr Van der Mey jokes, turned his hair grey. “It is challenging to cope with all the data and we are still learning how to read it,” he told the BBC. For the moment the answer lies in data dashboards, which both the facilities teams and workers can access. It displays a variety of real-time data points — including the number of workers in the building at any given time, how many visitors, energy consumption and temperature. It also has some more fun data sets, such as a pie-chart showing how much coffee, and what type, is being consumed in the building at any given time.  
>  — [BBC, 2016](http://www.bbc.com/news/technology-35746647)

As pointed out in this BBC article, Deloitte has not been able to manage the data streams and was only able to achieve insights into the type of coffee that people like to drink.

In conclusion, there is an opportunity for you to drastically cut cost and increase user experience of the applications surrounding your buildings.

Which leaves us with the question: How?

### On Centralisation & Why Your Building Needs An API

Hardware and software applications communicate to the cloud through APIs. The I in API stands for Interface; it has the same function as the interface on your smartphone, but it is an interface for applications. **If you get ownership of the data streams, going back and forth between services, you are in control of how that data is used.**

![](https://cdn-images-1.medium.com/max/1000/1*YxAgfXfukyU7v-EhtPBp5A.png)

Image 2\. Have ownership and act as a proxy between data sources, block all direct access from vendor to vendor.


In a digital world, the APIs define your business. I would even go as far as arguing that defining an API is not an IT exercise but rather a business exercise (or for that matter, something that [everybody in your organization should partake in](https://jaxenter.com/api-design-not-left-techies-140187.html)). On a centralized platform, you can control the API and its definitions, which allows controlling the datastreams of vendors in return.

There are a few preliminary steps you can take to assure you set your organization up to control and aggregate data streaming from a centralized location:

1.  Ask from all vendors for hardware plus an API. Always!
2.  Do not be tempted to invest in software-based upsells.
3.  Create or adapt your own Internet of Things platform that is fully controlled and owned by you. This is the reason why I started the [open source Internet of Things platform Weaviate](https://github.com/creativesoftwarefdn/weaviate). It is used to solve exactly this problem and is free to use.
4.  Make data communication through the platform mandatory for all vendors. They never connect to each other, always with your platform as a proxy.
5.  In legal contracts between you and vendors, make sure to include access to APIs and ownership of the data.
6.  Educate your facility management staff so they can communicate your API strategy and ask for the needed data sources.
7.  Create an open platform (like a website, podcast or other online format) that allows you to communicate to vendors, contractors, and subcontractors how you prefer to work (as mentioned above) in clear and to the point language. It allows you to communicate on a massive scale easily.
8.  Make strategic choices about open sourcing software. If you open source software that makes it easier for vendors to connect to your ecosystem, you will win on the long run. Companies with API strategies and their software developers will want to connect with you! A great example of this is Google, in [this video by Sam Ramji](https://youtu.be/h9FSqVbdHis?t=52m7s), you can see how Google Cloud does this.

### What It Means to Own a Platform

In this context, ownership means ownership of software and data. This does not mean that you cannot outsource the development and maintenance of the software or that you cannot use cloud vendors to host your platform. You have three options to choose from when it comes to platform development;

1.  Develop in-house with a team.
2.  Hire a freelancer to build it for you.
3.  Work with an agency that will produce the platform for you.

What is important, especially in the second and third situation, is that you can strategically position yourself to control and own the software and data by having freelancers or agencies directly contribute to code sources.

An example of doing this on a large scale is [the open software ecosystem](https://github.com/dorel) that [Henk Jan Gerzee](https://www.linkedin.com/in/henkjangerzee/) created as CTO of Dorel Juvenile. Freelancers and agencies contribute directly to the source on GitHub. With every software contribution, ownership of the software moves to Dorel Juvenile, where it is implemented and scaled on a global cloud platform. By choosing an open source model, there is complete transparency over what software is controlled by Dorel’s ecosystem and which makes it easy to see which freelancer or agency contributed what.

And lastly, as the business, never _ever_ choose the technology. This is what the people in, well, technology, are good at.

### The Role of User Experience of Touchpoints

Touchpoints are all the interfaces that are used to interact with the centralized platform. The most obvious example is an employee app. Creating a good app is a complex endeavor. Having a simple app completing a simple task is not enough. As you can read in the same BBC article about Deloitte’s The Edge, the usage of the main touchpoint of the smart building, (the app) fell to 1%. This has almost certainly to do with two things. One, the lack of enough data sources to bring actual value to the app because data wasn’t centralized and owned by Deloitte. And two, the lack of a delightful user experience in the app that brings users back to the app.

I’m using the word _delightful_ on purpose. Great apps (Facebook for example) know how to make you stay in the app, and the longer you stay in the app, the higher the chances that you will use other services, too.

This is why cutting costs by centralizing datastreams and investing in a delightful user experience is something circular. If you do not have access and control over the data sources, you cannot show it to your users, and you have to pay a premium, but if you have bad touchpoints, you are forced to pay a premium for extra upsells from vendors.

![](https://cdn-images-1.medium.com/max/1000/1*Vpxml9LBO0E3ObonSabTtw.png)

Image 3\. User Experience and API strategies enhance each other, it is a circular motion.


### On Touchpoints

The creation of touchpoints–for example, apps–is often deemed a monstrous endeavor that takes up a lot of resources, but also here, there is a simple strategy available. Most enterprises have software for apps or websites available for their core products. Often, these software packages are created in a modular fashion, also known as frameworks. A framework is an empty app or website frontend that you can use and fill with your own information. You do not have to reinvent the wheel at all. And because you control the datastreams and the information in the apps, making changes are getting more trivial the further you move ahead in the future.


![](https://cdn-images-1.medium.com/max/800/1*fyqNf5f1C3LUsUONCUBjZw.png)

Image 4\. Upsells from a fictitious elevator company. Green is good, red is bad.


### Bad Apples

In a situation where a vendor controls a data stream or touchpoint, it is difficult to argue over mediocre software or a mediocre user experience. By being in control over a centralized platform, you can experiment with other vendors solving similar problems and cutting out mediocre vendors by simply replacing them with others. The upside of this is that you can create competition in your ecosystem (who has the best energy analyzing tool?) which increases the quality of outcome and reduces costs.

![](https://cdn-images-1.medium.com/max/1000/1*JQG-xKMsHC_O1YZCOX95EA.png)

Image 5\. Position yourself at the head of the table!


### What About Hardware and Infrastructure?

Besides traditional installations and hardware (i.e., power outlets), you now also need to collect data on a massive scale. To achieve this, you need to equip your building or warehouse with as much standardized data protocols as possible. The most obvious choice here is the Internet Protocol TCP/IP. Equip your building with ethernet cables (ideally with power, PoE).

Physical ethernet cables with the digital TCP/IP protocol allow for many devices (i.e., solar panels, air conditioners, etcetera) to connect directly to your platform. And these are just traditional devices. In a later blog post, I will address the impact that microcomputers running custom machine learning models inside buildings will have in the future and how they need a proper and secure internet protocol-based infrastructure, too.

So, also from an infrastructural planning perspective, it is important to bear the platform strategy in mind. Smart choices can save tremendous amounts of time and, therefore, money in the long run.

![](https://cdn-images-1.medium.com/max/1000/1*k0u8PFtEMCbt07JRaiTPdg.png)

Image 6\. A proper smart building hardware stack.


In the above image (image 6) you see a proper physical stack. The Ethernet cables are running through your building which can also if needed, transport electricity (PoE).

> A metaphor to understand why this is of importance for you is a highway. Vendors of hardware are trucks that bring you something of value, but you have to make it as easy as possible for them to do so. The better roads you create, the easier it becomes for them to deliver their goods.

What is important to bear in mind, is that a physical ethernet cable does not necessarily transport the TCP/IP protocol. As you can see in the layer above that, it can be the case that vendors use other transport protocols to reach their devices. This is often done with smaller devices like sensors. As a rule of thumb, you can assume that large devices (like air conditioners or air regulation pumps) accept ethernet cables directly, and that small devices (like sensors that measure occupancy rates) use wireless, short range, technologies like Blue Tooth. But even long-range wireless is an option. For example, you can use LoRA to follow moving objects like carts, containers or bikes around.

The moral of the story is this. Make sure that you choose vendors that go to an Internet protocol as soon as possible from the device; it allows you to be extremely agile towards the future and more and more vendors are supporting TCP/IP enabled devices.

### Assessing Hardware and Infrastructure

The above stack (image 6) can also be used to construct assessment models for vendors of hardware and infrastructure. In the image below (image 7) you can see how two fictitious companies are assessed. The companies that score a green mark are able to offer end-to-end TCP/IP as ideally as possible.

![](https://cdn-images-1.medium.com/max/1000/1*Q7DUZtfU2WrP9SZtSiwdEA.png)

Image 7\. Fictitious hardware and infrastructure vendor assessments.


### Bringing It To The Next Level

Many companies are exploring the Internet of Things and digital platforms as possible future business opportunities. Because the smart building is often your warehouse or office, it is the ideal place to execute R&D projects and to research new opportunities.

### Conclusion

A case for a smart building can be made on the two pillars of cutting costs by centralizing the data streams and improving the user experience of the touchpoints. Three additional, more trivial, benefits appear by further pushing costs down by analyzing behavior (for example, lowering energy costs), generating revenue by owning the data that trains the prediction models that can be used within other organizations, and creating competition in your own ecosystem.

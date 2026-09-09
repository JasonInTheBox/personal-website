import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About | Junjie Liu",
  description:
    "Learn about Junjie Liu’s approach to software, interests in philosophy and psychology, collegiate esports experience, and the work that shaped him.",
};

const qualities = [
  {
    title: "Across the stack",
    detail:
      "I’m most engaged when a problem crosses the interface, API, data model, and system beneath it.",
  },
  {
    title: "Close to the problem",
    detail:
      "I like turning complex workflows and real-world data into software that feels clear and useful.",
  },
  {
    title: "Practical with AI",
    detail:
      "I’m interested in AI features that are grounded in product data and designed around a real user need.",
  },
];

const personalDetails = [
  {
    title: "Reading",
    text: "I read philosophy and psychology to better understand how people think and how ideas shape the way we live. I’m currently studying The Analects.",
  },
  {
    title: "Competitive gaming",
    text: "I’m a longtime League of Legends player. I competed on UCSB’s collegiate esports team and coached other players—experiences that taught me a lot about preparation, communication, and steady improvement.",
  },
  {
    title: "Favorite food",
    text: "Chinese food, especially noodles, dim sum, dumplings, and buns. I will rarely say no to trying a new noodle place.",
  },
];

const workOutsideTech = [
  {
    title: "Campus dining",
    text: "Worked across day-to-day dining hall operations, including cooking, serving, bussing, and helping manage service.",
  },
  {
    title: "Delivery driving",
    text: "Worked independently as a driver for a delivery company, balancing timing, accuracy, and customer expectations.",
  },
  {
    title: "Front-desk service",
    text: "Supported customers face-to-face at a small local business and helped keep its everyday front-desk operations moving.",
  },
];

const personalAnswers = [
  {
    question: "What keeps me learning?",
    answer:
      "While studying The Analects, I’ve been thinking about learning as more than collecting what books say. The ideas that stay with me are the ones that align with who I am—and practicing them helps me grow into that person. I’m motivated by work that gives me something meaningful to learn, apply, and improve.",
  },
  {
    question: "How do I like to work?",
    answer:
      "I adapt quickly to different environments. Teams with high standards and a healthy competitive edge push me to learn faster, and I do my best work when that growth leads to a concrete contribution and visible impact.",
  },
  {
    question: "Why computer science?",
    answer:
      "When I was a kid, I wanted to be a scientist because I thought the word meant anyone who made new things. Eventually I narrowed that curiosity to computer science—probably because I already spent so much time on phones and computers that I figured I might as well start building the things that could improve our lives.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <header className="page-shell about-hero">
        <p className="section-label">About</p>
        <div className="about-hero-layout">
          <div className="about-hero-copy">
            <h1>I build by connecting the pieces.</h1>
            <div className="about-introduction">
              <p>
                I’m Junjie Liu, a recent UC Santa Barbara Computer Science graduate and a
                software engineer who enjoys following a problem through the whole system.
              </p>
              <p>
                My projects span full-stack web applications, desktop integrations, mobile
                products, data systems, and AI-assisted experiences. Across each one, I care
                about making the technical parts work together in service of a clear product.
              </p>
            </div>
          </div>
          <figure className="about-portrait">
            <Image
              src="/about/junjie-graduation.jpg"
              alt="Junjie Liu in graduation regalia at UC Santa Barbara"
              width={416}
              height={624}
              sizes="(max-width: 900px) 80vw, 360px"
              priority
            />
            <figcaption>UC Santa Barbara · Class of 2026</figcaption>
          </figure>
        </div>
      </header>

      <section className="page-shell about-focus" aria-labelledby="focus-title">
        <div className="about-section-heading">
          <p className="section-label">What I bring</p>
          <h2 id="focus-title">Curious about the details. Focused on the whole.</h2>
        </div>
        <div className="about-qualities">
          {qualities.map((quality) => (
            <article key={quality.title}>
              <h3>{quality.title}</h3>
              <p>{quality.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell about-detail-section" aria-labelledby="personal-title">
        <div className="about-section-heading">
          <p className="section-label">Beyond the work</p>
          <h2 id="personal-title">A little more about me.</h2>
        </div>
        <div className="about-detail-list">
          {personalDetails.map((detail) => (
            <article key={detail.title}>
              <div>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell about-detail-section" aria-labelledby="work-title">
        <div className="about-section-heading">
          <p className="section-label">Work that shaped me</p>
          <h2 id="work-title">Different jobs, shared lessons.</h2>
        </div>
        <div className="about-detail-list">
          {workOutsideTech.map((job) => (
            <article key={job.title}>
              <div>
                <h3>{job.title}</h3>
                <p>{job.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell about-detail-section about-answers" aria-labelledby="answers-title">
        <div className="about-section-heading">
          <p className="section-label">A few answers</p>
          <h2 id="answers-title">What drives the way I work.</h2>
        </div>
        <div className="about-answer-list">
          {personalAnswers.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-current">
        <div className="page-shell about-current-inner">
          <p className="section-label">Right now</p>
          <h2>Ready to contribute, learn, and keep building.</h2>
          <p>
            I’m currently seeking a full-time software engineering opportunity where I
            can contribute across product and systems while continuing to grow alongside
            an experienced team.
          </p>
          <div className="about-links">
            <Link className="text-link" href="/projects">
              See my projects <ArrowUpRightIcon />
            </Link>
            <Link className="text-link" href="/background">
              View my background <ArrowUpRightIcon />
            </Link>
            <Link className="text-link" href="/#contact">
              Get in touch <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

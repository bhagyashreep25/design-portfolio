import type { NoteMeta } from "./types";

export const meta: NoteMeta = {
  slug: "me-myself-and-ai",
  title: "me, myself & a(i)",
  subtitle: "Anybody can be a designer when you’ve got a Claude subscription",
  date: "2026-10-06",
  readingTime: "3 min read",
  // Two jagged "human" shapes (me, myself) and one perfect circle (a(i))
  stamp: {
    background: "#fdf3e6",
    shapes: [
      { kind: "burst", x: 0.18, y: 0.2, r: 104, points: 13, depth: 0.26, seed: 5, rotate: 0.1, color: "#fde28c" },
      { kind: "bloom", x: 0.92, y: 0.52, r: 88, lobes: 8, amp: 0.1, rotate: 0.2, color: "#acd6f4" },
      { kind: "circle", x: 0.36, y: 0.86, r: 70, color: "#cdb6f2" },
      { kind: "sparkle", x: 0.62, y: 0.3, size: 11, color: "#fff" },
      { kind: "sparkle", x: 0.74, y: 0.74, size: 7, color: "#fff" },
    ],
  },
};

export default function Body() {
  return (
    <>
      <p>
        Years ago, when I was an engineer, I felt like I wanted more control
        over creating experiences. Simply developing them wasn’t enough, so I
        pivoted into design. And I didn’t just do a bootcamp or an online
        certification. I went to the US to do a master’s in HCI. Call me type A
        or old school, but I wanted a formal education to take on this career
        switch. After being a textbook nerd all my life, I was ready to do some
        serious learning- one that had very little to do with exams and tests.
      </p>
      <p>
        And so began my completely co-dependent, slightly unhealthy but
        absolutely fulfilling journey with design. It wasn’t just about getting
        straight As. It was about creating something that worked seamlessly and
        solved a real problem, and if I was lucky, I got to see it get built.
        Prototyping an idea felt like being cooped up in a science lab inside
        my brain and seeing what came out. Not only did I fall in love with
        design, but I also fell in love with the process of actually designing
        screens in Figma on my own. Figuring out a new shortcut, improving the
        workflow, or executing a cool animation felt like a real flex.
      </p>
      <p>
        Cut to today, a world rife with products, designs, and all sorts of
        imagery built completely using AI. Anybody can be a designer when
        you’ve got a Claude subscription or a multitude of tools available at
        your disposal. It’s become so easy, and cheap, to build stuff that
        practically everyone thinks they’re sitting on a gold mine of a SaaS
        product. But how much of what’s being built actually makes sense?
        Forget being good or useful.
      </p>
      <p>
        Designers are bragging about how they’ve stopped using Figma
        altogether. They’ve started building tools, designing on Claude, and
        shipping websites without ever making a wireframe. While there’s
        nothing wrong with directly building things, there’s always a price to
        pay. Doing things the old-school way allowed us to have complete
        control over everything. You knew the entire idea inside and out, knew
        the constraints, trade-offs, and reasoning behind every design decision
        being made. But when you build your ideas directly, you lose some of
        the control and confidence in the outcome to the sheer speed with which
        you can ship. You can obviously spend more time and prompt your way to
        restore that control and confidence, but how many are actually doing
        that before bragging on LinkedIn with a post that’s also written by AI?
      </p>
      <p>
        As a product designer, my job today includes a lot of prompting,
        decoding AI responses, and screaming at a wall when it can’t understand
        my vision. My darkest horror story is running out of session credits.
        The turnaround time to deliver every task has been cut down
        drastically. Otherwise, the expectations within the same time period
        have gone up. This has led to a feeling of fatigue and a lack of
        interest and connection with the work. The most draining task, taking
        up most of my mental bandwidth, is decoding AI responses to determine
        what’s useful, what’s complete slop, and what’s a level of detail
        that’s completely unwarranted.
      </p>
      <p>
        It’s hard to comment on where the industry is headed, but it looks
        bleak at best. Everyone is now trying to play catch up with someone
        else’s AI responses/outputs. But no matter what prompt you give, it’s
        never gonna give you the exact same result because that’s how LLMs
        work. And isn’t that completely laughable. We’ve stopped getting
        inspired from humans but rather just narrowed down to getting our AI
        agents to work a certain way (like that one person’s LinkedIn post).
      </p>
    </>
  );
}

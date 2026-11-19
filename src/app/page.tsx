export default function StyleGuide() {
  return (
    <main className="container-page section space-y-12">
      <div>
        <span className="chip">Design system preview</span>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Bhuniajibarh Chayanika Club
        </h1>
        <p className="mt-4 max-w-xl">
          A warm place for our community to gather, celebrate and make memories.
        </p>
        <h2 className="mt-4 text-2xl" lang="bn">
          ভুনিয়াজিবার্হ চায়নিকা ক্লাব
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn btn-primary">Explore Our Club</button>
          <button className="btn btn-secondary">Explore Events</button>
          <button className="btn btn-soft">Join Us</button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card card-hover">
          <h3 className="text-xl">Event card</h3>
          <p className="mt-2">
            Rounded corners, soft shadow, gentle lift on hover.
          </p>
        </div>
        <div className="card bg-peach-100">
          <h3 className="text-xl">Peach card</h3>
          <p className="mt-2">For warm highlights.</p>
        </div>
        <div className="card bg-sage-100">
          <h3 className="text-xl">Sage card</h3>
          <p className="mt-2">For calm sections.</p>
        </div>
      </div>

      <div className="card max-w-md">
        <label className="field-label" htmlFor="name">
          Your name
        </label>
        <input id="name" className="field" placeholder="Enter your name" />
        <label className="field-label mt-4" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="field field-error"
          defaultValue="not-an-email"
        />
        <p className="field-hint">Please enter a valid email address.</p>
      </div>
    </main>
  );
}

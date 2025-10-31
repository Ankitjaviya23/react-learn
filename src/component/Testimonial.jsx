import { useState } from "react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          hic id, reprehenderit reiciendis, modi numquam tempore sunt ea, amet
          labore animi ipsa enim accusamus voluptates nobis! Necessitatibus
          neque perspiciatis itaque!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          hic id, reprehenderit reiciendis, modi numquam tempore sunt ea, amet
          labore animi ipsa enim accusamus voluptates nobis! Necessitatibus
          neque perspiciatis itaque!
        </p>
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          className="bg-green-400 border-amber-50 pl-1 pr-1 border border-1"
          onClick={onShow}
        >
          Show
        </button>
      )}
    </section>
  );
}

import { CORE_CONCEPTS } from "../data"
import Core from "./Core"

export default function CoreConcept(){
    return (
        <section id="core-concepts">
          <h2>Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>(
              <Core key={item.title} {...item} />
            ))}
          </ul>
        </section>
    );
}
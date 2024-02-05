import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";


export default function Examples() {
    const [content, setContent] = useState();
    function handleSelect(selectedButton) {
        setContent(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tabs container = "menu"
            buttons={
                <>
                 <TabButton isSelect={content === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>
                <TabButton isSelect={content === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelect={content === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelect={content === 'state'} onSelect={() => handleSelect('state')}>State</TabButton></>
            }>
            {!content ? <p>Please select a topic.</p> :
                (<div id="tab-content">

                    <h3>{EXAMPLES[content].title}</h3>
                    <p>{EXAMPLES[content].description}</p>
                    <pre><code>{EXAMPLES[content].code}</code></pre>
                </div>
                )
            }
            </Tabs>

            
        </section>
    );
}
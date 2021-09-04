HotKeysContainer make handler context and block click handlers of the parent HotKeysContainer
```jsx
import { useMemo, useState } from "react";
import { HotKey, HotKeysContainer, Keys } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);
const [ propagate, setPropagate ] = useState(false);

;
<>
    <p><b>Counter: {v}</b> ({propagate?'propagate':'not propagate'})</p>
    <HotKeysContainer >
        <div>
            <b>Parent Context</b>
            Click for set focus and then Press:
        </div>
        <div>Esc - Increase counter (+1)</div>
        <div>Enter - Increase counter (+10)</div>
        <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state + 1)} />
        <HotKey selector={Keys.ENTER} onKey={() => setV((state)=> state + 10)} />
         <HotKeysContainer propagate={propagate} >
            <div>
                <b>Child Context
                    (<label>
                        propagate <input type="checkbox" checked={propagate} onChange={({target: {checked}}) => setPropagate(checked)}/>
                    </label>)
                    </b>
                Click for set focus and then Press:
            </div>
            <div>Esc - Decrease counter (-1)</div>
             {propagate ? <div>Enter - Call parent handler and Increase counter (+10)</div> : <></>}
            <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state - 1)} />
        </HotKeysContainer>
    </HotKeysContainer>
</>
```


Container with additional dom elements:

```jsx
import { useMemo, useState } from "react";
import { HotKey, HotKeysContainer, Keys } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);
const shards = useMemo(() => [{current: document.body}], [])

;<HotKeysContainer shards={shards} >
    Press Esc {v}
    <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state + 1)} />
</HotKeysContainer>
```


HotKey component example (with additional dom elements):

```jsx
import { useMemo, useState } from "react";
import { HotKey, HotKeysContainer, KeySelector } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);

<HotKeysContainer shards={useMemo(() => [{current: document.body}], [])} >
    Press Esc {v}
    <HotKey selector={KeySelector.ESC} onKey={() => setV((state)=> state + 1)} />
</HotKeysContainer>
```

HotKey component example (without additional dom elements):
```jsx
import { useMemo, useState } from "react";
import { HotKey, HotKeysContainer, KeySelector } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);

<HotKeysContainer >
    Click for set focus and then Press Esc {v}
    <HotKey selector={KeySelector.ESC} onKey={() => setV((state)=> state + 1)} />
</HotKeysContainer>
```

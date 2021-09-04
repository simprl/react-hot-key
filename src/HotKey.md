HotKey component example  (press ESC)
```jsx
import { useMemo, useState } from "react";
import { HotKey, Keys } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);

;<>
    ESC counter: {v} 
    <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state + 1)} />
</>
```


Custom KeySelector:
```tsx
import { useMemo, useState } from "react";
import { HotKey, Keys, KeySelector } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);
const delSelector = (e) => e.key === 'Delete';

;<>
    counter: {v} 
    <div>Press DEL</div>
    <HotKey selector={delSelector} onKey={() => setV((state)=> state + 1)} />
</>
```

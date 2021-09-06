HotKey component example  (press ESC)
```jsx
import { useMemo, useState } from "react";
import { useHotKey, Keys } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);
useHotKey(Keys.ESC, () => setV((state)=> state + 1));
;<>
    ESC counter: {v} 
</>
```


Custom KeySelector:
```tsx
import { useMemo, useState } from "react";
import { HotKey, Keys, KeySelector } from "@simprl/react-hot-keys";

const [ v, setV ] = useState(0);
const delSelector = (e) => e.key === 'Delete';
useHotKey(delSelector, () => setV((state)=> state + 1));
;<>
    counter: {v} 
    <div>Press DEL</div>
</>
```

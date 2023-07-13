### HotKey component example  (press ESC)

```jsx
import { useEffect, useMemo, useState } from 'react';
import { HotKey, Keys } from "@simprl/react-hot-keys";

const [v, setV] = useState(0);

;<>
  ESC counter: {v}
  <HotKey selector={Keys.ESC} onKey={() => setV((state) => state + 1)}/>
</>
```


### Custom KeySelector:
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

### Custom KeySelector & onKey propagate:

```tsx
import { useMemo, useState } from "react";
import { HotKey, Keys, KeySelector, HotKeysContainer } from "@simprl/react-hot-keys";

const [v, setV] = useState(false);
const delSelector = (e) => e.key === 'Delete';

;<>
  <HotKeysContainer>
   The delete button will work every time.
   <p>{v ? 'The delete button will work' : 'Delete button won\'t work'}</p>
   <div>Select input and Press DEL</div>
   <HotKey selector={delSelector} onKey={() => {
      setV((state) => !state);
      if (v) return false; // Pressing the "DEL" button returns to the <input/>
   }}/>
   <input defaultValue={'Press DEL key for delete text'}/>
  </HotKeysContainer>
</>
```

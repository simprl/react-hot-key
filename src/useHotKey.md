### useHotKey hook example  (press ESC)
```jsx
import { useMemo, useState } from "react";
import { useHotKey, Keys, HotKeysContainer } from "@simprl/react-hot-keys";

const UHK = () => {
    const [v, setV] = useState(0);
    useHotKey(Keys.ESC, () => setV((state) => state + 1));
    return (
      <>
        ESC counter: {v}
      </>
    );
}

;<>
  <HotKeysContainer>
    <UHK/>
  </HotKeysContainer>
</>

```


### Custom KeySelector:

```tsx
import { useMemo, useState } from "react";
import { useHotKey, Keys, KeySelector, HotKeysContainer } from "@simprl/react-hot-keys";

const delSelector = (e) => e.key === 'Delete';

const UHKC = () => {
  const [v, setV] = useState(0);
  useHotKey(delSelector, () => setV((state) => state + 1));
  return (
    <>
      counter: {v}
      <div>Press DEL</div>
    </>
  );
}

;<>
  <HotKeysContainer>
    <UHKC />
  </HotKeysContainer>
</>
```

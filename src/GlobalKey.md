### GlobalKey component example

```jsx
import { useEffect, useMemo, useState } from 'react';
import { GlobalKey, Keys } from "@simprl/react-hot-keys";

const [v, setV] = useState(0);

;<>
  Pres save (ctrl+s): {v ? `saved ${v} times`: 'not saved'}
  <GlobalKey selector={Keys.SAVE} onKey={() => setV((state) => state + 1)}/>
</>
```

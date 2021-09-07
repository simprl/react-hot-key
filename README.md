# @simprl/react-hot-keys

[![](https://img.shields.io/npm/l/@simprl/react-hot-keys.svg?style=flat)](https://github.com/simprl/react-hot-key/blob/main/LICENSE)
[![](https://img.shields.io/npm/v/@simprl/react-hot-keys.svg?style=flat)](https://www.npmjs.com/package/@simprl/react-hot-keys)

React **hook** and react **component** for subscribe to **hotkeys**

Support React Context API.

### [HotKeys examples Demo](https://simprl.github.io/react-hot-key/)

# Usage

### Component HotKey
```tsx
import { HotKey, Keys, KeySelector } from "@simprl/react-hot-keys";

// with typescript:
// const customSelector: KeySelector = (e) => e.key === 'Delete';

const customSelector = (e) => e.key === 'Delete';

const Component = ({onExit, onEvent}) => {
    return <>
        <HotKey selector={Keys.ESC} onKey={onExit} />
        <HotKey selector={customSelector} onKey={onEvent} />
        <div>component with hot keys</div>
    </>
}
```

### Hook useHotKey
```tsx
import { useHotKey, Keys, KeySelector } from "@simprl/react-hot-keys";

// with typescript:
// const customSelector: KeySelector = (e) => e.key === 'Delete';

const customSelector = (e) => e.key === 'Delete';

const Component = ({onExit, onEvent}) => {
    useHotKey(Keys.ESC, onExit);
    useHotKey(customSelector, onEvent);
    return <div>component with hot keys</div>
}
```

### Component HotKeysContainer
```jsx
import { HotKey, HotKeysContainer, Keys } from "@simprl/react-hot-keys";

....

<HotKeysContainer >
    <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state + 1)} />
        ....
    <HotKeysContainer >
        inner hot key container
        <HotKey selector={Keys.ESC} onKey={() => setV((state)=> state + 1)} />
    </HotKeysContainer>
       ....
</HotKeysContainer>
```
# API

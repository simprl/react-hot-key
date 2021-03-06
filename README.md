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

...

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

By default HotKeysContainer is a div element with style = `{ width: 100%; height: 100%; }`
You can set your own styles:
```jsx
<HotKeysContainer className = "myClassName" >
  ...
</HotKeysContainer>
```
# How it work

1. HotKeysContainer render a div and subscribe to keyboard events. Also it make React Context.
2. HotKeysContainer receive event only if it or children DOM elements has focus.
3. If keyboard event happen then check all HotKey components and useHotKey hooks inside react context.
4. If selector return true then onKey handler call.
5. If none handler call and property propagate is true, then process parent HotKeysContainer.

# @simprl/react-hot-keys
React hook and react component for subscribe to hot keys

[![](https://img.shields.io/npm/l/@simprl/react-hot-keys.svg?style=flat)](https://github.com/simprl/react-hot-key/blob/main/LICENSE)
[![](https://img.shields.io/npm/v/@simprl/react-hot-keys.svg?style=flat)](https://www.npmjs.com/package/@simprl/react-hot-keys)

[Demo](https://simprl.github.io/react-hot-key/)

# Usage
```jsx
<HotKeysContainer >
    <HotKey selector={KeySelector.ESC} onKey={() => setV((state)=> state + 1)} />

    <HotKeysContainer >
        inner hot key container
        <HotKey selector={KeySelector.ESC} onKey={() => setV((state)=> state + 1)} />
    </HotKeysContainer>

</HotKeysContainer>
```
## API

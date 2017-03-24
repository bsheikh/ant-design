---
category: Components
type: General
title: Icon
toc: false
---

Semantic vector graphics.

## Icons naming convention

We provide semantic name for every icon, and naming rules are as follows:

- Scanning line icon has the similar name with its solid one，but it's distinguished by `-o`, for example, `question-circle` (a full circle) and `question-circle-o` (an empty circle);
- Naming sequence：`[name]-[shape?]-[outline?]-[direction?]`.

> `?` means is optional.

See more design detail at [here](/docs/spec/icon).

## How To Use Icons

Use tag <Icon /> to create an icon and set its type in the type prop, for example:

```html
<Icon type="link" />
```

## How to use Adparlor Icons

```html
<Icon adparlor type="icon-platform_facebook" />
```

## List of icons

> Click the icon and copy the code。

### Adparlor Icons

```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="adparlor" />, mountNode);
```

### Directional Icons

```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="direction" />, mountNode);
```

### Suggested Icons

```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="suggestion" />, mountNode);
```

### Application Icons

```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="other" />, mountNode);
```

### Brand and Logos

```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="logo" />, mountNode);
```

## API

| Property | Description      | Type   | Default |
|----------|------------------|------- |---------|
| type | Type of ant design icons | string | - |
| spin | Rotate icon with animation | boolean | false |

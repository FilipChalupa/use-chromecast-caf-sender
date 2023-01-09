# Use Chromecast sender [![npm](https://img.shields.io/npm/v/use-chromecast-caf-sender.svg)](https://www.npmjs.com/package/use-chromecast-caf-sender) ![npm type definitions](https://img.shields.io/npm/types/use-chromecast-caf-sender.svg)

React hook to use the [Chromecast sender SDK](https://developers.google.com/cast/docs/web_sender/integrate) in your project.

## Installation

```bash
npm install use-chromecast-caf-sender
```

## How to use

```jsx
import { useChromecastSender } from 'use-chromecast-caf-sender'

const Component = () => {
	const { cast } = useChromecastSender()

	return <div>{cast === null ? 'Loading' : 'Cast sender sdk is loaded'}</div>
}
```

## Development

- Install dependencies: `npm ci`
- Build the package: `npm run dev`

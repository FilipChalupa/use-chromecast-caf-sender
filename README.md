# Use Chromecast sender [![npm](https://img.shields.io/npm/v/use-chromecast-caf-sender.svg)](https://www.npmjs.com/package/use-chromecast-caf-sender) ![npm type definitions](https://img.shields.io/npm/types/use-chromecast-caf-sender.svg)

## Installation

```bash
npm install use-chromecast-caf-sender
```

## How to use

```jsx
import { useChromecastSender } from 'use-chromecast-caf-sender'

const options = {
	receiverApplicationId: 'XXXXXXXX',
	autoJoinPolicy: chrome.cast.AutoJoinPolicy.PAGE_SCOPED,
	language: 'en',
	resumeSavedSession: true,
}

const Component = () => {
	const { cast } = useChromecastSender(options)

	return <div>{cast === null ? 'Loading' : 'Cast sender sdk is loaded'}</div>
}
```

## Development

- Install dependencies: `npm ci`
- Build the package: `npm run dev`

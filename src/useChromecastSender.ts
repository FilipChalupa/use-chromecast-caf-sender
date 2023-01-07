import { useEffect, useState } from 'react'

type Sender = {
	chrome: typeof chrome
	cast: typeof cast
}

type Options = (
	cast: Sender['cast'],
	chrome: Sender['chrome'],
) => cast.framework.CastOptions

const load = (() => {
	let promise: Promise<Sender> | null = null

	return (options: Options) => {
		if (promise === null) {
			promise = new Promise((resolve) => {
				const script = document.createElement('script')
				script.src =
					'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1'
				window.__onGCastApiAvailable = (isAvailable) => {
					if (isAvailable) {
						cast.framework.CastContext.getInstance().setOptions(
							options(cast, chrome),
						)
						resolve({
							chrome,
							cast,
						})
					}
				}
				document.body.appendChild(script)
			})
		}
		return promise
	}
})()

export const useChromecastSender = (options: Options) => {
	const [sender, setSender] = useState<Sender | { chrome: null; cast: null }>({
		chrome: null,
		cast: null,
	})

	useEffect(() => {
		load(options).then((sender) => {
			setSender(sender)
		})
	}, [])

	return sender
}

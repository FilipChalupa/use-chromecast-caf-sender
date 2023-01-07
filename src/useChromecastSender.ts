import { useEffect, useState } from 'react'

type Sender = {
	chrome: typeof chrome
	cast: typeof cast
}

const load = (() => {
	let promise: Promise<Sender> | null = null

	return (options: cast.framework.CastOptions) => {
		if (promise === null) {
			promise = new Promise((resolve, reject) => {
				const script = document.createElement('script')
				script.src =
					'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1'
				window.__onGCastApiAvailable = (isAvailable) => {
					if (isAvailable) {
						cast.framework.CastContext.getInstance().setOptions(options)
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

export const useChromecastSender = (options: cast.framework.CastOptions) => {
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

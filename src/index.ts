import V2 from './v2'

interface OnePipeSdk {
	v1: any
	v2: any
}

const OnePipeSdk = (key: string, client: string): OnePipeSdk => {
	this.key = key
	this.client = client
	return { v1: V2, v2: V2 }
}

export default OnePipeSdk

import OpenAccount from './open-account'
import GetBalance from './get-balance'

export interface AccountServicesInterface {
	OpenAccount(parameters: ParameterInterface)
	GetBalance()
}

export interface ParameterInterface {
	// eslint-disable-next-line @typescript-eslint/camelcase
	request_type: string
	// eslint-disable-next-line @typescript-eslint/camelcase
	request_ref: string
	auth: object
	transaction: object
}

export default class AccountServices implements AccountServicesInterface {
	public OpenAccount(parameters: ParameterInterface) {
		const newInstance = new OpenAccount(parameters)
		return newInstance.go()
	}
	public GetBalance() {
		const newInstance = new GetBalance()
		newInstance.go()
	}
}

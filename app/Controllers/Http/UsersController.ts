import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    const user = await User.create({
      username,
      password,
    })

    console.log(user)
  }

  public async index() {
    const all = User.all()

    return all
  }
}

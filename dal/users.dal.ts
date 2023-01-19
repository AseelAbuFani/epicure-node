import User from "../db/models/users";

export class UsersDal {
  public static async createUser(user: any) {
    user = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
    });

    user.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public async updateUser(user: any) {
    const data = await User.findOne({
      _id: user._id,
    }).updateOne({ $set: { firstName: user.firstName, lastName: user.lastName, email: user.email } });
    return data;
  }
  public static async getUserPassword(user:any){
    const data = await User.findOne({
      email: user.email,
    });
    return data?.password;
  }

  public static async getUserType(user:any){
    const data = await User.findOne({
      email: user.email,
    });
    return data?.isAdmin;
  }

  public findAll(query: any = null) {
    return User.find(query);
  }

  public static async compareEmails(user:any){
    const data = await User.findOne({
      email: user.email,
    });
    if (data?.email === user.email){
      return true;
    }
    return false;
  }
}

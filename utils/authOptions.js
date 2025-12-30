import connectDB from '@/config/database'
import User from '@/models/User'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:'consent',
                    access_type:'offline',
                    response_type:'code'
                }
            }
        })
    ],
    callbacks:{
        //Invoked on successful sign-in
        async signIn({profile}){
            //1.connect to the database,
            await connectDB()
            //2.check if user exists,
            const userExist = await User.findOne({email: profile.email})
            //3.if not, create user,
            if(!userExist){
                await User.create({
                    username: profile.name,
                    email: profile.email,
                    image: profile.picture
                })
            }
            //4.return true to allow sign in
            return true
        },
        //session Callback function that modifies session object
        async session({session}){
            //1.get user form database,
            const user = await User.findOne({email: session.user.email})
            //2.assign user to session
            session.user.id = user._id.toString()
            return session  
        }
    }

}
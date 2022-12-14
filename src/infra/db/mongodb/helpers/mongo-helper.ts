import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
    client: null as MongoClient,

    async connect(url: string): Promise<void> {
        this.client = await MongoClient.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    },

    async disconnect() {
        await this.client.close()
    },

    getCollection(name: string): Collection {
        return this.client.db().collection(name)
    }

}
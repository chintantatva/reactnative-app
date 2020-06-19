import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { Api } from "../../services/api";
import {randomIntFromInterval} from '../../utils'

/**
 * A RootStore model.
 */
// prettier-ignore

const api = new Api()
api.setup()

export const AsteroidStoreModel = types.model("AsteroidStore").props({
    astId: "",
    astData: types.frozen(),
    rendomData: types.frozen(),
}).actions(self => ({
    onChnageAst(value) {
        self.astId = value
    },
    getAsteroidData: flow(function* getAsData() {
        // <- note the star, this a generator function!
        try {
            // ... yield can be used in async/await style
            const astData = yield api.getAst(self.astId);
            if(astData.kind=="ok"){
                console.tron.log('ad',astData)
                self.astData=astData.user;
            }
            // self.state = "done"
        } catch (error) {
            // ... including try/catch error handling
            // console.error("Failed to fetch projects", error)
            // self.state = "error"
        }
        // The action will return a promise that resolves to the returned value
        // (or rejects with anything thrown from the action)

    }),
    getRandomAsteroidData: flow(function* getRandomAsteroidData() {
        // <- note the star, this a generator function!
        try {
            // ... yield can be used in async/await style
            const rendomData = yield api.getRandomAst();
            if (rendomData.kind == 'ok') {
              const rendomId=  rendomData.user.near_earth_objects[randomIntFromInterval(0,rendomData.user.near_earth_objects.length-1)].id;
              self.astId=rendomId
            }
            console.tron.log('re', rendomData)
            // self.state = "done"
        } catch (error) {
            // ... including try/catch error handling
            // console.error("Failed to fetch projects", error)
            // self.state = "error"
        }
        // The action will return a promise that resolves to the returned value
        // (or rejects with anything thrown from the action)

    }),

})
)

/**
 * The RootStore instance.
 */
export interface AsteroidStore extends Instance<typeof AsteroidStoreModel> { }


export interface AsteroidStoreModelSnapshot extends SnapshotOut<typeof AsteroidStoreModel> { }

import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AsteroidStoreModel } from "../asteroid-store/asteroid-store";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
asteroidStore:types.optional(AsteroidStoreModel,{})
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

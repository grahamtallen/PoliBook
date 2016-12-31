/**
 * Created by grahamallen on 12/31/16.
 */

import {observable, computed} from 'mobx'

class UiStore {
    @observable selectedRep = {}
}

export default new UiStore()
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
		list:[
			{"id":"001","src":"http://pic18.nipic.com/20111206/2256974_132005956000_2.jpg","desc":"好看001"},
			{"id":"002","src":"http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg","desc":"好看002"},
			{"id":"003","src":"http://img.zcool.cn/community/017274582000cea84a0e282b576a32.jpg","desc":"好看003"},
			{"id":"004","src":"http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg","desc":"好看004"},
			{"id":"005","src":"http://www.taopic.com/uploads/allimg/140421/318743-140421213T910.jpg","desc":"好看005"},
			{"id":"006","src":"http://pic2.ooopic.com/12/22/94/30b1OOOPIC5c.jpg","desc":"好看006"},
			{"id":"007","src":"http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg","desc":"好看007"},
			{"id":"008","src":"http://b.hiphotos.baidu.com/image/pic/item/e1fe9925bc315c606d8b660387b1cb134954773b.jpg","desc":"好看008"},
			{"id":"009","src":"http://pic19.photophoto.cn/20110417/0019032477335591_b.jpg","desc":"好看009"},
			{"id":"010","src":"http://b.hiphotos.baidu.com/image/pic/item/5bafa40f4bfbfbed9215b39772f0f736aec31f8d.jpg","desc":"好看010"},
			{"id":"011","src":"http://img05.tooopen.com/images/20140326/sy_57640132134.jpg","desc":"好看011"},
			{"id":"012","src":"http://news.cnhubei.com/ctjb/ctjbsgk/ctjb40/200808/W020080822221006461534.jpg","desc":"好看012"}
		]
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})
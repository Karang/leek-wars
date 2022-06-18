enum ActionType {
	START_FIGHT = 0,
	USE_WEAPON = 1,
	USE_CHIP = 2,
	SET_WEAPON = 3,
	END_FIGHT = 4,
	PLAYER_DEAD = 5,
	NEW_TURN = 6,
	LEEK_TURN = 7,
	END_TURN = 8,
	SUMMON = 9,
	MOVE_TO = 10,
	TP_LOST = 100,
	LIFE_LOST = 101,
	MP_LOST = 102,
	CARE = 103,
	BOOST_VITA = 104,
	RESURRECTION = 105,
	NOVA_DAMAGE = 107,
	DAMAGE_RETURN = 108,
	LIFE_DAMAGE = 109,
	POISON_DAMAGE = 110,
	AFTEREFFECT = 111,
	NOVA_VITALITY = 112,

	SAY = 200,
	LAMA = 201,
	SHOW = 202,
	ADD_WEAPON_EFFECT = 301,
	ADD_CHIP_EFFECT = 302,
	REMOVE_EFFECT = 303,
	UPDATE_EFFECT = 304,
	ADD_STACKED_EFFECT = 305,
	REDUCE_EFFECTS = 306,
	REMOVE_POISONS = 307,
	REMOVE_SHACKLES = 308,
	BUG = 1002,
}

type ActionLog = any[]
class Action {
	params!: any[]
	logs: ActionLog[] = []
	weapon: string | null = null
	me: boolean = false

	get type() { return this.params[0] }

	constructor(params: any[]) {
		this.params = params
	}
}

export { Action, ActionLog, ActionType }

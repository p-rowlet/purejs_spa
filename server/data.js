import SQ from "sequelize";
import dotenv from 'dotenv';
const DataTypes = SQ.DataTypes;

dotenv.config();
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;

export const sequelize = new SQ.Sequelize(database, user, password, {
	host,
	dialect: "mysql",
	logging: false,
});

const Text = sequelize.define("list", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

const ORDER_DESC = {
	order: [["createdAt", "DESC"]],
};

export async function findById(id) {
	return Text.findOne({ where: { id } });
}

export async function getAll() {
	return Text.findAll(ORDER_DESC);
}

export async function create(text){
    return Text.create({text}).then((data)=>this.findById(data.dataValues.id));
}

export async function remove(id) {
	return Text.findByPk(id).then((list) => {
		list.destroy();
	});
}

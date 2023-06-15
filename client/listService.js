export default class ListService {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	async getLists() {
        const response = await axios.get(`${this.baseURL}/list`);
		return response;
	}

	async postList(text) {
		return await axios.post(`${this.baseURL}/list`, {
			text: text
		});
	}

	async deleteList(id){
        return await axios.delete(`${this.baseURL}/list/${id}`)
    };
}

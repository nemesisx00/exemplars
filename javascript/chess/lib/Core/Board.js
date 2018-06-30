
const labels = Object.freeze({
	ranks: Object.freeze([1, 2, 3, 4, 5, 6, 7, 8]),
	files: Object.freeze(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
})

function constructBoard()
{
	let out = {}
	
	labels.files.forEach(letter => {
		labels.ranks.forEach(num => {
			if(!out[letter])
				out[letter] = {}
			out[letter][num] = null
		})
	})
	
	return out
}

class ChessBoard
{
	constructor()
	{
		this.squares = constructBoard()
	}
}

module.exports = Board

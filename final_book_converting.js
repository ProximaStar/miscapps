<!-- /* CREATED BY PROXIMA M / Sev... */ -->
<!-- Zlink::open;hash::verifiable;authkeyeditable::open;authkeyencrypting::open;parseZ -->

function convertBook(){
	var converted_book = ""
	var book_contents = document.getElementById("book_stuff").value
	var l_num = 0
	var split_book = ( book_contents.replace(/\n\n/g, "Zauthkey02Z") ).replace(/\n/g, "Zauthkey01ZZauthkeyXXZ")
	split_book = split_book.split("ZauthkeyXXZ")
	var l_index_upper_bound = split_book.length

	while (l_num < l_index_upper_bound){

		var new_line = split_book[l_num]
		var last_index = new_line.length-1

		if (new_line.length > 100){
			var cutoff = Math.floor(new_line.length / 70)

			for (cutoff_index = 0; cutoff_index < cutoff; cutoff_index++){
				try{

					var cutoff_range_start = cutoff_index*70 + 70
					var whitespace_index = new_line.lastIndexOf(" ", cutoff_range_start)
					var whitespace_value = (whitespace_index + 1) * (-1)

					if (whitespace_value < -3){
						new_line = new_line.slice(0, whitespace_index) + "\n" + new_line.slice((whitespace_index+1), last_index) + new_line[last_index]

					}

				}
				catch(error){console.log(error)}
			}

		}
		
		converted_book = converted_book + new_line
		l_num += 1

	}

	converted_book = converted_book.replace(/Zauthkey02Z/g, " /dline\n")
	converted_book = converted_book.replace(/Zauthkey01Z/g, " /line\n")
	document.getElementById("book_out_id").value = converted_book

}

<!-- Zlink::close;hash::unverifiable;authkeyeditable::close;authkeyencrypting::close;parseZ -->
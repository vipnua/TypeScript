const AdminHeader = {
	render: () => {
		return (
            /*html*/`
			<div class="bg-[#00B0D7] py-1 flex text-white">
				
					<div class="basis-1/5 flex pl-6">
						<a href="/admin"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658160644/unnamed_cpppt8.png" width="65" height="56"></a>
						<span class="pt-4 px-5"> Dashboard</span>
						</div>
					<div class="basis-3/5"> 
					 <div class="basis-4/12 static">
					 <form>
						<input id="sreach" class="w-2/4 py-2 pl-6 my-3 rounded text-black"type="text">
						<img class="absolute w-6 pt-2" style="margin-top:-49px" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654614957/search_lwjcp6.png">
						<button id="btnSearch" type="submit"></button>
					</form>
					</div>
					</div>
					
					<div class="basis-1/5 "> <a href="/" ><div class="pt-4 px-3">Xin chào <span>Name</span></div>  </a></div>

			</div>
		
            `
		)
	}
}

export default AdminHeader

async function loadSidebar(){
	const container = document.querySelector("#sidebar-container");

	const componentResponse = await fetch("/components/sidebar.html");
	const component = await componentResponse.text();

	container.innerHTML = component;

	const response = await fetch("/api/sidebar");
	const tree = await response.json();

	const sidebar = document.querySelector("#sidebar-tree");

	sidebar.innerHTML = "";

	tree.forEach(item => {
		const element = createSidebarItem(item);
		sidebar.appendChild(element);
	});
}

function createSidebarItem(item){
	const li = document.createElement("li");

	if (item.isDirectory){
		const button = document.createElement("button");

		button.classList.add("sidebar-folder");
		button.textContent = item.name;

		const children = document.createElement("ul");
		children.classList.add("sidebar-children");
		children.hidden = true;

		button.addEventListener("click", () => {
			children.hidden = !children.hidden;
		});

		li.appendChild(button);
		li.appendChild(children);

		item.children.forEach(child => {
			children.appendChild(createSidebarItem(child));
		});
	}
	else{
		const link = document.createElement("a");

		link.classList.add("sidebar-page");
		link.textContent = item.name;
		link.href = "/" + item.path;

		li.appendChild(link);
	}

	return li;
}

loadSidebar();

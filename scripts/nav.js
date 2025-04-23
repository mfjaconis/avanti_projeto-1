const departamentos = [
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
	"Departamento",
];

const categories = [
	"Categoria",
	"Categoria",
	"Categoria",
	"Categoria",
	"Categoria",
	"Categoria",
	"Categoria",
	"Categoria",
];

const getDepartamento = document.getElementById("departamentos");
const getCategories = document.querySelectorAll(".category-group");

for (const departamento of departamentos) {
	const linkDepartamento = document.createElement("a");
	linkDepartamento.href = "#";
	linkDepartamento.innerHTML = `
      ${departamento}
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="none">
          <path d="M4.45948 5.03932L1.27979 8.27623C0.987123 8.57459 0.512778 8.57459 0.219501 8.27623C-0.0731669 7.97892 -0.0731669 7.49559 0.219501 7.1978L2.86978 4.49986L0.219501 1.80232C-0.0731669 1.50453 -0.0731669 1.02185 0.219501 0.723405C0.512778 0.425531 0.987123 0.425531 1.27979 0.723405L4.45948 3.96032C4.60614 4.10958 4.67943 4.3048 4.67943 4.50002C4.67943 4.69524 4.60614 4.89038 4.45948 5.03932Z" fill="#303030" />
        </svg>
      </span>
    `;
	getDepartamento.appendChild(linkDepartamento);
}

const createCategoryColumn = () => {
	const column = document.createElement("div");
	column.className = "dropdown-menu-category";

	for (const category of categories) {
		const linkCategory = document.createElement("a");
		linkCategory.href = "#";
		linkCategory.textContent = category;
		column.appendChild(linkCategory);
	}

	return column;
};

for (const categoryGroup of getCategories) {
	for (let i = 0; i < 3; i++) {
		const column = createCategoryColumn();
		categoryGroup.appendChild(column);
	}
}

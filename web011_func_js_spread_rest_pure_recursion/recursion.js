const exponentiation = (base, exponent) => {
	if (typeof base !== "number" || typeof exponent !== "number") return NaN;
	if (exponent > 0) return base * exponentiation(base, exponent - 1);
	return 1;
};

const result = exponentiation(4, 4); // 1024
console.log(result);

const fieldTypes = {
	text: "textField",
	fieldSet: "fieldSet",
};

const formData = [
	{
		fieldName: "First name",
		requared: true,
		type: fieldTypes.text,
	},
	{
		fieldName: "Last name",
		requared: false,
		type: fieldTypes.text,
	},
	{
		fieldName: "Address",
		requared: true,
		type: fieldTypes.fieldSet,
		fields: [
			{
				fieldName: "State - Province",
				requared: true,
				type: fieldTypes.text,
			},
			{
				fieldName: "Street",
				requared: true,
				type: fieldTypes.text,
			},
			{
				fieldName: "House",
				requared: true,
				type: fieldTypes.text,
			},
		],
	},
];

const getForm = (formStructure) => {
	if (!Array.isArray(formStructure)) return "Wrong form structure";
	let form = "";
	formStructure.forEach((element, index) => {
		if (element.type === fieldTypes.text) {
			form =
				form +
				`<div class="field-wrapper">
                    <label>${element.fieldName}</label>${
					element.requared ? `<span class="requared">*</span>` : ""
				}
                    <input type="text">
                </div>` + '\n';
		}
		if (element.type === fieldTypes.fieldSet) {
			form =
				form +
				`<div class="fieldset">
                    ${getForm(element.fields)}</div>`;
		}
	});
	return form;
};

const res = getForm(formData);
console.log(res);
$( document ).ready(function() {
	 $("[name='mono']").bootstrapSwitch({ inverse: true, size: 'mini', onText: 'Single', offText: 'Double', onColor: 'primary', offColor: 'primary' });
	 $("[name='windows']").bootstrapSwitch({ size: 'mini', onText: 'Yes', offText: 'No', onColor: 'warning', offColor: 'success' });
	 $('.dropdown-toggle').dropdown();
});

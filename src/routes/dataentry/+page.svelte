<script lang="ts">
import { Card, Button, Label, Input, Checkbox, Helper } from "flowbite-svelte";
</script>

// TOIT-35: add in a form to add in em ems and dates to the db 
// need to link JIRA and github. And log the process of this.
// form will be an outside component, and will be imported in here.
// will need to add in a new route for this. 

<Card>

	<form class="flex flex-col space-y-6" action="?/newemem" method="POST">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Add in some em ems</h3>
		<Label class="space-y-2"><span>EmEm</span></Label>
		<Input type="number" name="ememForm" step="any" required />

		<Label class="space-y-2"><span>Date</span></Label>
		<Input type="date" name="rain_onForm" required />
		<Helper class='text-sm mt-2'>Reading seen at 7:42ish usually, log as day prior</Helper>
		
		<Button type="submit" class="w-full">Submit</Button>
	</form>
</Card>




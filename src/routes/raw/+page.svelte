<script lang="ts">
import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
import type { PageData } from '../$types';
export let data: PageData;

const { ememGot } = data; 
//this part took like a day to figure out. have to deconstruct essentially

</script>

<style>
  .chart-container {
	width: 100%;
	height: 100%;
  }
  </style>

<div class="w-min p-8 space-x-12 space-y-10">
  <Table class="w-min" striped={true} hoverable={true}>
	<TableHead>
	  <TableHeadCell>Date</TableHeadCell>
	  <TableHeadCell>Em Ems</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each ememGot as { rain_on, emem }}
	  <TableBodyRow>
		<TableBodyCell>{rain_on}</TableBodyCell>
		<TableBodyCell>{emem}</TableBodyCell>
	  </TableBodyRow>
	  {:else}
    <p>no emem found</p>
{/each}
	</TableBody>
  </Table>
</div>



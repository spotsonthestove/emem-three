<script lang="ts">

import  Chart  from 'svelte-frappe-charts';

import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

import type { PageData } from '../$types';

export let data: PageData;

const { ememGot } = data; 
//this part took like a day to figure out. have to deconstruct essentially

  
    let data2 = {
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          values: [10, 12, 3, 9, 8, 15, 9]
        }
      ]
    };
  </script>
  
  <Chart data={data2} type="line" />

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
  
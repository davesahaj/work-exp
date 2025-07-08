import { useEffect } from 'react'
import { Box, Button, Checkbox, Grid, Group, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useForm } from '@mantine/form'

export const Home = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      c_name: '',
      start_date: null,
      end_date: null,
      current: false,
    },

    onValuesChange: (values) => {
      window.localStorage.setItem('user-form', JSON.stringify(values))
    },

    validate: {
      c_name: (value) => !value,
    },
  })

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form')
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!))
      } catch (e) {
        console.log('Failed to parse stored value')
      }
    }
  }, [])

  return (
    <Grid>
      <Grid.Col span={6}>
        <Box>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Company Name"
              placeholder="Enter the company name"
              key={form.key('c_name')}
              {...form.getInputProps('c_name')}
            />
            <TextInput
              withAsterisk
              label="Job Title"
              placeholder="Enter your job designation"
              key={form.key('c_name')}
              {...form.getInputProps('c_name')}
            />

            <DatePickerInput
              label="Pick start date"
              placeholder="22 June 2019"
              key={form.key('start_date')}
              {...form.getInputProps('start_date')}
            />

            <DatePickerInput
              label="Pick End date"
              placeholder="17 Aug 2023"
              key={form.key('end_date')}
              {...form.getInputProps('end_date')}
              disabled={!!form.getValues().current}
            />

            <Checkbox
              mt="md"
              label="I currently work here"
              key={form.key('current')}
              {...form.getInputProps('current', { type: 'checkbox' })}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box></Box>
      </Grid.Col>
    </Grid>
  )
}

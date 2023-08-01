import { Container, Stack } from '@portfolio/ui-components'
import { WorksCards, WorksTitle } from './components'

const works = [
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'bnb',
    gradient: 'from-[#f7f0ff] to-[#a78afe]',
  },
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'gravity',
    gradient: 'from-[#f7f0ff] to-[#8afea1]',
  },
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'scaleway',
    gradient: 'from-[#f7f0ff] to-[#fafe8a]',
  },
  {
    title:
      'Levo BNB | copy of Airbnb | away to find good stay in all the world.',
    id: 'portfolio',
    gradient: 'from-[#f7f0ff] to-[#8ad7fe]',
  },
]
export const Works = () => {
  return (
    <Container>
      <div className="flex w-full items-start gap-40">
        <Stack className="w-full py-[700px]">
          <h1 className="text-7xl font-bold   mt-[-30%]">My Works</h1>

          <ul>
            {works.map(({ title, id }) => (
              <li key={id}>
                <WorksTitle id={id}>{title}</WorksTitle>
              </li>
            ))}
          </ul>
        </Stack>
        <div className="sticky top-0 flex w-full h-screen items-center ">
          <div className="relative w-full aspect-square bg-gray-300 rounded-2xl">
            {works.map(({ id, gradient }) => (
              <WorksCards key={id} id={id} gradient={gradient}>
                <span />
              </WorksCards>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

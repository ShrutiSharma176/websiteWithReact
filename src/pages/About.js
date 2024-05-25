import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": { fontWeight: 'bold', my: 2, fontSize: "2rem" },
          "& p": { textAlign: 'justify' },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quidem suscipit expedita culpa, vel iste laboriosam impedit asperiores repudiandae ullam tenetur eius cumque rem. Eveniet rem doloribus omnis debitis minus vel et minima non consectetur distinctio possimus, similique quaerat perspiciatis provident ad expedita hic veritatis illo harum quis tempore, sequi mollitia beatae in! Iusto autem quasi ex in repellendus eveniet dicta sunt veniam nobis, soluta maxime dignissimos ab ad porro quae iure blanditiis! Eveniet perferendis natus incidunt velit possimus modi atque doloremque aut earum fuga quod nihil explicabo qui accusantium, nemo voluptatibus delectus sunt ipsum corrupti quasi alias consequuntur! Excepturi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quidem suscipit expedita culpa, vel iste laboriosam impedit asperiores repudiandae ullam tenetur eius cumque rem. Eveniet rem doloribus omnis debitis minus vel et minima non consectetur distinctio possimus, similique quaerat perspiciatis provident ad expedita hic veritatis illo harum quis tempore, sequi mollitia beatae in! Iusto autem quasi ex in repellendus eveniet dicta sunt veniam nobis, soluta maxime dignissimos ab ad porro quae iure blanditiis! Eveniet perferendis natus incidunt velit possimus modi atque doloremque aut earum fuga quod nihil explicabo qui accusantium, nemo voluptatibus delectus sunt ipsum corrupti quasi alias consequuntur! Excepturi.
        </p>
      </Box>
    </Layout>
  )
}

export default About
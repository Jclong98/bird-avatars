import { createApp, App, createRouter, Router } from 'h3'
import supertest, { Test, SuperTest } from 'supertest'

import birdHandler from '~/server/api/[seed]'

describe('bird endpoint', async () => {
  let app: App
  let router: Router
  let request: SuperTest<Test>

  beforeAll(async () => {
    app = createApp({ debug: false })
    router = createRouter().get('/:seed', birdHandler)
    app.use(router)
    request = supertest(app)
  })

  it('should return a bird', async () => {
    const response = await request.get('/testSeed')
    expect(response.status).toBe(200)
    expect(response.type).toBe('image/svg+xml')
  })

  it('empty seed', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.type).toBe('image/svg+xml')
  })
})

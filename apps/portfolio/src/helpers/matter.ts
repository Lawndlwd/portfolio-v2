import Matter, {
  Bodies,
  Composite,
  Composites,
  Constraint,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from 'matter-js'

export const HeroAnimation = (canvasRef: HTMLCanvasElement) => {
  const engine = Engine.create({})
  const world = engine.world

  const render = Render.create({
    canvas: canvasRef,
    engine,
    options: {
      wireframes: true,
      width: 1800,
      height: 1000,
      showAngleIndicator: true,
    },
  })
  const mouse = Mouse.create(render.canvas)
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  })

  const stack = Composites.stack(
    1200,
    -200,
    10,
    4,
    0,
    0,
    (x: number, y: number) => {
      return Bodies.polygon(x, y, 8, 20)
    },
  )

  let ball = Bodies.circle(250, 100, 20)
  const sling = Constraint.create({
    pointA: { x: 250, y: 100 },
    bodyB: ball,
    stiffness: 0.05,
  })

  let firing = false
  Events.on(mouseConstraint, 'enddrag', e => {
    if (e.body === ball) firing = true
  })
  Events.on(engine, 'afterUpdate', () => {
    if (
      firing &&
      Math.abs(ball.position.x - 250) < 20 &&
      Math.abs(ball.position.y - 100) < 20
    ) {
      ball = Bodies.circle(250, 100, 20)
      Matter.World.add(world, ball)
      sling.bodyB = ball
      firing = false
    }
  })

  Composite.add(world, [
    stack,
    mouseConstraint,
    ball,
    sling,
    Bodies.rectangle(1400, 50, 480, 30, { isStatic: true }),
  ])
  // run the renderer
  Render.run(render)

  // create runner
  const runner = Runner.create()

  // run the engine
  Runner.run(runner, engine)
  render.mouse = mouse
  Render.lookAt(render, {
    min: { x: 0, y: 2 },
    max: { x: 1600, y: 600 },
  })
}

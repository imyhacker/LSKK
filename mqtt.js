import mqtt from 'mqtt'

const host = 'rmq2.pptik.id'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: '/mahasiswaubl:ubliot',
  password: 'qwerty1245',
  reconnectPeriod: 1000,
})

const topic = 'homeautoLSKK/homeautoLSKK'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  client.publish(topic, 'M', function() {
    //console.log(`lampu `)
  })
})
// client.on('message', (topic, payload) => {
//   console.log('Received Message:', topic, payload.toString())
// })

export default client

const axios = require('axios')
const express = require('express')
const app = express()

const APP_ID = '107937219'
const APP_SECRET = '1fb190884eab5d374c7c355d9823284231ab3c2c2d7f6d0a77704cf3a2cdd40d'
const ACCESS_TOKEN_URL = 'https://oauth-login.cloud.huawei.com/oauth2/v3/token'
const SEND_NOTIFICATION_URL = `https://push-api.cloud.huawei.com/v1/${APP_ID}/messages:send`

// Function to retrieve an access token
async function getAccessToken () {
  const { data } = await axios.post(
    ACCESS_TOKEN_URL,
    {
      grant_type: 'client_credentials',
      client_id: APP_ID,
      client_secret: APP_SECRET
    },
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )
  return data.access_token
}

// Function to send a notification
async function sendNotification (token, payload) {
  const { data } = await axios.post(SEND_NOTIFICATION_URL, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  return data
}

async function main () {
  const accessToken = await getAccessToken()
  const notificationPayload = {
    message: {
      android: {
        notification: {
          foreground_show: true,
          title: 'Test Notifications',
          body: 'This body',
          click_action: {
            type: 1,
            intent: '#Intent;compo=com.rvr/.Activity;S.W=U;end'
          }
        }
      },
      token: [
        'IQAAAACy0zh6AACHNHa_-fY2rkah87VtkqZCf4mrPhhGrPSZVhYSNP7zNtJ8tZEfoWtj_EBMtln7AMCgEdxZdTkXOuDhKTRyhIF8mcR2ldwoL11JdA'
      ]
    }
  }
  const result = await sendNotification(accessToken, notificationPayload)
  console.log(result)
}

main().catch(console.error)

// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })


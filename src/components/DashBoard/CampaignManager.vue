<template>
  <div>
    <h2 class="m-50p text-center">{{ $t('campaign.campaign_manager') }}</h2>
    <div class="m-50p">
      <div class="mx-5">
        <b-card no-body>
          <b-tabs card small>
            <router-view />
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

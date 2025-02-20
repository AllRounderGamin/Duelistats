#!/bin/bash
cd /opt/stats-of-eden/ && source ~/.nvm/nvm.sh && nvm use default && pnpm db:seed >  cron_out.txt

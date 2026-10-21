#!/bin/sh
# Build the site and copy it to the lab web server's SMB share.
# Requires being inside the lab network or on the lab VPN.
#
# Usage: npm run deploy
set -eu

SHARE_URL='smb://fileb.lapp.in2p3.fr/pg-nomin-lapth'
MOUNT_POINT='/Volumes/pg-nomin-lapth'
# Folder on the share that holds this site (served as /pg-nomin/tourkine/).
SITE_DIR='tourkine'

cd "$(dirname "$0")/.."

# 1. Mount the share if needed (macOS asks for the lab password the first time).
if [ ! -d "$MOUNT_POINT" ]; then
	echo "Mounting $SHARE_URL ..."
	open "$SHARE_URL"
	i=0
	while [ ! -d "$MOUNT_POINT" ] && [ $i -lt 60 ]; do sleep 1; i=$((i + 1)); done
	[ -d "$MOUNT_POINT" ] || { echo "Share not mounted. Are you on the VPN?"; exit 1; }
fi

TARGET="$MOUNT_POINT/$SITE_DIR"
[ -d "$TARGET" ] || { echo "Folder $TARGET not found; check SITE_DIR in scripts/deploy.sh."; exit 1; }

# 2. Build.
npm run build

# 3. Show what would change, then ask before touching the server.
# SMB does not keep Unix permissions, and its timestamps are coarse, hence
# -rlt (no -p/-o/-g) and --modify-window. --delete only acts inside $TARGET,
# so pages removed from the site are removed from the server too.
RSYNC="rsync -rlt --delete --modify-window=2 --exclude=.DS_Store"
echo
echo "Changes to be made in $TARGET:"
$RSYNC --dry-run --itemize-changes dist/ "$TARGET/"
echo
printf 'Publish these changes? [y/N] '
read -r answer
[ "$answer" = y ] || { echo "Nothing published."; exit 0; }

$RSYNC dist/ "$TARGET/"
echo "Published: https://lapth.cnrs.fr/pg-nomin/tourkine/"

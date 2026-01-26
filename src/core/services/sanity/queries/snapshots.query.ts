export const SNAPSHOTS_QUERY = `
    *[_type == "snapshotsPage"][0]{
        title,
        "images": images[]{
            _key,
            "url": asset->url
        }
        }
    `;

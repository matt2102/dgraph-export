A Minimal Node.js service to export Dgraph data to S3

to start

```bash
node dist/server.js alphaUri=http://my-dgraph-alpha:6080 uploadPath=
s3:///<bucket>/<path> accessKey=MyAwsAccessKey secretKey=MyAwsSecretKey
```

Or use in kubernetes

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: dgraph-export
spec:
  schedule: "15 11,14,17,18,21,00 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: dgraph-export
            image: matthewlajoy/dgraph-export:latest
            imagePullPolicy: IfNotPresent
            env:
            - name: ALPHA_URI
              value: "http://dgraph-alpha:8080"
            - name: ACCESS_KEY
              value: "ACCESS_KEY_VALUE"
            - name: SECRET_KEY
              value: 'SECRET_KEY_VALUE'
            - name: UPLOAD_PATH
              value: s3:///<bucket-name>/<path>
          restartPolicy: Never
      backoffLimit: 4

```
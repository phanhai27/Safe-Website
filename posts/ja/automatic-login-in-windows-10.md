---
url: blog/automatic-login-in-windows-10
picture: /static/img/Skip-login-screen.jpg
title: Windows10での自動ログイン
description: Windows 10を起動するときにログイン画面を無効にするにはどうすればよいですか？ コンピュータの電源を入れるたびにパスワードを入力する時間を節約するために、自動ログインをオンにしたい場合もあります。
summary: Autologonは、SysInternalsによって開発された小さなポータブルユーティリティであり、Windows自動ログオンのセットアップ作業をさらに簡単にします。 ダウンロードしたら、解凍して実行可能ファイルを実行します。
date: 2021年10月8日
author: Peter
avatar: /static/img/peter_avatar.png
---
**ダウンロード:** [Autologon](https://docs.microsoft.com/en-us/sysinternals/downloads/autologon)

![unzipped-autologon](/static/img/unzipped-autologon.png)

初めて実行するときは、ライセンス条項に同意する必要があります。 デフォルトでは、Autologonは現在ログインしているアカウントのドメインとユーザー名を自動的に入力し、必要に応じてそれらを変更するオプションがあります。 Microsoftアカウントに自動的にログインする場合は、関連付けられているローカルアカウントの名前を入力する必要があります。

![autologon](/static/img/autologon.png)

###### 自動ログインをオフにする:
特定のアカウントの自動ログインをオフにする場合は、アカウント名を入力して**Disable**をクリックするだけで完了です。

###### 自動ログインをオンにする:
自動ログオンをオンにする場合は、*アカウント名とパスワードを入力してください*。 **Enable**をクリックします。 最後にコンピューターを再起動すると、Windows 10は、パスワードを要求せずに、目的のユーザーアカウントで直接起動します。
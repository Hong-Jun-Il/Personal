# 깃허브 명령어

## 깃허브 연동
1. git remote -v : 현재 폴더의 연동된 리포지토리 주소를 보여줌
2. git remote add origin 주소.git : 리포지토리 주소 연동
3. git remote remove origin : 현재 연동된 리포지토리 연동 끊기

## push 과정
1. cd로 하위 폴더로 이동
2. git status로 변경 사항 확인
3. git add . 으로 그 하위 폴더의 모든 변경사항 추가
4. git commit -m '메세지'로 적고 싶은 커밋 메시지 추가
5. git push origin branch 명으로 푸쉬 완료

## branch 관련 명령어
* git branch : !!현재 폴더!!의 모든 브랜치들을 보여줌 
* git checkout 브랜치 이름 : 브랜치 이동
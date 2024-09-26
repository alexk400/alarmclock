REM @echo off
REM git add -A
REM git commit -m "Your default message"
REM git push



@echo off
REM Change to your repository directory

REM Check if a commit message was provided as a command line argument
IF "%~1"== "" (
    set commit_message="Your default message"
) ELSE (
    set commit_message=%~1
)

REM Add all changes to staging
git add -A

REM Commit with the decided message
git commit -m "%commit_message%"

REM Push the commits
git push
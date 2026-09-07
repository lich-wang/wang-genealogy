import { ExternalLink, FilePlus2, GitPullRequest, PencilLine, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { NEW_PERSON_URL, REPOSITORY_URL } from '../api';
import { useScript } from '../i18n';

export function ContributePage() {
  const { t } = useScript();
  const [params] = useSearchParams();
  const personId = params.get('person');
  const editUrl = personId
    ? `${REPOSITORY_URL}/edit/main/content/persons/${encodeURIComponent(personId)}.md`
    : NEW_PERSON_URL;

  return (
    <div className="page contribute-page">
      <header className="page-heading contribute-heading">
        <span className="section-kicker"><GitPullRequest size={15} />{t('通过 Pull Request 共建')}</span>
        <h1>{t('每一次资料修改，都公开审阅')}</h1>
        <p>{t('人物资料保存在 Git 仓库的独立 Markdown 页面中。GitHub 登录、讨论、审阅与合并记录共同替代站内账号和数据库写入。')}</p>
      </header>

      <section className="contribute-callout">
        <div className="callout-icon"><PencilLine size={25} /></div>
        <div>
          <h2>{personId ? t('编辑当前人物') : t('新增历史人物')}</h2>
          <p>{t('在 GitHub 中修改 YAML front matter，预览正文，然后创建 Pull Request。CI 会检查人物 ID、关系目标、字段格式和来源链接。')}</p>
          <a className="btn" href={editUrl} target="_blank" rel="noreferrer noopener">
            {personId ? <PencilLine size={16} /> : <FilePlus2 size={16} />}
            {personId ? t('在 GitHub 编辑') : t('创建人物页面')}<ExternalLink size={14} />
          </a>
        </div>
      </section>

      <section className="person-summary">
        <div className="content-section-head"><span><ShieldCheck size={19} /></span><div><h2>{t('审阅规则')}</h2><p>{t('与 giscus、utterances 相同，身份和协作能力交给 GitHub。')}</p></div></div>
        <ol>
          <li>{t('一个人物对应 content/persons/ 下一个 Markdown 文件，文件名就是稳定人物 ID。')}</li>
          <li>{t('姓名、生卒、籍贯和关系仍保留状态、置信度与外部引用；来源内容不复制进仓库。')}</li>
          <li>{t('争议资料并列提交，不用最后一次编辑覆盖；合并与回滚由 Git 历史完整保留。')}</li>
          <li>{t('Pull Request 通过自动校验和维护者审阅后，合并到 main 并自动发布静态站点。')}</li>
        </ol>
        <p><a href={`${REPOSITORY_URL}/blob/main/docs/COLLABORATION.md`} target="_blank" rel="noreferrer noopener">{t('查看完整贡献规范')} <ExternalLink size={14} /></a></p>
      </section>
    </div>
  );
}

---
schema: wang-person/v1
id: p_T7omMKkSZwfwP6gCC7JmKi
status: active
merged_into: null
display_name: 王夢祖
cbdb_id: 514421
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MnYxq4FvX8aBYXC8f4LQLp
        subject_person_id: p_T7omMKkSZwfwP6gCC7JmKi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祖，清人物。中国历代人物传记资料库（CBDB）以人物编号 514421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_u_k0EpRmjhrf8hpi6Vck7P
          claim_id: c_MnYxq4FvX8aBYXC8f4LQLp
          source_id: s_BXXgkjHYK86FC4CHU6PjKL
          stance: supports
          locator: CBDB:514421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BXXgkjHYK86FC4CHU6PjKL
            source_type: api_record
            title: 中国历代人物传记资料库：王夢祖（CBDB 514421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514421&o=json
            external_identifier: CBDB:514421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUB1KGkHeSXQcGP2oWUJ5k
        subject_person_id: p_T7omMKkSZwfwP6gCC7JmKi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fCF2S2yFvUDdo7r5wjy6nn
          claim_id: c_HUB1KGkHeSXQcGP2oWUJ5k
          source_id: s_BXXgkjHYK86FC4CHU6PjKL
          stance: supports
          locator: CBDB:514421
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_BXXgkjHYK86FC4CHU6PjKL
            source_type: api_record
            title: 中国历代人物传记资料库：王夢祖（CBDB 514421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514421&o=json
            external_identifier: CBDB:514421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_c3UY-BD62xfgqEgjwtVPN5
        subject_person_id: p_T7omMKkSZwfwP6gCC7JmKi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMH36HKXqOK_PJ4kq3-hsk
          claim_id: c_c3UY-BD62xfgqEgjwtVPN5
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），425：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2kevUgmwEeDE5MZSiXaCxu
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 57206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json
            external_identifier: CBDB:57206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J7HfQys9cX1ZJhzFd4pGGz
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  other: []
---

# 王夢祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢祖，清人物。中国历代人物传记资料库（CBDB）以人物编号 514421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王夢祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_J7HfQys9cX1ZJhzFd4pGGz | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 57206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json)
- [中国历代人物传记资料库：王夢祖（CBDB 514421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514421&o=json)

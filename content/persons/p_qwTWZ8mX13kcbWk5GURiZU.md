---
schema: wang-person/v1
id: p_qwTWZ8mX13kcbWk5GURiZU
status: active
merged_into: null
display_name: 王則章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3Y5ZamumAMRT3FY28WgfH
        subject_person_id: p_qwTWZ8mX13kcbWk5GURiZU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mk4cRU8cV6KYPobrrm6hZR
          claim_id: c_i3Y5ZamumAMRT3FY28WgfH
          source_id: s_M1X3pXL3jD4w5MAWu8B6En
          stance: supports
          locator: CBDB:636368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636368）
          source: &a1
            id: s_M1X3pXL3jD4w5MAWu8B6En
            source_type: api_record
            title: 中国历代人物传记资料库：王則章（CBDB 636368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636368&o=json
            external_identifier: CBDB:636368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qKXGLsVjRvxh95F4yauMY8
        subject_person_id: p_qwTWZ8mX13kcbWk5GURiZU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則章，清人物。籍贯蘭州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636368）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JzcNyX_YSaUCXeLYeGr7XT
          claim_id: c_qKXGLsVjRvxh95F4yauMY8
          source_id: s_M1X3pXL3jD4w5MAWu8B6En
          stance: supports
          locator: CBDB:636368
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王則章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則章 | accepted |
| bio.summary | 王則章，清人物。籍贯蘭州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636368） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王則章（CBDB 636368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636368&o=json)

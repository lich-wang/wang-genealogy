---
schema: wang-person/v1
id: p_J9FqX17LzDCP7r7ngJDQ2y
status: active
merged_into: null
display_name: 王進成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qETcMxDP8zDd9H4twSZnKi
        subject_person_id: p_J9FqX17LzDCP7r7ngJDQ2y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DB2hLJTEubRgx4rLtRDxaR
          claim_id: c_qETcMxDP8zDd9H4twSZnKi
          source_id: s_9NJCCrDcAJn7chwNexrAE1
          stance: supports
          locator: CBDB:698550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698550）
          source: &a1
            id: s_9NJCCrDcAJn7chwNexrAE1
            source_type: api_record
            title: 中国历代人物传记资料库：王進成（CBDB 698550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698550&o=json
            external_identifier: CBDB:698550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dDtmV6J1QnVQvmuQCZRkRM
        subject_person_id: p_J9FqX17LzDCP7r7ngJDQ2y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進成，清人物。籍贯曹州府，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ajJ9frnMEYoOJ5Uuufdvgq
          claim_id: c_dDtmV6J1QnVQvmuQCZRkRM
          source_id: s_9NJCCrDcAJn7chwNexrAE1
          stance: supports
          locator: CBDB:698550
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

# 王進成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進成 | accepted |
| bio.summary | 王進成，清人物。籍贯曹州府，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進成（CBDB 698550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698550&o=json)

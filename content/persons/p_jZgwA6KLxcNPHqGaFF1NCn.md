---
schema: wang-person/v1
id: p_jZgwA6KLxcNPHqGaFF1NCn
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sY2DukF86tMttFHxKG49HQ
        subject_person_id: p_jZgwA6KLxcNPHqGaFF1NCn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44oXKmT9fFBJiKcDz3vipe
          claim_id: c_sY2DukF86tMttFHxKG49HQ
          source_id: s_QTmc24Ct5fguGwb4SMkq9j
          stance: supports
          locator: CBDB:36177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36177）
          source: &a1
            id: s_QTmc24Ct5fguGwb4SMkq9j
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 36177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36177&o=json
            external_identifier: CBDB:36177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uM3DXACZFSiQBoZezCkAte
        subject_person_id: p_jZgwA6KLxcNPHqGaFF1NCn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，宋人物。籍贯金壇。（中国历代人物传记资料库 CBDB 36177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A5OKWNCf_ofw1qX6YgiuyG
          claim_id: c_uM3DXACZFSiQBoZezCkAte
          source_id: s_QTmc24Ct5fguGwb4SMkq9j
          stance: supports
          locator: CBDB:36177
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，宋人物。籍贯金壇。（中国历代人物传记资料库 CBDB 36177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 36177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36177&o=json)

---
schema: wang-person/v1
id: p_CyTLpmsNw1qDj21VW1MG2X
status: active
merged_into: null
display_name: 王六鏊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tWnJUUJaCWjHS21NA8KqjJ
        subject_person_id: p_CyTLpmsNw1qDj21VW1MG2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六鏊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXtULPt79AV9BeLUzVZRff
          claim_id: c_tWnJUUJaCWjHS21NA8KqjJ
          source_id: s_4v8nTB887mRexz5uH5oNX8
          stance: supports
          locator: CBDB:636328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636328）
          source: &a1
            id: s_4v8nTB887mRexz5uH5oNX8
            source_type: api_record
            title: 中国历代人物传记资料库：王六鏊（CBDB 636328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636328&o=json
            external_identifier: CBDB:636328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rdVtQbE28nQNoyDWL7uGQQ
        subject_person_id: p_CyTLpmsNw1qDj21VW1MG2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtoJ5eLX14K6yuzwJ7rD8a
          claim_id: c_rdVtQbE28nQNoyDWL7uGQQ
          source_id: s_4v8nTB887mRexz5uH5oNX8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王六鏊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六鏊 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王六鏊（CBDB 636328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636328&o=json)

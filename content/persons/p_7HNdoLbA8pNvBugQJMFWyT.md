---
schema: wang-person/v1
id: p_7HNdoLbA8pNvBugQJMFWyT
status: active
merged_into: null
display_name: 王思同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2LWBCfEf4BSsDKV9cHubPQ
        subject_person_id: p_7HNdoLbA8pNvBugQJMFWyT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_331mE7ebhDJWx1Jbbqjvz7
          claim_id: c_2LWBCfEf4BSsDKV9cHubPQ
          source_id: s_Z1K9sEJnaqud7zeYpMEC5A
          stance: supports
          locator: CBDB:92054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92054）
          source: &a1
            id: s_Z1K9sEJnaqud7zeYpMEC5A
            source_type: api_record
            title: 中国历代人物传记资料库：王思同（CBDB 92054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92054&o=json
            external_identifier: CBDB:92054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_saCtfKk6v34Foh75TdS699
        subject_person_id: p_7HNdoLbA8pNvBugQJMFWyT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 892年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aibo1dVi2oo7uiQz4L3c5p
          claim_id: c_saCtfKk6v34Foh75TdS699
          source_id: s_Z1K9sEJnaqud7zeYpMEC5A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7DrZMdaCvEVR4Qef3tXGvT
        subject_person_id: p_7HNdoLbA8pNvBugQJMFWyT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 934年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBeHsm4tD6XBPHqk7wy8Ck
          claim_id: c_7DrZMdaCvEVR4Qef3tXGvT
          source_id: s_Z1K9sEJnaqud7zeYpMEC5A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oz8Kh19kenxUoZb7Vfr44C
        subject_person_id: p_7HNdoLbA8pNvBugQJMFWyT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvxxRTQqr8HGnG6d7ot39p
          claim_id: c_oz8Kh19kenxUoZb7Vfr44C
          source_id: s_Z1K9sEJnaqud7zeYpMEC5A
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

# 王思同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思同 | accepted |
| birth.date | 892年 | accepted |
| death.date | 934年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思同（CBDB 92054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92054&o=json)

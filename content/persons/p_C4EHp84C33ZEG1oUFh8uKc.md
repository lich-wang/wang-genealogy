---
schema: wang-person/v1
id: p_C4EHp84C33ZEG1oUFh8uKc
status: active
merged_into: null
display_name: 王俊義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdGCdHVEPr5C6M8PVCMDcT
        subject_person_id: p_C4EHp84C33ZEG1oUFh8uKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLt6dEyLH7QQCJf8nZ55Ps
          claim_id: c_KdGCdHVEPr5C6M8PVCMDcT
          source_id: s_c2oEAYNQExa6QYz61UGtYd
          stance: supports
          locator: CBDB:511592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（511592）
          source: &a1
            id: s_c2oEAYNQExa6QYz61UGtYd
            source_type: api_record
            title: 中国历代人物传记资料库：王俊義（CBDB 511592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=511592&o=json
            external_identifier: CBDB:511592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2btFYtJwFywWAA8dNvriVy
        subject_person_id: p_C4EHp84C33ZEG1oUFh8uKc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_otbVV8N1r9iEtu4x9ZEGwc
          claim_id: c_2btFYtJwFywWAA8dNvriVy
          source_id: s_c2oEAYNQExa6QYz61UGtYd
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

# 王俊義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊義 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊義（CBDB 511592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=511592&o=json)

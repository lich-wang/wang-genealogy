---
schema: wang-person/v1
id: p_M4qQMGtKYPyLVMGmE2YAH1
status: active
merged_into: null
display_name: 王群
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rDiayWR1q4J89qQjFx1k9v
        subject_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王群
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wp7MNNSiThNAqDE3tsYmau
          claim_id: c_rDiayWR1q4J89qQjFx1k9v
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
          stance: supports
          locator: CBDB:573351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573351）
          source: &a1
            id: s_ijQ7LNChmn7uB6tNXESTmP
            source_type: api_record
            title: 中国历代人物传记资料库：王群（CBDB 573351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json
            external_identifier: CBDB:573351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1E5tDM3qirx79CKFcaJfXf
        subject_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EG7w2bPxbbosij4hhfJYtt
          claim_id: c_1E5tDM3qirx79CKFcaJfXf
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
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

# 王群

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王群 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王群（CBDB 573351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json)

---
schema: wang-person/v1
id: p_Db8uC4wtGkFEPFATKUHBnc
status: active
merged_into: null
display_name: 王德洋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwZ1B1TCBwqY5RDD92EESC
        subject_person_id: p_Db8uC4wtGkFEPFATKUHBnc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德洋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3src4RTCwGAPmm2BY93jSQ
          claim_id: c_DwZ1B1TCBwqY5RDD92EESC
          source_id: s_e23Bt3bsavrzwxGXyMZzGs
          stance: supports
          locator: CBDB:637689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637689）
          source: &a1
            id: s_e23Bt3bsavrzwxGXyMZzGs
            source_type: api_record
            title: 中国历代人物传记资料库：王德洋（CBDB 637689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637689&o=json
            external_identifier: CBDB:637689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7rq8AruUWs8fdNBGeBxQ1P
        subject_person_id: p_Db8uC4wtGkFEPFATKUHBnc
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
        - id: cs_82eUru8rbQKt6ZSE85XRuj
          claim_id: c_7rq8AruUWs8fdNBGeBxQ1P
          source_id: s_e23Bt3bsavrzwxGXyMZzGs
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

# 王德洋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德洋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德洋（CBDB 637689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637689&o=json)

---
schema: wang-person/v1
id: p_81V8Fyqtw7M5mhXnQSTA29
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QjuTM6co88ZckC3Nv3Detg
        subject_person_id: p_81V8Fyqtw7M5mhXnQSTA29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ktiDk3jVtEB9F5SJST7ZwM
          claim_id: c_QjuTM6co88ZckC3Nv3Detg
          source_id: s_xBFa4DMCD9GiaipLpBtKo5
          stance: supports
          locator: CBDB:686190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686190）
          source: &a1
            id: s_xBFa4DMCD9GiaipLpBtKo5
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 686190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686190&o=json
            external_identifier: CBDB:686190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TT7Duu4DrgtV1Jhqeps1CR
        subject_person_id: p_81V8Fyqtw7M5mhXnQSTA29
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
        - id: cs_7ZVkJ7MFENR3pnQ5rUWPpw
          claim_id: c_TT7Duu4DrgtV1Jhqeps1CR
          source_id: s_xBFa4DMCD9GiaipLpBtKo5
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 686190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686190&o=json)

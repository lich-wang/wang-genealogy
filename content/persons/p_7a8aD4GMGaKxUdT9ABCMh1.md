---
schema: wang-person/v1
id: p_7a8aD4GMGaKxUdT9ABCMh1
status: active
merged_into: null
display_name: 王珠林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8bMDUHNTsmMNQ8sXCBnnsT
        subject_person_id: p_7a8aD4GMGaKxUdT9ABCMh1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B1ASS6eU2NXbGK3TA24G7D
          claim_id: c_8bMDUHNTsmMNQ8sXCBnnsT
          source_id: s_iWHH8LTgRiShj2V8roLmR3
          stance: supports
          locator: CBDB:639398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639398）
          source: &a1
            id: s_iWHH8LTgRiShj2V8roLmR3
            source_type: api_record
            title: 中国历代人物传记资料库：王珠林（CBDB 639398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639398&o=json
            external_identifier: CBDB:639398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uBjMtPbb9BackwVVvijCy2
        subject_person_id: p_7a8aD4GMGaKxUdT9ABCMh1
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
        - id: cs_ctUNLANtQasCbufC4uPbAf
          claim_id: c_uBjMtPbb9BackwVVvijCy2
          source_id: s_iWHH8LTgRiShj2V8roLmR3
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

# 王珠林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珠林 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珠林（CBDB 639398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639398&o=json)

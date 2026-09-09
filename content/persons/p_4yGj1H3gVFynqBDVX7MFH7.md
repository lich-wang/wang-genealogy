---
schema: wang-person/v1
id: p_4yGj1H3gVFynqBDVX7MFH7
status: active
merged_into: null
display_name: 王斌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h3ebgCcB928Hh58YPrVeFJ
        subject_person_id: p_4yGj1H3gVFynqBDVX7MFH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vnbhpJ2Jc6z9vJLTj2C7a1
          claim_id: c_h3ebgCcB928Hh58YPrVeFJ
          source_id: s_9AKBa4f5bA2MRFAVm9yroq
          stance: supports
          locator: CBDB:269866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269866）
          source: &a1
            id: s_9AKBa4f5bA2MRFAVm9yroq
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 269866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json
            external_identifier: CBDB:269866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SouDbCF44d5rTuyaAE21e3
        subject_person_id: p_4yGj1H3gVFynqBDVX7MFH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jK5KgpMQCd8Sz1WKXVw4AG
          claim_id: c_SouDbCF44d5rTuyaAE21e3
          source_id: s_9AKBa4f5bA2MRFAVm9yroq
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

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 269866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json)

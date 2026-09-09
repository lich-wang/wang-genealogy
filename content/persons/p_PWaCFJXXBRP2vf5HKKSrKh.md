---
schema: wang-person/v1
id: p_PWaCFJXXBRP2vf5HKKSrKh
status: active
merged_into: null
display_name: 王夢魚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NumM6F4Nb1ArsokSAQJoo3
        subject_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢魚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTV3h75i4qB2U7gT1Y6xBV
          claim_id: c_NumM6F4Nb1ArsokSAQJoo3
          source_id: s_JNcdmb4AMt2kLc8qaB42Ve
          stance: supports
          locator: CBDB:309664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309664）
          source: &a1
            id: s_JNcdmb4AMt2kLc8qaB42Ve
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7sVRRwhN1d43ZCBrH9eD2W
        subject_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
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
        - id: cs_LBFkieC4UBakWaUD2zbRdr
          claim_id: c_7sVRRwhN1d43ZCBrH9eD2W
          source_id: s_JNcdmb4AMt2kLc8qaB42Ve
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

# 王夢魚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢魚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢魚（CBDB 309664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json)

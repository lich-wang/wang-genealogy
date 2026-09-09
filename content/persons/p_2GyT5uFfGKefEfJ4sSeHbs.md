---
schema: wang-person/v1
id: p_2GyT5uFfGKefEfJ4sSeHbs
status: active
merged_into: null
display_name: 王琴娘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ggXJQUqVtpkJDvunbw4KK
        subject_person_id: p_2GyT5uFfGKefEfJ4sSeHbs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dtk2ibB1TWi1erJ6Uc2usb
          claim_id: c_8ggXJQUqVtpkJDvunbw4KK
          source_id: s_xKNVzAwYSH3wwAaagje26w
          stance: supports
          locator: CBDB:568782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568782）
          source: &a1
            id: s_xKNVzAwYSH3wwAaagje26w
            source_type: api_record
            title: 中国历代人物传记资料库：王琴娘（CBDB 568782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568782&o=json
            external_identifier: CBDB:568782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_66Ho1ffACH5SgfvKq3Z4EH
        subject_person_id: p_2GyT5uFfGKefEfJ4sSeHbs
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
        - id: cs_5P43jdDS6a28Zx3Ay3M1bN
          claim_id: c_66Ho1ffACH5SgfvKq3Z4EH
          source_id: s_xKNVzAwYSH3wwAaagje26w
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

# 王琴娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴娘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琴娘（CBDB 568782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568782&o=json)

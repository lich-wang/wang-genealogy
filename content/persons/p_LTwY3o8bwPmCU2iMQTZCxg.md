---
schema: wang-person/v1
id: p_LTwY3o8bwPmCU2iMQTZCxg
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bGw7yzhAaf9MCQ3QvwQQDT
        subject_person_id: p_LTwY3o8bwPmCU2iMQTZCxg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ke1CALpJKpB9ADoSQ2SZnt
          claim_id: c_bGw7yzhAaf9MCQ3QvwQQDT
          source_id: s_hzqeHa5nAGyXnGma1fTuQW
          stance: supports
          locator: CBDB:244151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244151）
          source: &a1
            id: s_hzqeHa5nAGyXnGma1fTuQW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 244151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244151&o=json
            external_identifier: CBDB:244151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C664e9KHuZVakY7QRtouLv
        subject_person_id: p_LTwY3o8bwPmCU2iMQTZCxg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。成化五年進士，籍贯交趾。（中国历代人物传记资料库 CBDB 244151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ntlDfCaEyTc6KayAJ5O-s9
          claim_id: c_C664e9KHuZVakY7QRtouLv
          source_id: s_hzqeHa5nAGyXnGma1fTuQW
          stance: supports
          locator: CBDB:244151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。成化五年進士，籍贯交趾。（中国历代人物传记资料库 CBDB 244151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 244151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244151&o=json)

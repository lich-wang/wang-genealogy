---
schema: wang-person/v1
id: p_Sip1o4dDwfqVjFGRutMyss
status: active
merged_into: null
display_name: 王伯昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8rb6ycqrzU3ryLjPngyuj
        subject_person_id: p_Sip1o4dDwfqVjFGRutMyss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1EenttGc5u6EeGQwR9FSV5
          claim_id: c_w8rb6ycqrzU3ryLjPngyuj
          source_id: s_UiBXaDbues5CkyeD5oTFCD
          stance: supports
          locator: CBDB:30488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30488）
          source: &a1
            id: s_UiBXaDbues5CkyeD5oTFCD
            source_type: api_record
            title: 中国历代人物传记资料库：王伯昌（CBDB 30488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json
            external_identifier: CBDB:30488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQij8fLrSxyKW5QL7JBHqD
        subject_person_id: p_Sip1o4dDwfqVjFGRutMyss
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
        - id: cs_c7xENDEtZ8CVVen7ML8BYF
          claim_id: c_cQij8fLrSxyKW5QL7JBHqD
          source_id: s_UiBXaDbues5CkyeD5oTFCD
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

# 王伯昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯昌 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯昌（CBDB 30488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30488&o=json)

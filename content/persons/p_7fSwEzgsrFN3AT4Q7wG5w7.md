---
schema: wang-person/v1
id: p_7fSwEzgsrFN3AT4Q7wG5w7
status: active
merged_into: null
display_name: 王柟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdFY45CwgXLzfn1MGxcPoF
        subject_person_id: p_7fSwEzgsrFN3AT4Q7wG5w7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_497xesyKfRL6j5B8oPSqgV
          claim_id: c_xdFY45CwgXLzfn1MGxcPoF
          source_id: s_nELV5kTHNJb7oSJ1LgeqFL
          stance: supports
          locator: CBDB:469853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469853）
          source: &a1
            id: s_nELV5kTHNJb7oSJ1LgeqFL
            source_type: api_record
            title: 中国历代人物传记资料库：王柟（CBDB 469853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469853&o=json
            external_identifier: CBDB:469853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6eTGVoYL1hzRQS3M5DsBp
        subject_person_id: p_7fSwEzgsrFN3AT4Q7wG5w7
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
        - id: cs_Xz9ePYoZpN664cwseDHAcx
          claim_id: c_U6eTGVoYL1hzRQS3M5DsBp
          source_id: s_nELV5kTHNJb7oSJ1LgeqFL
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

# 王柟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柟（CBDB 469853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469853&o=json)

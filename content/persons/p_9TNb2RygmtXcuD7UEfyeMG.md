---
schema: wang-person/v1
id: p_9TNb2RygmtXcuD7UEfyeMG
status: active
merged_into: null
display_name: 王鳳苞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_98RYWnvbGeMNDATThdnbh4
        subject_person_id: p_9TNb2RygmtXcuD7UEfyeMG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳苞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BCaDXPWXzCvZGBAYDndWxJ
          claim_id: c_98RYWnvbGeMNDATThdnbh4
          source_id: s_2RP2HyCTYPh9UGAmt3ns36
          stance: supports
          locator: CBDB:640945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640945）
          source: &a1
            id: s_2RP2HyCTYPh9UGAmt3ns36
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳苞（CBDB 640945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640945&o=json
            external_identifier: CBDB:640945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6GUvZQ7x4TvEn1Le2d3fZb
        subject_person_id: p_9TNb2RygmtXcuD7UEfyeMG
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
        - id: cs_Q2LxkjZCCUNUqjxnm8QqJ8
          claim_id: c_6GUvZQ7x4TvEn1Le2d3fZb
          source_id: s_2RP2HyCTYPh9UGAmt3ns36
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

# 王鳳苞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳苞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳苞（CBDB 640945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640945&o=json)

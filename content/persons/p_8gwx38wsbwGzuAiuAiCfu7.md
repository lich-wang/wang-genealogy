---
schema: wang-person/v1
id: p_8gwx38wsbwGzuAiuAiCfu7
status: active
merged_into: null
display_name: 王能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5XQhdtvKr25oNqW7eMvmv
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XnPpbisf77x8EtTPEzwhPB
          claim_id: c_Q5XQhdtvKr25oNqW7eMvmv
          source_id: s_aX4eHUFwx9TqTVBJW6VV9W
          stance: supports
          locator: CBDB:244693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244693）
          source: &a1
            id: s_aX4eHUFwx9TqTVBJW6VV9W
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 244693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244693&o=json
            external_identifier: CBDB:244693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MpPGD7gbjJce2wJRCXQi9y
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
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
        - id: cs_XMJaj9u9WRNMpJLC1Q6pHG
          claim_id: c_MpPGD7gbjJce2wJRCXQi9y
          source_id: s_aX4eHUFwx9TqTVBJW6VV9W
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

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 244693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244693&o=json)

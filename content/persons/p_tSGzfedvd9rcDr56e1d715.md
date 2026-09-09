---
schema: wang-person/v1
id: p_tSGzfedvd9rcDr56e1d715
status: active
merged_into: null
display_name: 王珏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gz61n3n2qKTk76SxEMmB3Q
        subject_person_id: p_tSGzfedvd9rcDr56e1d715
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j3Kst9pQuoAtYsnrF32kVz
          claim_id: c_Gz61n3n2qKTk76SxEMmB3Q
          source_id: s_7AQRRZTWP7iCwiK4N9FaAL
          stance: supports
          locator: CBDB:577714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577714）
          source: &a1
            id: s_7AQRRZTWP7iCwiK4N9FaAL
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 577714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577714&o=json
            external_identifier: CBDB:577714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eS8rG1rC6HKLX6MrH3pNku
        subject_person_id: p_tSGzfedvd9rcDr56e1d715
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1891年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KHQMGeujBkhMYgUFqYq1Y4
          claim_id: c_eS8rG1rC6HKLX6MrH3pNku
          source_id: s_7AQRRZTWP7iCwiK4N9FaAL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AWSGH7QyL23WQbME1YWR6J
        subject_person_id: p_tSGzfedvd9rcDr56e1d715
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
        - id: cs_89NVReCEcC4BKieNp59RHJ
          claim_id: c_AWSGH7QyL23WQbME1YWR6J
          source_id: s_7AQRRZTWP7iCwiK4N9FaAL
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

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| birth.date | 1891年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 577714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577714&o=json)

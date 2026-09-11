---
schema: wang-person/v1
id: p_mTwM8Eqygg4nSPb92kqSSm
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 155581
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgqDGtUrFOB0ANcZz6gKZl
        subject_person_id: p_mTwM8Eqygg4nSPb92kqSSm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJea-K4bapuQtYj2aQ2Fo6
          claim_id: c_xgqDGtUrFOB0ANcZz6gKZl
          source_id: s_t_Qi-DuJO8gZmm3VdSV7q8
          stance: supports
          locator: CBDB:155581
          quotation: null
          interpretation_note: CBDB 明确记录的王俊配偶
          source: &a1
            id: s_t_Qi-DuJO8gZmm3VdSV7q8
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王俊妻)（CBDB 155581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155581&o=json
            external_identifier: CBDB:155581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_T5UlZj06yhzwxlJCjrctmu
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mTwM8Eqygg4nSPb92kqSSm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zn2c1c7qESFgju7vEQdmj3
          claim_id: c_T5UlZj06yhzwxlJCjrctmu
          source_id: s_t_Qi-DuJO8gZmm3VdSV7q8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 39：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K2d49Yq9hEHtm6jMk4r66o
        status: active
        display_name: 王俊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_K2d49Yq9hEHtm6jMk4r66o | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王俊妻)（CBDB 155581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155581&o=json)

---
schema: wang-person/v1
id: p_Bd6DMQzbp7ML12caYF6Sds
status: active
merged_into: null
display_name: 王謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EW4XxvgjRGFQetmjntyE3b
        subject_person_id: p_Bd6DMQzbp7ML12caYF6Sds
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zsMDG6z5WYiyaBWfSyUtrg
          claim_id: c_EW4XxvgjRGFQetmjntyE3b
          source_id: s_N1HKLfLW4mTM5iw6PU2T4h
          stance: supports
          locator: CBDB:219865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219865）
          source: &a1
            id: s_N1HKLfLW4mTM5iw6PU2T4h
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 219865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219865&o=json
            external_identifier: CBDB:219865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5HMf4PgQatpE91tL9TucU
        subject_person_id: p_Bd6DMQzbp7ML12caYF6Sds
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
        - id: cs_LsZ3JEHts6j39LtFD87oJb
          claim_id: c_n5HMf4PgQatpE91tL9TucU
          source_id: s_N1HKLfLW4mTM5iw6PU2T4h
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
  descendants:
    - claim:
        id: c_FDXiXK572Q1ERGTqv_wIiP
        subject_person_id: p_Bd6DMQzbp7ML12caYF6Sds
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FGxV5swBK74eZOU8OeVq1N
          claim_id: c_FDXiXK572Q1ERGTqv_wIiP
          source_id: s_N1HKLfLW4mTM5iw6PU2T4h
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hq41nXPS6acQQdhAZabmC1
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Hq41nXPS6acQQdhAZabmC1 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 219865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219865&o=json)

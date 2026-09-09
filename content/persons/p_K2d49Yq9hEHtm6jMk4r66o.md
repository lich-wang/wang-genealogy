---
schema: wang-person/v1
id: p_K2d49Yq9hEHtm6jMk4r66o
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1qBtvS5pvpY2rC8GduR8P
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KDcFvokFK1AAKEnz5ox2pr
          claim_id: c_E1qBtvS5pvpY2rC8GduR8P
          source_id: s_Y8GJJBP1tFbMTVUQgh1zL8
          stance: supports
          locator: CBDB:141289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141289）
          source: &a1
            id: s_Y8GJJBP1tFbMTVUQgh1zL8
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 141289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141289&o=json
            external_identifier: CBDB:141289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qDhHvLZHCCbbqfAF7Y5Yyc
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 740年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nAadAYw2zrEgqisHTTRRDQ
          claim_id: c_qDhHvLZHCCbbqfAF7Y5Yyc
          source_id: s_Y8GJJBP1tFbMTVUQgh1zL8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DMUxSpfkHwPH5Y4F1R8TPi
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s64596he5cqdpfzRAhJKQV
          claim_id: c_DMUxSpfkHwPH5Y4F1R8TPi
          source_id: s_Y8GJJBP1tFbMTVUQgh1zL8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AohemCvwkYfQqELQey5G1M
        subject_person_id: p_K2d49Yq9hEHtm6jMk4r66o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6ZH9A344NJev8iP5SwNwK
          claim_id: c_AohemCvwkYfQqELQey5G1M
          source_id: s_Y8GJJBP1tFbMTVUQgh1zL8
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| birth.date | 740年 | accepted |
| death.date | 792年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 141289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141289&o=json)

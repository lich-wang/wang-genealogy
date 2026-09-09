---
schema: wang-person/v1
id: p_yadoXeQjTnSBGBMow4Ev9z
status: active
merged_into: null
display_name: 王梳藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vWE5zHWsU8E4s1fEC5QTnx
        subject_person_id: p_yadoXeQjTnSBGBMow4Ev9z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梳藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qhhtL5E6hyJZ5zATYjQc5C
          claim_id: c_vWE5zHWsU8E4s1fEC5QTnx
          source_id: s_FBEAmc2nB1A6LGmRPNf4CH
          stance: supports
          locator: CBDB:638723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638723）
          source: &a1
            id: s_FBEAmc2nB1A6LGmRPNf4CH
            source_type: api_record
            title: 中国历代人物传记资料库：王梳藻（CBDB 638723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638723&o=json
            external_identifier: CBDB:638723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4DqQn6H9jt62c7HYVTiv5
        subject_person_id: p_yadoXeQjTnSBGBMow4Ev9z
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
        - id: cs_JGAb8DCG8GPhFmRBtRjwjE
          claim_id: c_N4DqQn6H9jt62c7HYVTiv5
          source_id: s_FBEAmc2nB1A6LGmRPNf4CH
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

# 王梳藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梳藻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梳藻（CBDB 638723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638723&o=json)

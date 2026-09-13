---
schema: wang-person/v1
id: p_LKUBnXvN3RatPV3fcj6pke
status: active
merged_into: null
display_name: 王珎
cbdb_id: 285493
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqYhHsGsY5TRZoQF2BwoBM
        subject_person_id: p_LKUBnXvN3RatPV3fcj6pke
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珎，明人物。正德十六年進士，籍贯巫山，曾任義官。（中国历代人物传记资料库 CBDB 285493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9Szcy_ciBxWR08KaubfKLT
          claim_id: c_EqYhHsGsY5TRZoQF2BwoBM
          source_id: s_4WbTstvWRE2aWdGPMZvcZD
          stance: supports
          locator: CBDB:285493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4WbTstvWRE2aWdGPMZvcZD
            source_type: api_record
            title: 中国历代人物传记资料库：王珎（CBDB 285493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285493&o=json
            external_identifier: CBDB:285493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hF8JkFur1P1tVHfqDgqP1v
        subject_person_id: p_LKUBnXvN3RatPV3fcj6pke
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hJZvQ7648AvjAuXfKsXxzg
          claim_id: c_hF8JkFur1P1tVHfqDgqP1v
          source_id: s_4WbTstvWRE2aWdGPMZvcZD
          stance: supports
          locator: CBDB:285493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zZYegs89PNKd1kjC4IkdAw
        subject_person_id: p_LKUBnXvN3RatPV3fcj6pke
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rT3bK3RVCNfBJPQAtdAstK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g7CpL2soqIrskgKQ8Shpld
          claim_id: c_zZYegs89PNKd1kjC4IkdAw
          source_id: s_4WbTstvWRE2aWdGPMZvcZD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4WbTstvWRE2aWdGPMZvcZD
            source_type: api_record
            title: 中国历代人物传记资料库：王珎（CBDB 285493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285493&o=json
            external_identifier: CBDB:285493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rT3bK3RVCNfBJPQAtdAstK
        status: active
        display_name: 王鳴鳳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珎，明人物。正德十六年進士，籍贯巫山，曾任義官。（中国历代人物传记资料库 CBDB 285493） | accepted |
| name.primary | 王珎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rT3bK3RVCNfBJPQAtdAstK | 王鳴鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珎（CBDB 285493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285493&o=json)

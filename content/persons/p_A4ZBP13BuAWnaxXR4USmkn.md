---
schema: wang-person/v1
id: p_A4ZBP13BuAWnaxXR4USmkn
status: active
merged_into: null
display_name: 王彬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQ2nH7Dp9yp6ckcRKcJSSB
        subject_person_id: p_A4ZBP13BuAWnaxXR4USmkn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zt97rdvUQYiGx2rGpYkC9j
          claim_id: c_MQ2nH7Dp9yp6ckcRKcJSSB
          source_id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
          stance: supports
          locator: CBDB:278402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278402）
          source: &a1
            id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 278402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json
            external_identifier: CBDB:278402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5zAkwPL4mZbPhYmNABkfPi
        subject_person_id: p_A4ZBP13BuAWnaxXR4USmkn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬，明人物。正德六年進士，曾任指揮同知。（中国历代人物传记资料库 CBDB 278402）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rrT9zWKZsmG9ZGZWbY4Zm4
          claim_id: c_5zAkwPL4mZbPhYmNABkfPi
          source_id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
          stance: supports
          locator: CBDB:278402
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_7FJmuH01dlR5FKuB0fZ7E0
        subject_person_id: p_A4ZBP13BuAWnaxXR4USmkn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h7fXGW2qXexjH8ke4RSdR3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bRT7UTIjbeoByz4RNy8z9
          claim_id: c_7FJmuH01dlR5FKuB0fZ7E0
          source_id: s_VG6hzm3AnPqJ1Zs9e6Fr1w
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h7fXGW2qXexjH8ke4RSdR3
        status: active
        display_name: 王金
        merged_into_person_id: null
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | 王彬，明人物。正德六年進士，曾任指揮同知。（中国历代人物传记资料库 CBDB 278402） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_h7fXGW2qXexjH8ke4RSdR3 | 王金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 278402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278402&o=json)

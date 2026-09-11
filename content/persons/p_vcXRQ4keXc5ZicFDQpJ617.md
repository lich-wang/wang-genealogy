---
schema: wang-person/v1
id: p_vcXRQ4keXc5ZicFDQpJ617
status: active
merged_into: null
display_name: 王迺容
cbdb_id: 54083
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P312tC2gPuU9LCLXLBNBjA
        subject_person_id: p_vcXRQ4keXc5ZicFDQpJ617
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺容，清人物。中国历代人物传记资料库（CBDB）以人物编号 54083 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-5K5QPvafzlSrdr9oxSaHc
          claim_id: c_P312tC2gPuU9LCLXLBNBjA
          source_id: s_nv3H9oLU6GnmSurRGpPStk
          stance: supports
          locator: CBDB:54083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nv3H9oLU6GnmSurRGpPStk
            source_type: api_record
            title: 中国历代人物传记资料库：王迺容（CBDB 54083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54083&o=json
            external_identifier: CBDB:54083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bTWx3s3i8mG2QSe3tZiqZT
        subject_person_id: p_vcXRQ4keXc5ZicFDQpJ617
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wAMYpaAJ7ymEND2TovV6QD
          claim_id: c_bTWx3s3i8mG2QSe3tZiqZT
          source_id: s_nv3H9oLU6GnmSurRGpPStk
          stance: supports
          locator: CBDB:54083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_nv3H9oLU6GnmSurRGpPStk
            source_type: api_record
            title: 中国历代人物传记资料库：王迺容（CBDB 54083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54083&o=json
            external_identifier: CBDB:54083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kmtLAdzTBZZgVgPf6g_m1o
        subject_person_id: p_KA8jsnDWkZiH7wDc8fzxW8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vcXRQ4keXc5ZicFDQpJ617
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yuENMqgAy-S87qs2rRKkR-
          claim_id: c_kmtLAdzTBZZgVgPf6g_m1o
          source_id: s_nv3H9oLU6GnmSurRGpPStk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #27, HuWenKai #256：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KA8jsnDWkZiH7wDc8fzxW8
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迺容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迺容，清人物。中国历代人物传记资料库（CBDB）以人物编号 54083 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王迺容 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KA8jsnDWkZiH7wDc8fzxW8 | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迺容（CBDB 54083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54083&o=json)

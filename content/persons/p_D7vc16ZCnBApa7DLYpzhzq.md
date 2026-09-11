---
schema: wang-person/v1
id: p_D7vc16ZCnBApa7DLYpzhzq
status: active
merged_into: null
display_name: 王芝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mD3Q9aLcJXR9fabXPZUtb2
        subject_person_id: p_D7vc16ZCnBApa7DLYpzhzq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PqfTfbXUKw1o3Gt4aZ45V5
          claim_id: c_mD3Q9aLcJXR9fabXPZUtb2
          source_id: s_R65cHsL7kKwHqM3tUu5xZF
          stance: supports
          locator: CBDB:121459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121459）
          source: &a1
            id: s_R65cHsL7kKwHqM3tUu5xZF
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 121459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121459&o=json
            external_identifier: CBDB:121459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YvHjFawhLWNsB3hoyKT8Lc
        subject_person_id: p_D7vc16ZCnBApa7DLYpzhzq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝，史料所见人物。本项目依据《中国历代人物传记资料库：王芝（CBDB 121459）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wy5U7e2N7RJjQpsTroP32c
          claim_id: c_YvHjFawhLWNsB3hoyKT8Lc
          source_id: s_R65cHsL7kKwHqM3tUu5xZF
          stance: supports
          locator: CBDB:121459
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_aU5CHhGP3a0Tvcyv3xOmRH
        subject_person_id: p_D7vc16ZCnBApa7DLYpzhzq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OM9d-xkm8s0_ItgXOZOHzL
          claim_id: c_aU5CHhGP3a0Tvcyv3xOmRH
          source_id: s_R65cHsL7kKwHqM3tUu5xZF
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n18iFte87Ls38E8g6NHVog
        status: active
        display_name: 王延德
        merged_into_person_id: null
  other: []
---

# 王芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝 | accepted |
| bio.summary | 王芝，史料所见人物。本项目依据《中国历代人物传记资料库：王芝（CBDB 121459）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_n18iFte87Ls38E8g6NHVog | 王延德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芝（CBDB 121459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121459&o=json)

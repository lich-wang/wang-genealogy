---
schema: wang-person/v1
id: p_ktP1NEjsTMj2xBDuKMukAQ
status: active
merged_into: null
display_name: 蔣芝生
revision: 1
cbdb_id: 123326
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cN4eOhGBvWYacxYh07SrC6
        subject_person_id: p_ktP1NEjsTMj2xBDuKMukAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔣芝生，史料所见人物。本项目依据《中国历代人物传记资料库：蔣芝生（CBDB 123326）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-4MklC0ORN9HIiNcXYsVv8
          claim_id: c_cN4eOhGBvWYacxYh07SrC6
          source_id: s_dAyLLdgO7eevWjhTktAONA
          stance: supports
          locator: CBDB:123326
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_dAyLLdgO7eevWjhTktAONA
            source_type: api_record
            title: 中国历代人物传记资料库：蔣芝生（CBDB 123326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123326&o=json
            external_identifier: CBDB:123326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9v4f6NBksTnccGXDjMAHp3
        subject_person_id: p_ktP1NEjsTMj2xBDuKMukAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔣芝生
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYTm6a2nQqrDel4HC4CBlI
          claim_id: c_9v4f6NBksTnccGXDjMAHp3
          source_id: s_dAyLLdgO7eevWjhTktAONA
          stance: supports
          locator: CBDB:123326
          quotation: null
          interpretation_note: CBDB 明确记录的王賽玉配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2PrVebG0RPKi40pqqRbo5-
        subject_person_id: p_7Djb9Ea4YKLog1hynHFzL1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ktP1NEjsTMj2xBDuKMukAQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_naMdvLLYtDy0aYC0KOm0yq
          claim_id: c_2PrVebG0RPKi40pqqRbo5-
          source_id: s_dAyLLdgO7eevWjhTktAONA
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5345：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Djb9Ea4YKLog1hynHFzL1
        status: active
        display_name: 王賽玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔣芝生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔣芝生，史料所见人物。本项目依据《中国历代人物传记资料库：蔣芝生（CBDB 123326）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 蔣芝生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7Djb9Ea4YKLog1hynHFzL1 | 王賽玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣芝生（CBDB 123326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123326&o=json)

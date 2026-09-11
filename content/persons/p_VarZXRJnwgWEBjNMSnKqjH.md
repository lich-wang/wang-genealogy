---
schema: wang-person/v1
id: p_VarZXRJnwgWEBjNMSnKqjH
status: active
merged_into: null
display_name: 王彥誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6ajcfjmZKuQtBxyQp6ahf
        subject_person_id: p_VarZXRJnwgWEBjNMSnKqjH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zhhA9o2TJEtZwcn5yLtAoQ
          claim_id: c_v6ajcfjmZKuQtBxyQp6ahf
          source_id: s_8cbVgqbi8c3Z1PXXtGQUsD
          stance: supports
          locator: CBDB:241965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241965）
          source: &a1
            id: s_8cbVgqbi8c3Z1PXXtGQUsD
            source_type: api_record
            title: 中国历代人物传记资料库：王彥誠（CBDB 241965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241965&o=json
            external_identifier: CBDB:241965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GG9E9ERqPgTX2tewFkmNym
        subject_person_id: p_VarZXRJnwgWEBjNMSnKqjH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥誠，明人物。成化二年進士，曾任刑部主事。（中国历代人物传记资料库 CBDB 241965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ugXf1DjwbG5OW0PET9Omm
          claim_id: c_GG9E9ERqPgTX2tewFkmNym
          source_id: s_8cbVgqbi8c3Z1PXXtGQUsD
          stance: supports
          locator: CBDB:241965
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
        id: c_1gPv_K57UctEDAJasvURTY
        subject_person_id: p_VarZXRJnwgWEBjNMSnKqjH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wzpgCTfy9H3iqMXKhqaPfp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVSBmm_JyoFzs23B0XPf6Z
          claim_id: c_1gPv_K57UctEDAJasvURTY
          source_id: s_8cbVgqbi8c3Z1PXXtGQUsD
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wzpgCTfy9H3iqMXKhqaPfp
        status: active
        display_name: 王俁
        merged_into_person_id: null
  other: []
---

# 王彥誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥誠 | accepted |
| bio.summary | 王彥誠，明人物。成化二年進士，曾任刑部主事。（中国历代人物传记资料库 CBDB 241965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wzpgCTfy9H3iqMXKhqaPfp | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥誠（CBDB 241965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241965&o=json)

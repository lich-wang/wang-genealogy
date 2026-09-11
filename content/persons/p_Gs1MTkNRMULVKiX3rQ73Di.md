---
schema: wang-person/v1
id: p_Gs1MTkNRMULVKiX3rQ73Di
status: active
merged_into: null
display_name: 王樂禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VYAwXJc7fcEqE1ZbCoRNgo
        subject_person_id: p_Gs1MTkNRMULVKiX3rQ73Di
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ivw9fZCuuRtXshrhNosqyE
          claim_id: c_VYAwXJc7fcEqE1ZbCoRNgo
          source_id: s_rztfeYE3bch7GGqoth3Zgk
          stance: supports
          locator: CBDB:558445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558445）
          source: &a1
            id: s_rztfeYE3bch7GGqoth3Zgk
            source_type: api_record
            title: 中国历代人物传记资料库：王樂禮（CBDB 558445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558445&o=json
            external_identifier: CBDB:558445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_txCk7sLwiVVwPv2GVFUcc9
        subject_person_id: p_Gs1MTkNRMULVKiX3rQ73Di
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂禮，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t3fZ2C2aA_zMmuZK7XW0NO
          claim_id: c_txCk7sLwiVVwPv2GVFUcc9
          source_id: s_rztfeYE3bch7GGqoth3Zgk
          stance: supports
          locator: CBDB:558445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ekBUbwgqX_rWuANgERWROF
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gs1MTkNRMULVKiX3rQ73Di
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3If_xnxSPXE3Ewi4GVvSA
          claim_id: c_ekBUbwgqX_rWuANgERWROF
          source_id: s_rztfeYE3bch7GGqoth3Zgk
          stance: supports
          locator: (乾隆)信陽州志，lgid=868524：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhC617Pvp2mk9j4bcF6rFB
        status: active
        display_name: 王治
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樂禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂禮 | accepted |
| bio.summary | 王樂禮，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhC617Pvp2mk9j4bcF6rFB | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂禮（CBDB 558445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558445&o=json)

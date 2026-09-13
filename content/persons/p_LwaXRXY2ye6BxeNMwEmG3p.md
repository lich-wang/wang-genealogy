---
schema: wang-person/v1
id: p_LwaXRXY2ye6BxeNMwEmG3p
status: active
merged_into: null
display_name: 王孫熙
cbdb_id: 341964
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bB434J6k7vEMAqdPEDFjCH
        subject_person_id: p_LwaXRXY2ye6BxeNMwEmG3p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫熙，史料所见人物。本项目依据《中国历代人物传记资料库：王孫熙（CBDB 341964）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_XhTZjuTyz2tQdG2jYPV3zN
          claim_id: c_bB434J6k7vEMAqdPEDFjCH
          source_id: s_To3QKXr8Mty7cEDDBoFJgo
          stance: supports
          locator: CBDB:341964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_To3QKXr8Mty7cEDDBoFJgo
            source_type: api_record
            title: 中国历代人物传记资料库：王孫熙（CBDB 341964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341964&o=json
            external_identifier: CBDB:341964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_miVMrLbxRSjNBhCwDJ5UTX
        subject_person_id: p_LwaXRXY2ye6BxeNMwEmG3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GgMa4MHqkB2kLM6V9GbzLC
          claim_id: c_miVMrLbxRSjNBhCwDJ5UTX
          source_id: s_To3QKXr8Mty7cEDDBoFJgo
          stance: supports
          locator: CBDB:341964
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DdGbMt03SP8swDYZhpPwVl
        subject_person_id: p_LwaXRXY2ye6BxeNMwEmG3p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qZde1YWyoymUECzGfFP5xG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDoLQqXj3WbP4wHu0mlItK
          claim_id: c_DdGbMt03SP8swDYZhpPwVl
          source_id: s_Yocg3ZtRGwJuob28J67uy4
          stance: supports
          locator: 江南通志，lgid=65753：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Yocg3ZtRGwJuob28J67uy4
            source_type: api_record
            title: 中国历代人物传记资料库：王元瑞（CBDB 341777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341777&o=json
            external_identifier: CBDB:341777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qZde1YWyoymUECzGfFP5xG
        status: active
        display_name: 王元瑞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孫熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫熙，史料所见人物。本项目依据《中国历代人物传记资料库：王孫熙（CBDB 341964）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王孫熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qZde1YWyoymUECzGfFP5xG | 王元瑞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孫熙（CBDB 341964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341964&o=json)
- [中国历代人物传记资料库：王元瑞（CBDB 341777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341777&o=json)

---
schema: wang-person/v1
id: p_qZde1YWyoymUECzGfFP5xG
status: active
merged_into: null
display_name: 王元瑞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nFJWHZLGfV9393z2v8L4rp
        subject_person_id: p_qZde1YWyoymUECzGfFP5xG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cHvFY7o3bqmuJfArUAo9R5
          claim_id: c_nFJWHZLGfV9393z2v8L4rp
          source_id: s_Yocg3ZtRGwJuob28J67uy4
          stance: supports
          locator: CBDB:341777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341777）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obDSMFM3yh2FPBfsXRfTc6
        subject_person_id: p_qZde1YWyoymUECzGfFP5xG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元瑞，明人物。明清進士進士，籍贯華亭，入仕進士，曾任御史。（中国历代人物传记资料库 CBDB 341777）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tfihva82CVY-Z8Uvh8dJ4I
          claim_id: c_obDSMFM3yh2FPBfsXRfTc6
          source_id: s_Yocg3ZtRGwJuob28J67uy4
          stance: supports
          locator: CBDB:341777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_LwaXRXY2ye6BxeNMwEmG3p
        status: active
        display_name: 王孫熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元瑞 | accepted |
| bio.summary | 王元瑞，明人物。明清進士進士，籍贯華亭，入仕進士，曾任御史。（中国历代人物传记资料库 CBDB 341777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LwaXRXY2ye6BxeNMwEmG3p | 王孫熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元瑞（CBDB 341777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341777&o=json)

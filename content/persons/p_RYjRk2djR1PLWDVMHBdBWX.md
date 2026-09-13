---
schema: wang-person/v1
id: p_RYjRk2djR1PLWDVMHBdBWX
status: active
merged_into: null
display_name: 王恆宬
cbdb_id: 191128
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obyswFPcxWvMFXre1G5zWc
        subject_person_id: p_RYjRk2djR1PLWDVMHBdBWX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆宬（卒于825年），史料所见人物。本项目依据《中国历代人物传记资料库：王恆宬（CBDB 191128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_w2d_AdOHjGoA3I-1-p3OcH
          claim_id: c_obyswFPcxWvMFXre1G5zWc
          source_id: s_nta4ssHFz7ScTFXn3J31Nx
          stance: supports
          locator: CBDB:191128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nta4ssHFz7ScTFXn3J31Nx
            source_type: api_record
            title: 中国历代人物传记资料库：王恆宬（CBDB 191128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191128&o=json
            external_identifier: CBDB:191128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NbKH2outFeQ6EN5qVKG9x3
        subject_person_id: p_RYjRk2djR1PLWDVMHBdBWX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 825年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0825-01-01
            latest: 0825-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pt6zeTMRnNzMpEv5kz3eTG
          claim_id: c_NbKH2outFeQ6EN5qVKG9x3
          source_id: s_nta4ssHFz7ScTFXn3J31Nx
          stance: supports
          locator: CBDB:191128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 825
          source:
            id: s_nta4ssHFz7ScTFXn3J31Nx
            source_type: api_record
            title: 中国历代人物传记资料库：王恆宬（CBDB 191128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191128&o=json
            external_identifier: CBDB:191128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4wYQbFom1R21VKikDKgAGT
        subject_person_id: p_RYjRk2djR1PLWDVMHBdBWX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆宬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_88i5xWLAv6DjN87sxDWUdR
          claim_id: c_4wYQbFom1R21VKikDKgAGT
          source_id: s_nta4ssHFz7ScTFXn3J31Nx
          stance: supports
          locator: CBDB:191128
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 825
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EyEPkUSvL1ODMq6uXxzF72
        subject_person_id: p_DaZmVSxcHscCPPmgy5iJxb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYjRk2djR1PLWDVMHBdBWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCITTwDI91cd6eRNEvjiBj
          claim_id: c_EyEPkUSvL1ODMq6uXxzF72
          source_id: s_dh4zjkmv1XJFeJpicRWdiq
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dh4zjkmv1XJFeJpicRWdiq
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 143262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json
            external_identifier: CBDB:143262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DaZmVSxcHscCPPmgy5iJxb
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆宬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恆宬（卒于825年），史料所见人物。本项目依据《中国历代人物传记资料库：王恆宬（CBDB 191128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 825年 | accepted |
| name.primary | 王恆宬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DaZmVSxcHscCPPmgy5iJxb | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆宬（CBDB 191128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191128&o=json)
- [中国历代人物传记资料库：王俊（CBDB 143262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143262&o=json)

---
schema: wang-person/v1
id: p_Lq74ESPuUFpGQU5tURbhKg
status: active
merged_into: null
display_name: 王文禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S3afbkTDxatFPXuaTsKHM2
        subject_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBVRkmcXZn8v6EkuW3uA69
          claim_id: c_S3afbkTDxatFPXuaTsKHM2
          source_id: s_VAyzCX1B5kLGgYbSbY2GYc
          stance: supports
          locator: CBDB:168570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168570）
          source: &a1
            id: s_VAyzCX1B5kLGgYbSbY2GYc
            source_type: api_record
            title: 中国历代人物传记资料库：王文禮（CBDB 168570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168570&o=json
            external_identifier: CBDB:168570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CXx7JW7tMeRDuvMSXFMsQG
        subject_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文禮，史料所见人物。本项目依据《中国历代人物传记资料库：王文禮（CBDB 168570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pVPpmBt49Vf234U1BHIK8H
          claim_id: c_CXx7JW7tMeRDuvMSXFMsQG
          source_id: s_VAyzCX1B5kLGgYbSbY2GYc
          stance: supports
          locator: CBDB:168570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lTTvGJQpxqfPSM1L4wmAbX
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8nDFCM17kBRjF71aJiCZKE
          claim_id: c_lTTvGJQpxqfPSM1L4wmAbX
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zk5P4Ec6BpG4pRMBmch3A3
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 168569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json
            external_identifier: CBDB:168569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EekV1er5JkAj6hekaqJDVE
        status: active
        display_name: 王昌
        merged_into_person_id: null
  children:
    - claim:
        id: c_VuPgVIm9hitkELdydw-xed
        subject_person_id: p_Lq74ESPuUFpGQU5tURbhKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoVGSgGNKbBBUnXE7nh7G8
          claim_id: c_VuPgVIm9hitkELdydw-xed
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WwkwnxKYTK9cFafz9RG2Wm
            source_type: api_record
            title: 中国历代人物传记资料库：王仲甫（CBDB 168571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json
            external_identifier: CBDB:168571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2By3HyEqWFSrUPCpwFaSLa
        status: active
        display_name: 王仲甫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文禮 | accepted |
| bio.summary | 王文禮，史料所见人物。本项目依据《中国历代人物传记资料库：王文禮（CBDB 168570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EekV1er5JkAj6hekaqJDVE | 王昌 | accepted |
| children | p_2By3HyEqWFSrUPCpwFaSLa | 王仲甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 168569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json)
- [中国历代人物传记资料库：王文禮（CBDB 168570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168570&o=json)
- [中国历代人物传记资料库：王仲甫（CBDB 168571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json)

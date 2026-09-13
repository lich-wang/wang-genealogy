---
schema: wang-person/v1
id: p_8SCUxCTEuLH7vvbDx2aiwc
status: active
merged_into: null
display_name: 王居能
cbdb_id: 24512
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ybwQAYdovzmigHcBUDtji6
        subject_person_id: p_8SCUxCTEuLH7vvbDx2aiwc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居能，史料所见人物。本项目依据《中国历代人物传记资料库：王居能（CBDB 24512）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ILNkp7n3Pa-CuTeusgKSzd
          claim_id: c_ybwQAYdovzmigHcBUDtji6
          source_id: s_f9vPJyCySH3jXD8JBuL982
          stance: supports
          locator: CBDB:24512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_f9vPJyCySH3jXD8JBuL982
            source_type: api_record
            title: 中国历代人物传记资料库：王居能（CBDB 24512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24512&o=json
            external_identifier: CBDB:24512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VKxbPGR3VDGZb2Gv1zzMKd
        subject_person_id: p_8SCUxCTEuLH7vvbDx2aiwc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FUxPaCPptJCTU4NdMU33t5
          claim_id: c_VKxbPGR3VDGZb2Gv1zzMKd
          source_id: s_f9vPJyCySH3jXD8JBuL982
          stance: supports
          locator: CBDB:24512
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bBzvv5ABb8ArTE0pz04ryk
        subject_person_id: p_14z56cozKBR178wmK7Q4e5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8SCUxCTEuLH7vvbDx2aiwc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NFqaMlGDP8i6i0oa3vZEM
          claim_id: c_bBzvv5ABb8ArTE0pz04ryk
          source_id: s_orQ5SG5thqraHR1PvLfjcG
          stance: supports
          locator: CBDB 双向互证（子 王居能 ⇄ 父 王公達）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_orQ5SG5thqraHR1PvLfjcG
            source_type: api_record
            title: 中国历代人物传记资料库：王公達（CBDB 24511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24511&o=json
            external_identifier: CBDB:24511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_14z56cozKBR178wmK7Q4e5
        status: active
        display_name: 王公達
        merged_into_person_id: null
  children:
    - claim:
        id: c_V3x0gpfR3Cbcy5ZyUkD8t3
        subject_person_id: p_8SCUxCTEuLH7vvbDx2aiwc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BChCuFHjEoLkJji1RG47tG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DgIncdLe72lEBCVoMuRsJl
          claim_id: c_V3x0gpfR3Cbcy5ZyUkD8t3
          source_id: s_f9vPJyCySH3jXD8JBuL982
          stance: supports
          locator: CBDB 双向互证（子 王崇遇 ⇄ 父 王居能）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_f9vPJyCySH3jXD8JBuL982
            source_type: api_record
            title: 中国历代人物传记资料库：王居能（CBDB 24512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24512&o=json
            external_identifier: CBDB:24512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BChCuFHjEoLkJji1RG47tG
        status: active
        display_name: 王崇遇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王居能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王居能，史料所见人物。本项目依据《中国历代人物传记资料库：王居能（CBDB 24512）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王居能 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14z56cozKBR178wmK7Q4e5 | 王公達 | accepted |
| children | p_BChCuFHjEoLkJji1RG47tG | 王崇遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公達（CBDB 24511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24511&o=json)
- [中国历代人物传记资料库：王居能（CBDB 24512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24512&o=json)

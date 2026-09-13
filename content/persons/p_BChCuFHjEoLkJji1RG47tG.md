---
schema: wang-person/v1
id: p_BChCuFHjEoLkJji1RG47tG
status: active
merged_into: null
display_name: 王崇遇
cbdb_id: 24513
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZcXbWxmwd1uqCSvHngHjqW
        subject_person_id: p_BChCuFHjEoLkJji1RG47tG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇遇，史料所见人物。本项目依据《中国历代人物传记资料库：王崇遇（CBDB 24513）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_kh2bKEv6DXk8K6yIkOhka6
          claim_id: c_ZcXbWxmwd1uqCSvHngHjqW
          source_id: s_Fpur9BaNe17pdVvP7V4w4D
          stance: supports
          locator: CBDB:24513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Fpur9BaNe17pdVvP7V4w4D
            source_type: api_record
            title: 中国历代人物传记资料库：王崇遇（CBDB 24513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24513&o=json
            external_identifier: CBDB:24513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e46cAf1ZJHKtqCz2gcAoJc
        subject_person_id: p_BChCuFHjEoLkJji1RG47tG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3jzpCPdqKx8anC7eUbXDfC
          claim_id: c_e46cAf1ZJHKtqCz2gcAoJc
          source_id: s_Fpur9BaNe17pdVvP7V4w4D
          stance: supports
          locator: CBDB:24513
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_8SCUxCTEuLH7vvbDx2aiwc
        status: active
        display_name: 王居能
        merged_into_person_id: null
  children:
    - claim:
        id: c_vXrVIfoJ8PcZQ5UdjUwfRq
        subject_person_id: p_BChCuFHjEoLkJji1RG47tG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3H6pbyyKMDg5pqPu9AL5sC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ssTNaC1r9RLBiB_n5RASI
          claim_id: c_vXrVIfoJ8PcZQ5UdjUwfRq
          source_id: s_B8XNZfG4p9Utb4GmN1ZfKn
          stance: supports
          locator: CBDB 双向互证（父 王崇遇 ⇄ 子 王允中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_B8XNZfG4p9Utb4GmN1ZfKn
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 21990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21990&o=json
            external_identifier: CBDB:21990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3H6pbyyKMDg5pqPu9AL5sC
        status: active
        display_name: 王允中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇遇，史料所见人物。本项目依据《中国历代人物传记资料库：王崇遇（CBDB 24513）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王崇遇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8SCUxCTEuLH7vvbDx2aiwc | 王居能 | accepted |
| children | p_3H6pbyyKMDg5pqPu9AL5sC | 王允中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇遇（CBDB 24513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24513&o=json)
- [中国历代人物传记资料库：王居能（CBDB 24512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24512&o=json)
- [中国历代人物传记资料库：王允中（CBDB 21990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21990&o=json)

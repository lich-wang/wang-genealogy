---
schema: wang-person/v1
id: p_C4RB9bsWrECbVN4w92WDv5
status: active
merged_into: null
display_name: 王元祐
cbdb_id: 26290
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A4UhP3Nuve6MsXQpCpt9dF
        subject_person_id: p_C4RB9bsWrECbVN4w92WDv5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元祐，史料所见人物。本项目依据《中国历代人物传记资料库：王元祐（CBDB 26290）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_aPXlVoOCW8FhUczb0XNW-M
          claim_id: c_A4UhP3Nuve6MsXQpCpt9dF
          source_id: s_KemP6CwAAHPExQ3CzcaJVG
          stance: supports
          locator: CBDB:26290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KemP6CwAAHPExQ3CzcaJVG
            source_type: api_record
            title: 中国历代人物传记资料库：王元祐（CBDB 26290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26290&o=json
            external_identifier: CBDB:26290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sYLjwKEZ2PMyBDpQFSLYCy
        subject_person_id: p_C4RB9bsWrECbVN4w92WDv5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PRaVwYWvYw7njioZtaFmeL
          claim_id: c_sYLjwKEZ2PMyBDpQFSLYCy
          source_id: s_KemP6CwAAHPExQ3CzcaJVG
          stance: supports
          locator: CBDB:26290
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BywL6jKRSiwWYO9d0zUhon
        subject_person_id: p_79hPf6iStJboBnBafhPxjH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4RB9bsWrECbVN4w92WDv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zo-QCzHvaTMglMeHe72ZUi
          claim_id: c_BywL6jKRSiwWYO9d0zUhon
          source_id: s_XujjLmFUxRsao6imGnAoUM
          stance: supports
          locator: CBDB 双向互证（子 王元祐 ⇄ 父 王廷節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_XujjLmFUxRsao6imGnAoUM
            source_type: api_record
            title: 中国历代人物传记资料库：王廷節（CBDB 26289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json
            external_identifier: CBDB:26289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_79hPf6iStJboBnBafhPxjH
        status: active
        display_name: 王廷節
        merged_into_person_id: null
  children:
    - claim:
        id: c_zMQOgrbzuXvxX_3Zxt5fGW
        subject_person_id: p_C4RB9bsWrECbVN4w92WDv5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JYpSiXVBWgzadHuSV7cx62
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_skfz6FVEZ4NaWHYK_jqmaO
          claim_id: c_zMQOgrbzuXvxX_3Zxt5fGW
          source_id: s_KemP6CwAAHPExQ3CzcaJVG
          stance: supports
          locator: CBDB 双向互证（子 王知和 ⇄ 父 王元祐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KemP6CwAAHPExQ3CzcaJVG
            source_type: api_record
            title: 中国历代人物传记资料库：王元祐（CBDB 26290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26290&o=json
            external_identifier: CBDB:26290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JYpSiXVBWgzadHuSV7cx62
        status: active
        display_name: 王知和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元祐，史料所见人物。本项目依据《中国历代人物传记资料库：王元祐（CBDB 26290）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元祐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_79hPf6iStJboBnBafhPxjH | 王廷節 | accepted |
| children | p_JYpSiXVBWgzadHuSV7cx62 | 王知和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷節（CBDB 26289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26289&o=json)
- [中国历代人物传记资料库：王元祐（CBDB 26290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26290&o=json)

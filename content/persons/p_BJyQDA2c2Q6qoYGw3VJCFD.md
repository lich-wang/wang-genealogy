---
schema: wang-person/v1
id: p_BJyQDA2c2Q6qoYGw3VJCFD
status: active
merged_into: null
display_name: 王元發
cbdb_id: 25590
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oFteEfztD58hJ2DVEoSUx
        subject_person_id: p_BJyQDA2c2Q6qoYGw3VJCFD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元發，史料所见人物。本项目依据《中国历代人物传记资料库：王元發（CBDB 25590）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_AMq8a85KIXUY0Ohez8kgMj
          claim_id: c_8oFteEfztD58hJ2DVEoSUx
          source_id: s_KuKCAPXBDCWpDUzQqqB5YL
          stance: supports
          locator: CBDB:25590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KuKCAPXBDCWpDUzQqqB5YL
            source_type: api_record
            title: 中国历代人物传记资料库：王元發（CBDB 25590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25590&o=json
            external_identifier: CBDB:25590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xepmnQAVq545UJwa5jUNZK
        subject_person_id: p_BJyQDA2c2Q6qoYGw3VJCFD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A6GnQ7pKjroTHm9S9A5AeJ
          claim_id: c_xepmnQAVq545UJwa5jUNZK
          source_id: s_KuKCAPXBDCWpDUzQqqB5YL
          stance: supports
          locator: CBDB:25590
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CV39X1AqXjbM3-iDmtsKXj
        subject_person_id: p_Na2LaAnCXtPjvb5M25fErD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BJyQDA2c2Q6qoYGw3VJCFD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1QVlG9ETfRsEzloEAj8BW
          claim_id: c_CV39X1AqXjbM3-iDmtsKXj
          source_id: s_5hinrH2jiS1UQN8yTHfyMf
          stance: supports
          locator: CBDB 双向互证（子 王元發 ⇄ 父 王起）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_5hinrH2jiS1UQN8yTHfyMf
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 25589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25589&o=json
            external_identifier: CBDB:25589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Na2LaAnCXtPjvb5M25fErD
        status: active
        display_name: 王起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元發，史料所见人物。本项目依据《中国历代人物传记资料库：王元發（CBDB 25590）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元發 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Na2LaAnCXtPjvb5M25fErD | 王起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 25589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25589&o=json)
- [中国历代人物传记资料库：王元發（CBDB 25590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25590&o=json)

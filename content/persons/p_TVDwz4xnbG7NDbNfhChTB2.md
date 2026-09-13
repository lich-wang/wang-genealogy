---
schema: wang-person/v1
id: p_TVDwz4xnbG7NDbNfhChTB2
status: active
merged_into: null
display_name: 王後
cbdb_id: 22216
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQye3WgQxtCBCakffVZAnt
        subject_person_id: p_TVDwz4xnbG7NDbNfhChTB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王後，史料所见人物。本项目依据《中国历代人物传记资料库：王後（CBDB 22216）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_3ctmtvw9tTdIVnMGibkYrx
          claim_id: c_yQye3WgQxtCBCakffVZAnt
          source_id: s_KEr1yWLobjsgFbA8d6zZMW
          stance: supports
          locator: CBDB:22216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KEr1yWLobjsgFbA8d6zZMW
            source_type: api_record
            title: 中国历代人物传记资料库：王後（CBDB 22216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22216&o=json
            external_identifier: CBDB:22216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQTKt1AWJdeXJXERHEBqAq
        subject_person_id: p_TVDwz4xnbG7NDbNfhChTB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王後
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MqGPhXPZ4a1vzrDgbZHePY
          claim_id: c_JQTKt1AWJdeXJXERHEBqAq
          source_id: s_KEr1yWLobjsgFbA8d6zZMW
          stance: supports
          locator: CBDB:22216
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yhquz61EQd309HQEOSz8jO
        subject_person_id: p_TVDwz4xnbG7NDbNfhChTB2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wC1UcJY7ssfefjEwH3h8KT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umB76733hCNSgB0O5n1PeH
          claim_id: c_yhquz61EQd309HQEOSz8jO
          source_id: s_V6tFeo1V3k4u9EGY98rsem
          stance: supports
          locator: CBDB 双向互证（父 王後 ⇄ 子 王覺）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_V6tFeo1V3k4u9EGY98rsem
            source_type: api_record
            title: 中国历代人物传记资料库：王覺（CBDB 22218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22218&o=json
            external_identifier: CBDB:22218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wC1UcJY7ssfefjEwH3h8KT
        status: active
        display_name: 王覺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王後

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王後，史料所见人物。本项目依据《中国历代人物传记资料库：王後（CBDB 22216）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王後 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wC1UcJY7ssfefjEwH3h8KT | 王覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王後（CBDB 22216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22216&o=json)
- [中国历代人物传记资料库：王覺（CBDB 22218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22218&o=json)

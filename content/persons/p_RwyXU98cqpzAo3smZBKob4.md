---
schema: wang-person/v1
id: p_RwyXU98cqpzAo3smZBKob4
status: active
merged_into: null
display_name: 王幡然
cbdb_id: 35305
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BE35dQ2KxdWrsEhFZcdNq5
        subject_person_id: p_RwyXU98cqpzAo3smZBKob4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幡然，史料所见人物。本项目依据《中国历代人物传记资料库：王幡然（CBDB 35305）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_2okNAdmPJ101Yq-F8tL_Tj
          claim_id: c_BE35dQ2KxdWrsEhFZcdNq5
          source_id: s_i8RgUeKfkDfuFDHzdbwFFT
          stance: supports
          locator: CBDB:35305
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_i8RgUeKfkDfuFDHzdbwFFT
            source_type: api_record
            title: 中国历代人物传记资料库：王幡然（CBDB 35305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35305&o=json
            external_identifier: CBDB:35305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rLnha18cJyUmG7jAiejtN2
        subject_person_id: p_RwyXU98cqpzAo3smZBKob4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幡然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dCodB82SB1HmR3K9mpdxyb
          claim_id: c_rLnha18cJyUmG7jAiejtN2
          source_id: s_i8RgUeKfkDfuFDHzdbwFFT
          stance: supports
          locator: CBDB:35305
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3xYbnqpvKwErFwApO5zRTz
        subject_person_id: p_3xq8XMdF4aEj87PCT7vANe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RwyXU98cqpzAo3smZBKob4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l48xnV3jn6OOpmnzgKIbVT
          claim_id: c_3xYbnqpvKwErFwApO5zRTz
          source_id: s_fQgPFEAgREe79sEH4MQXbw
          stance: supports
          locator: CBDB 双向互证（子 王幡然 ⇄ 父 王子忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_fQgPFEAgREe79sEH4MQXbw
            source_type: api_record
            title: 中国历代人物传记资料库：王子忠（CBDB 35306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35306&o=json
            external_identifier: CBDB:35306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3xq8XMdF4aEj87PCT7vANe
        status: active
        display_name: 王子忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_Ub3Q2hPIox6kcXAgKa6ybw
        subject_person_id: p_RwyXU98cqpzAo3smZBKob4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWCNFYL8WrZMreK-mBLd66
          claim_id: c_Ub3Q2hPIox6kcXAgKa6ybw
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB 双向互证（父 王幡然 ⇄ 子 王德秀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VvtYyGJ8aPdqbyGbUrG8di
            source_type: api_record
            title: 中国历代人物传记资料库：王德秀（CBDB 35304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json
            external_identifier: CBDB:35304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5S6FXhcD9zMBVMKP5KkuEV
        status: active
        display_name: 王德秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王幡然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王幡然，史料所见人物。本项目依据《中国历代人物传记资料库：王幡然（CBDB 35305）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王幡然 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3xq8XMdF4aEj87PCT7vANe | 王子忠 | accepted |
| children | p_5S6FXhcD9zMBVMKP5KkuEV | 王德秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德秀（CBDB 35304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json)
- [中国历代人物传记资料库：王幡然（CBDB 35305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35305&o=json)
- [中国历代人物传记资料库：王子忠（CBDB 35306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35306&o=json)

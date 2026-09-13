---
schema: wang-person/v1
id: p_GUtCqhQtZqm89xaA8Dtg9b
status: active
merged_into: null
display_name: 王安福
cbdb_id: 54271
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2cJw5hFJo84Xyh1GJWW9Mt
        subject_person_id: p_GUtCqhQtZqm89xaA8Dtg9b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安福，史料所见人物。本项目依据《中国历代人物传记资料库：王安福（CBDB 54271）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_n276jA1OrHF-SMJfia2a9g
          claim_id: c_2cJw5hFJo84Xyh1GJWW9Mt
          source_id: s_4AEE3tUZ8pnhujFh8BqgEE
          stance: supports
          locator: CBDB:54271
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4AEE3tUZ8pnhujFh8BqgEE
            source_type: api_record
            title: 中国历代人物传记资料库：王安福（CBDB 54271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54271&o=json
            external_identifier: CBDB:54271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfWxWd2ehdQCQ7Exj5NB5d
        subject_person_id: p_GUtCqhQtZqm89xaA8Dtg9b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XAKH96gt32PyE43fGJAqbH
          claim_id: c_NfWxWd2ehdQCQ7Exj5NB5d
          source_id: s_4AEE3tUZ8pnhujFh8BqgEE
          stance: supports
          locator: CBDB:54271
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GU919uds68ePAV7ig5f808
        subject_person_id: p_NZLA6g9uGGjPLH4EQ9Nhd9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GUtCqhQtZqm89xaA8Dtg9b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJq1IULaLY32zNqDxIOaPU
          claim_id: c_GU919uds68ePAV7ig5f808
          source_id: s_4AEE3tUZ8pnhujFh8BqgEE
          stance: supports
          locator: CBDB 双向互证（父 王騶 ⇄ 子 王安福）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4AEE3tUZ8pnhujFh8BqgEE
            source_type: api_record
            title: 中国历代人物传记资料库：王安福（CBDB 54271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54271&o=json
            external_identifier: CBDB:54271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_NZLA6g9uGGjPLH4EQ9Nhd9
        status: active
        display_name: 王騶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安福，史料所见人物。本项目依据《中国历代人物传记资料库：王安福（CBDB 54271）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王安福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NZLA6g9uGGjPLH4EQ9Nhd9 | 王騶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安福（CBDB 54271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54271&o=json)

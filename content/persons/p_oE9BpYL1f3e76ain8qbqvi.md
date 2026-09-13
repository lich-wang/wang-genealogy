---
schema: wang-person/v1
id: p_oE9BpYL1f3e76ain8qbqvi
status: active
merged_into: null
display_name: 王履初
cbdb_id: 22933
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zfsdxyUzBwFbQDbfiXC89b
        subject_person_id: p_oE9BpYL1f3e76ain8qbqvi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履初，史料所见人物。本项目依据《中国历代人物传记资料库：王履初（CBDB 22933）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QA51_nykhw6pg248PwWnAc
          claim_id: c_zfsdxyUzBwFbQDbfiXC89b
          source_id: s_PSvx6HFN7C3M6T817ELLvx
          stance: supports
          locator: CBDB:22933
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PSvx6HFN7C3M6T817ELLvx
            source_type: api_record
            title: 中国历代人物传记资料库：王履初（CBDB 22933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22933&o=json
            external_identifier: CBDB:22933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TeXmLPrXkSS5WjNre5hF1F
        subject_person_id: p_oE9BpYL1f3e76ain8qbqvi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3EcunEhWXfsc6jZ9xEAZee
          claim_id: c_TeXmLPrXkSS5WjNre5hF1F
          source_id: s_PSvx6HFN7C3M6T817ELLvx
          stance: supports
          locator: CBDB:22933
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pXnlkyLm2zAXuZQlvPYGBL
        subject_person_id: p_igztDbU8rAPT4ZKkD4V13x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oE9BpYL1f3e76ain8qbqvi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Feeq9UszrFKsfE9G_Jqh1a
          claim_id: c_pXnlkyLm2zAXuZQlvPYGBL
          source_id: s_GbMZtxmmmBnEiQ1mUR72KY
          stance: supports
          locator: CBDB 双向互证（子 王履初 ⇄ 父 王謙夫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GbMZtxmmmBnEiQ1mUR72KY
            source_type: api_record
            title: 中国历代人物传记资料库：王謙夫（CBDB 22931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22931&o=json
            external_identifier: CBDB:22931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_igztDbU8rAPT4ZKkD4V13x
        status: active
        display_name: 王謙夫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王履初，史料所见人物。本项目依据《中国历代人物传记资料库：王履初（CBDB 22933）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王履初 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_igztDbU8rAPT4ZKkD4V13x | 王謙夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履初（CBDB 22933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22933&o=json)
- [中国历代人物传记资料库：王謙夫（CBDB 22931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22931&o=json)

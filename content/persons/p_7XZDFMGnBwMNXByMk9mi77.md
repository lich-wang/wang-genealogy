---
schema: wang-person/v1
id: p_7XZDFMGnBwMNXByMk9mi77
status: active
merged_into: null
display_name: 王思或
cbdb_id: 155331
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RXQdAZ6zd1dRTSFZChgUXf
        subject_person_id: p_7XZDFMGnBwMNXByMk9mi77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思或，史料所见人物。本项目依据《中国历代人物传记资料库：王思或（CBDB 155331）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_040q64EdDPltciJG21-y00
          claim_id: c_RXQdAZ6zd1dRTSFZChgUXf
          source_id: s_NwNUC81Mr4Lp5JRY7ejwwH
          stance: supports
          locator: CBDB:155331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NwNUC81Mr4Lp5JRY7ejwwH
            source_type: api_record
            title: 中国历代人物传记资料库：王思或（CBDB 155331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155331&o=json
            external_identifier: CBDB:155331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_irm35t8eQchMBscYktrduB
        subject_person_id: p_7XZDFMGnBwMNXByMk9mi77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思或
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zJJfxV3AegQkbUMhRWYPp6
          claim_id: c_irm35t8eQchMBscYktrduB
          source_id: s_NwNUC81Mr4Lp5JRY7ejwwH
          stance: supports
          locator: CBDB:155331
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HuHkPhjJ2LaKVEMWn6JsVz
        subject_person_id: p_7XZDFMGnBwMNXByMk9mi77
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rguP3GRGJoQCQCvdPJ1Ps9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XwibS1dflrHn9xVpN5rO4R
          claim_id: c_HuHkPhjJ2LaKVEMWn6JsVz
          source_id: s_NwNUC81Mr4Lp5JRY7ejwwH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jianzhong 12：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NwNUC81Mr4Lp5JRY7ejwwH
            source_type: api_record
            title: 中国历代人物传记资料库：王思或（CBDB 155331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155331&o=json
            external_identifier: CBDB:155331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rguP3GRGJoQCQCvdPJ1Ps9
        status: active
        display_name: 王景詮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思或

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思或，史料所见人物。本项目依据《中国历代人物传记资料库：王思或（CBDB 155331）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王思或 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rguP3GRGJoQCQCvdPJ1Ps9 | 王景詮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思或（CBDB 155331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155331&o=json)

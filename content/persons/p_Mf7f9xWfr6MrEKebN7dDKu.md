---
schema: wang-person/v1
id: p_Mf7f9xWfr6MrEKebN7dDKu
status: active
merged_into: null
display_name: 王式曾
cbdb_id: 513575
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cuWoBckbkDEPtv5r487X3x
        subject_person_id: p_Mf7f9xWfr6MrEKebN7dDKu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式曾，史料所见人物。本项目依据《中国历代人物传记资料库：王式曾（CBDB 513575）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PbgWAh-lQZfEMnpaZGFJuj
          claim_id: c_cuWoBckbkDEPtv5r487X3x
          source_id: s_8BQyf2cJR7w7WZEm17SNfg
          stance: supports
          locator: CBDB:513575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8BQyf2cJR7w7WZEm17SNfg
            source_type: api_record
            title: 中国历代人物传记资料库：王式曾（CBDB 513575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513575&o=json
            external_identifier: CBDB:513575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sUyZ7418upMpvamNzUXLi6
        subject_person_id: p_Mf7f9xWfr6MrEKebN7dDKu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yeMtJC3XnxWGNkZ4d9SQV3
          claim_id: c_sUyZ7418upMpvamNzUXLi6
          source_id: s_8BQyf2cJR7w7WZEm17SNfg
          stance: supports
          locator: CBDB:513575
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CBeM20kI704ctS4lOeRkQc
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mf7f9xWfr6MrEKebN7dDKu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCn0JoeRvW7j50fxrKD9vU
          claim_id: c_CBeM20kI704ctS4lOeRkQc
          source_id: s_8BQyf2cJR7w7WZEm17SNfg
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），71：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8BQyf2cJR7w7WZEm17SNfg
            source_type: api_record
            title: 中国历代人物传记资料库：王式曾（CBDB 513575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513575&o=json
            external_identifier: CBDB:513575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王式曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王式曾，史料所见人物。本项目依据《中国历代人物传记资料库：王式曾（CBDB 513575）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王式曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王式曾（CBDB 513575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513575&o=json)

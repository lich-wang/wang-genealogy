---
schema: wang-person/v1
id: p_rrCdohRXpi6LoP537Y7aD7
status: active
merged_into: null
display_name: 王磻夫
cbdb_id: 158500
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PfkPLw4HwhUnjpivpKcvpB
        subject_person_id: p_rrCdohRXpi6LoP537Y7aD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磻夫，史料所见人物。本项目依据《中国历代人物传记资料库：王磻夫（CBDB 158500）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_B3vD4-sLWIu4NQu9RWb9xf
          claim_id: c_PfkPLw4HwhUnjpivpKcvpB
          source_id: s_GEmCHggmjgnsFaHLdJyFtP
          stance: supports
          locator: CBDB:158500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GEmCHggmjgnsFaHLdJyFtP
            source_type: api_record
            title: 中国历代人物传记资料库：王磻夫（CBDB 158500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158500&o=json
            external_identifier: CBDB:158500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9WqP2D7cmvpTPsGMBJmkuG
        subject_person_id: p_rrCdohRXpi6LoP537Y7aD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磻夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_whw1yJKJZGG8Xji1fDC97r
          claim_id: c_9WqP2D7cmvpTPsGMBJmkuG
          source_id: s_GEmCHggmjgnsFaHLdJyFtP
          stance: supports
          locator: CBDB:158500
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_euQGgBAAWet3wxha_L41Be
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rrCdohRXpi6LoP537Y7aD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYecaDb1XYgiuwTUkoPOIR
          claim_id: c_euQGgBAAWet3wxha_L41Be
          source_id: s_GEmCHggmjgnsFaHLdJyFtP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GEmCHggmjgnsFaHLdJyFtP
            source_type: api_record
            title: 中国历代人物传记资料库：王磻夫（CBDB 158500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158500&o=json
            external_identifier: CBDB:158500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vZnDcXFqAU9qkQZwwP1LXd
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王磻夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王磻夫，史料所见人物。本项目依据《中国历代人物传记资料库：王磻夫（CBDB 158500）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王磻夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZnDcXFqAU9qkQZwwP1LXd | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王磻夫（CBDB 158500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158500&o=json)

---
schema: wang-person/v1
id: p_8peYHgEQhsN5QL3iZdngEo
status: active
merged_into: null
display_name: 王继鹏
cbdb_id: 11522
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4JE4a6wW35zvJaZBSw3MuD
        subject_person_id: p_8peYHgEQhsN5QL3iZdngEo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继鹏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y6Ah1aLnqi5KnXaH4UZ8zu
          claim_id: c_4JE4a6wW35zvJaZBSw3MuD
          source_id: s_1hC5UEUT49R1jZBwXFdiUU
          stance: supports
          locator: Q2109914
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_1hC5UEUT49R1jZBwXFdiUU
            source_type: api_record
            title: 维基数据：王继鹏（Q2109914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109914
            external_identifier: Q2109914
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%BC%E9%B5%AC
        - id: cs_zTyVB7zm7E9DpMUJsBntvZ
          claim_id: c_4JE4a6wW35zvJaZBSw3MuD
          source_id: s_QDjWrDpWMMUPZUJi9tUTdP
          stance: supports
          locator: CBDB:11522
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_QDjWrDpWMMUPZUJi9tUTdP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昶（11522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11522&o=json
            external_identifier: CBDB:11522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aw6qKG9oAGkgryfabsiv4E
        subject_person_id: p_8peYHgEQhsN5QL3iZdngEo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继鹏（卒于939年8月29日），閩國人物。籍贯南安，身份为詩人、統治者，入仕弑君自立，曾任宮使、皇帝、節度副使。（中国历代人物传记资料库 CBDB 11522）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CC5LT6d3uXWRPzTcdXvdKM
          claim_id: c_aw6qKG9oAGkgryfabsiv4E
          source_id: s_1hC5UEUT49R1jZBwXFdiUU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_-gB4yghmcDztcTxvc1iM-t
          claim_id: c_aw6qKG9oAGkgryfabsiv4E
          source_id: s_QDjWrDpWMMUPZUJi9tUTdP
          stance: supports
          locator: CBDB:11522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E2onXZNQFK4xEy9pFVL2ip
        subject_person_id: p_8peYHgEQhsN5QL3iZdngEo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 939年8月29日
            calendar_note: 维基数据 P570 结构化日期，精度：日
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXx2J4eiAAHcw1eJqaE5LS
          claim_id: c_E2onXZNQFK4xEy9pFVL2ip
          source_id: s_1hC5UEUT49R1jZBwXFdiUU
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L1Zng5223dKFSC1wbM2Kc6
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8peYHgEQhsN5QL3iZdngEo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJEm7Gh7ackRmZQaAyzupR
          claim_id: c_L1Zng5223dKFSC1wbM2Kc6
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
        - id: cs_uXJJzXPR9yD97YfUKAxfoC
          claim_id: c_L1Zng5223dKFSC1wbM2Kc6
          source_id: s_1hC5UEUT49R1jZBwXFdiUU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_EPK9VTKUv3Zb45XrsBxSgP
          claim_id: c_L1Zng5223dKFSC1wbM2Kc6
          source_id: s_nj5VoXMiJwSTv8RMWgLs8f
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nj5VoXMiJwSTv8RMWgLs8f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏻（11521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11521&o=json
            external_identifier: CBDB:11521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:01.070Z
            metadata_json: null
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继鹏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王继鹏 | accepted |
| bio.summary | 王继鹏（卒于939年8月29日），閩國人物。籍贯南安，身份为詩人、統治者，入仕弑君自立，曾任宮使、皇帝、節度副使。（中国历代人物传记资料库 CBDB 11522） | accepted |
| death.date | 939年8月29日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：王继鹏（Q2109914）](https://www.wikidata.org/wiki/Q2109914)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
- [CBDB 中国历代人物传记资料库：王昶（11522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11522&o=json)
- [CBDB 中国历代人物传记资料库：王鏻（11521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11521&o=json)

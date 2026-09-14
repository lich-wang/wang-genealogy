---
schema: wang-person/v1
id: p_PAy7yCJuqqeX8LtX4fFuFY
status: active
merged_into: null
display_name: 王翰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BPkoz3CLttQqi2cV5wUsK
        subject_person_id: p_PAy7yCJuqqeX8LtX4fFuFY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_99JByrLo9KRkzQ3D8thm8R
          claim_id: c_4BPkoz3CLttQqi2cV5wUsK
          source_id: s_t3kC62ja6QkKT6GNFg3yzY
          stance: supports
          locator: CBDB:267655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267655）
          source: &a1
            id: s_t3kC62ja6QkKT6GNFg3yzY
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 267655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json
            external_identifier: CBDB:267655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5LRkt7ZwaisYN7QWGzkRV
        subject_person_id: p_PAy7yCJuqqeX8LtX4fFuFY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_unjNvU3SZsKvEYRQTds950
          claim_id: c_G5LRkt7ZwaisYN7QWGzkRV
          source_id: s_t3kC62ja6QkKT6GNFg3yzY
          stance: supports
          locator: CBDB:267655
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tk85QG2XEOZAAl11MPkY21
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PAy7yCJuqqeX8LtX4fFuFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dOIRZDawoOHczs99oCqZxB
          claim_id: c_tk85QG2XEOZAAl11MPkY21
          source_id: s_VI2zJ99fqOg9fTfkMPTFzX
          stance: supports
          locator: CBDB：兄弟 王壽（201134）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王翰 与 王壽 为同胞（CBDB 记「兄」），王壽 之父／母即 王翰 之父／母。
          source:
            id: s_VI2zJ99fqOg9fTfkMPTFzX
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 267655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json
            external_identifier: CBDB:267655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ncCPBjMxsJMBARy66EQjw
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3La0JCuBJa3Akj7IhU9iR7
        subject_person_id: p_PAy7yCJuqqeX8LtX4fFuFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ndnoReSKKxJOe7MtPZWL-U
          claim_id: c_3La0JCuBJa3Akj7IhU9iR7
          source_id: s_VI2zJ99fqOg9fTfkMPTFzX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201134 王壽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VI2zJ99fqOg9fTfkMPTFzX
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 267655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json
            external_identifier: CBDB:267655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        status: active
        display_name: 王壽
        merged_into_person_id: null
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，明人物。弘治九年進士，籍贯婺源。（中国历代人物传记资料库 CBDB 267655） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ncCPBjMxsJMBARy66EQjw | 王俊 | accepted |
| other | p_qLd4Pf4cDMmmQ6kBWSiJ8T | 王壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 267655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267655&o=json)

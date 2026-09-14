---
schema: wang-person/v1
id: p_i1EJ1VcpHtzDWYAhxWgCGc
status: active
merged_into: null
display_name: 王棟
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5VtHu7Bv5LTUEGbvB9guiM
        subject_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZkCpNkv4sM2zxgHsy8hT2B
          claim_id: c_5VtHu7Bv5LTUEGbvB9guiM
          source_id: s_yB1TLZjJyAeRRYb8Yhf7En
          stance: supports
          locator: CBDB:283701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283701）
          source: &a1
            id: s_yB1TLZjJyAeRRYb8Yhf7En
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_whUfizW8is5PJSsudW3ATE
        subject_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bE-N5otNL7kLO4-9lfvNYS
          claim_id: c_whUfizW8is5PJSsudW3ATE
          source_id: s_yB1TLZjJyAeRRYb8Yhf7En
          stance: supports
          locator: CBDB:283701
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GrH8IlVz9J01NkbNwOLbQk
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB6GnyqX213HyHXULAkz_U
          claim_id: c_GrH8IlVz9J01NkbNwOLbQk
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王棟 之父／母。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WGTXhvZwykJYxI0R6uUIW-
        subject_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uyf2XH4InGokPKf7jDhxlk
          claim_id: c_WGTXhvZwykJYxI0R6uUIW-
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VzREVG9zqkmWPrWDHfGpmG
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_f6oyrUfRH5G6HNe3z7QFGz
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBLoR5tpqY1sM1n1polM2V
          claim_id: c_f6oyrUfRH5G6HNe3z7QFGz
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDYJiKmBDGx8GATz5Lz7eZ
        status: active
        display_name: 王楠
        merged_into_person_id: null
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| other | p_VzREVG9zqkmWPrWDHfGpmG | 王楊 | accepted |
| other | p_GDYJiKmBDGx8GATz5Lz7eZ | 王楠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 283701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json)

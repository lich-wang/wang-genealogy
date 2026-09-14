---
schema: wang-person/v1
id: p_io3ooxGXfNCYSF3m4cM433
status: active
merged_into: null
display_name: 王宗敏
cbdb_id: 307077
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Ngqt4ktv7kaDknfstELUy
        subject_person_id: p_io3ooxGXfNCYSF3m4cM433
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗敏，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5DCF47ENULgU-WGO-jZoRY
          claim_id: c_4Ngqt4ktv7kaDknfstELUy
          source_id: s_bhxZFSQF7ZKgAernWcR1iG
          stance: supports
          locator: CBDB:307077
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bhxZFSQF7ZKgAernWcR1iG
            source_type: api_record
            title: 中国历代人物传记资料库：王宗敏（CBDB 307077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json
            external_identifier: CBDB:307077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6A6rqzP5cn2d6wZ7v3TthU
        subject_person_id: p_io3ooxGXfNCYSF3m4cM433
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6NgmeAj2xJ3vxtFHWYVfG6
          claim_id: c_6A6rqzP5cn2d6wZ7v3TthU
          source_id: s_bhxZFSQF7ZKgAernWcR1iG
          stance: supports
          locator: CBDB:307077
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1htE8m1xFBZKkPzHCLFWdZ
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_io3ooxGXfNCYSF3m4cM433
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uf50qtW0uaMCgycc-A7QP6
          claim_id: c_1htE8m1xFBZKkPzHCLFWdZ
          source_id: s_B0NhW6OcYw5EXT5nXPoWfS
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗敏 与 王宗性 为同胞（CBDB 记「兄」），王宗性 之父／母即 王宗敏 之父／母。
          source:
            id: s_B0NhW6OcYw5EXT5nXPoWfS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗敏（CBDB 307077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json
            external_identifier: CBDB:307077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jgqvj6yRuFScRYzYpcimRZ
        status: active
        display_name: 王士彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1F_-M4y-75Kx-hPNU-3hM5
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_io3ooxGXfNCYSF3m4cM433
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1c8aGz_kmdQZ5CbM92kzGS
          claim_id: c_1F_-M4y-75Kx-hPNU-3hM5
          source_id: s_B0NhW6OcYw5EXT5nXPoWfS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203595 王宗性）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B0NhW6OcYw5EXT5nXPoWfS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗敏（CBDB 307077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json
            external_identifier: CBDB:307077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
---

# 王宗敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗敏，明人物。嘉靖二十三年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 307077） | accepted |
| name.primary | 王宗敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgqvj6yRuFScRYzYpcimRZ | 王士彦 | accepted |
| other | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗敏（CBDB 307077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json)

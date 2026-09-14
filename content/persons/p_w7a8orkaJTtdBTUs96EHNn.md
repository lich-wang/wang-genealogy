---
schema: wang-person/v1
id: p_w7a8orkaJTtdBTUs96EHNn
status: active
merged_into: null
display_name: 王宗賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EA8ZPKVfw7sbzQUFuHXNw
        subject_person_id: p_w7a8orkaJTtdBTUs96EHNn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hucP77oK3mahKH7WhVdzQ4
          claim_id: c_9EA8ZPKVfw7sbzQUFuHXNw
          source_id: s_PmT8HLhGQSygmicRqhs282
          stance: supports
          locator: CBDB:307069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307069）
          source: &a1
            id: s_PmT8HLhGQSygmicRqhs282
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 307069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json
            external_identifier: CBDB:307069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zsc359mS6M6npWFXb2nk6K
        subject_person_id: p_w7a8orkaJTtdBTUs96EHNn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗賢，明人物。嘉靖二十三年進士，籍贯沂州，曾任長史。（中国历代人物传记资料库 CBDB 307069）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T6mVq4_hQyvoN9PRHwqkY6
          claim_id: c_Zsc359mS6M6npWFXb2nk6K
          source_id: s_PmT8HLhGQSygmicRqhs282
          stance: supports
          locator: CBDB:307069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w4ak6bD6OGZHqqP0xvpMw2
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w7a8orkaJTtdBTUs96EHNn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctmG7X8jWB2ptJXhReSnoS
          claim_id: c_w4ak6bD6OGZHqqP0xvpMw2
          source_id: s_qQh1JO8fu6KCYaJ5lQxDEL
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗賢 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗賢 之父／母。
          source:
            id: s_qQh1JO8fu6KCYaJ5lQxDEL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 307069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json
            external_identifier: CBDB:307069
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
        id: c_maAMc0EV9x9C-tqwtTSKJi
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w7a8orkaJTtdBTUs96EHNn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xL-vtzW-vKK3InVpn9FQsl
          claim_id: c_maAMc0EV9x9C-tqwtTSKJi
          source_id: s_qQh1JO8fu6KCYaJ5lQxDEL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203595 王宗性）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qQh1JO8fu6KCYaJ5lQxDEL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 307069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json
            external_identifier: CBDB:307069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
---

# 王宗賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗賢 | accepted |
| bio.summary | 王宗賢，明人物。嘉靖二十三年進士，籍贯沂州，曾任長史。（中国历代人物传记资料库 CBDB 307069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgqvj6yRuFScRYzYpcimRZ | 王士彦 | accepted |
| other | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗賢（CBDB 307069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json)

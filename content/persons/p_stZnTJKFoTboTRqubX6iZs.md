---
schema: wang-person/v1
id: p_stZnTJKFoTboTRqubX6iZs
status: active
merged_into: null
display_name: 王瓚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_inVVrEQY7m9nwwD6G7cB9K
        subject_person_id: p_stZnTJKFoTboTRqubX6iZs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1X7EMmHWhrQBfnNXVKUVq
          claim_id: c_inVVrEQY7m9nwwD6G7cB9K
          source_id: s_gJgLKFB8C8MccJ6DtmHGc2
          stance: supports
          locator: CBDB:284076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284076）
          source: &a1
            id: s_gJgLKFB8C8MccJ6DtmHGc2
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 284076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json
            external_identifier: CBDB:284076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.173Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2PhBptf1edo4sAHbyeWTLo
        subject_person_id: p_stZnTJKFoTboTRqubX6iZs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2G0ZkRNjOZCmFxxY0SlqUZ
          claim_id: c_2PhBptf1edo4sAHbyeWTLo
          source_id: s_gJgLKFB8C8MccJ6DtmHGc2
          stance: supports
          locator: CBDB:284076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w-q_nCPl80x7-_FG8MHNkd
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stZnTJKFoTboTRqubX6iZs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PpEAIUoxZ4K5jBfVPGNKB
          claim_id: c_w-q_nCPl80x7-_FG8MHNkd
          source_id: s_n-QGD3KDcCW4jRrYNw96Bc
          stance: supports
          locator: CBDB：兄弟 王瑤（198525）之父／母 王淙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王瑤 为同胞（CBDB 记「兄」），王瑤 之父／母即 王瓚 之父／母。
          source:
            id: s_n-QGD3KDcCW4jRrYNw96Bc
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 284076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json
            external_identifier: CBDB:284076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XjzxeCwh2jc3G7T2sJ2fKN
        status: active
        display_name: 王淙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_c7hBH_7PbTzQ_Op92Ng3ll
        subject_person_id: p_6qZv86jCoBwmThHEXBGAvS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stZnTJKFoTboTRqubX6iZs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IY1MpJxZl1XbwnVc8_bcY4
          claim_id: c_c7hBH_7PbTzQ_Op92Ng3ll
          source_id: s_n-QGD3KDcCW4jRrYNw96Bc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198525 王瑤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n-QGD3KDcCW4jRrYNw96Bc
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 284076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json
            external_identifier: CBDB:284076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6qZv86jCoBwmThHEXBGAvS
        status: active
        display_name: 王瑤
        merged_into_person_id: null
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XjzxeCwh2jc3G7T2sJ2fKN | 王淙 | accepted |
| other | p_6qZv86jCoBwmThHEXBGAvS | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 284076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json)

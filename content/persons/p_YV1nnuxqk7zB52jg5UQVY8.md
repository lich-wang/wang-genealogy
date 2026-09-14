---
schema: wang-person/v1
id: p_YV1nnuxqk7zB52jg5UQVY8
status: active
merged_into: null
display_name: 王瑩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cp9QjJ6cN5jSRspX8ftvrQ
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KXoh6f4zCBBXmouezNbsVq
          claim_id: c_cp9QjJ6cN5jSRspX8ftvrQ
          source_id: s_FL8HFyG4E7gkZe9TvHQH9N
          stance: supports
          locator: CBDB:331072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331072）
          source: &a1
            id: s_FL8HFyG4E7gkZe9TvHQH9N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQ8UMPXBau119WhNx14L7b
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CECSM3miW0s5JKq1s4w3-9
          claim_id: c_RQ8UMPXBau119WhNx14L7b
          source_id: s_FL8HFyG4E7gkZe9TvHQH9N
          stance: supports
          locator: CBDB:331072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RJzGP0HUE2np5kv3ytDtmN
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3qsNkjNvKbgu0nU0hxH5BT
          claim_id: c_RJzGP0HUE2np5kv3ytDtmN
          source_id: s__hjrxw45MmsqfwmLXp5-3p
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑩 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑩 之父／母。
          source:
            id: s__hjrxw45MmsqfwmLXp5-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GfRo7ojPV7D16XBUWZ7Rwa
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_loCwCSzERe1ML4NoBSFQtJ
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WgEageQF439ag64n3xlgIR
          claim_id: c_loCwCSzERe1ML4NoBSFQtJ
          source_id: s__hjrxw45MmsqfwmLXp5-3p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__hjrxw45MmsqfwmLXp5-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o84m9e1kQDV1djF1562w8T
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | 王瑩，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GfRo7ojPV7D16XBUWZ7Rwa | 王紹 | accepted |
| other | p_o84m9e1kQDV1djF1562w8T | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 331072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json)

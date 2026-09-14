---
schema: wang-person/v1
id: p_PbyqkA5KdNBk7sXJ6ndxuk
status: active
merged_into: null
display_name: 王象離
cbdb_id: 330759
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v9CnYWzRApgZGbGaEWpAGp
        subject_person_id: p_PbyqkA5KdNBk7sXJ6ndxuk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象離，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330759）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_79DgK-VTsiR0tIhHffWvkU
          claim_id: c_v9CnYWzRApgZGbGaEWpAGp
          source_id: s_wAHTdsHEoxo3kEXVN6CmUB
          stance: supports
          locator: CBDB:330759
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wAHTdsHEoxo3kEXVN6CmUB
            source_type: api_record
            title: 中国历代人物传记资料库：王象離（CBDB 330759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json
            external_identifier: CBDB:330759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lg5LWfX2VNuG72u2LCAYBx
        subject_person_id: p_PbyqkA5KdNBk7sXJ6ndxuk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象離
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fBBRXEokigvu3KMyWz3L7w
          claim_id: c_Lg5LWfX2VNuG72u2LCAYBx
          source_id: s_wAHTdsHEoxo3kEXVN6CmUB
          stance: supports
          locator: CBDB:330759
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TR3AepRAIDJ-uYBfkUtcm7
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbyqkA5KdNBk7sXJ6ndxuk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQTlxPRt8lXNQ_So4eXVQl
          claim_id: c_TR3AepRAIDJ-uYBfkUtcm7
          source_id: s_YKcAXXEr0SQ5d6bTvQZ89F
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象離 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象離 之父／母。
          source:
            id: s_YKcAXXEr0SQ5d6bTvQZ89F
            source_type: api_record
            title: 中国历代人物传记资料库：王象離（CBDB 330759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json
            external_identifier: CBDB:330759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKu7Q79dhYjH69pKrRtR5y
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CJSYr2F7m5669hx9lsWRvW
        subject_person_id: p_PbyqkA5KdNBk7sXJ6ndxuk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvF5qI97FnnTEi_tQ1dqsN
          claim_id: c_CJSYr2F7m5669hx9lsWRvW
          source_id: s_YKcAXXEr0SQ5d6bTvQZ89F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205267 王象坤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YKcAXXEr0SQ5d6bTvQZ89F
            source_type: api_record
            title: 中国历代人物传记资料库：王象離（CBDB 330759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json
            external_identifier: CBDB:330759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
---

# 王象離

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象離，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330759） | accepted |
| name.primary | 王象離 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AKu7Q79dhYjH69pKrRtR5y | 王之翰 | accepted |
| other | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象離（CBDB 330759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330759&o=json)

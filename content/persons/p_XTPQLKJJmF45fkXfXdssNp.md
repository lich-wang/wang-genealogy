---
schema: wang-person/v1
id: p_XTPQLKJJmF45fkXfXdssNp
status: active
merged_into: null
display_name: 王銳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a6An1tRCks6kL1RYskhGM6
        subject_person_id: p_XTPQLKJJmF45fkXfXdssNp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FSCn7qY1e4DcnqKrbF48Hz
          claim_id: c_a6An1tRCks6kL1RYskhGM6
          source_id: s_QWPP3miMjzbueSpLwYM3KQ
          stance: supports
          locator: CBDB:247847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247847）
          source: &a1
            id: s_QWPP3miMjzbueSpLwYM3KQ
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 247847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json
            external_identifier: CBDB:247847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MHmmrrZJfqAo1TBgX6E88j
        subject_person_id: p_XTPQLKJJmF45fkXfXdssNp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gzJ_Y5Uqb3wCz2JkyrvX31
          claim_id: c_MHmmrrZJfqAo1TBgX6E88j
          source_id: s_QWPP3miMjzbueSpLwYM3KQ
          stance: supports
          locator: CBDB:247847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CUS0EN9t0hoTQokjA5k05i
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XTPQLKJJmF45fkXfXdssNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u0MB8D4MugkIWWDKxQTgBB
          claim_id: c_CUS0EN9t0hoTQokjA5k05i
          source_id: s_3Diwk7A8qSN_9sSU4XpQ_H
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王銳 之父／母。
          source:
            id: s_3Diwk7A8qSN_9sSU4XpQ_H
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 247847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json
            external_identifier: CBDB:247847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7ZciGt042yTXdAFcLGKb8D
        subject_person_id: p_XTPQLKJJmF45fkXfXdssNp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4TeTGoYEuE-kJcmNFV7nw
          claim_id: c_7ZciGt042yTXdAFcLGKb8D
          source_id: s_3Diwk7A8qSN_9sSU4XpQ_H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3Diwk7A8qSN_9sSU4XpQ_H
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 247847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json
            external_identifier: CBDB:247847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 247847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247847&o=json)

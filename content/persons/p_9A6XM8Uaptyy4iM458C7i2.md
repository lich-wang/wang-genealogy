---
schema: wang-person/v1
id: p_9A6XM8Uaptyy4iM458C7i2
status: active
merged_into: null
display_name: 王之才
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4ohVpLv7JD9BHZKEEWnN7
        subject_person_id: p_9A6XM8Uaptyy4iM458C7i2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tteaZG9N3vuEt5TNQAQADQ
          claim_id: c_b4ohVpLv7JD9BHZKEEWnN7
          source_id: s_7HrcjbRaAmZkNCsBqtMe6t
          stance: supports
          locator: CBDB:334261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334261）
          source: &a1
            id: s_7HrcjbRaAmZkNCsBqtMe6t
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 334261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json
            external_identifier: CBDB:334261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h7hCdST8CRu6S3HTva8xgj
        subject_person_id: p_9A6XM8Uaptyy4iM458C7i2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_awHiXosqX6A1tkvsnOPFo2
          claim_id: c_h7hCdST8CRu6S3HTva8xgj
          source_id: s_7HrcjbRaAmZkNCsBqtMe6t
          stance: supports
          locator: CBDB:334261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lMu5JzRiT4vnyU5G_4yeWA
        subject_person_id: p_an8AZhFejWmrpm1FYeSJN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9A6XM8Uaptyy4iM458C7i2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hkUdJv0LM1xmS1aQS5aGY2
          claim_id: c_lMu5JzRiT4vnyU5G_4yeWA
          source_id: s_gFjS9_0BbEFdhaJqiKh2ma
          stance: supports
          locator: CBDB：兄弟 王之士（126462）之父／母 王陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王之才 与 王之士 为同胞（CBDB 记「兄」），王之士 之父／母即 王之才 之父／母。
          source:
            id: s_gFjS9_0BbEFdhaJqiKh2ma
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 334261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json
            external_identifier: CBDB:334261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_an8AZhFejWmrpm1FYeSJN6
        status: active
        display_name: 王陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YL9o9OlzJHgstTUeJgavdZ
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9A6XM8Uaptyy4iM458C7i2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5DvXi_8sm-MtJj6LCiHHB
          claim_id: c_YL9o9OlzJHgstTUeJgavdZ
          source_id: s_gFjS9_0BbEFdhaJqiKh2ma
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126462 王之士）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gFjS9_0BbEFdhaJqiKh2ma
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 334261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json
            external_identifier: CBDB:334261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2WkB5UHe7A5kLMMt82Na3L
        status: active
        display_name: 王之士
        merged_into_person_id: null
---

# 王之才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之才 | accepted |
| bio.summary | 王之才，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_an8AZhFejWmrpm1FYeSJN6 | 王陽 | accepted |
| other | p_2WkB5UHe7A5kLMMt82Na3L | 王之士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之才（CBDB 334261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json)

---
schema: wang-person/v1
id: p_JC4xS6ndeTfcDNDrJZuDCx
status: active
merged_into: null
display_name: 王瓚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PmdKtm3xYrYf3PFAdaH9ti
        subject_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
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
        - id: cs_jQ3i2CGR9GhXDfswXxzhiw
          claim_id: c_PmdKtm3xYrYf3PFAdaH9ti
          source_id: s_BHK12WH9T4TAmUMfSfWNvY
          stance: supports
          locator: CBDB:241035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241035）
          source: &a1
            id: s_BHK12WH9T4TAmUMfSfWNvY
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 241035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json
            external_identifier: CBDB:241035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pQzFvk1wuN26ePB7NdC4mz
        subject_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GTt1CR6JoBbPj8DyMI1CHc
          claim_id: c_pQzFvk1wuN26ePB7NdC4mz
          source_id: s_BHK12WH9T4TAmUMfSfWNvY
          stance: supports
          locator: CBDB:241035
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5zJzrzvC6BNAj3X953kYOm
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kUUgmYlhXNAtP8XiisMEN0
          claim_id: c_5zJzrzvC6BNAj3X953kYOm
          source_id: s_GB6mfUtaMWbucTEHClrZII
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王瓚 之父／母。
          source:
            id: s_GB6mfUtaMWbucTEHClrZII
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 241035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json
            external_identifier: CBDB:241035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kaRFgEVMADyEpNGFyiYQu5
        status: active
        display_name: 王汝義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_onrEl6xzE4t9JRAwr61pv0
        subject_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8v3s5N6V7DIU5QL8-pgaS
          claim_id: c_onrEl6xzE4t9JRAwr61pv0
          source_id: s_GB6mfUtaMWbucTEHClrZII
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GB6mfUtaMWbucTEHClrZII
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 241035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json
            external_identifier: CBDB:241035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yUh5Ys3GsJr5X9EvLigP9m
        status: active
        display_name: 王璧
        merged_into_person_id: null
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kaRFgEVMADyEpNGFyiYQu5 | 王汝義 | accepted |
| other | p_yUh5Ys3GsJr5X9EvLigP9m | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 241035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json)

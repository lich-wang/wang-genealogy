---
schema: wang-person/v1
id: p_ADCwD8mJr4YTwEg7bB9rKh
status: active
merged_into: null
display_name: 王卣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s88oBt5WsqLkoMZyX6vYqq
        subject_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hAfXNSncNmRsKj5TC5BwUL
          claim_id: c_s88oBt5WsqLkoMZyX6vYqq
          source_id: s_pNF5kneq6MdWSc3kWrCLLi
          stance: supports
          locator: CBDB:243172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243172）
          source: &a1
            id: s_pNF5kneq6MdWSc3kWrCLLi
            source_type: api_record
            title: 中国历代人物传记资料库：王卣（CBDB 243172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json
            external_identifier: CBDB:243172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qEaq5xQgUp5NqLjSoNo2kJ
        subject_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卣，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bjhJNgfMeIFiT45G8gxfqg
          claim_id: c_qEaq5xQgUp5NqLjSoNo2kJ
          source_id: s_pNF5kneq6MdWSc3kWrCLLi
          stance: supports
          locator: CBDB:243172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jI0-jFUg_2jFwb96FUkruA
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0AJOGBwLZJkJP4tPV4Jib0
          claim_id: c_jI0-jFUg_2jFwb96FUkruA
          source_id: s_k7snzxg1K5TgxFfw-wwc-R
          stance: supports
          locator: CBDB：兄弟 王鼎（67755）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王卣 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王卣 之父／母。
          source:
            id: s_k7snzxg1K5TgxFfw-wwc-R
            source_type: api_record
            title: 中国历代人物传记资料库：王卣（CBDB 243172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json
            external_identifier: CBDB:243172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hh7o2AX3pCLwbnQdJRNfAA
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_odxv7Y5H6Xc3k4jjsqCK9q
        subject_person_id: p_ADCwD8mJr4YTwEg7bB9rKh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_gfRVaxgdt_7PgxiJp8dj
          claim_id: c_odxv7Y5H6Xc3k4jjsqCK9q
          source_id: s_k7snzxg1K5TgxFfw-wwc-R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67755 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k7snzxg1K5TgxFfw-wwc-R
            source_type: api_record
            title: 中国历代人物传记资料库：王卣（CBDB 243172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json
            external_identifier: CBDB:243172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GiENj1L3SMUyiHFegryAJV
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王卣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卣 | accepted |
| bio.summary | 王卣，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hh7o2AX3pCLwbnQdJRNfAA | 王綱 | accepted |
| other | p_GiENj1L3SMUyiHFegryAJV | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卣（CBDB 243172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243172&o=json)

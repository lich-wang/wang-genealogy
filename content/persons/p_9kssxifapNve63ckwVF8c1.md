---
schema: wang-person/v1
id: p_9kssxifapNve63ckwVF8c1
status: active
merged_into: null
display_name: 王一元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGTrai6GzFvD4pAtgkcTqH
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8F9PxH2uRk96BoWp1pLY7v
          claim_id: c_YGTrai6GzFvD4pAtgkcTqH
          source_id: s_f1YZ5XEC2L5XdJh3FzVoLh
          stance: supports
          locator: CBDB:213982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213982）
          source: &a1
            id: s_f1YZ5XEC2L5XdJh3FzVoLh
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iaGhH9HyGhod6472q3d6KZ
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一元，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213982）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3Ij2xtcft7AwcJV-U5hxH
          claim_id: c_iaGhH9HyGhod6472q3d6KZ
          source_id: s_f1YZ5XEC2L5XdJh3FzVoLh
          stance: supports
          locator: CBDB:213982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rd9XDu1hY4vV2xOzCA7RJI
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9kssxifapNve63ckwVF8c1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xarmDZZq4TeRqb_7hUZ4g4
          claim_id: c_rd9XDu1hY4vV2xOzCA7RJI
          source_id: s_42cgDSd_6_DqK2Vu457A6i
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一元 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一元 之父／母。
          source:
            id: s_42cgDSd_6_DqK2Vu457A6i
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_87hkbt30b4GHw215PMK4jF
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqcIW-4AahkLvy6jX1oeWm
          claim_id: c_87hkbt30b4GHw215PMK4jF
          source_id: s_42cgDSd_6_DqK2Vu457A6i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_42cgDSd_6_DqK2Vu457A6i
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一元 | accepted |
| bio.summary | 王一元，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| other | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一元（CBDB 213982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json)

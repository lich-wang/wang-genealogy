---
schema: wang-person/v1
id: p_JkVGYLSCTsNP1UEn97gdK7
status: active
merged_into: null
display_name: 王明善
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rdj9G5SCHMikE5QnDm8ZgA
        subject_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f7WM9iE6G3vKAziZc6CcHM
          claim_id: c_Rdj9G5SCHMikE5QnDm8ZgA
          source_id: s_Aeqk3RST8gN6B9Ub421N5c
          stance: supports
          locator: CBDB:280180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280180）
          source: &a1
            id: s_Aeqk3RST8gN6B9Ub421N5c
            source_type: api_record
            title: 中国历代人物传记资料库：王明善（CBDB 280180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json
            external_identifier: CBDB:280180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_inMKmrPGthuL2NTNG2Nyqo
        subject_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明善，明人物。正德十二年進士，籍贯襄陽衛。（中国历代人物传记资料库 CBDB 280180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kVTSaU8SYHpV1bIWBdiLl6
          claim_id: c_inMKmrPGthuL2NTNG2Nyqo
          source_id: s_Aeqk3RST8gN6B9Ub421N5c
          stance: supports
          locator: CBDB:280180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HMSN6AK9wYXfiA10XhIwKM
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrGm1ZNZhQwytHhylh57BR
          claim_id: c_HMSN6AK9wYXfiA10XhIwKM
          source_id: s_uEinUD5sV9J9CILv_tz14-
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王明善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王明善 之父／母。
          source:
            id: s_uEinUD5sV9J9CILv_tz14-
            source_type: api_record
            title: 中国历代人物传记资料库：王明善（CBDB 280180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json
            external_identifier: CBDB:280180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N7Z4wmfmL9xzTY7zGpnMb
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U93Bv_eSAmHyf8gWjmEWUC
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5eU393KBndnYuKzG8Zx-f3
          claim_id: c_U93Bv_eSAmHyf8gWjmEWUC
          source_id: s_uEinUD5sV9J9CILv_tz14-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEinUD5sV9J9CILv_tz14-
            source_type: api_record
            title: 中国历代人物传记资料库：王明善（CBDB 280180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json
            external_identifier: CBDB:280180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
---

# 王明善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明善 | accepted |
| bio.summary | 王明善，明人物。正德十二年進士，籍贯襄陽衛。（中国历代人物传记资料库 CBDB 280180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| other | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明善（CBDB 280180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json)

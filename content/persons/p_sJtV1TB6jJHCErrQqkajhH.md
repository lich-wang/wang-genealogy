---
schema: wang-person/v1
id: p_sJtV1TB6jJHCErrQqkajhH
status: active
merged_into: null
display_name: 王瑭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v1XJQbW5EPQDW8zALPMjxS
        subject_person_id: p_sJtV1TB6jJHCErrQqkajhH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ai6ktm83hmJJAKdyC16HsQ
          claim_id: c_v1XJQbW5EPQDW8zALPMjxS
          source_id: s_VLVYTwz3F1MJrDMY3cKeuD
          stance: supports
          locator: CBDB:277201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277201）
          source: &a1
            id: s_VLVYTwz3F1MJrDMY3cKeuD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 277201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json
            external_identifier: CBDB:277201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ey6ZeUkBJmjGqhtjjJw34i
        subject_person_id: p_sJtV1TB6jJHCErrQqkajhH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑭，明人物。正德六年進士，籍贯當塗。（中国历代人物传记资料库 CBDB 277201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r-UUdYYZ0nrDVf2bpW5P6B
          claim_id: c_ey6ZeUkBJmjGqhtjjJw34i
          source_id: s_VLVYTwz3F1MJrDMY3cKeuD
          stance: supports
          locator: CBDB:277201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-xziHg2nIXFPYIBwASg32Y
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sJtV1TB6jJHCErrQqkajhH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HEk_OOLZ0mPGr985vahbFM
          claim_id: c_-xziHg2nIXFPYIBwASg32Y
          source_id: s_n2XrZvgWiAlunpY76q8wJY
          stance: supports
          locator: CBDB：兄弟 王瑋（201725）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑭 与 王瑋 为同胞（CBDB 记「兄」），王瑋 之父／母即 王瑭 之父／母。
          source:
            id: s_n2XrZvgWiAlunpY76q8wJY
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 277201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json
            external_identifier: CBDB:277201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DDiCpk3Tkb1KzEtaueBUHR
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_C6cwOSJebVOGeV0-_2JEhs
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sJtV1TB6jJHCErrQqkajhH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U30WokK2s2sltskCWbBTiq
          claim_id: c_C6cwOSJebVOGeV0-_2JEhs
          source_id: s_n2XrZvgWiAlunpY76q8wJY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201725 王瑋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n2XrZvgWiAlunpY76q8wJY
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 277201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json
            external_identifier: CBDB:277201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dC2kXoLn9HGUMNL9QippS6
        status: active
        display_name: 王瑋
        merged_into_person_id: null
---

# 王瑭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑭 | accepted |
| bio.summary | 王瑭，明人物。正德六年進士，籍贯當塗。（中国历代人物传记资料库 CBDB 277201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DDiCpk3Tkb1KzEtaueBUHR | 王良 | accepted |
| other | p_dC2kXoLn9HGUMNL9QippS6 | 王瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑭（CBDB 277201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277201&o=json)

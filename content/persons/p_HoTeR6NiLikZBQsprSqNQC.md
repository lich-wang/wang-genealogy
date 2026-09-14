---
schema: wang-person/v1
id: p_HoTeR6NiLikZBQsprSqNQC
status: active
merged_into: null
display_name: 王蕩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WG94ci4DPsKyscpbyQQsHQ
        subject_person_id: p_HoTeR6NiLikZBQsprSqNQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WjAMGeFUhpB9VK95KkvDWj
          claim_id: c_WG94ci4DPsKyscpbyQQsHQ
          source_id: s_ui977UqUYsAuEoPVG1WNtB
          stance: supports
          locator: CBDB:252991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252991）
          source: &a1
            id: s_ui977UqUYsAuEoPVG1WNtB
            source_type: api_record
            title: 中国历代人物传记资料库：王蕩（CBDB 252991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json
            external_identifier: CBDB:252991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFBLyoX4SHJHTtQ2LoY4UM
        subject_person_id: p_HoTeR6NiLikZBQsprSqNQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕩，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 252991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rPJm0XO8lvhut5hg4yF2uG
          claim_id: c_EFBLyoX4SHJHTtQ2LoY4UM
          source_id: s_ui977UqUYsAuEoPVG1WNtB
          stance: supports
          locator: CBDB:252991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5ctDr6QOG3iXojjrHUj2r_
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HoTeR6NiLikZBQsprSqNQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1wQFeZtGwhYH9HBECWsTn2
          claim_id: c_5ctDr6QOG3iXojjrHUj2r_
          source_id: s_MeVX1sAXQ8IEn1PO8NX-_t
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王蕩 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王蕩 之父／母。
          source:
            id: s_MeVX1sAXQ8IEn1PO8NX-_t
            source_type: api_record
            title: 中国历代人物传记资料库：王蕩（CBDB 252991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json
            external_identifier: CBDB:252991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PGU15Ugu5s9NEWpLjgtEC5
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F3QOb4sGefJGpw_s6ZmYbp
        subject_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HoTeR6NiLikZBQsprSqNQC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTlNCmc98D3C8Fvut6YIv1
          claim_id: c_F3QOb4sGefJGpw_s6ZmYbp
          source_id: s_MeVX1sAXQ8IEn1PO8NX-_t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198292 王齊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MeVX1sAXQ8IEn1PO8NX-_t
            source_type: api_record
            title: 中国历代人物传记资料库：王蕩（CBDB 252991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json
            external_identifier: CBDB:252991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
---

# 王蕩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕩 | accepted |
| bio.summary | 王蕩，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 252991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PGU15Ugu5s9NEWpLjgtEC5 | 王獻 | accepted |
| other | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕩（CBDB 252991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json)

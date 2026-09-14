---
schema: wang-person/v1
id: p_X8L3VuucF7CjfcSpgUwBjH
status: active
merged_into: null
display_name: 王宜
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wcK2hDpxCzEwrPE4F5k2JA
        subject_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6xQsjqQd18AEqmXedHkMBG
          claim_id: c_wcK2hDpxCzEwrPE4F5k2JA
          source_id: s_UTDFXm16yP6h35QTsMHvHL
          stance: supports
          locator: CBDB:278859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278859）
          source: &a1
            id: s_UTDFXm16yP6h35QTsMHvHL
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6LYuVSgVdY9kW7PFmizet
        subject_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1IXCXYE9LMw843s2KauZxc
          claim_id: c_p6LYuVSgVdY9kW7PFmizet
          source_id: s_UTDFXm16yP6h35QTsMHvHL
          stance: supports
          locator: CBDB:278859
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-1y5QTjBSEp5WqYaoY2v43
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rua6dwaSvbOBcRj7ojLT5V
          claim_id: c_-1y5QTjBSEp5WqYaoY2v43
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB：兄弟 王完（201827）之父／母 王紹某
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王完 为同胞（CBDB 记「弟」），王完 之父／母即 王宜 之父／母。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
    - claim:
        id: c_SZJvCb0MdBprHzpUG-N8f-
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vGr8XS62AQoGbJ6dEnTzYH
          claim_id: c_SZJvCb0MdBprHzpUG-N8f-
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王宜 之父／母。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_o9PPue_An8KOVkI2dPvm_I
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFn10kaoiAaS13ws28zc3o
          claim_id: c_o9PPue_An8KOVkI2dPvm_I
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_Yf3ik6mm66edWFrYhUpugk
        subject_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3AIZWYNjpoFrnCrybxkopB
          claim_id: c_Yf3ik6mm66edWFrYhUpugk
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | 王宜，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| other | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |
| other | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 278859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json)

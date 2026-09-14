---
schema: wang-person/v1
id: p_6aKDd5bp48i8wNWFQw3Ra1
status: active
merged_into: null
display_name: 王闉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ZMqzx6Jf63WKMxAaA1Mya
        subject_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4RR6WiM33HhahpLqawP69a
          claim_id: c_4ZMqzx6Jf63WKMxAaA1Mya
          source_id: s_o1c13NeMe2wSytSqQRDBpA
          stance: supports
          locator: CBDB:213943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213943）
          source: &a1
            id: s_o1c13NeMe2wSytSqQRDBpA
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 213943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json
            external_identifier: CBDB:213943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fqmDCMLcjagPGUGsmK1aAS
        subject_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闉，明人物。萬曆二年進士，籍贯清苑，曾任府同知。（中国历代人物传记资料库 CBDB 213943）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AyQb2D95SoZblT0MoPCtdj
          claim_id: c_fqmDCMLcjagPGUGsmK1aAS
          source_id: s_o1c13NeMe2wSytSqQRDBpA
          stance: supports
          locator: CBDB:213943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D4DvY966iPMeWs-snmaTgS
        subject_person_id: p_NaFFWeby89s7T6a15SkTWd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GArFDB61sqJUSpCMFxHlDl
          claim_id: c_D4DvY966iPMeWs-snmaTgS
          source_id: s_ufJuGvhQ9G-np7HxpjPdk6
          stance: supports
          locator: CBDB：兄弟 王開（206147）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闉 与 王開 为同胞（CBDB 记「弟」），王開 之父／母即 王闉 之父／母。
          source:
            id: s_ufJuGvhQ9G-np7HxpjPdk6
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 213943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json
            external_identifier: CBDB:213943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NaFFWeby89s7T6a15SkTWd
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CJ-F0zUvdeb_2aleiBGXxJ
        subject_person_id: p_6aKDd5bp48i8wNWFQw3Ra1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GDsYhHNBBkDcpWQEYco8Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4KwWbf6u_bcwkf-MLF4eC
          claim_id: c_CJ-F0zUvdeb_2aleiBGXxJ
          source_id: s_ufJuGvhQ9G-np7HxpjPdk6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206147 王開）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ufJuGvhQ9G-np7HxpjPdk6
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 213943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json
            external_identifier: CBDB:213943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDsYhHNBBkDcpWQEYco8Kg
        status: active
        display_name: 王開
        merged_into_person_id: null
---

# 王闉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闉 | accepted |
| bio.summary | 王闉，明人物。萬曆二年進士，籍贯清苑，曾任府同知。（中国历代人物传记资料库 CBDB 213943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NaFFWeby89s7T6a15SkTWd | 王德純 | accepted |
| other | p_GDsYhHNBBkDcpWQEYco8Kg | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闉（CBDB 213943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213943&o=json)

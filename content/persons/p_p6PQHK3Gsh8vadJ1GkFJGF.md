---
schema: wang-person/v1
id: p_p6PQHK3Gsh8vadJ1GkFJGF
status: active
merged_into: null
display_name: 王問仁
cbdb_id: 329116
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_giy6tsT1cTfNLMQDEvaKC4
        subject_person_id: p_p6PQHK3Gsh8vadJ1GkFJGF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問仁，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329116）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oxeLqhWd1suuf19RieBEmT
          claim_id: c_giy6tsT1cTfNLMQDEvaKC4
          source_id: s_8KhSUr3QQaLdQphSQ3G9AY
          stance: supports
          locator: CBDB:329116
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8KhSUr3QQaLdQphSQ3G9AY
            source_type: api_record
            title: 中国历代人物传记资料库：王問仁（CBDB 329116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329116&o=json
            external_identifier: CBDB:329116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_243S6LwuFYKPpTaKsgLrxg
        subject_person_id: p_p6PQHK3Gsh8vadJ1GkFJGF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1wkRQJPJTop62AAxQp4344
          claim_id: c_243S6LwuFYKPpTaKsgLrxg
          source_id: s_8KhSUr3QQaLdQphSQ3G9AY
          stance: supports
          locator: CBDB:329116
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6Xaez-zfEXrsLuveulLhA4
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p6PQHK3Gsh8vadJ1GkFJGF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onSd3Oo3OrmGlBSXmBkAHG
          claim_id: c_6Xaez-zfEXrsLuveulLhA4
          source_id: s_-MkA8d1ecAc94H1q8VJn8h
          stance: supports
          locator: CBDB：兄弟 王問臣（205162）之父／母 王明
          quotation: null
          interpretation_note: 由兄弟关系推断：王問仁 与 王問臣 为同胞（CBDB 记「弟」），王問臣 之父／母即 王問仁 之父／母。
          source:
            id: s_-MkA8d1ecAc94H1q8VJn8h
            source_type: api_record
            title: 中国历代人物传记资料库：王問仁（CBDB 329116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329116&o=json
            external_identifier: CBDB:329116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Enkv6VPLQgLAYoVEPiVxJf
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kE21_BlucLL4oILbuohp30
        subject_person_id: p_p6PQHK3Gsh8vadJ1GkFJGF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d9wtKm6zoRP6c6PVuHD6VD
          claim_id: c_kE21_BlucLL4oILbuohp30
          source_id: s_-MkA8d1ecAc94H1q8VJn8h
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205162 王問臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-MkA8d1ecAc94H1q8VJn8h
            source_type: api_record
            title: 中国历代人物传记资料库：王問仁（CBDB 329116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329116&o=json
            external_identifier: CBDB:329116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q8kfUyHi4DSEJ6L6oLkg4M
        status: active
        display_name: 王問臣
        merged_into_person_id: null
---

# 王問仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王問仁，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329116） | accepted |
| name.primary | 王問仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Enkv6VPLQgLAYoVEPiVxJf | 王明 | accepted |
| other | p_q8kfUyHi4DSEJ6L6oLkg4M | 王問臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王問仁（CBDB 329116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329116&o=json)

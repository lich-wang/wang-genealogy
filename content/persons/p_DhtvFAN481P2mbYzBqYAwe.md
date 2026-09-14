---
schema: wang-person/v1
id: p_DhtvFAN481P2mbYzBqYAwe
status: active
merged_into: null
display_name: 王濯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHeC5vCNQoRbWGea71FGt6
        subject_person_id: p_DhtvFAN481P2mbYzBqYAwe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bENJ8e4AjX149nkd2W64ZM
          claim_id: c_AHeC5vCNQoRbWGea71FGt6
          source_id: s_UbjC8wsjdQUaDwcBALNuEs
          stance: supports
          locator: CBDB:318109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318109）
          source: &a1
            id: s_UbjC8wsjdQUaDwcBALNuEs
            source_type: api_record
            title: 中国历代人物传记资料库：王濯（CBDB 318109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json
            external_identifier: CBDB:318109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58Cyu1X7zvZyvpA681Xfuq
        subject_person_id: p_DhtvFAN481P2mbYzBqYAwe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濯，明人物。嘉靖三十二年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 318109）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8laU4Ttn51mDU-Xqn4X3jD
          claim_id: c_58Cyu1X7zvZyvpA681Xfuq
          source_id: s_UbjC8wsjdQUaDwcBALNuEs
          stance: supports
          locator: CBDB:318109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__12ZcMenwqdweSA8EA0yFR
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhtvFAN481P2mbYzBqYAwe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX05nhTpVmlKLPszh1HGiv
          claim_id: c__12ZcMenwqdweSA8EA0yFR
          source_id: s_HI2FSNY-c6daM2eaSLSMty
          stance: supports
          locator: CBDB：兄弟 王漸（204365）之父／母 王銳
          quotation: null
          interpretation_note: 由兄弟关系推断：王濯 与 王漸 为同胞（CBDB 记「弟」），王漸 之父／母即 王濯 之父／母。
          source:
            id: s_HI2FSNY-c6daM2eaSLSMty
            source_type: api_record
            title: 中国历代人物传记资料库：王濯（CBDB 318109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json
            external_identifier: CBDB:318109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jAZa72xQV94hCgdDQtVTKA
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XThGImDMQ6IVFGOjz92j59
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DhtvFAN481P2mbYzBqYAwe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGobQUd89niQhkbyBdxBZs
          claim_id: c_XThGImDMQ6IVFGOjz92j59
          source_id: s_HI2FSNY-c6daM2eaSLSMty
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204365 王漸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HI2FSNY-c6daM2eaSLSMty
            source_type: api_record
            title: 中国历代人物传记资料库：王濯（CBDB 318109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json
            external_identifier: CBDB:318109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GY2aGzgx7a1G29Cw6N2Jv
        status: active
        display_name: 王漸
        merged_into_person_id: null
---

# 王濯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濯 | accepted |
| bio.summary | 王濯，明人物。嘉靖三十二年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 318109） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jAZa72xQV94hCgdDQtVTKA | 王銳 | accepted |
| other | p_6GY2aGzgx7a1G29Cw6N2Jv | 王漸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濯（CBDB 318109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json)

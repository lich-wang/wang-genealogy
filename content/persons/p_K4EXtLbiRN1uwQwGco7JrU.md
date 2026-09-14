---
schema: wang-person/v1
id: p_K4EXtLbiRN1uwQwGco7JrU
status: active
merged_into: null
display_name: 王一新
cbdb_id: 256437
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MBh8EH28KB5VW8rKj4Y3pd
        subject_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一新，明人物。成化十七年進士，籍贯內江，曾任典史。（中国历代人物传记资料库 CBDB 256437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jl-Oa0faw34qL6_UpZtGUa
          claim_id: c_MBh8EH28KB5VW8rKj4Y3pd
          source_id: s_aK6yJGEGGCkz7Xs3seH19V
          stance: supports
          locator: CBDB:256437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aK6yJGEGGCkz7Xs3seH19V
            source_type: api_record
            title: 中国历代人物传记资料库：王一新（CBDB 256437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json
            external_identifier: CBDB:256437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XGxAz9SZuhouAx7RXD6d8x
        subject_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YKn28BC3zMCzNx84VpbJ4B
          claim_id: c_XGxAz9SZuhouAx7RXD6d8x
          source_id: s_aK6yJGEGGCkz7Xs3seH19V
          stance: supports
          locator: CBDB:256437
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6zUe8m6JA41cTfgZ52K7eL
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PlxVSQrlTqMvFpPrQut6hE
          claim_id: c_6zUe8m6JA41cTfgZ52K7eL
          source_id: s_cvLbnzSfpHo3Iyufzzh0Kl
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一新 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一新 之父／母。
          source:
            id: s_cvLbnzSfpHo3Iyufzzh0Kl
            source_type: api_record
            title: 中国历代人物传记资料库：王一新（CBDB 256437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json
            external_identifier: CBDB:256437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JX4wDZH7pMF8Nb6HNMpXbw
        status: active
        display_name: 王守約
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vZvpBRUD2xMZqs8hqfmzSq
        subject_person_id: p_K4EXtLbiRN1uwQwGco7JrU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xPkpajF89DDZQv6kdDePPJ
          claim_id: c_vZvpBRUD2xMZqs8hqfmzSq
          source_id: s_cvLbnzSfpHo3Iyufzzh0Kl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cvLbnzSfpHo3Iyufzzh0Kl
            source_type: api_record
            title: 中国历代人物传记资料库：王一新（CBDB 256437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json
            external_identifier: CBDB:256437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjPesmadeqK3r3wUy19KCm
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一新，明人物。成化十七年進士，籍贯內江，曾任典史。（中国历代人物传记资料库 CBDB 256437） | accepted |
| name.primary | 王一新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JX4wDZH7pMF8Nb6HNMpXbw | 王守約 | accepted |
| other | p_ZjPesmadeqK3r3wUy19KCm | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一新（CBDB 256437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256437&o=json)

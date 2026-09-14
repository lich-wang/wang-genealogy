---
schema: wang-person/v1
id: p_JCg7FxCWnu6HgyGJw6tThG
status: active
merged_into: null
display_name: 王鑾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHL4v8KM8YkzeQgg7eoSkG
        subject_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RTW7nAMAxd4C6NEwC5gXev
          claim_id: c_AHL4v8KM8YkzeQgg7eoSkG
          source_id: s_4gv9gRAoDttFUKcC2KrAtx
          stance: supports
          locator: CBDB:260521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260521）
          source: &a1
            id: s_4gv9gRAoDttFUKcC2KrAtx
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 260521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json
            external_identifier: CBDB:260521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_niqw1mMTbeG5TYP6sDCdgv
        subject_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGmEm5yO9gqKKrDiVOLocf
          claim_id: c_niqw1mMTbeG5TYP6sDCdgv
          source_id: s_4gv9gRAoDttFUKcC2KrAtx
          stance: supports
          locator: CBDB:260521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BcEmfuk9vffkhyaFyTXLqh
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fnQLreoy_cwscoe10ALMcc
          claim_id: c_BcEmfuk9vffkhyaFyTXLqh
          source_id: s_az4M3myKF6Xp7uSKM-vQQk
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑾 与 王鐶 为同胞（CBDB 记「弟」），王鐶 之父／母即 王鑾 之父／母。
          source:
            id: s_az4M3myKF6Xp7uSKM-vQQk
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 260521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json
            external_identifier: CBDB:260521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFTZAq6ze35imaHPVmA96A
        status: active
        display_name: 王公權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fOdIgh9fSdCuizQhIPNB5t
        subject_person_id: p_JCg7FxCWnu6HgyGJw6tThG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UH4-g7I0AC8Es0Cj6hUy7V
          claim_id: c_fOdIgh9fSdCuizQhIPNB5t
          source_id: s_az4M3myKF6Xp7uSKM-vQQk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200621 王鐶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_az4M3myKF6Xp7uSKM-vQQk
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 260521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json
            external_identifier: CBDB:260521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
---

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| bio.summary | 王鑾，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rFTZAq6ze35imaHPVmA96A | 王公權 | accepted |
| other | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 260521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260521&o=json)

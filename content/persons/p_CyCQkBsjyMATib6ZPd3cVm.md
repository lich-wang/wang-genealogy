---
schema: wang-person/v1
id: p_CyCQkBsjyMATib6ZPd3cVm
status: active
merged_into: null
display_name: 王陳言
cbdb_id: 321238
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8dcJV4tS7dfFCG2JuCdep4
        subject_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IlwmbjqvKJ_OI8Gn-ZT9IH
          claim_id: c_8dcJV4tS7dfFCG2JuCdep4
          source_id: s_a3YR7N2q1MUDaeHgFYG9rb
          stance: supports
          locator: CBDB:321238
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a3YR7N2q1MUDaeHgFYG9rb
            source_type: api_record
            title: 中国历代人物传记资料库：王陳言（CBDB 321238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json
            external_identifier: CBDB:321238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nEHitSe5uJHaKMw8WEn3B3
        subject_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e1Etmx5VbBGvfeBUe8eqzz
          claim_id: c_nEHitSe5uJHaKMw8WEn3B3
          source_id: s_a3YR7N2q1MUDaeHgFYG9rb
          stance: supports
          locator: CBDB:321238
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P2TFvKjwIJpCgM-BJE9dbe
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lDWbVCSGluYyCmXzDcLfQQ
          claim_id: c_P2TFvKjwIJpCgM-BJE9dbe
          source_id: s_oEkEmXqOVuyVyUKsjBurcr
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王陳言 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王陳言 之父／母。
          source:
            id: s_oEkEmXqOVuyVyUKsjBurcr
            source_type: api_record
            title: 中国历代人物传记资料库：王陳言（CBDB 321238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json
            external_identifier: CBDB:321238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRKaEr8menL16CrSqqwL5J
        status: active
        display_name: 王濂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_320zxElSJ2OoSWWaM7LHC3
        subject_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHEnw_VFHfwIZ3dl18NZMc
          claim_id: c_320zxElSJ2OoSWWaM7LHC3
          source_id: s_oEkEmXqOVuyVyUKsjBurcr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oEkEmXqOVuyVyUKsjBurcr
            source_type: api_record
            title: 中国历代人物传记资料库：王陳言（CBDB 321238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json
            external_identifier: CBDB:321238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FZsZBsVgtXYBR7R5He9YWs
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
---

# 王陳言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陳言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321238） | accepted |
| name.primary | 王陳言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PRKaEr8menL16CrSqqwL5J | 王濂 | accepted |
| other | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳言（CBDB 321238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json)

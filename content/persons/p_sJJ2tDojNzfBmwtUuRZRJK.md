---
schema: wang-person/v1
id: p_sJJ2tDojNzfBmwtUuRZRJK
status: active
merged_into: null
display_name: 王汝謹
cbdb_id: 209903
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5vSGxwHWgW3Jb3dsXYGsuo
        subject_person_id: p_sJJ2tDojNzfBmwtUuRZRJK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謹，明人物。隆慶五年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 209903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wuTASyiA-4uavSN1D25o0X
          claim_id: c_5vSGxwHWgW3Jb3dsXYGsuo
          source_id: s_XAwA5B6uPWHKGNioQUYE4u
          stance: supports
          locator: CBDB:209903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XAwA5B6uPWHKGNioQUYE4u
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謹（CBDB 209903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209903&o=json
            external_identifier: CBDB:209903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o5KHd8htZJSqvMtuvdNMzM
        subject_person_id: p_sJJ2tDojNzfBmwtUuRZRJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VWyFofB2NoUpEtW15Ne1AA
          claim_id: c_o5KHd8htZJSqvMtuvdNMzM
          source_id: s_XAwA5B6uPWHKGNioQUYE4u
          stance: supports
          locator: CBDB:209903
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h9bVp6fxzp29n1QHruEb43
        subject_person_id: p_K6Mg8CNu81j224iHAUiEPB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sJJ2tDojNzfBmwtUuRZRJK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mOd7414J2olFLzTmdt-O9C
          claim_id: c_h9bVp6fxzp29n1QHruEb43
          source_id: s_DYrmE1YtDkpgTKgVQRgm-I
          stance: supports
          locator: CBDB：兄弟 王汝訓（126501）之父／母 王藩
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝謹 与 王汝訓 为同胞（CBDB 记「兄」），王汝訓 之父／母即 王汝謹 之父／母。
          source:
            id: s_DYrmE1YtDkpgTKgVQRgm-I
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謹（CBDB 209903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209903&o=json
            external_identifier: CBDB:209903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K6Mg8CNu81j224iHAUiEPB
        status: active
        display_name: 王藩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tyTXiEkhQiOoYFjMgg3J3t
        subject_person_id: p_cakXozT1Ed1TLgH5Avqt9N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sJJ2tDojNzfBmwtUuRZRJK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jkrZ9SP7OiOfw4JvSbZPNI
          claim_id: c_tyTXiEkhQiOoYFjMgg3J3t
          source_id: s_DYrmE1YtDkpgTKgVQRgm-I
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126501 王汝訓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DYrmE1YtDkpgTKgVQRgm-I
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謹（CBDB 209903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209903&o=json
            external_identifier: CBDB:209903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cakXozT1Ed1TLgH5Avqt9N
        status: active
        display_name: 王汝訓
        merged_into_person_id: null
---

# 王汝謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝謹，明人物。隆慶五年進士，籍贯聊城。（中国历代人物传记资料库 CBDB 209903） | accepted |
| name.primary | 王汝謹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K6Mg8CNu81j224iHAUiEPB | 王藩 | accepted |
| other | p_cakXozT1Ed1TLgH5Avqt9N | 王汝訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝謹（CBDB 209903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209903&o=json)

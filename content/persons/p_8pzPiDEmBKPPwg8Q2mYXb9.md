---
schema: wang-person/v1
id: p_8pzPiDEmBKPPwg8Q2mYXb9
status: active
merged_into: null
display_name: 柳氏
revision: 1
cbdb_id: 94056
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_izV-aMPXr90VsZdNiUGRLg
        subject_person_id: p_8pzPiDEmBKPPwg8Q2mYXb9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳氏，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 94056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_92p6-FYe6Uwf_y_U1xuF8N
          claim_id: c_izV-aMPXr90VsZdNiUGRLg
          source_id: s_oXNVb-RTjCVwW7vZV_qmQm
          stance: supports
          locator: CBDB:94056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oXNVb-RTjCVwW7vZV_qmQm
            source_type: api_record
            title: 中国历代人物传记资料库：柳氏(王季友妻)（CBDB 94056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=94056&o=json
            external_identifier: CBDB:94056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUWb-N06YJETYnFk24aA9I
        subject_person_id: p_8pzPiDEmBKPPwg8Q2mYXb9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vrOGQN9G21pCsiPtWqjmh
          claim_id: c_tUWb-N06YJETYnFk24aA9I
          source_id: s_oXNVb-RTjCVwW7vZV_qmQm
          stance: supports
          locator: CBDB:94056
          quotation: null
          interpretation_note: CBDB 明确记录的王季友配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bNuCwd5fXpZi0TjSfgPvjX
        subject_person_id: p_sBNfDj8QKbRziMmrz6ApjQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8pzPiDEmBKPPwg8Q2mYXb9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cPpnEAtsbZ8ArvbwMGpWT-
          claim_id: c_bNuCwd5fXpZi0TjSfgPvjX
          source_id: s_oXNVb-RTjCVwW7vZV_qmQm
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00162：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sBNfDj8QKbRziMmrz6ApjQ
        status: active
        display_name: 王季友
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 柳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 柳氏，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 94056） | accepted |
| name.primary | 柳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sBNfDj8QKbRziMmrz6ApjQ | 王季友 | accepted |

## 外部来源

- [中国历代人物传记资料库：柳氏(王季友妻)（CBDB 94056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=94056&o=json)

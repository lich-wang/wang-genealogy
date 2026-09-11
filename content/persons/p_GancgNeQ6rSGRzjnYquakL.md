---
schema: wang-person/v1
id: p_GancgNeQ6rSGRzjnYquakL
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4GZCSiySiL2AtvSYDY5J5R
        subject_person_id: p_GancgNeQ6rSGRzjnYquakL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqzZgB2EgPPUieyssbFD1p
          claim_id: c_4GZCSiySiL2AtvSYDY5J5R
          source_id: s_hhzyJrxzxPBVk7c5ZtYFCY
          stance: supports
          locator: CBDB:282814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282814）
          source: &a1
            id: s_hhzyJrxzxPBVk7c5ZtYFCY
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 282814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282814&o=json
            external_identifier: CBDB:282814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TwfPvErFAW9gRaFy9gCur7
        subject_person_id: p_GancgNeQ6rSGRzjnYquakL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cHF10q5BlJ2-cF19LrkIq_
          claim_id: c_TwfPvErFAW9gRaFy9gCur7
          source_id: s_hhzyJrxzxPBVk7c5ZtYFCY
          stance: supports
          locator: CBDB:282814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_mETJWNw53u7LmcG2ND9lxz
        subject_person_id: p_GancgNeQ6rSGRzjnYquakL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fVVctU3oARvj93SKk81Eji
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gu5aamzsIv-LhEIAX4xV5a
          claim_id: c_mETJWNw53u7LmcG2ND9lxz
          source_id: s_S8PvPikNKeqv9SvZpdTNYm
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S8PvPikNKeqv9SvZpdTNYm
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 202067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json
            external_identifier: CBDB:202067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fVVctU3oARvj93SKk81Eji
        status: active
        display_name: 王祐
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fVVctU3oARvj93SKk81Eji | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 282814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282814&o=json)
- [中国历代人物传记资料库：王祐（CBDB 202067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202067&o=json)

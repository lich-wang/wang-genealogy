---
schema: wang-person/v1
id: p_Tc8QNzAuGXa5y32t3B3zYJ
status: active
merged_into: null
display_name: 王偃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yj221JwD8aYMbSNh7hr814
        subject_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bHLan5iAUYMXGLePW31X7W
          claim_id: c_yj221JwD8aYMbSNh7hr814
          source_id: s_rd2ZFQAFGxnjTnqkFDuKJd
          stance: supports
          locator: CBDB:322386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322386）
          source: &a1
            id: s_rd2ZFQAFGxnjTnqkFDuKJd
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kLh9iPGUycFBBCg34nbjxK
        subject_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322386）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FSh8ss_IALZV4vwS--xQvi
          claim_id: c_kLh9iPGUycFBBCg34nbjxK
          source_id: s_rd2ZFQAFGxnjTnqkFDuKJd
          stance: supports
          locator: CBDB:322386
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nnn7FhwbGTrj8Ah3g9gNnQ
        subject_person_id: p_pY4bR9vVd19RvXkc3AZrMW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0y9qRMWz6gVOl-mkhAoWVM
          claim_id: c_nnn7FhwbGTrj8Ah3g9gNnQ
          source_id: s_mqNAmk6H0vyJzpC0V0fNHw
          stance: supports
          locator: CBDB：兄弟 王偡（204670）之父／母 王彥禎
          quotation: null
          interpretation_note: 由兄弟关系推断：王偃 与 王偡 为同胞（CBDB 记「兄」），王偡 之父／母即 王偃 之父／母。
          source:
            id: s_mqNAmk6H0vyJzpC0V0fNHw
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pY4bR9vVd19RvXkc3AZrMW
        status: active
        display_name: 王彥禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hzu-Jt499KfZa-KqGY8oN-
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XLGLsYQQ72t1xi4T0yl4Bp
          claim_id: c_hzu-Jt499KfZa-KqGY8oN-
          source_id: s_mqNAmk6H0vyJzpC0V0fNHw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204670 王偡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mqNAmk6H0vyJzpC0V0fNHw
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lt4MQ464DWHGJk9hxD73Kf
        status: active
        display_name: 王偡
        merged_into_person_id: null
---

# 王偃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偃 | accepted |
| bio.summary | 王偃，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pY4bR9vVd19RvXkc3AZrMW | 王彥禎 | accepted |
| other | p_Lt4MQ464DWHGJk9hxD73Kf | 王偡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偃（CBDB 322386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json)

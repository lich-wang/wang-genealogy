---
schema: wang-person/v1
id: p_ABDEi8fuYZK2pj19UDxiqm
status: active
merged_into: null
display_name: 王祿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XJEGFBu6GyKKU5A9bBBKG8
        subject_person_id: p_ABDEi8fuYZK2pj19UDxiqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6RMDLPTYPV555f7KCgmonB
          claim_id: c_XJEGFBu6GyKKU5A9bBBKG8
          source_id: s_XwsmLA1Y9bifLg6PrDXtQu
          stance: supports
          locator: CBDB:295405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295405）
          source: &a1
            id: s_XwsmLA1Y9bifLg6PrDXtQu
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 295405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json
            external_identifier: CBDB:295405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zPLUBqvM3JnNJ257U1dBGC
        subject_person_id: p_ABDEi8fuYZK2pj19UDxiqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿，明人物。嘉靖十四年進士，籍贯深州。（中国历代人物传记资料库 CBDB 295405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKp8orZl6KYF5sKWqLGX-q
          claim_id: c_zPLUBqvM3JnNJ257U1dBGC
          source_id: s_XwsmLA1Y9bifLg6PrDXtQu
          stance: supports
          locator: CBDB:295405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e0Vrk9Mv40XV7il47W_fRu
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABDEi8fuYZK2pj19UDxiqm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ny679p-TcW_CamqWM5MCQC
          claim_id: c_e0Vrk9Mv40XV7il47W_fRu
          source_id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
          stance: supports
          locator: CBDB：兄弟 王珉（202834）之父／母 王思義
          quotation: null
          interpretation_note: 由兄弟关系推断：王祿 与 王珉 为同胞（CBDB 记「弟」），王珉 之父／母即 王祿 之父／母。
          source:
            id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 295405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json
            external_identifier: CBDB:295405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZC9cZs12t7iJnxdJfx5Hj4
        status: active
        display_name: 王思義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IFwCmtZm7hgv1IgWk-bHS3
        subject_person_id: p_ABDEi8fuYZK2pj19UDxiqm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MIeGwT3yueqPD26SEq6Q08
          claim_id: c_IFwCmtZm7hgv1IgWk-bHS3
          source_id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202834 王珉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZeJRA4Oyd2phZ1IrxIZ4Qe
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 295405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json
            external_identifier: CBDB:295405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJbtRZx7s1XqSoTR8tLmBu
        status: active
        display_name: 王珉
        merged_into_person_id: null
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| bio.summary | 王祿，明人物。嘉靖十四年進士，籍贯深州。（中国历代人物传记资料库 CBDB 295405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZC9cZs12t7iJnxdJfx5Hj4 | 王思義 | accepted |
| other | p_fJbtRZx7s1XqSoTR8tLmBu | 王珉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 295405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295405&o=json)

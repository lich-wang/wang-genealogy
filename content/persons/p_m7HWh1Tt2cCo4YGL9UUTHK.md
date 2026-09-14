---
schema: wang-person/v1
id: p_m7HWh1Tt2cCo4YGL9UUTHK
status: active
merged_into: null
display_name: 王子英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_msfsDxyNSECD7PF8Cv9csW
        subject_person_id: p_m7HWh1Tt2cCo4YGL9UUTHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j1zAVzTzxLfbgpKvMVi918
          claim_id: c_msfsDxyNSECD7PF8Cv9csW
          source_id: s_KwM2dk4eRqPtnDrkJ549Fz
          stance: supports
          locator: CBDB:322443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322443）
          source: &a1
            id: s_KwM2dk4eRqPtnDrkJ549Fz
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 322443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json
            external_identifier: CBDB:322443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDMS5rh2NMZC4tpaya626Y
        subject_person_id: p_m7HWh1Tt2cCo4YGL9UUTHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子英，明人物。宣德五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 322443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HTY_MTXiHN_PjB8KBJa-VD
          claim_id: c_CDMS5rh2NMZC4tpaya626Y
          source_id: s_KwM2dk4eRqPtnDrkJ549Fz
          stance: supports
          locator: CBDB:322443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VqPOkD-UbsIkFK6k0Z4-AZ
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m7HWh1Tt2cCo4YGL9UUTHK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCHT7U24SHhIFouF3PzLlG
          claim_id: c_VqPOkD-UbsIkFK6k0Z4-AZ
          source_id: s_mECnBqQucPhKhx6hmfR8On
          stance: supports
          locator: CBDB：兄弟 王玉（204676）之父／母 王士嘉
          quotation: null
          interpretation_note: 由兄弟关系推断：王子英 与 王玉 为同胞（CBDB 记「弟」），王玉 之父／母即 王子英 之父／母。
          source:
            id: s_mECnBqQucPhKhx6hmfR8On
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 322443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json
            external_identifier: CBDB:322443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhagHPLAgGF916n7f1YPNt
        status: active
        display_name: 王士嘉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FXFS1HZqgi66cPqQd25GLA
        subject_person_id: p_m7HWh1Tt2cCo4YGL9UUTHK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vMHM62tMEACNN1HhRp5f5c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztk_xJBnXQStKIIMFXA_oP
          claim_id: c_FXFS1HZqgi66cPqQd25GLA
          source_id: s_mECnBqQucPhKhx6hmfR8On
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204676 王玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mECnBqQucPhKhx6hmfR8On
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 322443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json
            external_identifier: CBDB:322443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vMHM62tMEACNN1HhRp5f5c
        status: active
        display_name: 王玉
        merged_into_person_id: null
---

# 王子英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子英 | accepted |
| bio.summary | 王子英，明人物。宣德五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 322443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yhagHPLAgGF916n7f1YPNt | 王士嘉 | accepted |
| other | p_vMHM62tMEACNN1HhRp5f5c | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子英（CBDB 322443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json)

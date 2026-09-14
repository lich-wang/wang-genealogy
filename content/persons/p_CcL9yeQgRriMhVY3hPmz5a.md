---
schema: wang-person/v1
id: p_CcL9yeQgRriMhVY3hPmz5a
status: active
merged_into: null
display_name: 王江
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6FW9XUi6LzD6tbJ3END1F
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8HmxR3YLPPf4PLrVESVDW
          claim_id: c_S6FW9XUi6LzD6tbJ3END1F
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: CBDB:126498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126498）
          source: &a1
            id: s_iysWTAJR6jgb14GmHUSJck
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 126498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json
            external_identifier: CBDB:126498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cy4yT2hmzUATfMPWRmMbwb
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王江，明人物。明清進士進士，籍贯任邱，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wBY4Xy668axVezvj2F_kBy
          claim_id: c_cy4yT2hmzUATfMPWRmMbwb
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: CBDB:126498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oKgdASimluV1KOgc84qxZr
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1xvAUmyWJk_Rsa1c2CbCXm
          claim_id: c_oKgdASimluV1KOgc84qxZr
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TBRbQ4tV2WfCnjRSSpkfCv
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aPCzaFTlWwfrEm1F7yKEsl
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9ftKN7J8AGpsWHRUWyFnSU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vOVuyngKAwcTDK3_zuVGpk
          claim_id: c_aPCzaFTlWwfrEm1F7yKEsl
          source_id: s_z3BWgZAULq_rjzMdFdIeqx
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z3BWgZAULq_rjzMdFdIeqx
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王江妻)（CBDB 277072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277072&o=json
            external_identifier: CBDB:277072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9ftKN7J8AGpsWHRUWyFnSU
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yIximMe1s8Thu_9V9D0kZn
        subject_person_id: p_FxBbEWyPCZJRS2BVCvKm1v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KQkfkvraGUIB62cqnylg7t
          claim_id: c_yIximMe1s8Thu_9V9D0kZn
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FxBbEWyPCZJRS2BVCvKm1v
        status: active
        display_name: 王仲德
        merged_into_person_id: null
    - claim:
        id: c_EyQuXxfPAdHek36Drv4FPH
        subject_person_id: p_UoL6tdmfZkcJmk3xo3DAA6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ff5sNHFlE1bS7u_x2zCM83
          claim_id: c_EyQuXxfPAdHek36Drv4FPH
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UoL6tdmfZkcJmk3xo3DAA6
        status: active
        display_name: 王遠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_RHIfEY20gNU5jwiGmZGh88
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QgRACuZHRaHM7T6tySo9qb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nLOTYZ0023gTO4uwvoWjk9
          claim_id: c_RHIfEY20gNU5jwiGmZGh88
          source_id: s_W0FzIhhjJhbFFgpX2txFHM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126498 王江）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0FzIhhjJhbFFgpX2txFHM
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 277074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json
            external_identifier: CBDB:277074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QgRACuZHRaHM7T6tySo9qb
        status: active
        display_name: 王漢
        merged_into_person_id: null
    - claim:
        id: c_tPQ9qrUS-0xd3iWtHNXMle
        subject_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YH6ywog8NFVsKoYiz8ifqU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mLkaT5AGLCrIxC9Z8glUz
          claim_id: c_tPQ9qrUS-0xd3iWtHNXMle
          source_id: s_akHuUON6tnzi_tm2xO3LG1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126498 王江）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_akHuUON6tnzi_tm2xO3LG1
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 277076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json
            external_identifier: CBDB:277076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YH6ywog8NFVsKoYiz8ifqU
        status: active
        display_name: 王潛
        merged_into_person_id: null
---

# 王江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王江 | accepted |
| bio.summary | 王江，明人物。明清進士進士，籍贯任邱，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBRbQ4tV2WfCnjRSSpkfCv | 王釗 | accepted |
| spouses | p_9ftKN7J8AGpsWHRUWyFnSU | 李氏 | accepted |
| ancestors | p_FxBbEWyPCZJRS2BVCvKm1v | 王仲德 | accepted |
| ancestors | p_UoL6tdmfZkcJmk3xo3DAA6 | 王遠 | accepted |
| other | p_QgRACuZHRaHM7T6tySo9qb | 王漢 | accepted |
| other | p_YH6ywog8NFVsKoYiz8ifqU | 王潛 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王江妻)（CBDB 277072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277072&o=json)
- [中国历代人物传记资料库：王漢（CBDB 277074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277074&o=json)
- [中国历代人物传记资料库：王江（CBDB 126498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json)
- [中国历代人物传记资料库：王潛（CBDB 277076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277076&o=json)

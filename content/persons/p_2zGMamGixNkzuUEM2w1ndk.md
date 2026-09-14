---
schema: wang-person/v1
id: p_2zGMamGixNkzuUEM2w1ndk
status: active
merged_into: null
display_name: 王璇
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FohHPTPe8xF9ZXCiucR9Bv
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_26ys74YMk8nAzenbcRJXCv
          claim_id: c_FohHPTPe8xF9ZXCiucR9Bv
          source_id: s_xH1jeJZUyR5BBd58dAhoBu
          stance: supports
          locator: CBDB:309958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309958）
          source: &a1
            id: s_xH1jeJZUyR5BBd58dAhoBu
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 309958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309958&o=json
            external_identifier: CBDB:309958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KsCDcFs29tvPHjeViAahaF
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。嘉靖二十六年進士，籍贯漳浦，曾任知縣。（中国历代人物传记资料库 CBDB 309958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YbEjcVnst2bXIK4MUx7orw
          claim_id: c_KsCDcFs29tvPHjeViAahaF
          source_id: s_xH1jeJZUyR5BBd58dAhoBu
          stance: supports
          locator: CBDB:309958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_L8cFCmgUi4Yfs4psrL7iHn
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_TY4fysz7Cu-Xi_0rtPTg
          claim_id: c_L8cFCmgUi4Yfs4psrL7iHn
          source_id: s_xH1jeJZUyR5BBd58dAhoBu
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z2Vna7WYuxeWBNiYsk8G6f
        status: active
        display_name: 王健
        merged_into_person_id: null
    - claim:
        id: c_POXaYtzmp-kIuWl66_sRB9
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MpWVzPikChXAJ9agtVTx71
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGvhfALcAlvWNWVWNKqyrj
          claim_id: c_POXaYtzmp-kIuWl66_sRB9
          source_id: s_1juBEESjL-hXP4Bp67E4rf
          stance: supports
          locator: CBDB：兄弟 王健（203783）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王俶 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王俶 之父／母。
          source:
            id: s_1juBEESjL-hXP4Bp67E4rf
            source_type: api_record
            title: 中国历代人物传记资料库：王俶（CBDB 309965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309965&o=json
            external_identifier: CBDB:309965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MpWVzPikChXAJ9agtVTx71
        status: active
        display_name: 王俶
        merged_into_person_id: null
    - claim:
        id: c_Sjsripy-lY83ogDMvM1hqJ
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q8xUbcD8zYp3Po7WjKz6z8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLRj3DSfFYTfgSFGsArmC_
          claim_id: c_Sjsripy-lY83ogDMvM1hqJ
          source_id: s_P3Rvvj6VUDMOsoOzY9Hkho
          stance: supports
          locator: CBDB：兄弟 王健（203783）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王侁 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王侁 之父／母。
          source:
            id: s_P3Rvvj6VUDMOsoOzY9Hkho
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 309963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309963&o=json
            external_identifier: CBDB:309963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q8xUbcD8zYp3Po7WjKz6z8
        status: active
        display_name: 王侁
        merged_into_person_id: null
    - claim:
        id: c_x7U7O0PT_TsLncWRlBD-12
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SaGtRWAfC6QV1Km7DUyCwv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7mK4e8xxdx9DBM25FvSah5
          claim_id: c_x7U7O0PT_TsLncWRlBD-12
          source_id: s_QGFkMUGe6SipV-WwbrcB_S
          stance: supports
          locator: CBDB：兄弟 王健（203783）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王倬 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王倬 之父／母。
          source:
            id: s_QGFkMUGe6SipV-WwbrcB_S
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 309966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309966&o=json
            external_identifier: CBDB:309966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SaGtRWAfC6QV1Km7DUyCwv
        status: active
        display_name: 王倬
        merged_into_person_id: null
    - claim:
        id: c_ciEsifvOrkYmDHFegNI9Au
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VLppJwq5bihYGgB85dWMN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yjcv1a7P9nFoLxz0fXPoE8
          claim_id: c_ciEsifvOrkYmDHFegNI9Au
          source_id: s_zMINDehAnlFKdDTC0fyTVy
          stance: supports
          locator: CBDB：兄弟 王健（203783）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王僑 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王僑 之父／母。
          source:
            id: s_zMINDehAnlFKdDTC0fyTVy
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 309964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309964&o=json
            external_identifier: CBDB:309964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLppJwq5bihYGgB85dWMN2
        status: active
        display_name: 王僑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。嘉靖二十六年進士，籍贯漳浦，曾任知縣。（中国历代人物传记资料库 CBDB 309958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z2Vna7WYuxeWBNiYsk8G6f | 王健 | accepted |
| children | p_MpWVzPikChXAJ9agtVTx71 | 王俶 | accepted |
| children | p_Q8xUbcD8zYp3Po7WjKz6z8 | 王侁 | accepted |
| children | p_SaGtRWAfC6QV1Km7DUyCwv | 王倬 | accepted |
| children | p_VLppJwq5bihYGgB85dWMN2 | 王僑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俶（CBDB 309965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309965&o=json)
- [中国历代人物传记资料库：王僑（CBDB 309964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309964&o=json)
- [中国历代人物传记资料库：王侁（CBDB 309963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309963&o=json)
- [中国历代人物传记资料库：王璇（CBDB 309958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309958&o=json)
- [中国历代人物传记资料库：王倬（CBDB 309966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309966&o=json)

---
schema: wang-person/v1
id: p_GcBvHSffABPszyHqYWBM3f
status: active
merged_into: null
display_name: 王循
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FtuPx3XTtP1o8o7kNGADby
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VP9gNnZbwQXAxkj3T9QCmS
          claim_id: c_FtuPx3XTtP1o8o7kNGADby
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: CBDB:244955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244955）
          source: &a1
            id: s_VsxZMjTKLcLm5T17FbA1Zd
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 244955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json
            external_identifier: CBDB:244955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eWHDEtLwDAFXv9QMSB2SG4
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtFGW0rcMjCJJxhdKT1Xzu
          claim_id: c_eWHDEtLwDAFXv9QMSB2SG4
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: CBDB:244955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2qxJ5_C_Z0SbidN2l4S4ui
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmOrZzlVPH5VQVLExrchBs
          claim_id: c_2qxJ5_C_Z0SbidN2l4S4ui
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V4FwK3zU4QEPhCKRyGhfXG
        status: active
        display_name: 王問
        merged_into_person_id: null
    - claim:
        id: c_tl3TbzdwGRKOqtfCBfX4vF
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AbZUuyWRBSPKbc1QtJF8Su
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rUs-NFrv24-rnwCzxBSdg_
          claim_id: c_tl3TbzdwGRKOqtfCBfX4vF
          source_id: s_pOZonQ8Jh6Fs4vg_0X8kFa
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王閱 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王閱 之父／母。
          source:
            id: s_pOZonQ8Jh6Fs4vg_0X8kFa
            source_type: api_record
            title: 中国历代人物传记资料库：王閱（CBDB 244960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json
            external_identifier: CBDB:244960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AbZUuyWRBSPKbc1QtJF8Su
        status: active
        display_name: 王閱
        merged_into_person_id: null
    - claim:
        id: c_hjvYhc4x5hqML5VwZPTi6O
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBnShuBmDjQYAm8429uK1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lD3bUP6JrGU3PJ7U9sUzC2
          claim_id: c_hjvYhc4x5hqML5VwZPTi6O
          source_id: s_m9wHiwOEFsrUsLjlscen6-
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王慎 之父／母。
          source:
            id: s_m9wHiwOEFsrUsLjlscen6-
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 244965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json
            external_identifier: CBDB:244965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LBnShuBmDjQYAm8429uK1s
        status: active
        display_name: 王慎
        merged_into_person_id: null
    - claim:
        id: c_gqrmjphMBnKrcJeiDgBukY
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MUxDEHkoMfHPoyTcYqzNyN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHP0HoCTypX6jtPco2HLPK
          claim_id: c_gqrmjphMBnKrcJeiDgBukY
          source_id: s_xZNtNhYqWFWnOlW-oSuolA
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王閏 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王閏 之父／母。
          source:
            id: s_xZNtNhYqWFWnOlW-oSuolA
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 244962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json
            external_identifier: CBDB:244962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MUxDEHkoMfHPoyTcYqzNyN
        status: active
        display_name: 王閏
        merged_into_person_id: null
    - claim:
        id: c_KeLKr7dxtPA5LoJzRuxUuo
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZN2Bv7zPhYjpFnT4687tv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCsrHV0rFEcbGkbzHhFzad
          claim_id: c_KeLKr7dxtPA5LoJzRuxUuo
          source_id: s_Rh-e9Wk0s1qAG6WgUfZw9p
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王開 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王開 之父／母。
          source:
            id: s_Rh-e9Wk0s1qAG6WgUfZw9p
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 244961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244961&o=json
            external_identifier: CBDB:244961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZN2Bv7zPhYjpFnT4687tv5
        status: active
        display_name: 王開
        merged_into_person_id: null
    - claim:
        id: c_eEVYeITF6zhVv6BIDeZMe8
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_grjREFngH89uEV7yrej4T2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oTgAc0XYy0PJJkwfcXVIwL
          claim_id: c_eEVYeITF6zhVv6BIDeZMe8
          source_id: s_DaByWd3UooSqbekeKejbPG
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王問 为同胞（CBDB 记「弟」），王問 之父／母即 王敏 之父／母。
          source:
            id: s_DaByWd3UooSqbekeKejbPG
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 244959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244959&o=json
            external_identifier: CBDB:244959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_grjREFngH89uEV7yrej4T2
        status: active
        display_name: 王敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王循

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王循 | accepted |
| bio.summary | 王循，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V4FwK3zU4QEPhCKRyGhfXG | 王問 | accepted |
| children | p_AbZUuyWRBSPKbc1QtJF8Su | 王閱 | accepted |
| children | p_LBnShuBmDjQYAm8429uK1s | 王慎 | accepted |
| children | p_MUxDEHkoMfHPoyTcYqzNyN | 王閏 | accepted |
| children | p_ZN2Bv7zPhYjpFnT4687tv5 | 王開 | accepted |
| children | p_grjREFngH89uEV7yrej4T2 | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 244961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244961&o=json)
- [中国历代人物传记资料库：王敏（CBDB 244959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244959&o=json)
- [中国历代人物传记资料库：王閏（CBDB 244962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json)
- [中国历代人物传记资料库：王慎（CBDB 244965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json)
- [中国历代人物传记资料库：王循（CBDB 244955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json)
- [中国历代人物传记资料库：王閱（CBDB 244960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json)

---
schema: wang-person/v1
id: p_THa8fUajs7gLagomkz7Gpb
status: active
merged_into: null
display_name: 王勑
cbdb_id: 210114
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PEs6E1ihAPFnFafbjRFCrh
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勑，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WXDr2HxEYlufluKXfG749B
          claim_id: c_PEs6E1ihAPFnFafbjRFCrh
          source_id: s_AYsfPCAMn1rtpvY6w87mzc
          stance: supports
          locator: CBDB:210114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AYsfPCAMn1rtpvY6w87mzc
            source_type: api_record
            title: 中国历代人物传记资料库：王勑（CBDB 210114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210114&o=json
            external_identifier: CBDB:210114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_brWiBDjEbVT1SP4Y7qim3T
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_atF9urPzLC3uw2XGtJ2u9E
          claim_id: c_brWiBDjEbVT1SP4Y7qim3T
          source_id: s_AYsfPCAMn1rtpvY6w87mzc
          stance: supports
          locator: CBDB:210114
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Pfb24NHlWqS7YAmmSp3AtV
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8Pjk8ZhPs_CHhupNsfPeI
          claim_id: c_Pfb24NHlWqS7YAmmSp3AtV
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4ni9ypkhqH9bL97APqjeXx
            source_type: api_record
            title: 中国历代人物传记资料库：王民順（CBDB 205877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json
            external_identifier: CBDB:205877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
    - claim:
        id: c_qWXlGr4yzgaWc2tj1BoYqG
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7w7R7PSA759EpLs8K9jpxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2K959fmuNct8q2txb-NluL
          claim_id: c_qWXlGr4yzgaWc2tj1BoYqG
          source_id: s_byEVRzP__f5u_5APNhJgU2
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民秀 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民秀 之父／母。
          source:
            id: s_byEVRzP__f5u_5APNhJgU2
            source_type: api_record
            title: 中国历代人物传记资料库：王民秀（CBDB 210125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json
            external_identifier: CBDB:210125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7w7R7PSA759EpLs8K9jpxH
        status: active
        display_name: 王民秀
        merged_into_person_id: null
    - claim:
        id: c_cEU-zXIzIb9NAulXfD3xkz
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Ep5P5ZpEFCitMHRmNMN6i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0PjIeiwySUoLdqEMB6Lsx
          claim_id: c_cEU-zXIzIb9NAulXfD3xkz
          source_id: s_Z8wok6JHetQryty9dHMi8X
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民傑 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民傑 之父／母。
          source:
            id: s_Z8wok6JHetQryty9dHMi8X
            source_type: api_record
            title: 中国历代人物传记资料库：王民傑（CBDB 210118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210118&o=json
            external_identifier: CBDB:210118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Ep5P5ZpEFCitMHRmNMN6i
        status: active
        display_name: 王民傑
        merged_into_person_id: null
    - claim:
        id: c_0zF8rJnv7AmtRT7VUset50
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxbrlInNSaHIuj8elEpFwJ
          claim_id: c_0zF8rJnv7AmtRT7VUset50
          source_id: s_LMemHArGlvOIsw0SGe7cme
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民獻 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民獻 之父／母。
          source:
            id: s_LMemHArGlvOIsw0SGe7cme
            source_type: api_record
            title: 中国历代人物传记资料库：王民獻（CBDB 210122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json
            external_identifier: CBDB:210122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQysQ4M7AfMq9vujKpVLj4
        status: active
        display_name: 王民獻
        merged_into_person_id: null
    - claim:
        id: c_IkOygDxPlgRb7whV_slpyW
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3zOrkp7dwDQss80QDBza2
          claim_id: c_IkOygDxPlgRb7whV_slpyW
          source_id: s_sZgCxXiNIMbsMHUzRwQbHu
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民卿 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民卿 之父／母。
          source:
            id: s_sZgCxXiNIMbsMHUzRwQbHu
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C3qbUqK8r4tdCLJC1H25mH
        status: active
        display_name: 王民卿
        merged_into_person_id: null
    - claim:
        id: c_xUuBtf3c0fNYXvd0pVpVnm
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fSQoZdJtpp4PDfZBMTNv9M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wsVn2sWK57ijKrfRTGBqx-
          claim_id: c_xUuBtf3c0fNYXvd0pVpVnm
          source_id: s_eBdXea64dpfIvA5S5WnPqD
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民悅 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民悅 之父／母。
          source:
            id: s_eBdXea64dpfIvA5S5WnPqD
            source_type: api_record
            title: 中国历代人物传记资料库：王民悅（CBDB 210123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210123&o=json
            external_identifier: CBDB:210123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fSQoZdJtpp4PDfZBMTNv9M
        status: active
        display_name: 王民悅
        merged_into_person_id: null
    - claim:
        id: c_Al0XQbIOzuK-N_mW-zBKmA
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n3vStaMTAGUemfDPhiMx1L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UJGHX_KGuA3EX7uaz_ZiC
          claim_id: c_Al0XQbIOzuK-N_mW-zBKmA
          source_id: s_Fnu9AKi09zsvZmTkQd0reX
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民綱 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民綱 之父／母。
          source:
            id: s_Fnu9AKi09zsvZmTkQd0reX
            source_type: api_record
            title: 中国历代人物传记资料库：王民綱（CBDB 210120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210120&o=json
            external_identifier: CBDB:210120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n3vStaMTAGUemfDPhiMx1L
        status: active
        display_name: 王民綱
        merged_into_person_id: null
    - claim:
        id: c_Rflc3Ug8C9E6UAx44eQq-3
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBLDjR5Hdjeu8G8S7GFHUw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NuzAcDcF7IHjQiHKMNHJgI
          claim_id: c_Rflc3Ug8C9E6UAx44eQq-3
          source_id: s_5ha-T59rutJ-IBSqYqDpyW
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民熙 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民熙 之父／母。
          source:
            id: s_5ha-T59rutJ-IBSqYqDpyW
            source_type: api_record
            title: 中国历代人物传记资料库：王民熙（CBDB 210124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210124&o=json
            external_identifier: CBDB:210124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBLDjR5Hdjeu8G8S7GFHUw
        status: active
        display_name: 王民熙
        merged_into_person_id: null
    - claim:
        id: c_T4YqOFjRJcU4ziUe9znryM
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oi2PvK2HYJDZDMKhZv9HwZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJ7E84PtoJKTv370-hpf7l
          claim_id: c_T4YqOFjRJcU4ziUe9znryM
          source_id: s_KxKfRhAwTjhRVdC8y8T9lw
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民聘 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民聘 之父／母。
          source:
            id: s_KxKfRhAwTjhRVdC8y8T9lw
            source_type: api_record
            title: 中国历代人物传记资料库：王民聘（CBDB 210121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210121&o=json
            external_identifier: CBDB:210121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oi2PvK2HYJDZDMKhZv9HwZ
        status: active
        display_name: 王民聘
        merged_into_person_id: null
    - claim:
        id: c_I2ZhPfMeCrenGO1M-X-PtA
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K14ezBAzqieZowO69E5dtN
          claim_id: c_I2ZhPfMeCrenGO1M-X-PtA
          source_id: s_Au797MFLNHN0Up2ZjduvTx
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民戴 与 王民順 为同胞（CBDB 记「兄」），王民順 之父／母即 王民戴 之父／母。
          source:
            id: s_Au797MFLNHN0Up2ZjduvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王民戴（CBDB 210127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json
            external_identifier: CBDB:210127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8qq6ZZQLo2v36rcUxxeFP
        status: active
        display_name: 王民戴
        merged_into_person_id: null
    - claim:
        id: c_UZj39h8m4RdD4jWzZVj5h1
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yPbAyPeH49qEiDGBjDfaEA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G0Dp1dSrilYss4dmvTA34F
          claim_id: c_UZj39h8m4RdD4jWzZVj5h1
          source_id: s_EeYAlJoHm4q1CN4IwwXB11
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民頌 与 王民順 为同胞（CBDB 记「兄」），王民順 之父／母即 王民頌 之父／母。
          source:
            id: s_EeYAlJoHm4q1CN4IwwXB11
            source_type: api_record
            title: 中国历代人物传记资料库：王民頌（CBDB 210128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210128&o=json
            external_identifier: CBDB:210128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yPbAyPeH49qEiDGBjDfaEA
        status: active
        display_name: 王民頌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勑，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210114） | accepted |
| name.primary | 王勑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |
| children | p_7w7R7PSA759EpLs8K9jpxH | 王民秀 | accepted |
| children | p_8Ep5P5ZpEFCitMHRmNMN6i | 王民傑 | accepted |
| children | p_BQysQ4M7AfMq9vujKpVLj4 | 王民獻 | accepted |
| children | p_C3qbUqK8r4tdCLJC1H25mH | 王民卿 | accepted |
| children | p_fSQoZdJtpp4PDfZBMTNv9M | 王民悅 | accepted |
| children | p_n3vStaMTAGUemfDPhiMx1L | 王民綱 | accepted |
| children | p_oBLDjR5Hdjeu8G8S7GFHUw | 王民熙 | accepted |
| children | p_oi2PvK2HYJDZDMKhZv9HwZ | 王民聘 | accepted |
| children | p_y8qq6ZZQLo2v36rcUxxeFP | 王民戴 | accepted |
| children | p_yPbAyPeH49qEiDGBjDfaEA | 王民頌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勑（CBDB 210114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210114&o=json)
- [中国历代人物传记资料库：王民戴（CBDB 210127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json)
- [中国历代人物传记资料库：王民綱（CBDB 210120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210120&o=json)
- [中国历代人物传记资料库：王民傑（CBDB 210118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210118&o=json)
- [中国历代人物传记资料库：王民聘（CBDB 210121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210121&o=json)
- [中国历代人物传记资料库：王民卿（CBDB 210119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json)
- [中国历代人物传记资料库：王民順（CBDB 205877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json)
- [中国历代人物传记资料库：王民頌（CBDB 210128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210128&o=json)
- [中国历代人物传记资料库：王民熙（CBDB 210124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210124&o=json)
- [中国历代人物传记资料库：王民獻（CBDB 210122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json)
- [中国历代人物传记资料库：王民秀（CBDB 210125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json)
- [中国历代人物传记资料库：王民悅（CBDB 210123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210123&o=json)

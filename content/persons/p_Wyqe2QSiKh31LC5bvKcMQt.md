---
schema: wang-person/v1
id: p_Wyqe2QSiKh31LC5bvKcMQt
status: active
merged_into: null
display_name: 王敬
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XSac1xNgePs7KeURfTxkDB
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t8pMCGwcfAea3ydFNHUgVB
          claim_id: c_XSac1xNgePs7KeURfTxkDB
          source_id: s_6dCU8EHZ2CAzCvNAy4v4Vf
          stance: supports
          locator: CBDB:257374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257374）
          source: &a1
            id: s_6dCU8EHZ2CAzCvNAy4v4Vf
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 257374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257374&o=json
            external_identifier: CBDB:257374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JkD97Sdp5Dhswd1fnmvunt
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PP_MJ0-O1PS1nVrGpGHxb5
          claim_id: c_JkD97Sdp5Dhswd1fnmvunt
          source_id: s_6dCU8EHZ2CAzCvNAy4v4Vf
          stance: supports
          locator: CBDB:257374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DlDNd3N0USEPI8FHrTW4u9
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJJ0CaD13OFLRowvBQGDsO
          claim_id: c_DlDNd3N0USEPI8FHrTW4u9
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_56Pt143yiZ578FsUUdFHTb
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 67865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json
            external_identifier: CBDB:67865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_sAWvswkrhtrzsW-MO55Tj-
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9pfN7HQck1wEnEWHqXuPzH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7M5w-i1sOCbjiVDyXy3X4
          claim_id: c_sAWvswkrhtrzsW-MO55Tj-
          source_id: s_1m1JC1OWYhVtS5xECuZHcY
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮 与 王佑 为同胞（CBDB 记「弟」），王佑 之父／母即 王禮 之父／母。
          source:
            id: s_1m1JC1OWYhVtS5xECuZHcY
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 257379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257379&o=json
            external_identifier: CBDB:257379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9pfN7HQck1wEnEWHqXuPzH
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_6VKSQkRYepjMNk7Cegldju
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GbM7KNG9ynVntNheWxVriM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EZkmA9d0BU3ObYqZGE_UFR
          claim_id: c_6VKSQkRYepjMNk7Cegldju
          source_id: s_Wjq-Psz6chR3QuhArdnIeS
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王智 与 王佑 为同胞（CBDB 记「弟」），王佑 之父／母即 王智 之父／母。
          source:
            id: s_Wjq-Psz6chR3QuhArdnIeS
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 257381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257381&o=json
            external_identifier: CBDB:257381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GbM7KNG9ynVntNheWxVriM
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_NywhLM6poZ9jF2DL1IN1EK
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CUTDcshQ9hAtB5JUCfg2KQ
          claim_id: c_NywhLM6poZ9jF2DL1IN1EK
          source_id: s_hTjcMsEjBCwUegdbm8rFVm
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王佑 为同胞（CBDB 记「兄」），王佑 之父／母即 王信 之父／母。
          source:
            id: s_hTjcMsEjBCwUegdbm8rFVm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json
            external_identifier: CBDB:257382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e6VSnZaHMKRSrJ5MbnY2r6
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_B_Hd0i3lsF365mkm79Trbu
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zoejxIKAhN9Ek8L05rYSg0
          claim_id: c_B_Hd0i3lsF365mkm79Trbu
          source_id: s_9ntURg3DpPvGF5QX6iNBsE
          stance: supports
          locator: CBDB：兄弟 王佑（67865）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王義 与 王佑 为同胞（CBDB 记「弟」），王佑 之父／母即 王義 之父／母。
          source:
            id: s_9ntURg3DpPvGF5QX6iNBsE
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 257378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json
            external_identifier: CBDB:257378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jyzLeB9zL3EFtRn9LCbhNW
        status: active
        display_name: 王義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。成化十七年進士，籍贯肥城。（中国历代人物传记资料库 CBDB 257374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |
| children | p_9pfN7HQck1wEnEWHqXuPzH | 王禮 | accepted |
| children | p_GbM7KNG9ynVntNheWxVriM | 王智 | accepted |
| children | p_e6VSnZaHMKRSrJ5MbnY2r6 | 王信 | accepted |
| children | p_jyzLeB9zL3EFtRn9LCbhNW | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 257374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257374&o=json)
- [中国历代人物传记资料库：王禮（CBDB 257379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257379&o=json)
- [中国历代人物传记资料库：王信（CBDB 257382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json)
- [中国历代人物传记资料库：王義（CBDB 257378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json)
- [中国历代人物传记资料库：王佑（CBDB 67865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json)
- [中国历代人物传记资料库：王智（CBDB 257381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257381&o=json)

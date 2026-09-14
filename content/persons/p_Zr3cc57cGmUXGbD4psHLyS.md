---
schema: wang-person/v1
id: p_Zr3cc57cGmUXGbD4psHLyS
status: active
merged_into: null
display_name: 王仕復
cbdb_id: 238052
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXLhHgkEGFPetx4R8LEzCv
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕復，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_THccbaU5YX7BM4FdXdGKfh
          claim_id: c_gXLhHgkEGFPetx4R8LEzCv
          source_id: s_iN76XxvPC1gB1fMEhEaeAP
          stance: supports
          locator: CBDB:238052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iN76XxvPC1gB1fMEhEaeAP
            source_type: api_record
            title: 中国历代人物传记资料库：王仕復（CBDB 238052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238052&o=json
            external_identifier: CBDB:238052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2QxDR4X9g1R6vfYuG5Lewr
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qEDLk3whmU7EHLA6rqA8eG
          claim_id: c_2QxDR4X9g1R6vfYuG5Lewr
          source_id: s_iN76XxvPC1gB1fMEhEaeAP
          stance: supports
          locator: CBDB:238052
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B8o3gYbeOxx3Z0i4cWDPD-
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMQPsnar_3FC8lH_0YSEwB
          claim_id: c_B8o3gYbeOxx3Z0i4cWDPD-
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p1CXfyPv5LXzNzgR3qcWyx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json
            external_identifier: CBDB:67953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
    - claim:
        id: c_4anqVP7FAiBkbWtm0YgybU
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZmNuQVEjTeM1YCqNfPMP8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_453QC-E7D10Yu8XGKzZuvH
          claim_id: c_4anqVP7FAiBkbWtm0YgybU
          source_id: s_W6rBt0jkd_NpTa_VtSQ748
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王護 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王護 之父／母。
          source:
            id: s_W6rBt0jkd_NpTa_VtSQ748
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 238062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238062&o=json
            external_identifier: CBDB:238062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ZmNuQVEjTeM1YCqNfPMP8
        status: active
        display_name: 王護
        merged_into_person_id: null
    - claim:
        id: c_DY7GaErHClfTm5RZWUhyyf
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJrhFd3BeA7RWRk5JBJ5ED
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuUVRL_54NQzL3aX0gQzVu
          claim_id: c_DY7GaErHClfTm5RZWUhyyf
          source_id: s_j8X0B25auKnK68w-fRTbtt
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王訓 之父／母。
          source:
            id: s_j8X0B25auKnK68w-fRTbtt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 238060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238060&o=json
            external_identifier: CBDB:238060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJrhFd3BeA7RWRk5JBJ5ED
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_TCHLGfyhyxoX0cTCyHSw8z
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E3QDRAKVeAEYLmzzBxczHb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fZJhfDgs9r5y01PPhnkgAz
          claim_id: c_TCHLGfyhyxoX0cTCyHSw8z
          source_id: s_foN4KHsgJJquDOOHe9S4FB
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王詡 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王詡 之父／母。
          source:
            id: s_foN4KHsgJJquDOOHe9S4FB
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 238063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json
            external_identifier: CBDB:238063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E3QDRAKVeAEYLmzzBxczHb
        status: active
        display_name: 王詡
        merged_into_person_id: null
    - claim:
        id: c_EyszvbkUGnjXSH6LfOQeTT
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GA5YTX1LYddFUt38uKCfD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MIcB5IBlneTxZ_HSACAlB
          claim_id: c_EyszvbkUGnjXSH6LfOQeTT
          source_id: s_7s6FHoapUENiUvtvm0MDIe
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王誧 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王誧 之父／母。
          source:
            id: s_7s6FHoapUENiUvtvm0MDIe
            source_type: api_record
            title: 中国历代人物传记资料库：王誧（CBDB 238067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238067&o=json
            external_identifier: CBDB:238067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GA5YTX1LYddFUt38uKCfD2
        status: active
        display_name: 王誧
        merged_into_person_id: null
    - claim:
        id: c_YpgMw_muvmoF3gemzfDHit
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NDoSrSfUL15U7JdJDrWceZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ojBHkDaHqN0CQ8MwFFA7U0
          claim_id: c_YpgMw_muvmoF3gemzfDHit
          source_id: s_97sdjRwdz0-kWLtwTkbcvE
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王諶 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王諶 之父／母。
          source:
            id: s_97sdjRwdz0-kWLtwTkbcvE
            source_type: api_record
            title: 中国历代人物传记资料库：王諶（CBDB 238065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238065&o=json
            external_identifier: CBDB:238065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NDoSrSfUL15U7JdJDrWceZ
        status: active
        display_name: 王諶
        merged_into_person_id: null
    - claim:
        id: c_cu2SvT-MkJvjz5unuOhfgC
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkVjCs2adG3HPFyMu98fVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WA9zKo6G5UiiSdnz1wfaGf
          claim_id: c_cu2SvT-MkJvjz5unuOhfgC
          source_id: s_2KhHCcws643IKxHW_NFpxH
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王謨 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王謨 之父／母。
          source:
            id: s_2KhHCcws643IKxHW_NFpxH
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 238056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json
            external_identifier: CBDB:238056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QkVjCs2adG3HPFyMu98fVN
        status: active
        display_name: 王謨
        merged_into_person_id: null
    - claim:
        id: c_t3xXCQJe2IxX9jaw9htGUr
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8J3CV-k9r0dtgXy2Zby29
          claim_id: c_t3xXCQJe2IxX9jaw9htGUr
          source_id: s_aFbKg3Oo42hoabAfDLjGVa
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王謙 之父／母。
          source:
            id: s_aFbKg3Oo42hoabAfDLjGVa
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 238061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json
            external_identifier: CBDB:238061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xit3jEeEJdCCRBnfxzPDWn
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_S3PjyS288BsP3VxoMnsu7T
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRmajZMi4CLBg7x1fJXP17
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7z5XaDzidyfso_wELnnGx8
          claim_id: c_S3PjyS288BsP3VxoMnsu7T
          source_id: s_C0yOeKxjequCHQZX_MqIp3
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王講 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王講 之父／母。
          source:
            id: s_C0yOeKxjequCHQZX_MqIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王講（CBDB 238058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json
            external_identifier: CBDB:238058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dRmajZMi4CLBg7x1fJXP17
        status: active
        display_name: 王講
        merged_into_person_id: null
    - claim:
        id: c_p1dUMb4ypYA-7eQIXciSAb
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMCMRGSXiGjY2dWR579fri
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BNU-A4NOniIuxnrDZ8q67G
          claim_id: c_p1dUMb4ypYA-7eQIXciSAb
          source_id: s_1N09etlIiC7k_acylykryo
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王譓 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王譓 之父／母。
          source:
            id: s_1N09etlIiC7k_acylykryo
            source_type: api_record
            title: 中国历代人物传记资料库：王譓（CBDB 238057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238057&o=json
            external_identifier: CBDB:238057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nMCMRGSXiGjY2dWR579fri
        status: active
        display_name: 王譓
        merged_into_person_id: null
    - claim:
        id: c_LKOvOsS7PBTHMM5Y00kL_f
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTTqCRTI2E71tCyZmLPZBF
          claim_id: c_LKOvOsS7PBTHMM5Y00kL_f
          source_id: s_k67rajDHvbxXVLd7OjKUWP
          stance: supports
          locator: CBDB：兄弟 王詔（67953）之父／母 王仕復
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王誥 之父／母。
          source:
            id: s_k67rajDHvbxXVLd7OjKUWP
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 238066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json
            external_identifier: CBDB:238066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pAeM9kBSTAJMf4aS8aopYc
        status: active
        display_name: 王誥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仕復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕復，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238052） | accepted |
| name.primary | 王仕復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |
| children | p_1ZmNuQVEjTeM1YCqNfPMP8 | 王護 | accepted |
| children | p_DJrhFd3BeA7RWRk5JBJ5ED | 王訓 | accepted |
| children | p_E3QDRAKVeAEYLmzzBxczHb | 王詡 | accepted |
| children | p_GA5YTX1LYddFUt38uKCfD2 | 王誧 | accepted |
| children | p_NDoSrSfUL15U7JdJDrWceZ | 王諶 | accepted |
| children | p_QkVjCs2adG3HPFyMu98fVN | 王謨 | accepted |
| children | p_Xit3jEeEJdCCRBnfxzPDWn | 王謙 | accepted |
| children | p_dRmajZMi4CLBg7x1fJXP17 | 王講 | accepted |
| children | p_nMCMRGSXiGjY2dWR579fri | 王譓 | accepted |
| children | p_pAeM9kBSTAJMf4aS8aopYc | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誧（CBDB 238067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238067&o=json)
- [中国历代人物传记资料库：王諶（CBDB 238065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238065&o=json)
- [中国历代人物传记资料库：王誥（CBDB 238066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json)
- [中国历代人物传记资料库：王護（CBDB 238062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238062&o=json)
- [中国历代人物传记资料库：王譓（CBDB 238057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238057&o=json)
- [中国历代人物传记资料库：王講（CBDB 238058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json)
- [中国历代人物传记资料库：王謨（CBDB 238056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json)
- [中国历代人物传记资料库：王謙（CBDB 238061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json)
- [中国历代人物传记资料库：王仕復（CBDB 238052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238052&o=json)
- [中国历代人物传记资料库：王詡（CBDB 238063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json)
- [中国历代人物传记资料库：王訓（CBDB 238060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238060&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json)

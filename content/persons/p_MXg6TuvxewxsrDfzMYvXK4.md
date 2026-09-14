---
schema: wang-person/v1
id: p_MXg6TuvxewxsrDfzMYvXK4
status: active
merged_into: null
display_name: 王世官
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ddA44jVH1MEwKNzeyEGCpd
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_im8DvX7dHJni25pCRij2XJ
          claim_id: c_ddA44jVH1MEwKNzeyEGCpd
          source_id: s_EdoNiNyaU4FSrosJAcbcL5
          stance: supports
          locator: CBDB:330011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330011）
          source: &a1
            id: s_EdoNiNyaU4FSrosJAcbcL5
            source_type: api_record
            title: 中国历代人物传记资料库：王世官（CBDB 330011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330011&o=json
            external_identifier: CBDB:330011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GGmzFujWP2xcAHcsdHyGc8
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世官，明人物。嘉靖四十四年進士，籍贯清苑，曾任散官。（中国历代人物传记资料库 CBDB 330011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ak1sA28n4hLlWr9fJI-FW9
          claim_id: c_GGmzFujWP2xcAHcsdHyGc8
          source_id: s_EdoNiNyaU4FSrosJAcbcL5
          stance: supports
          locator: CBDB:330011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vjcbi1cI2ggGyXDrNPWRJb
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9Numu2x8vxd9Fvky1T9NB
          claim_id: c_vjcbi1cI2ggGyXDrNPWRJb
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DjdLKPpkYfPVp98V5ZvCZr
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 205226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json
            external_identifier: CBDB:205226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aPcrqB9XkxSACSANyGxVsW
        status: active
        display_name: 王軒
        merged_into_person_id: null
    - claim:
        id: c_THB3Mgmkbp652ggMGAKTDv
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7ejWm6AsuUu1BRuWnmPNET
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X6m3VgPuM49DDpKqXFpXMA
          claim_id: c_THB3Mgmkbp652ggMGAKTDv
          source_id: s_RTbUuk31SGmKtCz8tuGDuA
          stance: supports
          locator: CBDB：兄弟 王軒（205226）之父／母 王世官
          quotation: null
          interpretation_note: 由兄弟关系推断：王軾 与 王軒 为同胞（CBDB 记「兄」），王軒 之父／母即 王軾 之父／母。
          source:
            id: s_RTbUuk31SGmKtCz8tuGDuA
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 330016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330016&o=json
            external_identifier: CBDB:330016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7ejWm6AsuUu1BRuWnmPNET
        status: active
        display_name: 王軾
        merged_into_person_id: null
    - claim:
        id: c_usuxgDA9O_0u5ipSDyMF33
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oYm5JaHd6WnY9ywTcqr4SC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqrD3Nwz-owi9xgv6K3Dub
          claim_id: c_usuxgDA9O_0u5ipSDyMF33
          source_id: s_dcunhZKmn1GmGxER-s2NtO
          stance: supports
          locator: CBDB：兄弟 王軒（205226）之父／母 王世官
          quotation: null
          interpretation_note: 由兄弟关系推断：王轍 与 王軒 为同胞（CBDB 记「兄」），王軒 之父／母即 王轍 之父／母。
          source:
            id: s_dcunhZKmn1GmGxER-s2NtO
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 330015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json
            external_identifier: CBDB:330015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYm5JaHd6WnY9ywTcqr4SC
        status: active
        display_name: 王轍
        merged_into_person_id: null
    - claim:
        id: c_lnIb9YtewSNq87mPtcPdBs
        subject_person_id: p_MXg6TuvxewxsrDfzMYvXK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vVagYU4Teai8H8Gt1BBTv7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7lhc2156ZfMXn2zSK7-6TM
          claim_id: c_lnIb9YtewSNq87mPtcPdBs
          source_id: s_-vJfdo7I_nJTdADmcab1Ur
          stance: supports
          locator: CBDB：兄弟 王軒（205226）之父／母 王世官
          quotation: null
          interpretation_note: 由兄弟关系推断：王輯 与 王軒 为同胞（CBDB 记「弟」），王軒 之父／母即 王輯 之父／母。
          source:
            id: s_-vJfdo7I_nJTdADmcab1Ur
            source_type: api_record
            title: 中国历代人物传记资料库：王輯（CBDB 330014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330014&o=json
            external_identifier: CBDB:330014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vVagYU4Teai8H8Gt1BBTv7
        status: active
        display_name: 王輯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世官 | accepted |
| bio.summary | 王世官，明人物。嘉靖四十四年進士，籍贯清苑，曾任散官。（中国历代人物传记资料库 CBDB 330011） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aPcrqB9XkxSACSANyGxVsW | 王軒 | accepted |
| children | p_7ejWm6AsuUu1BRuWnmPNET | 王軾 | accepted |
| children | p_oYm5JaHd6WnY9ywTcqr4SC | 王轍 | accepted |
| children | p_vVagYU4Teai8H8Gt1BBTv7 | 王輯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輯（CBDB 330014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330014&o=json)
- [中国历代人物传记资料库：王世官（CBDB 330011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330011&o=json)
- [中国历代人物传记资料库：王軾（CBDB 330016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330016&o=json)
- [中国历代人物传记资料库：王軒（CBDB 205226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json)
- [中国历代人物传记资料库：王轍（CBDB 330015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330015&o=json)

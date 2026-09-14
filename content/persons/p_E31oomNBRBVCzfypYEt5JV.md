---
schema: wang-person/v1
id: p_E31oomNBRBVCzfypYEt5JV
status: active
merged_into: null
display_name: 王嘉謀
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKcSQcb5K1LLrGmnFGQe2h
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgTC3mH93nfesFSJqmkLir
          claim_id: c_zKcSQcb5K1LLrGmnFGQe2h
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: CBDB:280852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280852）
          source: &a1
            id: s_U6drzBkRt9CU9vE5VConTZ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謀（CBDB 280852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280852&o=json
            external_identifier: CBDB:280852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cDkJ6AXqeEjJSrH4G26q75
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謀，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LWu6d5HXhZJO_w_MFqn1MV
          claim_id: c_cDkJ6AXqeEjJSrH4G26q75
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: CBDB:280852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZaRHHq7w41zYSuz98o74nt
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBzgqTxy3CB-o1WmjeiOKO
          claim_id: c_ZaRHHq7w41zYSuz98o74nt
          source_id: s_U6drzBkRt9CU9vE5VConTZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
    - claim:
        id: c_GeKmd_FegRZg_yFzqadSXz
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FftLK4cDP6h9jAzvaZiSBP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3HycN6xJ4gEBMMShgaLjOI
          claim_id: c_GeKmd_FegRZg_yFzqadSXz
          source_id: s_dGrC2RGcLuDVPGf8aPdEDX
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪宣 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪宣 之父／母。
          source:
            id: s_dGrC2RGcLuDVPGf8aPdEDX
            source_type: api_record
            title: 中国历代人物传记资料库：王洪宣（CBDB 280908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280908&o=json
            external_identifier: CBDB:280908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FftLK4cDP6h9jAzvaZiSBP
        status: active
        display_name: 王洪宣
        merged_into_person_id: null
    - claim:
        id: c_deC8lnaZUvE7OkWWWpT7m6
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOy-IXW-Mgc1_-KsEcKECa
          claim_id: c_deC8lnaZUvE7OkWWWpT7m6
          source_id: s_R7z3CE64-tcE6oDCpw_hfp
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪舒 与 王度 为同胞（CBDB 记「弟」），王度 之父／母即 王洪舒 之父／母。
          source:
            id: s_R7z3CE64-tcE6oDCpw_hfp
            source_type: api_record
            title: 中国历代人物传记资料库：王洪舒（CBDB 280886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json
            external_identifier: CBDB:280886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GWbyowL6he2D9D7Fmw5gbM
        status: active
        display_name: 王洪舒
        merged_into_person_id: null
    - claim:
        id: c_AeHP6sw7-nq5ruaAOAIT8b
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LLREJiCCqwm4z94CNj3UTW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xCMSKNhUD5Lt9S5lKAAul
          claim_id: c_AeHP6sw7-nq5ruaAOAIT8b
          source_id: s_o27MZc0A1-e49vD5XWLdSV
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪鈞 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪鈞 之父／母。
          source:
            id: s_o27MZc0A1-e49vD5XWLdSV
            source_type: api_record
            title: 中国历代人物传记资料库：王洪鈞（CBDB 280930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280930&o=json
            external_identifier: CBDB:280930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LLREJiCCqwm4z94CNj3UTW
        status: active
        display_name: 王洪鈞
        merged_into_person_id: null
    - claim:
        id: c_5CtTCDlSr4NrJAWcBHnsv1
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g85Poiphi9f2XQw1zs1m8x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpX3VrFuTUvelkRQkQtbUM
          claim_id: c_5CtTCDlSr4NrJAWcBHnsv1
          source_id: s__uIeTG2xPgKLMoYc0SYacy
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪惟 与 王度 为同胞（CBDB 记「弟」），王度 之父／母即 王洪惟 之父／母。
          source:
            id: s__uIeTG2xPgKLMoYc0SYacy
            source_type: api_record
            title: 中国历代人物传记资料库：王洪惟（CBDB 280897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280897&o=json
            external_identifier: CBDB:280897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g85Poiphi9f2XQw1zs1m8x
        status: active
        display_name: 王洪惟
        merged_into_person_id: null
    - claim:
        id: c_z3kV4eBbmfUUtPak_T-lUQ
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k19ZBACPqq7FQR137ZZo9p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4qowO7Ib2BdW6lndGxBDm
          claim_id: c_z3kV4eBbmfUUtPak_T-lUQ
          source_id: s_k8u1e9GvwKTX95ABbdO6Wk
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪裕 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪裕 之父／母。
          source:
            id: s_k8u1e9GvwKTX95ABbdO6Wk
            source_type: api_record
            title: 中国历代人物传记资料库：王洪裕（CBDB 280919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json
            external_identifier: CBDB:280919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k19ZBACPqq7FQR137ZZo9p
        status: active
        display_name: 王洪裕
        merged_into_person_id: null
    - claim:
        id: c_bDPJqqV5D_Ex8aRr5_5VrL
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kYW2vP1JT4ALsCwic8833c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKm-ioBldtQevPy6blLT5V
          claim_id: c_bDPJqqV5D_Ex8aRr5_5VrL
          source_id: s_MPVxRu588ZiYfHKQPs_-Sm
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪緒 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪緒 之父／母。
          source:
            id: s_MPVxRu588ZiYfHKQPs_-Sm
            source_type: api_record
            title: 中国历代人物传记资料库：王洪緒（CBDB 280941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json
            external_identifier: CBDB:280941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kYW2vP1JT4ALsCwic8833c
        status: active
        display_name: 王洪緒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉謀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉謀 | accepted |
| bio.summary | 王嘉謀，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |
| children | p_FftLK4cDP6h9jAzvaZiSBP | 王洪宣 | accepted |
| children | p_GWbyowL6he2D9D7Fmw5gbM | 王洪舒 | accepted |
| children | p_LLREJiCCqwm4z94CNj3UTW | 王洪鈞 | accepted |
| children | p_g85Poiphi9f2XQw1zs1m8x | 王洪惟 | accepted |
| children | p_k19ZBACPqq7FQR137ZZo9p | 王洪裕 | accepted |
| children | p_kYW2vP1JT4ALsCwic8833c | 王洪緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪鈞（CBDB 280930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280930&o=json)
- [中国历代人物传记资料库：王洪舒（CBDB 280886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json)
- [中国历代人物传记资料库：王洪惟（CBDB 280897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280897&o=json)
- [中国历代人物传记资料库：王洪緒（CBDB 280941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json)
- [中国历代人物传记资料库：王洪宣（CBDB 280908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280908&o=json)
- [中国历代人物传记资料库：王洪裕（CBDB 280919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json)
- [中国历代人物传记资料库：王嘉謀（CBDB 280852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280852&o=json)

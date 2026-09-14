---
schema: wang-person/v1
id: p_J9N7hzaFrJkzxknueiQ82Y
status: active
merged_into: null
display_name: 王度
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wjfQfzNwbpTSR5KXqJsC2W
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DEoGHN3uABmdM9tKh8pjUy
          claim_id: c_wjfQfzNwbpTSR5KXqJsC2W
          source_id: s_EUfL97Mpr84pZAgg62g13t
          stance: supports
          locator: CBDB:198501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198501）
          source: &a1
            id: s_EUfL97Mpr84pZAgg62g13t
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 198501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198501&o=json
            external_identifier: CBDB:198501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GqTza1QKon3hiuk1v2AFnB
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bMj9b68NaDAPvL7jhPnP6
          claim_id: c_GqTza1QKon3hiuk1v2AFnB
          source_id: s_EUfL97Mpr84pZAgg62g13t
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56CJFd5AgAd1FVzBBoQKvz
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度（生于1407年），明人物。景泰五年進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 198501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g5FXNpYviKWg4vSKEKmGsy
          claim_id: c_56CJFd5AgAd1FVzBBoQKvz
          source_id: s_EUfL97Mpr84pZAgg62g13t
          stance: supports
          locator: CBDB:198501
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_E31oomNBRBVCzfypYEt5JV
        status: active
        display_name: 王嘉謀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__cOmNc6lIxj3LThOyZcdSO
        subject_person_id: p_5JaskhrdQ3PeuLsNvA3kdk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVlWCvWMvtjp03noCtuF6v
          claim_id: c__cOmNc6lIxj3LThOyZcdSO
          source_id: s_BJVtRb6Lxo3nrv8NUhE8vs
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BJVtRb6Lxo3nrv8NUhE8vs
            source_type: api_record
            title: 中国历代人物传记资料库：王所安（CBDB 280830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280830&o=json
            external_identifier: CBDB:280830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5JaskhrdQ3PeuLsNvA3kdk
        status: active
        display_name: 王所安
        merged_into_person_id: null
    - claim:
        id: c_mFp8rxaxi61y-kv2O4JtXz
        subject_person_id: p_zePF3BjH5HucUc8QauwQdp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6exGC-urxssPiQGxkfCK_g
          claim_id: c_mFp8rxaxi61y-kv2O4JtXz
          source_id: s_NJ4uDTcgp13fKXjBCRcNtp
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NJ4uDTcgp13fKXjBCRcNtp
            source_type: api_record
            title: 中国历代人物传记资料库：王子通（CBDB 280841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280841&o=json
            external_identifier: CBDB:280841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zePF3BjH5HucUc8QauwQdp
        status: active
        display_name: 王子通
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hT5ZZOeinLDnGGejfAgG7l
        subject_person_id: p_FftLK4cDP6h9jAzvaZiSBP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uXFmOrS-1K3Vl7XRwHdI-h
          claim_id: c_hT5ZZOeinLDnGGejfAgG7l
          source_id: s_dGrC2RGcLuDVPGf8aPdEDX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_t4dGqZlvaNyc6yuxTX_Lyw
        subject_person_id: p_GWbyowL6he2D9D7Fmw5gbM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q53o_M1VwVAJFFGwRg4Xii
          claim_id: c_t4dGqZlvaNyc6yuxTX_Lyw
          source_id: s_R7z3CE64-tcE6oDCpw_hfp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_1xcUv_HLRiydwHPAfrnF69
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LLREJiCCqwm4z94CNj3UTW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pPCKIpDbkPFUtBC86AaJ2t
          claim_id: c_1xcUv_HLRiydwHPAfrnF69
          source_id: s_o27MZc0A1-e49vD5XWLdSV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_HF5VtCAbS3m1ZYWvhEuKB3
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g85Poiphi9f2XQw1zs1m8x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T1GZRtJiszNlFfvSroqtJZ
          claim_id: c_HF5VtCAbS3m1ZYWvhEuKB3
          source_id: s__uIeTG2xPgKLMoYc0SYacy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_0TY1lBKAI4PnFq4m8wIy4f
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k19ZBACPqq7FQR137ZZo9p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoCdXdlLb_cD1MykuKEuv7
          claim_id: c_0TY1lBKAI4PnFq4m8wIy4f
          source_id: s_k8u1e9GvwKTX95ABbdO6Wk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_dgoZsErwYREqupuPTn2OGW
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kYW2vP1JT4ALsCwic8833c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjvNUW8O9_Dx8iJkwkTPs3
          claim_id: c_dgoZsErwYREqupuPTn2OGW
          source_id: s_MPVxRu588ZiYfHKQPs_-Sm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | 王度（生于1407年），明人物。景泰五年進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 198501） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E31oomNBRBVCzfypYEt5JV | 王嘉謀 | accepted |
| ancestors | p_5JaskhrdQ3PeuLsNvA3kdk | 王所安 | accepted |
| ancestors | p_zePF3BjH5HucUc8QauwQdp | 王子通 | accepted |
| other | p_FftLK4cDP6h9jAzvaZiSBP | 王洪宣 | accepted |
| other | p_GWbyowL6he2D9D7Fmw5gbM | 王洪舒 | accepted |
| other | p_LLREJiCCqwm4z94CNj3UTW | 王洪鈞 | accepted |
| other | p_g85Poiphi9f2XQw1zs1m8x | 王洪惟 | accepted |
| other | p_k19ZBACPqq7FQR137ZZo9p | 王洪裕 | accepted |
| other | p_kYW2vP1JT4ALsCwic8833c | 王洪緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 198501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198501&o=json)
- [中国历代人物传记资料库：王洪鈞（CBDB 280930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280930&o=json)
- [中国历代人物传记资料库：王洪舒（CBDB 280886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280886&o=json)
- [中国历代人物传记资料库：王洪惟（CBDB 280897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280897&o=json)
- [中国历代人物传记资料库：王洪緒（CBDB 280941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json)
- [中国历代人物传记资料库：王洪宣（CBDB 280908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280908&o=json)
- [中国历代人物传记资料库：王洪裕（CBDB 280919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json)
- [中国历代人物传记资料库：王嘉謀（CBDB 280852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280852&o=json)
- [中国历代人物传记资料库：王所安（CBDB 280830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280830&o=json)
- [中国历代人物传记资料库：王子通（CBDB 280841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280841&o=json)

---
schema: wang-person/v1
id: p_ghgtseEJkUC2ybxjB2cf7v
status: active
merged_into: null
display_name: 王立道
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEYHbdQZ66BeLVUqJ4iXUD
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpGmXMRs7JRDAj8gPdm2j4
          claim_id: c_sEYHbdQZ66BeLVUqJ4iXUD
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: CBDB:34712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34712）
          source: &a1
            id: s_MUbNoy15BYcB1rfWzY7dYg
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 34712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json
            external_identifier: CBDB:34712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o4CfpBoNX92cf9DQft66qa
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DY7EbJRUMdVLgTF5kWxqRe
          claim_id: c_o4CfpBoNX92cf9DQft66qa
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EfeZYf1yepFEYEcKBKgpa7
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15b3A1eAysYHJi4NNNR831
          claim_id: c_EfeZYf1yepFEYEcKBKgpa7
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qfDtCygNnSjCi5YVRLERaP
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道（1510年—1547年），明人物。明清進士進士，籍贯無錫，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 34712）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VD2RZU_UnWRdqGo2JfYHsm
          claim_id: c_qfDtCygNnSjCi5YVRLERaP
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: CBDB:34712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y2LIJVoIYDhzWigCe6glkm
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wr-GBSjN0M62i9bMKrm6Fx
          claim_id: c_Y2LIJVoIYDhzWigCe6glkm
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GSjakwc9qcDmQzVRm7NrP8
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QyjtZ_igryblQog6MaXq_4
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K4if1FnBjd9Nh5FkNdm7HQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mzvAJaBwvyjXXJkABYt_TP
          claim_id: c_QyjtZ_igryblQog6MaXq_4
          source_id: s_AGoIGqUd0bTdGY1t5tL6mI
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AGoIGqUd0bTdGY1t5tL6mI
            source_type: api_record
            title: 中国历代人物传记资料库：唐氏(王立道妻)（CBDB 295412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295412&o=json
            external_identifier: CBDB:295412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K4if1FnBjd9Nh5FkNdm7HQ
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8lb2PyCJM6McH2pG_wnzKU
        subject_person_id: p_KhayJvfHv4EZubYePUZF8P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aSEaoGMDNBpuzQzMWAMPa
          claim_id: c_8lb2PyCJM6McH2pG_wnzKU
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KhayJvfHv4EZubYePUZF8P
        status: active
        display_name: 王子輝
        merged_into_person_id: null
    - claim:
        id: c_MNjxb0KLjTmmVMBbAAcyZF
        subject_person_id: p_wJemAUaKC2t74cEjRVqWg6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9HEaU9V3t8yVTKqEzhidO
          claim_id: c_MNjxb0KLjTmmVMBbAAcyZF
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJemAUaKC2t74cEjRVqWg6
        status: active
        display_name: 王冕
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_03KbxyGUY6gkjns81W0kt0
        subject_person_id: p_5p53EfmQ44vsjoPLQMGmHx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_50_GLhAI_UUANofCEnCVih
          claim_id: c_03KbxyGUY6gkjns81W0kt0
          source_id: s_QJEC6uc2vI21KdiJ6Qd3MH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QJEC6uc2vI21KdiJ6Qd3MH
            source_type: api_record
            title: 中国历代人物传记资料库：王體道（CBDB 295415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295415&o=json
            external_identifier: CBDB:295415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5p53EfmQ44vsjoPLQMGmHx
        status: active
        display_name: 王體道
        merged_into_person_id: null
    - claim:
        id: c_BKSpZhoN5QDjTp-g5A11yS
        subject_person_id: p_Ca934HV8fa4ZEtNrvtPHC7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rJtpN5E-hoXamEwKawaa9
          claim_id: c_BKSpZhoN5QDjTp-g5A11yS
          source_id: s_vqUTc4-c8PgVEFD9EatSqC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vqUTc4-c8PgVEFD9EatSqC
            source_type: api_record
            title: 中国历代人物传记资料库：王重道（CBDB 295413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295413&o=json
            external_identifier: CBDB:295413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ca934HV8fa4ZEtNrvtPHC7
        status: active
        display_name: 王重道
        merged_into_person_id: null
    - claim:
        id: c_gC6so9TbZYyvqqaMASENZr
        subject_person_id: p_Vc6KENKcAbqKze1KoJMXro
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__l9SG_rYZvgMVuN_KE5Qqg
          claim_id: c_gC6so9TbZYyvqqaMASENZr
          source_id: s_0NwLTR5cEZmh0Tc0tDLsHH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0NwLTR5cEZmh0Tc0tDLsHH
            source_type: api_record
            title: 中国历代人物传记资料库：王望道（CBDB 295414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295414&o=json
            external_identifier: CBDB:295414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vc6KENKcAbqKze1KoJMXro
        status: active
        display_name: 王望道
        merged_into_person_id: null
    - claim:
        id: c_gEuvm8L7im2pnXcBOinGLy
        subject_person_id: p_ZzYjKwrCM9xrGwJQLLKYLY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TfrFZRix2hnPW46JTNQS2N
          claim_id: c_gEuvm8L7im2pnXcBOinGLy
          source_id: s_3eltEX29bU_qa0CbWwr1fd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3eltEX29bU_qa0CbWwr1fd
            source_type: api_record
            title: 中国历代人物传记资料库：王順道（CBDB 295417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json
            external_identifier: CBDB:295417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZzYjKwrCM9xrGwJQLLKYLY
        status: active
        display_name: 王順道
        merged_into_person_id: null
    - claim:
        id: c_y2zwmYSpBcYIebpwRaqExS
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xsZjWJG7Ngxguy33zQw34i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8enc2lRjQmjT6v7nRxbTW
          claim_id: c_y2zwmYSpBcYIebpwRaqExS
          source_id: s_Yg4ZW-w_qY3uHv8rqr_GgX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34712 王立道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yg4ZW-w_qY3uHv8rqr_GgX
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 295416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json
            external_identifier: CBDB:295416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xsZjWJG7Ngxguy33zQw34i
        status: active
        display_name: 王有道
        merged_into_person_id: null
---

# 王立道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立道 | accepted |
| birth.date | 1510年 | accepted |
| death.date | 1547年 | accepted |
| bio.summary | 王立道（1510年—1547年），明人物。明清進士進士，籍贯無錫，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 34712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GSjakwc9qcDmQzVRm7NrP8 | 王表 | accepted |
| spouses | p_K4if1FnBjd9Nh5FkNdm7HQ | 唐氏 | accepted |
| ancestors | p_KhayJvfHv4EZubYePUZF8P | 王子輝 | accepted |
| ancestors | p_wJemAUaKC2t74cEjRVqWg6 | 王冕 | accepted |
| other | p_5p53EfmQ44vsjoPLQMGmHx | 王體道 | accepted |
| other | p_Ca934HV8fa4ZEtNrvtPHC7 | 王重道 | accepted |
| other | p_Vc6KENKcAbqKze1KoJMXro | 王望道 | accepted |
| other | p_ZzYjKwrCM9xrGwJQLLKYLY | 王順道 | accepted |
| other | p_xsZjWJG7Ngxguy33zQw34i | 王有道 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐氏(王立道妻)（CBDB 295412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295412&o=json)
- [中国历代人物传记资料库：王立道（CBDB 34712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json)
- [中国历代人物传记资料库：王順道（CBDB 295417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295417&o=json)
- [中国历代人物传记资料库：王體道（CBDB 295415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295415&o=json)
- [中国历代人物传记资料库：王望道（CBDB 295414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295414&o=json)
- [中国历代人物传记资料库：王有道（CBDB 295416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295416&o=json)
- [中国历代人物传记资料库：王重道（CBDB 295413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295413&o=json)

---
schema: wang-person/v1
id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
status: active
merged_into: null
display_name: 王應璧
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3qPYGLcQ1fyMj5wnuYAEd
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LSZPdLqGmFXC8NfNCyTuJp
          claim_id: c_P3qPYGLcQ1fyMj5wnuYAEd
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: CBDB:203997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203997）
          source: &a1
            id: s_QAN5QDh2Pfie4nG4gBfdF4
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 203997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json
            external_identifier: CBDB:203997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3spJEJzKVcJiVgrcXdMXR5
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voexxmMREysKBrvxUnQCm4
          claim_id: c_3spJEJzKVcJiVgrcXdMXR5
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
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
        id: c_Tb5c9E426NaWzmxeG47CkR
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應璧（生于1513年），明人物。明清進士進士，籍贯聊城，入仕進士。（中国历代人物传记资料库 CBDB 203997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NrFlHPUo2WLT_nUDpHfMnf
          claim_id: c_Tb5c9E426NaWzmxeG47CkR
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: CBDB:203997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2cnXpx5H-n3g8WWM-TK3Jb
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JKkS2K07VsQE7F_Vk2DiC0
          claim_id: c_2cnXpx5H-n3g8WWM-TK3Jb
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vZNxiPDxgjLuXX3n9HfE91
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IfVR3xbmWL2HRnR-ntji-b
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_duxw8MZ3YJ9c8KCF3jmmm7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQJlmuhQTlR_x8ZxVb7Ckd
          claim_id: c_IfVR3xbmWL2HRnR-ntji-b
          source_id: s_6LoAFTfGTmreo-thYGqjDJ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6LoAFTfGTmreo-thYGqjDJ
            source_type: api_record
            title: 中国历代人物传记资料库：夏氏(王應璧妻)（CBDB 313045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313045&o=json
            external_identifier: CBDB:313045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_duxw8MZ3YJ9c8KCF3jmmm7
        status: active
        display_name: 夏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_l_yb-q8rMjeJUZDxoEEUKD
        subject_person_id: p_MSfyEC8UGGCNMEW3o3k44N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI-ZH8IUiCByhnKpXpzOnq
          claim_id: c_l_yb-q8rMjeJUZDxoEEUKD
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MSfyEC8UGGCNMEW3o3k44N
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_isA5_KpBfq9wPszXjJBxGy
        subject_person_id: p_CHoDtVc19HWvSbvszLdfer
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XpOuJ0SNpZC7ipUwa-BOyI
          claim_id: c_isA5_KpBfq9wPszXjJBxGy
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CHoDtVc19HWvSbvszLdfer
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_0B3IZSLmvzceUW8dWUa0cn
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_1uTPawXLyRPKzNbKDcQz5i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5wMc19jpHSQEydzJd6BAMQ
          claim_id: c_0B3IZSLmvzceUW8dWUa0cn
          source_id: s_2e3zpE522JInUfjMo4nyRV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2e3zpE522JInUfjMo4nyRV
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 313052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313052&o=json
            external_identifier: CBDB:313052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1uTPawXLyRPKzNbKDcQz5i
        status: active
        display_name: 王應麟
        merged_into_person_id: null
    - claim:
        id: c_DtRuQizHSjoDqWwyuAAs6a
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6AEhsWW3wUbv8nmJYGazPH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zK3xj5cBe5Htgdvop5LDF5
          claim_id: c_DtRuQizHSjoDqWwyuAAs6a
          source_id: s_dr_LdH3nREb1AdLW00eU_u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dr_LdH3nREb1AdLW00eU_u
            source_type: api_record
            title: 中国历代人物传记资料库：王應參（CBDB 313050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json
            external_identifier: CBDB:313050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6AEhsWW3wUbv8nmJYGazPH
        status: active
        display_name: 王應參
        merged_into_person_id: null
    - claim:
        id: c_0hDYIiDUDl9KUJNzccavtw
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GEavrdLjiFdZNp8BnrXwrs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHEKQEgzHdiPkCoby5NhK4
          claim_id: c_0hDYIiDUDl9KUJNzccavtw
          source_id: s_HVlCN3I-friDArRDHQq6iA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HVlCN3I-friDArRDHQq6iA
            source_type: api_record
            title: 中国历代人物传记资料库：王應麒（CBDB 313048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313048&o=json
            external_identifier: CBDB:313048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GEavrdLjiFdZNp8BnrXwrs
        status: active
        display_name: 王應麒
        merged_into_person_id: null
    - claim:
        id: c_rOsnsZTzyDq7YjTvERGnVt
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GpqU5i8K9hgEkHc4PsusJW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuxqctFeZgckCY_Gyi58zM
          claim_id: c_rOsnsZTzyDq7YjTvERGnVt
          source_id: s_VUsiir_Va7bhE2Eb3awfBT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VUsiir_Va7bhE2Eb3awfBT
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 313047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313047&o=json
            external_identifier: CBDB:313047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpqU5i8K9hgEkHc4PsusJW
        status: active
        display_name: 王應元
        merged_into_person_id: null
    - claim:
        id: c_RlF0KoN92QZI_oBIsabi7W
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cKYaDFXTiBFX19B92FrXF3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFeHiRfpirnsKegdrwynHe
          claim_id: c_RlF0KoN92QZI_oBIsabi7W
          source_id: s_frwIJvo0nbBfjJ7yYmcXER
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_frwIJvo0nbBfjJ7yYmcXER
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 313049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json
            external_identifier: CBDB:313049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cKYaDFXTiBFX19B92FrXF3
        status: active
        display_name: 王應祥
        merged_into_person_id: null
    - claim:
        id: c_I-7nKiv5NBPINpBuiJMbJ9
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iftPinCxVdcHjHuC1HMM4z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kfQ-xVjne4ddCXB_T2DOl
          claim_id: c_I-7nKiv5NBPINpBuiJMbJ9
          source_id: s_gG_-9RQnbWLgD9xrXxpDkg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203997 王應璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gG_-9RQnbWLgD9xrXxpDkg
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 313053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json
            external_identifier: CBDB:313053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iftPinCxVdcHjHuC1HMM4z
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
---

# 王應璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應璧 | accepted |
| birth.date | 1513年 | accepted |
| bio.summary | 王應璧（生于1513年），明人物。明清進士進士，籍贯聊城，入仕進士。（中国历代人物传记资料库 CBDB 203997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZNxiPDxgjLuXX3n9HfE91 | 王祿 | accepted |
| spouses | p_duxw8MZ3YJ9c8KCF3jmmm7 | 夏氏 | accepted |
| ancestors | p_MSfyEC8UGGCNMEW3o3k44N | 王義 | accepted |
| ancestors | p_CHoDtVc19HWvSbvszLdfer | 王鑑 | accepted |
| other | p_1uTPawXLyRPKzNbKDcQz5i | 王應麟 | accepted |
| other | p_6AEhsWW3wUbv8nmJYGazPH | 王應參 | accepted |
| other | p_GEavrdLjiFdZNp8BnrXwrs | 王應麒 | accepted |
| other | p_GpqU5i8K9hgEkHc4PsusJW | 王應元 | accepted |
| other | p_cKYaDFXTiBFX19B92FrXF3 | 王應祥 | accepted |
| other | p_iftPinCxVdcHjHuC1HMM4z | 王應鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應璧（CBDB 203997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json)
- [中国历代人物传记资料库：王應參（CBDB 313050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313050&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 313053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313053&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 313052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313052&o=json)
- [中国历代人物传记资料库：王應麒（CBDB 313048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313048&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 313049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313049&o=json)
- [中国历代人物传记资料库：王應元（CBDB 313047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313047&o=json)
- [中国历代人物传记资料库：夏氏(王應璧妻)（CBDB 313045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313045&o=json)

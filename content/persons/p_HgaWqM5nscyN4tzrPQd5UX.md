---
schema: wang-person/v1
id: p_HgaWqM5nscyN4tzrPQd5UX
status: active
merged_into: null
display_name: 王重賢
cbdb_id: 202269
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JubV4xkzxRWN1Fv7KxxzAY
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重賢（生于1493年），明人物。明清進士進士，籍贯交河，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 202269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wLImzsXOve9NKdALlpATZM
          claim_id: c_JubV4xkzxRWN1Fv7KxxzAY
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jHdnTBZPdDGvCr6ASha9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王重賢（CBDB 202269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json
            external_identifier: CBDB:202269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EmiPehMtHwtcpi54E3ruPZ
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1493-01-01
            latest: 1493-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DoEQrJWawY2wBDZHUL29Ba
          claim_id: c_EmiPehMtHwtcpi54E3ruPZ
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1493
          source:
            id: s_jHdnTBZPdDGvCr6ASha9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王重賢（CBDB 202269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json
            external_identifier: CBDB:202269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ap9Gp2Aa8xnbNDD3LqP6Pf
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fgxnzEAj6EQ9XtKaY1Qj73
          claim_id: c_Ap9Gp2Aa8xnbNDD3LqP6Pf
          source_id: s_jHdnTBZPdDGvCr6ASha9LR
          stance: supports
          locator: CBDB:202269
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1493
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2iQ3b3s1ay1zNvclxECBif
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKXwMlGUHr0LkSWhFomm6v
          claim_id: c_2iQ3b3s1ay1zNvclxECBif
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qd3RrwisKBNCET2WYrdjmq
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json
            external_identifier: CBDB:285846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GxH0m9Irak9CeEPnzHWY2N
        subject_person_id: p_1gaZDQ7d8kFL8eFuBSCEFG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k1YGCvyPK6iXteUY9fG5MR
          claim_id: c_GxH0m9Irak9CeEPnzHWY2N
          source_id: s_pdvS2r39n4pGjuVoxG3ciA
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pdvS2r39n4pGjuVoxG3ciA
            source_type: api_record
            title: 中国历代人物传记资料库：王友信（CBDB 285844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285844&o=json
            external_identifier: CBDB:285844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1gaZDQ7d8kFL8eFuBSCEFG
        status: active
        display_name: 王友信
        merged_into_person_id: null
    - claim:
        id: c_ON0cNXjPcpyAi_78FN1Nnf
        subject_person_id: p_V1Lxrxvhjt1V6KGoR8pwse
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sah6VPDFd2T0n6YgSnUecY
          claim_id: c_ON0cNXjPcpyAi_78FN1Nnf
          source_id: s_92DA7Crq517en2QZHHLaie
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_92DA7Crq517en2QZHHLaie
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 285845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json
            external_identifier: CBDB:285845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V1Lxrxvhjt1V6KGoR8pwse
        status: active
        display_name: 王安
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_lk2W8j71Iko0gEwFuGri3y
        subject_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aB_0awt1BTqKd8y4mySsNX
          claim_id: c_lk2W8j71Iko0gEwFuGri3y
          source_id: s_Vg0n4xNgHd9vAhhu5-FTtI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Vg0n4xNgHd9vAhhu5-FTtI
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DAJy1o7QiCVZi4DRPdNYJE
        status: active
        display_name: 王尊賢
        merged_into_person_id: null
    - claim:
        id: c_iEGuRISgs_sixGI_So08tf
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q7wseUVMMzks3Dk919AK4X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPELOmrUbr4-NjmT7ZeGUN
          claim_id: c_iEGuRISgs_sixGI_So08tf
          source_id: s_r2nbJt1-xMt6ET6a6383dx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r2nbJt1-xMt6ET6a6383dx
            source_type: api_record
            title: 中国历代人物传记资料库：王禮賢（CBDB 285853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json
            external_identifier: CBDB:285853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q7wseUVMMzks3Dk919AK4X
        status: active
        display_name: 王禮賢
        merged_into_person_id: null
    - claim:
        id: c_0PTZBMNyM1IDJJdrPmW85b
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xUI7j7uUFfjLb9tEgatdxp
          claim_id: c_0PTZBMNyM1IDJJdrPmW85b
          source_id: s_fh6v8fGNibODYcRG-29GsO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fh6v8fGNibODYcRG-29GsO
            source_type: api_record
            title: 中国历代人物传记资料库：王好賢（CBDB 285849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json
            external_identifier: CBDB:285849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QgAKGJMuGM4ng3rJwQxmzL
        status: active
        display_name: 王好賢
        merged_into_person_id: null
    - claim:
        id: c_m3MM7QH0ibKgItMlqme0YN
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z3GTgTpNaA8u07N1p8eviL
          claim_id: c_m3MM7QH0ibKgItMlqme0YN
          source_id: s_dPfXbXoXOPeAcEDE8sQQZ2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dPfXbXoXOPeAcEDE8sQQZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王任賢（CBDB 285851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json
            external_identifier: CBDB:285851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bMUWHbsYZDtCdQB3JuV7sD
        status: active
        display_name: 王任賢
        merged_into_person_id: null
    - claim:
        id: c_PTe2GEI5vBpq-Mx-Cud0BQ
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQdR7e93LG9QZmy1MEnZf1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_icekDkTlNyjobeKNDG4Ork
          claim_id: c_PTe2GEI5vBpq-Mx-Cud0BQ
          source_id: s_w4QJYzRfWX2I9q__Hw2jNf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w4QJYzRfWX2I9q__Hw2jNf
            source_type: api_record
            title: 中国历代人物传记资料库：王賓賢（CBDB 285856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285856&o=json
            external_identifier: CBDB:285856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQdR7e93LG9QZmy1MEnZf1
        status: active
        display_name: 王賓賢
        merged_into_person_id: null
    - claim:
        id: c_g6PHCo4TaIZhSAssPe6Q7g
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hagEp58DSsRZ9v3Sk6QZ5u
          claim_id: c_g6PHCo4TaIZhSAssPe6Q7g
          source_id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 285852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json
            external_identifier: CBDB:285852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mPJ5F3MMZrGAAvNTPSFyR8
        status: active
        display_name: 王進賢
        merged_into_person_id: null
    - claim:
        id: c_yu-8TG_8PXNKZNM7snzMRH
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-Bp6gvoFn6DwEzeXwGZ8Y
          claim_id: c_yu-8TG_8PXNKZNM7snzMRH
          source_id: s_XtKLfuAgeZp20UosqPtD4_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XtKLfuAgeZp20UosqPtD4_
            source_type: api_record
            title: 中国历代人物传记资料库：王親賢（CBDB 285855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json
            external_identifier: CBDB:285855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oHGHWdYHkzXEnPqLgbkDfN
        status: active
        display_name: 王親賢
        merged_into_person_id: null
---

# 王重賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王重賢（生于1493年），明人物。明清進士進士，籍贯交河，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 202269） | accepted |
| birth.date | 1493年 | accepted |
| name.primary | 王重賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| ancestors | p_1gaZDQ7d8kFL8eFuBSCEFG | 王友信 | accepted |
| ancestors | p_V1Lxrxvhjt1V6KGoR8pwse | 王安 | accepted |
| other | p_DAJy1o7QiCVZi4DRPdNYJE | 王尊賢 | accepted |
| other | p_Q7wseUVMMzks3Dk919AK4X | 王禮賢 | accepted |
| other | p_QgAKGJMuGM4ng3rJwQxmzL | 王好賢 | accepted |
| other | p_bMUWHbsYZDtCdQB3JuV7sD | 王任賢 | accepted |
| other | p_eQdR7e93LG9QZmy1MEnZf1 | 王賓賢 | accepted |
| other | p_mPJ5F3MMZrGAAvNTPSFyR8 | 王進賢 | accepted |
| other | p_oHGHWdYHkzXEnPqLgbkDfN | 王親賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 285845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json)
- [中国历代人物传记资料库：王賓賢（CBDB 285856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285856&o=json)
- [中国历代人物传记资料库：王好賢（CBDB 285849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json)
- [中国历代人物传记资料库：王進賢（CBDB 285852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json)
- [中国历代人物传记资料库：王禮賢（CBDB 285853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json)
- [中国历代人物传记资料库：王親賢（CBDB 285855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json)
- [中国历代人物传记资料库：王任賢（CBDB 285851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json)
- [中国历代人物传记资料库：王友信（CBDB 285844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285844&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 285846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json)
- [中国历代人物传记资料库：王重賢（CBDB 202269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202269&o=json)
- [中国历代人物传记资料库：王尊賢（CBDB 285854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json)

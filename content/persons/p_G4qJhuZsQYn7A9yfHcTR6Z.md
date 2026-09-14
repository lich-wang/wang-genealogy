---
schema: wang-person/v1
id: p_G4qJhuZsQYn7A9yfHcTR6Z
status: active
merged_into: null
display_name: 王獻
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_drQ22bUCxSMTF7wM4pdPsQ
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PeP5Ywu1yZETfwVx8B9Gjs
          claim_id: c_drQ22bUCxSMTF7wM4pdPsQ
          source_id: s_Gb8qcnN1o7MbAu8egRye6Z
          stance: supports
          locator: CBDB:126875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126875）
          source: &a1
            id: s_Gb8qcnN1o7MbAu8egRye6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 126875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126875&o=json
            external_identifier: CBDB:126875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XSiDwZLUcHP5EvbE9hJJsC
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻，明人物。明清進士進士，籍贯仁和，身份为詞人，入仕進士。（中国历代人物传记资料库 CBDB 126875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2KHDzTpvaofs2Cn0Btj5W3
          claim_id: c_XSiDwZLUcHP5EvbE9hJJsC
          source_id: s_Gb8qcnN1o7MbAu8egRye6Z
          stance: supports
          locator: CBDB:126875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBllBBCnHLbUZR1ElSYn6-
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__I4ztS48i22vikE5YKL7lO
          claim_id: c_mBllBBCnHLbUZR1ElSYn6-
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x8iqghaZ9G1jhaNV7hymRN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json
            external_identifier: CBDB:281419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_do7sRWRkXm9HbF91DJTFWy
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hD4Mj0WB1L5BQZTj51PY5E
        subject_person_id: p_MrCsfTxuyRoFQSJAD6tSx8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_galEMY3HiunxRn7HRyijyF
          claim_id: c_hD4Mj0WB1L5BQZTj51PY5E
          source_id: s_iRF7Z5ES8sXjh48q3pDpTA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iRF7Z5ES8sXjh48q3pDpTA
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 281196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json
            external_identifier: CBDB:281196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrCsfTxuyRoFQSJAD6tSx8
        status: active
        display_name: 王思誠
        merged_into_person_id: null
    - claim:
        id: c_YKhXmiXm8O6bTyB_xIMG1X
        subject_person_id: p_BKzrj8B5aVv9fN11xwUMfz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EhSyw_Y9kn4-YdHz3A_5oz
          claim_id: c_YKhXmiXm8O6bTyB_xIMG1X
          source_id: s_uootp3154BBti6HcA37Mwi
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uootp3154BBti6HcA37Mwi
            source_type: api_record
            title: 中国历代人物传记资料库：王性安（CBDB 281307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281307&o=json
            external_identifier: CBDB:281307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BKzrj8B5aVv9fN11xwUMfz
        status: active
        display_name: 王性安
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_1wPwdpNXg2kuZ7VNOQv9Ek
        subject_person_id: p_4FRTLCD6JCX6chsKSqckgj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K-5gGoe3cC6MmBcysWlhSW
          claim_id: c_1wPwdpNXg2kuZ7VNOQv9Ek
          source_id: s_qaGtxhwPZwL-XFoK4DrOkX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qaGtxhwPZwL-XFoK4DrOkX
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 283086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283086&o=json
            external_identifier: CBDB:283086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FRTLCD6JCX6chsKSqckgj
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_CgWK7Ddp_q5TftAc7FvPjX
        subject_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YyEev9vZmvMQtF-hG6S1GN
          claim_id: c_CgWK7Ddp_q5TftAc7FvPjX
          source_id: s_vriS7AYK-Y9hutKshPM_g5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vriS7AYK-Y9hutKshPM_g5
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 283198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json
            external_identifier: CBDB:283198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AYFmeTYCqbD2WvGCyhfVkf
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_mNNb3OveMn3y3MJ_5SBDxK
        subject_person_id: p_D5FAXM7EfeeL5uapjt9tFy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PVmpW6_u1v3LU0ilTWajUD
          claim_id: c_mNNb3OveMn3y3MJ_5SBDxK
          source_id: s_ImoqEy0Fjg6_nQF7yMezmT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ImoqEy0Fjg6_nQF7yMezmT
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 282418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282418&o=json
            external_identifier: CBDB:282418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5FAXM7EfeeL5uapjt9tFy
        status: active
        display_name: 王祚
        merged_into_person_id: null
    - claim:
        id: c_iLdj0AFIsOEhGvk9THOq7J
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L9gD3zLRBrE2SVQhPiLFAp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVV5lcpq7HHV-kW4FUJZZJ
          claim_id: c_iLdj0AFIsOEhGvk9THOq7J
          source_id: s_yNd6H9CG8vhd-xTC3e4Tku
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yNd6H9CG8vhd-xTC3e4Tku
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 282864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282864&o=json
            external_identifier: CBDB:282864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L9gD3zLRBrE2SVQhPiLFAp
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c_TVNRenxesNBgtR26J_DuMv
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ma2RRKnBozzH6PBtzBFynz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePXWZbZixWsiJ6iwcgcjem
          claim_id: c_TVNRenxesNBgtR26J_DuMv
          source_id: s_FI3ds2yh5Zxvn3ChRcbWG5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FI3ds2yh5Zxvn3ChRcbWG5
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 282531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282531&o=json
            external_identifier: CBDB:282531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ma2RRKnBozzH6PBtzBFynz
        status: active
        display_name: 王胤
        merged_into_person_id: null
    - claim:
        id: c_3dAYCRygEO5LJA8KasKYTX
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N6MzDJ8ASu26bg9vAjpwMW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o-jGnPlNHfxOyQFjMFDyY_
          claim_id: c_3dAYCRygEO5LJA8KasKYTX
          source_id: s_d3btj8g7ZZ_aJVdDZq7-z4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_d3btj8g7ZZ_aJVdDZq7-z4
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 282975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json
            external_identifier: CBDB:282975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N6MzDJ8ASu26bg9vAjpwMW
        status: active
        display_name: 王翰
        merged_into_person_id: null
    - claim:
        id: c_s8kJ_Dh5mkiykUyFxODgFG
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QdvKCttT3FBor27XKTSWvq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHYzi-McPci4YXkdfl2Db0
          claim_id: c_s8kJ_Dh5mkiykUyFxODgFG
          source_id: s_1UHPmueCYDSg4yMZ15p01F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1UHPmueCYDSg4yMZ15p01F
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 283309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json
            external_identifier: CBDB:283309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QdvKCttT3FBor27XKTSWvq
        status: active
        display_name: 王羽
        merged_into_person_id: null
    - claim:
        id: c_-k5HWrJghF5WAIWjbOGQx2
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y4teW9ngnHjhhLSpjkbLiY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TguNsKUeGxkYOU1XHfZKM4
          claim_id: c_-k5HWrJghF5WAIWjbOGQx2
          source_id: s_y280KNiwAgq-kfrOGPYLpP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y280KNiwAgq-kfrOGPYLpP
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 282642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282642&o=json
            external_identifier: CBDB:282642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4teW9ngnHjhhLSpjkbLiY
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_VAQ3gseKmXiBWvKN5zmmoi
        subject_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g4Y972urAioA3Mawj1qB38
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p0cLQ845v4lRWqUzESu5Xw
          claim_id: c_VAQ3gseKmXiBWvKN5zmmoi
          source_id: s_Nw2q4C1OqSMQY0mSswPaMz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nw2q4C1OqSMQY0mSswPaMz
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 282307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282307&o=json
            external_identifier: CBDB:282307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g4Y972urAioA3Mawj1qB38
        status: active
        display_name: 王琮
        merged_into_person_id: null
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | 王獻，明人物。明清進士進士，籍贯仁和，身份为詞人，入仕進士。（中国历代人物传记资料库 CBDB 126875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_do7sRWRkXm9HbF91DJTFWy | 王智 | accepted |
| ancestors | p_MrCsfTxuyRoFQSJAD6tSx8 | 王思誠 | accepted |
| ancestors | p_BKzrj8B5aVv9fN11xwUMfz | 王性安 | accepted |
| other | p_4FRTLCD6JCX6chsKSqckgj | 王璣 | accepted |
| other | p_AYFmeTYCqbD2WvGCyhfVkf | 王珪 | accepted |
| other | p_D5FAXM7EfeeL5uapjt9tFy | 王祚 | accepted |
| other | p_L9gD3zLRBrE2SVQhPiLFAp | 王禧 | accepted |
| other | p_Ma2RRKnBozzH6PBtzBFynz | 王胤 | accepted |
| other | p_N6MzDJ8ASu26bg9vAjpwMW | 王翰 | accepted |
| other | p_QdvKCttT3FBor27XKTSWvq | 王羽 | accepted |
| other | p_Y4teW9ngnHjhhLSpjkbLiY | 王禎 | accepted |
| other | p_g4Y972urAioA3Mawj1qB38 | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 282307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282307&o=json)
- [中国历代人物传记资料库：王珪（CBDB 283198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json)
- [中国历代人物传记资料库：王翰（CBDB 282975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json)
- [中国历代人物传记资料库：王璣（CBDB 283086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283086&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 281196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json)
- [中国历代人物传记资料库：王禧（CBDB 282864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282864&o=json)
- [中国历代人物传记资料库：王獻（CBDB 126875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126875&o=json)
- [中国历代人物传记资料库：王性安（CBDB 281307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281307&o=json)
- [中国历代人物传记资料库：王胤（CBDB 282531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282531&o=json)
- [中国历代人物传记资料库：王羽（CBDB 283309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json)
- [中国历代人物传记资料库：王禎（CBDB 282642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282642&o=json)
- [中国历代人物传记资料库：王智（CBDB 281419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json)
- [中国历代人物传记资料库：王祚（CBDB 282418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282418&o=json)

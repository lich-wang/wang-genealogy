---
schema: wang-person/v1
id: p_e7c3DhdEJw2765tvQyZA4M
status: active
merged_into: null
display_name: 王梅
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGd8b6NtHzyCkSK6HsW5a5
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMXzdrLTTC6T5qJC2N5bLf
          claim_id: c_yGd8b6NtHzyCkSK6HsW5a5
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
          stance: supports
          locator: CBDB:202794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202794）
          source: &a1
            id: s_P2pAyQpzaCwjmDDqzKVTaK
            source_type: api_record
            title: 中国历代人物传记资料库：王梅（CBDB 202794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202794&o=json
            external_identifier: CBDB:202794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fNDJGGrA7A89uD3YdP9Fip
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNDG3GJPJwMVqz5A526jcx
          claim_id: c_fNDJGGrA7A89uD3YdP9Fip
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
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
        id: c_1CHD1RDBKWFW1Asz9mxhoM
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅（生于1503年），明人物。嘉靖十一年進士，籍贯平湖，入仕進士，曾任翰林庶吉士、州判官、都察院觀政。（中国历代人物传记资料库 CBDB 202794）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aTmCHby33tTea4VdfnPzLe
          claim_id: c_1CHD1RDBKWFW1Asz9mxhoM
          source_id: s_P2pAyQpzaCwjmDDqzKVTaK
          stance: supports
          locator: CBDB:202794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gEQBnQb1LNBsryjWTIP9eP
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f09KABOggZlo4ghgkgsKmD
          claim_id: c_gEQBnQb1LNBsryjWTIP9eP
          source_id: s_g3HqFCjbQwEuwe98fW3qQm
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g3HqFCjbQwEuwe98fW3qQm
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 294524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json
            external_identifier: CBDB:294524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5oVCjNf3jZsLG4jhJ57YhB
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4c1j48kPVeF-fWLHw2s_Xw
        subject_person_id: p_7Vg6fwwANVLx1wDXDAmRg9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aV4raMB6_VpZwzhDinT8UX
          claim_id: c_4c1j48kPVeF-fWLHw2s_Xw
          source_id: s_hs4NuTNZFNqhZQWgeTy2X6
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hs4NuTNZFNqhZQWgeTy2X6
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 294522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294522&o=json
            external_identifier: CBDB:294522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Vg6fwwANVLx1wDXDAmRg9
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_lhAmHiO4sET718tKn1gxI_
        subject_person_id: p_pTSR2LSjsdbQM6XHEut89Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8epJGRMjFVL4rGG72DnISz
          claim_id: c_lhAmHiO4sET718tKn1gxI_
          source_id: s_ebCAv5xkapQJLqMupzeQ14
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ebCAv5xkapQJLqMupzeQ14
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 294523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294523&o=json
            external_identifier: CBDB:294523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pTSR2LSjsdbQM6XHEut89Y
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_DKljcs7H98RByZsrsBFr8u
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NzbuUQqSZIuW6ukQiEG7bA
          claim_id: c_DKljcs7H98RByZsrsBFr8u
          source_id: s_h-SBCqoGe7p6flGsPlh_TP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h-SBCqoGe7p6flGsPlh_TP
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_34MLAJVChWhCtAHLLwS4nt
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_ogfBJ4vYtz-pcA2FDjbRLX
        subject_person_id: p_QMi1LnNbguj92ntGMPvRYx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbTfJOsgq-vfer1bvrB0YC
          claim_id: c_ogfBJ4vYtz-pcA2FDjbRLX
          source_id: s_BzYGG17sy2aIcG73yb-p5d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BzYGG17sy2aIcG73yb-p5d
            source_type: api_record
            title: 中国历代人物传记资料库：王校（CBDB 294532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294532&o=json
            external_identifier: CBDB:294532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QMi1LnNbguj92ntGMPvRYx
        status: active
        display_name: 王校
        merged_into_person_id: null
    - claim:
        id: c_NpgxQNEZ8AYBDYqCcoeEPd
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sWLBZw64B5znCfepJJGvqS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3g4rtptQYEpnQ3OKNNBYJ
          claim_id: c_NpgxQNEZ8AYBDYqCcoeEPd
          source_id: s_hY1ZnLwCvGF4jClfN6oanU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hY1ZnLwCvGF4jClfN6oanU
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 294529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json
            external_identifier: CBDB:294529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sWLBZw64B5znCfepJJGvqS
        status: active
        display_name: 王桂
        merged_into_person_id: null
    - claim:
        id: c_r0hRUwnQlQVeM4ofNFb3fz
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tbChgD1hFMn4eQoFG92UXa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sqMcStZoi4DOXpWT1ob9cR
          claim_id: c_r0hRUwnQlQVeM4ofNFb3fz
          source_id: s_8NI7rODEqDZewGbfRBwpOw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8NI7rODEqDZewGbfRBwpOw
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 294531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294531&o=json
            external_identifier: CBDB:294531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tbChgD1hFMn4eQoFG92UXa
        status: active
        display_name: 王模
        merged_into_person_id: null
    - claim:
        id: c_Jgw-p4PuBC5kzp1Sm4rJmf
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xLwPJkYcAPE7GJF9bNV476
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12PNXM_UFHWvv-vwuUQ6ti
          claim_id: c_Jgw-p4PuBC5kzp1Sm4rJmf
          source_id: s_imB3GzWGLNyMmelhsaS396
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_imB3GzWGLNyMmelhsaS396
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 294534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294534&o=json
            external_identifier: CBDB:294534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xLwPJkYcAPE7GJF9bNV476
        status: active
        display_name: 王樞
        merged_into_person_id: null
    - claim:
        id: c_IQx-ALEpiahHbUfkEUCTeD
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R5EPe5I0vahjAq2P7TvRuJ
          claim_id: c_IQx-ALEpiahHbUfkEUCTeD
          source_id: s_HCauhPkf8MDUzPa8oQWR5e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HCauhPkf8MDUzPa8oQWR5e
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 294530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json
            external_identifier: CBDB:294530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zLA5TsSxN97GFVAJwFFzjJ
        status: active
        display_name: 王槐
        merged_into_person_id: null
---

# 王梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梅 | accepted |
| birth.date | 1503年 | accepted |
| bio.summary | 王梅（生于1503年），明人物。嘉靖十一年進士，籍贯平湖，入仕進士，曾任翰林庶吉士、州判官、都察院觀政。（中国历代人物传记资料库 CBDB 202794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5oVCjNf3jZsLG4jhJ57YhB | 王鸞 | accepted |
| ancestors | p_7Vg6fwwANVLx1wDXDAmRg9 | 王洪 | accepted |
| ancestors | p_pTSR2LSjsdbQM6XHEut89Y | 王鼎 | accepted |
| other | p_34MLAJVChWhCtAHLLwS4nt | 王森 | accepted |
| other | p_QMi1LnNbguj92ntGMPvRYx | 王校 | accepted |
| other | p_sWLBZw64B5znCfepJJGvqS | 王桂 | accepted |
| other | p_tbChgD1hFMn4eQoFG92UXa | 王模 | accepted |
| other | p_xLwPJkYcAPE7GJF9bNV476 | 王樞 | accepted |
| other | p_zLA5TsSxN97GFVAJwFFzjJ | 王槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 294523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294523&o=json)
- [中国历代人物传记资料库：王桂（CBDB 294529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json)
- [中国历代人物传记资料库：王洪（CBDB 294522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294522&o=json)
- [中国历代人物传记资料库：王槐（CBDB 294530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json)
- [中国历代人物传记资料库：王鸞（CBDB 294524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294524&o=json)
- [中国历代人物传记资料库：王梅（CBDB 202794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202794&o=json)
- [中国历代人物传记资料库：王模（CBDB 294531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294531&o=json)
- [中国历代人物传记资料库：王森（CBDB 294533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json)
- [中国历代人物传记资料库：王樞（CBDB 294534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294534&o=json)
- [中国历代人物传记资料库：王校（CBDB 294532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294532&o=json)

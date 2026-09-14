---
schema: wang-person/v1
id: p_epPvqgMmGoGqHpEYGAeBox
status: active
merged_into: null
display_name: 王顯忠
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wCjq9RBF4HhzTJvqzPSEMX
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkCygeCrgKeB7FX8afjM5q
          claim_id: c_wCjq9RBF4HhzTJvqzPSEMX
          source_id: s_F7GMPaDUdDkKE7yj4V4dw3
          stance: supports
          locator: CBDB:126894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126894）
          source: &a1
            id: s_F7GMPaDUdDkKE7yj4V4dw3
            source_type: api_record
            title: 中国历代人物传记资料库：王顯忠（CBDB 126894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126894&o=json
            external_identifier: CBDB:126894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2sRBaisxArxRVt149YWyhz
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯忠，明人物。明清進士進士，籍贯保定，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126894）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D-mgyuNfbiCudrRe_5lMmi
          claim_id: c_2sRBaisxArxRVt149YWyhz
          source_id: s_F7GMPaDUdDkKE7yj4V4dw3
          stance: supports
          locator: CBDB:126894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QZSTmA47uZrd2k5sOa9KNH
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-017qKr5sWvsrVPl5ix6fC
          claim_id: c_QZSTmA47uZrd2k5sOa9KNH
          source_id: s_ANGS7ChRjNE5dQPvG8Bhnt
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ANGS7ChRjNE5dQPvG8Bhnt
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 303242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json
            external_identifier: CBDB:303242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_33joHpVQH9KnqRAf9nqpnS
        status: active
        display_name: 王誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CwIao_J7GiYT9qiKtQRwEs
        subject_person_id: p_Ce3DgqpXRSWeMxbEy1S6fm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4pD3STg3dKqq7_VnQcAzB
          claim_id: c_CwIao_J7GiYT9qiKtQRwEs
          source_id: s_15AzHDy3cBLhJd6wkHK5X8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_15AzHDy3cBLhJd6wkHK5X8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 303241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json
            external_identifier: CBDB:303241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ce3DgqpXRSWeMxbEy1S6fm
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_rNBsQYJ7pZ0BpTCIaZrQwO
        subject_person_id: p_HFc4i7ostWTJALk17wFMxu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_whuUULcB1r2A9jaxHOT-n1
          claim_id: c_rNBsQYJ7pZ0BpTCIaZrQwO
          source_id: s_jv4eL43nqDrFS7xoLyjpfe
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jv4eL43nqDrFS7xoLyjpfe
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 303240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303240&o=json
            external_identifier: CBDB:303240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HFc4i7ostWTJALk17wFMxu
        status: active
        display_name: 王興
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_bte1vyFj9sAj8GqpF5WyTs
        subject_person_id: p_HtAe7VEk8jiMPQDqp4oWbV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2UJ8ksc8dxPicdKbALU9K
          claim_id: c_bte1vyFj9sAj8GqpF5WyTs
          source_id: s_3_7ue2qYBxFvDEaK2LgDkQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3_7ue2qYBxFvDEaK2LgDkQ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賓（CBDB 303246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303246&o=json
            external_identifier: CBDB:303246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HtAe7VEk8jiMPQDqp4oWbV
        status: active
        display_name: 王尚賓
        merged_into_person_id: null
    - claim:
        id: c_cXATdOPuOtktrU7_bDE8SB
        subject_person_id: p_KcVARrtcou3vDa635u3F6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7XzetCnVFAYemTTKKJa6M
          claim_id: c_cXATdOPuOtktrU7_bDE8SB
          source_id: s_hgmfR_jyYcpAEbzT_zuYzm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hgmfR_jyYcpAEbzT_zuYzm
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 303249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303249&o=json
            external_identifier: CBDB:303249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KcVARrtcou3vDa635u3F6q
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
    - claim:
        id: c_vXVfLZhuT48f9sem6qwfIZ
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hmzwygRwx6cKqdBechpA6s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6TG1F7eLLZg45poNYpbSP4
          claim_id: c_vXVfLZhuT48f9sem6qwfIZ
          source_id: s_VT1zpdtNNEl1co8huK97dy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VT1zpdtNNEl1co8huK97dy
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 303251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json
            external_identifier: CBDB:303251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmzwygRwx6cKqdBechpA6s
        status: active
        display_name: 王軒
        merged_into_person_id: null
    - claim:
        id: c_F_tLpGOMQ-hx68_9nzmOjd
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kQqGhWNUDSZCHucHiGLm35
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_auwDuuAqx0F5DoHvzYtlrA
          claim_id: c_F_tLpGOMQ-hx68_9nzmOjd
          source_id: s_smyX-aqe0uY91R6j7NJZIE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_smyX-aqe0uY91R6j7NJZIE
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 303250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json
            external_identifier: CBDB:303250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kQqGhWNUDSZCHucHiGLm35
        status: active
        display_name: 王軻
        merged_into_person_id: null
    - claim:
        id: c_2sKDzrkN13LhFeox8NQrwX
        subject_person_id: p_epPvqgMmGoGqHpEYGAeBox
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tTgJTXZG73ACmY2b2eXiFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2XOI2xiyfSh4vmOCVp7qw_
          claim_id: c_2sKDzrkN13LhFeox8NQrwX
          source_id: s_6VNH5m9fWnSadA_Nrn5N5c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126894 王顯忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6VNH5m9fWnSadA_Nrn5N5c
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 303247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303247&o=json
            external_identifier: CBDB:303247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tTgJTXZG73ACmY2b2eXiFM
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
---

# 王顯忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯忠 | accepted |
| bio.summary | 王顯忠，明人物。明清進士進士，籍贯保定，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33joHpVQH9KnqRAf9nqpnS | 王誥 | accepted |
| ancestors | p_Ce3DgqpXRSWeMxbEy1S6fm | 王宗 | accepted |
| ancestors | p_HFc4i7ostWTJALk17wFMxu | 王興 | accepted |
| other | p_HtAe7VEk8jiMPQDqp4oWbV | 王尚賓 | accepted |
| other | p_KcVARrtcou3vDa635u3F6q | 王尚賢 | accepted |
| other | p_hmzwygRwx6cKqdBechpA6s | 王軒 | accepted |
| other | p_kQqGhWNUDSZCHucHiGLm35 | 王軻 | accepted |
| other | p_tTgJTXZG73ACmY2b2eXiFM | 王尚忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 303242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json)
- [中国历代人物传记资料库：王軻（CBDB 303250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json)
- [中国历代人物传记资料库：王尚賓（CBDB 303246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303246&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 303249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303249&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 303247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303247&o=json)
- [中国历代人物传记资料库：王顯忠（CBDB 126894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126894&o=json)
- [中国历代人物传记资料库：王興（CBDB 303240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303240&o=json)
- [中国历代人物传记资料库：王軒（CBDB 303251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json)
- [中国历代人物传记资料库：王宗（CBDB 303241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json)

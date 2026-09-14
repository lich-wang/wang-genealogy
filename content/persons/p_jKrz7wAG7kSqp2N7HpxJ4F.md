---
schema: wang-person/v1
id: p_jKrz7wAG7kSqp2N7HpxJ4F
status: active
merged_into: null
display_name: 王喬桂
cbdb_id: 205629
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28PH663SvzrCfKePw5QkaY
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬桂（生于1534年），明人物。明清進士進士，籍贯石首，入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 205629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aSziZmX0G1s1_xC40oVmmr
          claim_id: c_28PH663SvzrCfKePw5QkaY
          source_id: s_7YWsE3XSAfwx1a3hBiuu6L
          stance: supports
          locator: CBDB:205629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7YWsE3XSAfwx1a3hBiuu6L
            source_type: api_record
            title: 中国历代人物传记资料库：王喬桂（CBDB 205629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205629&o=json
            external_identifier: CBDB:205629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J4xQNmRxG6Qm3jADeDsc44
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1534-01-01
            latest: 1534-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bc4kxqxt5dD7tHvdmhnk3r
          claim_id: c_J4xQNmRxG6Qm3jADeDsc44
          source_id: s_7YWsE3XSAfwx1a3hBiuu6L
          stance: supports
          locator: CBDB:205629
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1534
          source:
            id: s_7YWsE3XSAfwx1a3hBiuu6L
            source_type: api_record
            title: 中国历代人物传记资料库：王喬桂（CBDB 205629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205629&o=json
            external_identifier: CBDB:205629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AdvtrpfiFf5tmdXujHkL6L
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L6tt2sRgPkLJd94Tpb6PhP
          claim_id: c_AdvtrpfiFf5tmdXujHkL6L
          source_id: s_7YWsE3XSAfwx1a3hBiuu6L
          stance: supports
          locator: CBDB:205629
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1534
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_svc2HO4A77sUazDwky9HRU
        subject_person_id: p_Ju73n9Da4DPjDAANyypFhq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hnl5kq0lVOwM4GTrEzmV5Q
          claim_id: c_svc2HO4A77sUazDwky9HRU
          source_id: s_PkDKwQxkC5KMkc1XVQWoYA
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PkDKwQxkC5KMkc1XVQWoYA
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 336207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336207&o=json
            external_identifier: CBDB:336207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ju73n9Da4DPjDAANyypFhq
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_VyjDc5_npcU27Fxfk4RajC
        subject_person_id: p_V9nhsgCgfLH75JgYRWPEgK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iJvNV88Gxvj2PxCJOQFO4v
          claim_id: c_VyjDc5_npcU27Fxfk4RajC
          source_id: s_yQD4P8JYUHcCTjL2gCVSA1
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yQD4P8JYUHcCTjL2gCVSA1
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 336206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336206&o=json
            external_identifier: CBDB:336206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V9nhsgCgfLH75JgYRWPEgK
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7AMG5-Gqgem-vMH4gRBNbt
        subject_person_id: p_5GeMoJJhpE92oG3UVTidXd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e-WRWmRH5Z6NzjDl9iYN4c
          claim_id: c_7AMG5-Gqgem-vMH4gRBNbt
          source_id: s_UIVtspGVlY7S7vWZsB1mcr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UIVtspGVlY7S7vWZsB1mcr
            source_type: api_record
            title: 中国历代人物传记资料库：王喬衡（CBDB 336213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336213&o=json
            external_identifier: CBDB:336213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GeMoJJhpE92oG3UVTidXd
        status: active
        display_name: 王喬衡
        merged_into_person_id: null
    - claim:
        id: c_p-4V8ZFrSfsBdeE3kTpkzZ
        subject_person_id: p_BUq7TSsCycZT1HmRToqf1z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fAWh4oZdw8XjdJAsnI0qRy
          claim_id: c_p-4V8ZFrSfsBdeE3kTpkzZ
          source_id: s_gD8lFnaaLCRVIq7EgDXyhU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gD8lFnaaLCRVIq7EgDXyhU
            source_type: api_record
            title: 中国历代人物传记资料库：王喬蒙（CBDB 336216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336216&o=json
            external_identifier: CBDB:336216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BUq7TSsCycZT1HmRToqf1z
        status: active
        display_name: 王喬蒙
        merged_into_person_id: null
    - claim:
        id: c_BOFl8xLALF9tne9sLDfZJB
        subject_person_id: p_VFNVFNQyHa5ZXuDHP9YNHh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-Fi4KPY0weFT0OzL-k7z_
          claim_id: c_BOFl8xLALF9tne9sLDfZJB
          source_id: s_aufONB8pJRYLC63YDOBCyW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aufONB8pJRYLC63YDOBCyW
            source_type: api_record
            title: 中国历代人物传记资料库：王喬舄（CBDB 336219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336219&o=json
            external_identifier: CBDB:336219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VFNVFNQyHa5ZXuDHP9YNHh
        status: active
        display_name: 王喬舄
        merged_into_person_id: null
    - claim:
        id: c_aAd8ReWMLsf9FtqY78RhDM
        subject_person_id: p_WqJDkNSx24noTdeiAMZFh4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kzK5L2XS-ZJGEHYU-795hl
          claim_id: c_aAd8ReWMLsf9FtqY78RhDM
          source_id: s_-eRM_zt5kjhwc4pa_dsHrh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-eRM_zt5kjhwc4pa_dsHrh
            source_type: api_record
            title: 中国历代人物传记资料库：王喬崐（CBDB 336215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336215&o=json
            external_identifier: CBDB:336215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WqJDkNSx24noTdeiAMZFh4
        status: active
        display_name: 王喬崐
        merged_into_person_id: null
    - claim:
        id: c_0VEYF5BGRNwtRt8d0WVRYY
        subject_person_id: p_hk9Pe88BsF6fs7c8ZyZfzF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9jjKQ5pqjm6w3Btur7qgLl
          claim_id: c_0VEYF5BGRNwtRt8d0WVRYY
          source_id: s_khpgD4c4xDdWV7CtbsltWT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_khpgD4c4xDdWV7CtbsltWT
            source_type: api_record
            title: 中国历代人物传记资料库：王喬華（CBDB 336214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336214&o=json
            external_identifier: CBDB:336214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hk9Pe88BsF6fs7c8ZyZfzF
        status: active
        display_name: 王喬華
        merged_into_person_id: null
    - claim:
        id: c_NrfpdOsc2pNKKWvy2Fq_AA
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nfahEgLJEZz6sAMjVDU6dk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J02-44EnXT6R5z_7b7CffS
          claim_id: c_NrfpdOsc2pNKKWvy2Fq_AA
          source_id: s_KytMHLYRn9NBLOaA7OZeYA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KytMHLYRn9NBLOaA7OZeYA
            source_type: api_record
            title: 中国历代人物传记资料库：王喬吳（CBDB 336217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336217&o=json
            external_identifier: CBDB:336217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nfahEgLJEZz6sAMjVDU6dk
        status: active
        display_name: 王喬吳
        merged_into_person_id: null
    - claim:
        id: c_QhEzI_EX9_tm2INE7EZJ8E
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rj45wUnM66zQJm57kueciq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IQAmv35TptFmdcXwbbnquV
          claim_id: c_QhEzI_EX9_tm2INE7EZJ8E
          source_id: s_tk9-FtwKuuSH9WfCdc7VtN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tk9-FtwKuuSH9WfCdc7VtN
            source_type: api_record
            title: 中国历代人物传记资料库：王喬岱（CBDB 336212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336212&o=json
            external_identifier: CBDB:336212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rj45wUnM66zQJm57kueciq
        status: active
        display_name: 王喬岱
        merged_into_person_id: null
    - claim:
        id: c_SR1acd55dXL6oBN0y7q_QS
        subject_person_id: p_jKrz7wAG7kSqp2N7HpxJ4F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJedeQ9sVgsMumRysQrVeQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P9NkQ2hmCWoEmmzsnL7BZd
          claim_id: c_SR1acd55dXL6oBN0y7q_QS
          source_id: s_xfSLehCpi5R9v7yPRbV_-y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205629 王喬桂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xfSLehCpi5R9v7yPRbV_-y
            source_type: api_record
            title: 中国历代人物传记资料库：王喬岷（CBDB 336218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336218&o=json
            external_identifier: CBDB:336218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJedeQ9sVgsMumRysQrVeQ
        status: active
        display_name: 王喬岷
        merged_into_person_id: null
---

# 王喬桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王喬桂（生于1534年），明人物。明清進士進士，籍贯石首，入仕進士，曾任參議。（中国历代人物传记资料库 CBDB 205629） | accepted |
| birth.date | 1534年 | accepted |
| name.primary | 王喬桂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Ju73n9Da4DPjDAANyypFhq | 王璞 | accepted |
| ancestors | p_V9nhsgCgfLH75JgYRWPEgK | 王鉉 | accepted |
| other | p_5GeMoJJhpE92oG3UVTidXd | 王喬衡 | accepted |
| other | p_BUq7TSsCycZT1HmRToqf1z | 王喬蒙 | accepted |
| other | p_VFNVFNQyHa5ZXuDHP9YNHh | 王喬舄 | accepted |
| other | p_WqJDkNSx24noTdeiAMZFh4 | 王喬崐 | accepted |
| other | p_hk9Pe88BsF6fs7c8ZyZfzF | 王喬華 | accepted |
| other | p_nfahEgLJEZz6sAMjVDU6dk | 王喬吳 | accepted |
| other | p_rj45wUnM66zQJm57kueciq | 王喬岱 | accepted |
| other | p_tJedeQ9sVgsMumRysQrVeQ | 王喬岷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 336207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336207&o=json)
- [中国历代人物传记资料库：王喬岱（CBDB 336212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336212&o=json)
- [中国历代人物传记资料库：王喬桂（CBDB 205629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205629&o=json)
- [中国历代人物传记资料库：王喬衡（CBDB 336213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336213&o=json)
- [中国历代人物传记资料库：王喬華（CBDB 336214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336214&o=json)
- [中国历代人物传记资料库：王喬崐（CBDB 336215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336215&o=json)
- [中国历代人物传记资料库：王喬蒙（CBDB 336216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336216&o=json)
- [中国历代人物传记资料库：王喬岷（CBDB 336218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336218&o=json)
- [中国历代人物传记资料库：王喬吳（CBDB 336217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336217&o=json)
- [中国历代人物传记资料库：王喬舄（CBDB 336219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336219&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 336206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336206&o=json)

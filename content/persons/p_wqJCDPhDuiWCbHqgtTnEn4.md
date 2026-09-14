---
schema: wang-person/v1
id: p_wqJCDPhDuiWCbHqgtTnEn4
status: active
merged_into: null
display_name: 王琮
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUqEYFQYa3yfpP5A6uKXim
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qMdHfZ39oqf4q5Xha9HbTA
          claim_id: c_iUqEYFQYa3yfpP5A6uKXim
          source_id: s_VAhGNqMvbq9BQBnYoZzbfK
          stance: supports
          locator: CBDB:262430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262430）
          source: &a1
            id: s_VAhGNqMvbq9BQBnYoZzbfK
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 262430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262430&o=json
            external_identifier: CBDB:262430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FFkTwEtPpEvG8zWAC4uo3o
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262430）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s9kISOjuckVMmLVykB3wHf
          claim_id: c_FFkTwEtPpEvG8zWAC4uo3o
          source_id: s_VAhGNqMvbq9BQBnYoZzbfK
          stance: supports
          locator: CBDB:262430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uWYEThEwjwWSrgz6W13qnx
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bClc29gGYhHDIDnA8vVfl5
          claim_id: c_uWYEThEwjwWSrgz6W13qnx
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tniXLNayvNhe4q9rD3xh4y
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json
            external_identifier: CBDB:126788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_FdxBLHNpD3ReBurQ3hsGNI
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42ptwhA8sPYUR7e8J3RMDw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LhW6NlKrCbYbaITmoXN4gi
          claim_id: c_FdxBLHNpD3ReBurQ3hsGNI
          source_id: s_wE7_1gk-iIk4RAEvQVTewb
          stance: supports
          locator: CBDB：兄弟 王綸（126788）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王緯 之父／母。
          source:
            id: s_wE7_1gk-iIk4RAEvQVTewb
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 262437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json
            external_identifier: CBDB:262437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42ptwhA8sPYUR7e8J3RMDw
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_dCKFiKrs4aGPFvkJYcsyJA
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgEPOzEFTMZEQhB7YqYoky
          claim_id: c_dCKFiKrs4aGPFvkJYcsyJA
          source_id: s_2LrLnNLPwHOiyLi7rnxdZP
          stance: supports
          locator: CBDB：兄弟 王綸（126788）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王綸 为同胞（CBDB 记「弟」），王綸 之父／母即 王銘 之父／母。
          source:
            id: s_2LrLnNLPwHOiyLi7rnxdZP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 262435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json
            external_identifier: CBDB:262435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HP72Pa9d9U5GKTJzHcb4kj
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_gDP5b3eqYae-bTCRTgttJX
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Znm4biBo5er9k6T2dRc7HC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ZbycFgeX8GHyKVIP4Pgmz
          claim_id: c_gDP5b3eqYae-bTCRTgttJX
          source_id: s_XctUe2S5VKTIclqK0dz6xs
          stance: supports
          locator: CBDB：兄弟 王綸（126788）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王綸 为同胞（CBDB 记「弟」），王綸 之父／母即 王鐸 之父／母。
          source:
            id: s_XctUe2S5VKTIclqK0dz6xs
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 262434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json
            external_identifier: CBDB:262434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Znm4biBo5er9k6T2dRc7HC
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |
| children | p_42ptwhA8sPYUR7e8J3RMDw | 王緯 | accepted |
| children | p_HP72Pa9d9U5GKTJzHcb4kj | 王銘 | accepted |
| children | p_Znm4biBo5er9k6T2dRc7HC | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 262430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262430&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 262434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262434&o=json)
- [中国历代人物传记资料库：王綸（CBDB 126788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json)
- [中国历代人物传记资料库：王銘（CBDB 262435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json)
- [中国历代人物传记资料库：王緯（CBDB 262437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262437&o=json)

---
schema: wang-person/v1
id: p_zj3UcaT47HKJJeLDFk6H7j
status: active
merged_into: null
display_name: 王應鍾
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LydMfHHYTAT1JMLQmYC7Vn
        subject_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8Pz2PVpm2Foj33o95eSyk
          claim_id: c_LydMfHHYTAT1JMLQmYC7Vn
          source_id: s_kLmhhyHiu9hLK78M7FKRd8
          stance: supports
          locator: CBDB:126850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126850）
          source: &a1
            id: s_kLmhhyHiu9hLK78M7FKRd8
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 126850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126850&o=json
            external_identifier: CBDB:126850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9A8BCtNjBvFiMgLst2TP73
        subject_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鍾，明人物。籍贯侯官，身份为博學之人，入仕進士，曾任參知政事。（中国历代人物传记资料库 CBDB 126850）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PYGZoBz2wU-eKfJzB8hOw3
          claim_id: c_9A8BCtNjBvFiMgLst2TP73
          source_id: s_kLmhhyHiu9hLK78M7FKRd8
          stance: supports
          locator: CBDB:126850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pj6W507Y1Kc_25tHEg9QLs
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s1KvqaaRdLOaIamw4NJPVd
          claim_id: c_Pj6W507Y1Kc_25tHEg9QLs
          source_id: s_STwMwE7heahqrujmFTvwjM
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_STwMwE7heahqrujmFTvwjM
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 304271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json
            external_identifier: CBDB:304271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VLXHmJpMp4wz4g5naM2r4z
        status: active
        display_name: 王密
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fkNKbr5MzJmAWoTW-DhHMT
        subject_person_id: p_4gSFA8PLBsveb1mPd9DC3u
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ccisVvGIklPJQrymw8sPqd
          claim_id: c_fkNKbr5MzJmAWoTW-DhHMT
          source_id: s_tyn5VFZgWmfK5Mnou757PM
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百一十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tyn5VFZgWmfK5Mnou757PM
            source_type: api_record
            title: 中国历代人物传记资料库：王讚（CBDB 304269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304269&o=json
            external_identifier: CBDB:304269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gSFA8PLBsveb1mPd9DC3u
        status: active
        display_name: 王讚
        merged_into_person_id: null
    - claim:
        id: c_Vy0wSRVFKXbso8p35_LdyY
        subject_person_id: p_PcizXX4RYn3XMd3P8BUjUs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_00_d76dj0WuN2p8HWLEhmO
          claim_id: c_Vy0wSRVFKXbso8p35_LdyY
          source_id: s_XA8wsAGxN6846ujiSciw4S
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XA8wsAGxN6846ujiSciw4S
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 304268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304268&o=json
            external_identifier: CBDB:304268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PcizXX4RYn3XMd3P8BUjUs
        status: active
        display_name: 王亶
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_y4aXKGl8AwTViT7zN2VdMS
        subject_person_id: p_4FDmqCU2r1X94otJem8JaL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hD7YQp0PnuuQ9lOznyHl4G
          claim_id: c_y4aXKGl8AwTViT7zN2VdMS
          source_id: s_U1Eg0s2KmXCq1ei48ay-ge
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U1Eg0s2KmXCq1ei48ay-ge
            source_type: api_record
            title: 中国历代人物传记资料库：王應曾（CBDB 304276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json
            external_identifier: CBDB:304276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FDmqCU2r1X94otJem8JaL
        status: active
        display_name: 王應曾
        merged_into_person_id: null
    - claim:
        id: c_7zDlNKPsih5BsV36gSiDvS
        subject_person_id: p_ZzRV191MavKcr9ERBN1hYs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ccjmB2jv0wbfaGz70BpCF_
          claim_id: c_7zDlNKPsih5BsV36gSiDvS
          source_id: s_bomwxoqidKSyhsy0k_77tO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bomwxoqidKSyhsy0k_77tO
            source_type: api_record
            title: 中国历代人物传记资料库：王應釣（CBDB 304274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json
            external_identifier: CBDB:304274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZzRV191MavKcr9ERBN1hYs
        status: active
        display_name: 王應釣
        merged_into_person_id: null
    - claim:
        id: c_TfMwFuBTr0HDbF-pOf7HwT
        subject_person_id: p_hP1Cp3k1ySrV4Qc4RzFifC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJPvXqgbMUtIWVd3wb4dFA
          claim_id: c_TfMwFuBTr0HDbF-pOf7HwT
          source_id: s_jljrAbezIiYCZ7QvvmYWg7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jljrAbezIiYCZ7QvvmYWg7
            source_type: api_record
            title: 中国历代人物传记资料库：王應鏡（CBDB 304275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304275&o=json
            external_identifier: CBDB:304275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hP1Cp3k1ySrV4Qc4RzFifC
        status: active
        display_name: 王應鏡
        merged_into_person_id: null
    - claim:
        id: c_AvUmsO43gMK5XjOr-d4VjV
        subject_person_id: p_vdV5TJDtojcj4Q5Sj8fD6d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c-ZCFdqlj6I2TIJrLhfRAe
          claim_id: c_AvUmsO43gMK5XjOr-d4VjV
          source_id: s_rmhXO7peUw6MQp6a0zX6fK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rmhXO7peUw6MQp6a0zX6fK
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 304278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304278&o=json
            external_identifier: CBDB:304278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vdV5TJDtojcj4Q5Sj8fD6d
        status: active
        display_name: 王應詔
        merged_into_person_id: null
    - claim:
        id: c_2wmkY1U3XgwcB1hXaZX1oj
        subject_person_id: p_zFNhSXJUwTirD3WqGN1Gfq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyhhwtJ6LxcHtUcgOpEyYc
          claim_id: c_2wmkY1U3XgwcB1hXaZX1oj
          source_id: s_vY4wf0vx819-VgNPH0YXJ4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126850 王應鍾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vY4wf0vx819-VgNPH0YXJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王應銑（CBDB 304277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304277&o=json
            external_identifier: CBDB:304277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zFNhSXJUwTirD3WqGN1Gfq
        status: active
        display_name: 王應銑
        merged_into_person_id: null
---

# 王應鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鍾 | accepted |
| bio.summary | 王應鍾，明人物。籍贯侯官，身份为博學之人，入仕進士，曾任參知政事。（中国历代人物传记资料库 CBDB 126850） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLXHmJpMp4wz4g5naM2r4z | 王密 | accepted |
| ancestors | p_4gSFA8PLBsveb1mPd9DC3u | 王讚 | accepted |
| ancestors | p_PcizXX4RYn3XMd3P8BUjUs | 王亶 | accepted |
| other | p_4FDmqCU2r1X94otJem8JaL | 王應曾 | accepted |
| other | p_ZzRV191MavKcr9ERBN1hYs | 王應釣 | accepted |
| other | p_hP1Cp3k1ySrV4Qc4RzFifC | 王應鏡 | accepted |
| other | p_vdV5TJDtojcj4Q5Sj8fD6d | 王應詔 | accepted |
| other | p_zFNhSXJUwTirD3WqGN1Gfq | 王應銑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 304268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304268&o=json)
- [中国历代人物传记资料库：王密（CBDB 304271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json)
- [中国历代人物传记资料库：王應曾（CBDB 304276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304276&o=json)
- [中国历代人物传记资料库：王應釣（CBDB 304274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304274&o=json)
- [中国历代人物传记资料库：王應鏡（CBDB 304275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304275&o=json)
- [中国历代人物传记资料库：王應銑（CBDB 304277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304277&o=json)
- [中国历代人物传记资料库：王應詔（CBDB 304278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304278&o=json)
- [中国历代人物传记资料库：王應鍾（CBDB 126850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126850&o=json)
- [中国历代人物传记资料库：王讚（CBDB 304269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304269&o=json)

---
schema: wang-person/v1
id: p_RvVueiXkPRQ3GnRokiv2tg
status: active
merged_into: null
display_name: 王莚
cbdb_id: 206009
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mS7ZKTz1wWL9jPErHLheJW
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莚（生于1526年），明人物。隆慶五年進士，籍贯商城，入仕進士。（中国历代人物传记资料库 CBDB 206009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PYeX-TrZ8It2dXT2B1BFS_
          claim_id: c_mS7ZKTz1wWL9jPErHLheJW
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aDdqQJxR2vANbnmGMg1RXv
            source_type: api_record
            title: 中国历代人物传记资料库：王莚（CBDB 206009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json
            external_identifier: CBDB:206009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hRS175uZoPcYNRHz7SbSgk
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1526-01-01
            latest: 1526-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAwuwdN4TNVAGybuMswdDL
          claim_id: c_hRS175uZoPcYNRHz7SbSgk
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_aDdqQJxR2vANbnmGMg1RXv
            source_type: api_record
            title: 中国历代人物传记资料库：王莚（CBDB 206009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json
            external_identifier: CBDB:206009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWQrWLS6gUvhTHjdBirQw6
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7F6xcFGBTRR4GnXB9aY5xQ
          claim_id: c_RWQrWLS6gUvhTHjdBirQw6
          source_id: s_aDdqQJxR2vANbnmGMg1RXv
          stance: supports
          locator: CBDB:206009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1526
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4iwyngyNcOx6vxIV3ULEau
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_812fmjwpSz0ndZ4sL7QZ8i
          claim_id: c_4iwyngyNcOx6vxIV3ULEau
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b1K7y7CiNbij2Zu24rUgXG
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 212031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json
            external_identifier: CBDB:212031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FjEtN9HHE5cWHWRD9ddU2X
        status: active
        display_name: 王浙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_crLz9NQC06QQ4qQ1ZpkI_p
        subject_person_id: p_gMG8uAnfaJVnuC4N3TBUbW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jebTgmfmi1GGEiYuI1H5oy
          claim_id: c_crLz9NQC06QQ4qQ1ZpkI_p
          source_id: s_7kHQ9jaHbmYcgCzAS8jxVd
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7kHQ9jaHbmYcgCzAS8jxVd
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 212029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json
            external_identifier: CBDB:212029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gMG8uAnfaJVnuC4N3TBUbW
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_h_yjV0K-HKfAiz63cVkrRW
        subject_person_id: p_gyMVNeL4zWkWNY6f196vvN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xWWhxV0VEGrOGhGZmqzKtx
          claim_id: c_h_yjV0K-HKfAiz63cVkrRW
          source_id: s_xCFVEh858mg7v6XWZNHVSP
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xCFVEh858mg7v6XWZNHVSP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 212030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212030&o=json
            external_identifier: CBDB:212030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gyMVNeL4zWkWNY6f196vvN
        status: active
        display_name: 王銘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_kSEPO9jK35GJpKa_JzhJ80
        subject_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fkaIFSsAWZX0ltIFwjBaz7
          claim_id: c_kSEPO9jK35GJpKa_JzhJ80
          source_id: s_FlIJ9ZFjtU9HBqb6drlc1y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FlIJ9ZFjtU9HBqb6drlc1y
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 212038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json
            external_identifier: CBDB:212038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1SxoGRV8Yp3LatzhzJbJq5
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_ArPoW7aCdR0NfmQQEv9P4k
        subject_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_XGnCSi03Hz4QBv1GafAX
          claim_id: c_ArPoW7aCdR0NfmQQEv9P4k
          source_id: s_Hbjl5a2kZ3yObjSLRgKxsj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Hbjl5a2kZ3yObjSLRgKxsj
            source_type: api_record
            title: 中国历代人物传记资料库：王荍（CBDB 212039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json
            external_identifier: CBDB:212039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5Q7ZxuK1sicYmcLypAK1g5
        status: active
        display_name: 王荍
        merged_into_person_id: null
    - claim:
        id: c_JYAk31YDjwrDH18mc30yZY
        subject_person_id: p_DNv1tKzMZjwzTbT61c7fde
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcEMRGIRFG9kOsIornDebb
          claim_id: c_JYAk31YDjwrDH18mc30yZY
          source_id: s_srAoxp3hSDYAwcQasLR5Ks
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_srAoxp3hSDYAwcQasLR5Ks
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 212035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212035&o=json
            external_identifier: CBDB:212035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DNv1tKzMZjwzTbT61c7fde
        status: active
        display_name: 王栻
        merged_into_person_id: null
    - claim:
        id: c_wpr9EF5Pvwk-smw1A8U8Vl
        subject_person_id: p_EiszzT2DnJcKQFKcCPwdpK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LnY4etEM_YW6NndFu6RA35
          claim_id: c_wpr9EF5Pvwk-smw1A8U8Vl
          source_id: s_2gq_V1jlVp6lJIHOtou_X0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2gq_V1jlVp6lJIHOtou_X0
            source_type: api_record
            title: 中国历代人物传记资料库：王櫰（CBDB 212034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212034&o=json
            external_identifier: CBDB:212034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EiszzT2DnJcKQFKcCPwdpK
        status: active
        display_name: 王櫰
        merged_into_person_id: null
    - claim:
        id: c_xH4t6oHgbjeCRHfPbd_kQt
        subject_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cedMue6hC9mBLSeGQ8MX72
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlH7kTPXVnLXGVWVH6QhKk
          claim_id: c_xH4t6oHgbjeCRHfPbd_kQt
          source_id: s_x1R1spK9qe1lTHbC73Sj7f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x1R1spK9qe1lTHbC73Sj7f
            source_type: api_record
            title: 中国历代人物传记资料库：王蓗（CBDB 212036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json
            external_identifier: CBDB:212036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cedMue6hC9mBLSeGQ8MX72
        status: active
        display_name: 王蓗
        merged_into_person_id: null
---

# 王莚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王莚（生于1526年），明人物。隆慶五年進士，籍贯商城，入仕進士。（中国历代人物传记资料库 CBDB 206009） | accepted |
| birth.date | 1526年 | accepted |
| name.primary | 王莚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FjEtN9HHE5cWHWRD9ddU2X | 王浙 | accepted |
| ancestors | p_gMG8uAnfaJVnuC4N3TBUbW | 王惠 | accepted |
| ancestors | p_gyMVNeL4zWkWNY6f196vvN | 王銘 | accepted |
| other | p_1SxoGRV8Yp3LatzhzJbJq5 | 王梓 | accepted |
| other | p_5Q7ZxuK1sicYmcLypAK1g5 | 王荍 | accepted |
| other | p_DNv1tKzMZjwzTbT61c7fde | 王栻 | accepted |
| other | p_EiszzT2DnJcKQFKcCPwdpK | 王櫰 | accepted |
| other | p_cedMue6hC9mBLSeGQ8MX72 | 王蓗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫰（CBDB 212034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212034&o=json)
- [中国历代人物传记资料库：王惠（CBDB 212029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212029&o=json)
- [中国历代人物传记资料库：王銘（CBDB 212030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212030&o=json)
- [中国历代人物传记资料库：王荍（CBDB 212039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json)
- [中国历代人物传记资料库：王栻（CBDB 212035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212035&o=json)
- [中国历代人物传记资料库：王莚（CBDB 206009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206009&o=json)
- [中国历代人物传记资料库：王浙（CBDB 212031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json)
- [中国历代人物传记资料库：王梓（CBDB 212038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json)
- [中国历代人物传记资料库：王蓗（CBDB 212036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json)

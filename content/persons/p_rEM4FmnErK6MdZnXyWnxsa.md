---
schema: wang-person/v1
id: p_rEM4FmnErK6MdZnXyWnxsa
status: active
merged_into: null
display_name: 王浩
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_duCPkbBygA92FjqMNCuuXU
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtCTYsL459waPmN3aoTPVW
          claim_id: c_duCPkbBygA92FjqMNCuuXU
          source_id: s_Xm3p98amHJengmqndH7TBF
          stance: supports
          locator: CBDB:199153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199153）
          source: &a1
            id: s_Xm3p98amHJengmqndH7TBF
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 199153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199153&o=json
            external_identifier: CBDB:199153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kaiCUvW5EPtBoJmPGQWn3G
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz2ZXozF6emFSLn6SRBNYy
          claim_id: c_kaiCUvW5EPtBoJmPGQWn3G
          source_id: s_Xm3p98amHJengmqndH7TBF
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
        id: c_C1sCu4682yBhUUq4hUPMDd
        subject_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩（生于1428年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 199153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WQbVG8UW5YY53Dlv4aET_O
          claim_id: c_C1sCu4682yBhUUq4hUPMDd
          source_id: s_Xm3p98amHJengmqndH7TBF
          stance: supports
          locator: CBDB:199153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KdMvdnGmMfSAY17GzPJVYE
        subject_person_id: p_13RmhF22e6LFRmpmecd8LK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A_JlghMBHgLRpPj3XTg8pr
          claim_id: c_KdMvdnGmMfSAY17GzPJVYE
          source_id: s_4jj6ijiWLQE4v4WCZ5b4Z2
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4jj6ijiWLQE4v4WCZ5b4Z2
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 237775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237775&o=json
            external_identifier: CBDB:237775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_13RmhF22e6LFRmpmecd8LK
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QVyHgWPx0Hj7JKwqH6Ykgj
        subject_person_id: p_aULDL9FHh7UyyVDwfCgNFk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJDS9SV65UTfNSD74CsdDj
          claim_id: c_QVyHgWPx0Hj7JKwqH6Ykgj
          source_id: s_MbZPRJD6NTqL8v9312rw2n
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MbZPRJD6NTqL8v9312rw2n
            source_type: api_record
            title: 中国历代人物传记资料库：王祥三（CBDB 237753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237753&o=json
            external_identifier: CBDB:237753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aULDL9FHh7UyyVDwfCgNFk
        status: active
        display_name: 王祥三
        merged_into_person_id: null
    - claim:
        id: c_ROp_BavqnF0zdUX-e-i3tk
        subject_person_id: p_BqDq4L3E3GjiDCE9rn6Q3x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUb5NF-jcndGqFz9QAcus9
          claim_id: c_ROp_BavqnF0zdUX-e-i3tk
          source_id: s_favK9qAJ4H8T7WEcDw6gAy
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_favK9qAJ4H8T7WEcDw6gAy
            source_type: api_record
            title: 中国历代人物传记资料库：王仲彬（CBDB 237764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237764&o=json
            external_identifier: CBDB:237764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BqDq4L3E3GjiDCE9rn6Q3x
        status: active
        display_name: 王仲彬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_MvUFMIpV5nyELK6l_CIcRn
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y79rZeZvJwewvdpSgZP214
          claim_id: c_MvUFMIpV5nyELK6l_CIcRn
          source_id: s_v2I3dAT52sKz9Og9hKZaSo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v2I3dAT52sKz9Og9hKZaSo
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 237842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json
            external_identifier: CBDB:237842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DLyb3C62rdLYmnJuC3XQzP
        status: active
        display_name: 王渭
        merged_into_person_id: null
    - claim:
        id: c_ieWl2gycbt-pceNoTBQqd0
        subject_person_id: p_M1FLD6ZXKNf3ckMNCVU7cE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uxo4rVr7iw39w4whnEfVKJ
          claim_id: c_ieWl2gycbt-pceNoTBQqd0
          source_id: s_TM6GX1ywcHeQ8Vy0CFoBDj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TM6GX1ywcHeQ8Vy0CFoBDj
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 237820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json
            external_identifier: CBDB:237820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1FLD6ZXKNf3ckMNCVU7cE
        status: active
        display_name: 王瀚
        merged_into_person_id: null
    - claim:
        id: c_L2Z7FYTvV0shsTZQ5uCW_Y
        subject_person_id: p_mKCVx5cBKFqteh61qQUhmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05iOEz290Rn5y4TIkbyUKs
          claim_id: c_L2Z7FYTvV0shsTZQ5uCW_Y
          source_id: s_iLK0eMlAye83RhQp6azSsT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iLK0eMlAye83RhQp6azSsT
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 237831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json
            external_identifier: CBDB:237831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mKCVx5cBKFqteh61qQUhmL
        status: active
        display_name: 王淮
        merged_into_person_id: null
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | 王浩（生于1428年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 199153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_13RmhF22e6LFRmpmecd8LK | 王忠 | accepted |
| ancestors | p_aULDL9FHh7UyyVDwfCgNFk | 王祥三 | accepted |
| ancestors | p_BqDq4L3E3GjiDCE9rn6Q3x | 王仲彬 | accepted |
| other | p_DLyb3C62rdLYmnJuC3XQzP | 王渭 | accepted |
| other | p_M1FLD6ZXKNf3ckMNCVU7cE | 王瀚 | accepted |
| other | p_mKCVx5cBKFqteh61qQUhmL | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 237820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237820&o=json)
- [中国历代人物传记资料库：王浩（CBDB 199153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199153&o=json)
- [中国历代人物传记资料库：王淮（CBDB 237831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237831&o=json)
- [中国历代人物传记资料库：王渭（CBDB 237842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json)
- [中国历代人物传记资料库：王祥三（CBDB 237753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237753&o=json)
- [中国历代人物传记资料库：王忠（CBDB 237775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237775&o=json)
- [中国历代人物传记资料库：王仲彬（CBDB 237764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237764&o=json)

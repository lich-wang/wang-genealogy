---
schema: wang-person/v1
id: p_vnNgpS2EoPkSDWNJdYVAh5
status: active
merged_into: null
display_name: 王資良
cbdb_id: 200587
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQ8x8Fg3Tvo78LJMPHN62o
        subject_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資良（生于1449年），明人物。明清進士進士，籍贯金堂，入仕進士。（中国历代人物传记资料库 CBDB 200587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oeNlvhBWpS4oouGKTZWTmq
          claim_id: c_EQ8x8Fg3Tvo78LJMPHN62o
          source_id: s_SxjCeZvZD2GbjKyhwphZMd
          stance: supports
          locator: CBDB:200587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SxjCeZvZD2GbjKyhwphZMd
            source_type: api_record
            title: 中国历代人物传记资料库：王資良（CBDB 200587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200587&o=json
            external_identifier: CBDB:200587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YxLHtZc9uR238SC42Mp4fP
        subject_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1449-01-01
            latest: 1449-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xNpcbyg8y58bEMFHfupXQg
          claim_id: c_YxLHtZc9uR238SC42Mp4fP
          source_id: s_SxjCeZvZD2GbjKyhwphZMd
          stance: supports
          locator: CBDB:200587
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1449
          source:
            id: s_SxjCeZvZD2GbjKyhwphZMd
            source_type: api_record
            title: 中国历代人物传记资料库：王資良（CBDB 200587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200587&o=json
            external_identifier: CBDB:200587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4YYkj5z2q33XYHgK86bNDF
        subject_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WDxscF8mAuzmGVo37zTGRp
          claim_id: c_4YYkj5z2q33XYHgK86bNDF
          source_id: s_SxjCeZvZD2GbjKyhwphZMd
          stance: supports
          locator: CBDB:200587
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1449
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hBQeio96ZF6lhcAVGB4MdJ
        subject_person_id: p_3x4jebHTQ9Pn46x4TcE5WS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAA8WicZuVx-L1N8vrLoK6
          claim_id: c_hBQeio96ZF6lhcAVGB4MdJ
          source_id: s_5dSCsjLH47V5uunXrF3Ycj
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5dSCsjLH47V5uunXrF3Ycj
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 260055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260055&o=json
            external_identifier: CBDB:260055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3x4jebHTQ9Pn46x4TcE5WS
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_33jAfi5mlGhB3NT8ksUFpP
        subject_person_id: p_1qBzB6azv7B1r44CqXNnxZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-LMXJrMSi_yZMQPQ9N_tL
          claim_id: c_33jAfi5mlGhB3NT8ksUFpP
          source_id: s_M4gQ3ULAZ4pggBQBqE8Tn5
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M4gQ3ULAZ4pggBQBqE8Tn5
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 260054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260054&o=json
            external_identifier: CBDB:260054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1qBzB6azv7B1r44CqXNnxZ
        status: active
        display_name: 王志道
        merged_into_person_id: null
    - claim:
        id: c_I0nhlYiVluebJB0-E2z7lj
        subject_person_id: p_2u2LwXhEf3GM21Ww1y4hab
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9YAQbQ77dIMhKjSAcBKK0
          claim_id: c_I0nhlYiVluebJB0-E2z7lj
          source_id: s_32C6t2Dj2gag3M2DwPqaa6
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_32C6t2Dj2gag3M2DwPqaa6
            source_type: api_record
            title: 中国历代人物传记资料库：王文煥（CBDB 260053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260053&o=json
            external_identifier: CBDB:260053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2u2LwXhEf3GM21Ww1y4hab
        status: active
        display_name: 王文煥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_otwaIjjxu7Vyfm5iRaR_Ch
        subject_person_id: p_ATDKa8xMg8vHhQpgkPCYFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AcR0_FYnCwWIhDQL6ymqqM
          claim_id: c_otwaIjjxu7Vyfm5iRaR_Ch
          source_id: s_0k6x3dDkIlN1-CSJJWUS0O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200587 王資良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0k6x3dDkIlN1-CSJJWUS0O
            source_type: api_record
            title: 中国历代人物传记资料库：王資堅（CBDB 260061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260061&o=json
            external_identifier: CBDB:260061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ATDKa8xMg8vHhQpgkPCYFC
        status: active
        display_name: 王資堅
        merged_into_person_id: null
    - claim:
        id: c_kV1eogUODBK6RB51mHvJy_
        subject_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yFPzVjF4SRyA3G7cXMmLTP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rToAKcw3tMd_qK2TD0f8Xm
          claim_id: c_kV1eogUODBK6RB51mHvJy_
          source_id: s_lfewpFR9LBSrvl-uR1jhPi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200587 王資良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lfewpFR9LBSrvl-uR1jhPi
            source_type: api_record
            title: 中国历代人物传记资料库：王資厚（CBDB 260062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json
            external_identifier: CBDB:260062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yFPzVjF4SRyA3G7cXMmLTP
        status: active
        display_name: 王資厚
        merged_into_person_id: null
---

# 王資良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王資良（生于1449年），明人物。明清進士進士，籍贯金堂，入仕進士。（中国历代人物传记资料库 CBDB 200587） | accepted |
| birth.date | 1449年 | accepted |
| name.primary | 王資良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3x4jebHTQ9Pn46x4TcE5WS | 王昇 | accepted |
| ancestors | p_1qBzB6azv7B1r44CqXNnxZ | 王志道 | accepted |
| ancestors | p_2u2LwXhEf3GM21Ww1y4hab | 王文煥 | accepted |
| other | p_ATDKa8xMg8vHhQpgkPCYFC | 王資堅 | accepted |
| other | p_yFPzVjF4SRyA3G7cXMmLTP | 王資厚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 260055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260055&o=json)
- [中国历代人物传记资料库：王文煥（CBDB 260053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260053&o=json)
- [中国历代人物传记资料库：王志道（CBDB 260054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260054&o=json)
- [中国历代人物传记资料库：王資厚（CBDB 260062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json)
- [中国历代人物传记资料库：王資堅（CBDB 260061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260061&o=json)
- [中国历代人物传记资料库：王資良（CBDB 200587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200587&o=json)

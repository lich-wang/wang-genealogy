---
schema: wang-person/v1
id: p_JL51TddY85M5VjjQdk9Dbd
status: active
merged_into: null
display_name: 王衡
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W936141reCkcT4mSqBV27C
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Ng41YRdpPr8yzNhMoX9kJ
          claim_id: c_W936141reCkcT4mSqBV27C
          source_id: s_yK3mHu1cy7AVGH5NvprZUW
          stance: supports
          locator: CBDB:124006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124006）
          source: &a1
            id: s_yK3mHu1cy7AVGH5NvprZUW
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 124006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124006&o=json
            external_identifier: CBDB:124006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5k8zJj4V3Wp4F96S86Bi9
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡，明人物。籍贯稷山，入仕進士，曾任知縣、左參政、知府。（中国历代人物传记资料库 CBDB 124006）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFsVNJC0yXxlrGeFDcsQB8
          claim_id: c_w5k8zJj4V3Wp4F96S86Bi9
          source_id: s_yK3mHu1cy7AVGH5NvprZUW
          stance: supports
          locator: CBDB:124006
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R20DjLmvf8UWVQQ4ZE3jQw
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQmnYZz_8f2OjZWlNUKwTr
          claim_id: c_R20DjLmvf8UWVQQ4ZE3jQw
          source_id: s_YsbcJEgoKEkyqrpt9WHH91
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YsbcJEgoKEkyqrpt9WHH91
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 217181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json
            external_identifier: CBDB:217181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_12DEVgMDKmXWxrfKEnUPE7
        status: active
        display_name: 王琅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2aMg_Sk5Y9ndUP0mTimP2O
        subject_person_id: p_gw3KieyBR7NUwBKxqS6EP8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW9rEQSo-ZUZK3u2L5TuWn
          claim_id: c_2aMg_Sk5Y9ndUP0mTimP2O
          source_id: s_UJM5X4HZJ7jBoH2kb3xLD5
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJM5X4HZJ7jBoH2kb3xLD5
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 217170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json
            external_identifier: CBDB:217170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gw3KieyBR7NUwBKxqS6EP8
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_hwb9VjhFiye2CO9ZQoL-A6
        subject_person_id: p_mxMEcjfeSZUgdtaXm76A75
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiJPlaCQCaWpSDk2jccJEN
          claim_id: c_hwb9VjhFiye2CO9ZQoL-A6
          source_id: s_Z7EwEAkDLAH13ZFu9nr6Q2
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z7EwEAkDLAH13ZFu9nr6Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王禮道（CBDB 217159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217159&o=json
            external_identifier: CBDB:217159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mxMEcjfeSZUgdtaXm76A75
        status: active
        display_name: 王禮道
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_jIKoUBhPug9Inu6nFh_PFv
        subject_person_id: p_5ysJaM9Wr5oVoCo55864Fo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w4mWbKfjALf1JJoYbXEVeL
          claim_id: c_jIKoUBhPug9Inu6nFh_PFv
          source_id: s_Lo1_LGIWMfcXwrYIVTA3Cs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Lo1_LGIWMfcXwrYIVTA3Cs
            source_type: api_record
            title: 中国历代人物传记资料库：王勣（CBDB 217237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217237&o=json
            external_identifier: CBDB:217237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5ysJaM9Wr5oVoCo55864Fo
        status: active
        display_name: 王勣
        merged_into_person_id: null
    - claim:
        id: c_6ZfbA1o_aE8RBjirVIUddb
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TwZjG25iBgeMPFsGDBpeu8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXJ-6GmIdt6gS4PnW3mvTa
          claim_id: c_6ZfbA1o_aE8RBjirVIUddb
          source_id: s_oZSfE_-CDYusQFBJezWfQ1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oZSfE_-CDYusQFBJezWfQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王勉宜（CBDB 217259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json
            external_identifier: CBDB:217259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TwZjG25iBgeMPFsGDBpeu8
        status: active
        display_name: 王勉宜
        merged_into_person_id: null
    - claim:
        id: c_Q1Oe6jGGSYyDjEFq4lng-B
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xVKY7KvYN9zv7pvkuAt8xf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wR4fyimI6M3wCcuvGRQQ2
          claim_id: c_Q1Oe6jGGSYyDjEFq4lng-B
          source_id: s_6EBqgu-bzHJxxArMEvAX-7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6EBqgu-bzHJxxArMEvAX-7
            source_type: api_record
            title: 中国历代人物传记资料库：王勉新（CBDB 217248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json
            external_identifier: CBDB:217248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xVKY7KvYN9zv7pvkuAt8xf
        status: active
        display_name: 王勉新
        merged_into_person_id: null
    - claim:
        id: c_35R5XC8FJn8pxbTGdkFQAL
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zgCoPqxLm18aKQ5gsrpuhw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RYOKDPQxcODnl7zEP3-VF1
          claim_id: c_35R5XC8FJn8pxbTGdkFQAL
          source_id: s_dJD0utoeyNDrRZu6T8xhFo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dJD0utoeyNDrRZu6T8xhFo
            source_type: api_record
            title: 中国历代人物传记资料库：王勉哲（CBDB 217226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json
            external_identifier: CBDB:217226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zgCoPqxLm18aKQ5gsrpuhw
        status: active
        display_name: 王勉哲
        merged_into_person_id: null
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | 王衡，明人物。籍贯稷山，入仕進士，曾任知縣、左參政、知府。（中国历代人物传记资料库 CBDB 124006） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12DEVgMDKmXWxrfKEnUPE7 | 王琅 | accepted |
| ancestors | p_gw3KieyBR7NUwBKxqS6EP8 | 王貴 | accepted |
| ancestors | p_mxMEcjfeSZUgdtaXm76A75 | 王禮道 | accepted |
| other | p_5ysJaM9Wr5oVoCo55864Fo | 王勣 | accepted |
| other | p_TwZjG25iBgeMPFsGDBpeu8 | 王勉宜 | accepted |
| other | p_xVKY7KvYN9zv7pvkuAt8xf | 王勉新 | accepted |
| other | p_zgCoPqxLm18aKQ5gsrpuhw | 王勉哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 217170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json)
- [中国历代人物传记资料库：王衡（CBDB 124006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124006&o=json)
- [中国历代人物传记资料库：王勣（CBDB 217237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217237&o=json)
- [中国历代人物传记资料库：王琅（CBDB 217181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217181&o=json)
- [中国历代人物传记资料库：王禮道（CBDB 217159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217159&o=json)
- [中国历代人物传记资料库：王勉新（CBDB 217248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json)
- [中国历代人物传记资料库：王勉宜（CBDB 217259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json)
- [中国历代人物传记资料库：王勉哲（CBDB 217226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json)

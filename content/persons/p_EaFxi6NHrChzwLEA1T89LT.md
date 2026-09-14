---
schema: wang-person/v1
id: p_EaFxi6NHrChzwLEA1T89LT
status: active
merged_into: null
display_name: 王道成
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_khyX7aDV637ueQKbbU6LFn
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBDKkarnmEeYNvq5RxqzZ9
          claim_id: c_khyX7aDV637ueQKbbU6LFn
          source_id: s_pEuV9E8nKPkmEeE62uF3Jw
          stance: supports
          locator: CBDB:126745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126745）
          source: &a1
            id: s_pEuV9E8nKPkmEeE62uF3Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 126745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126745&o=json
            external_identifier: CBDB:126745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r7jTPoPTJMQCm6ytg29Tyc
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成，明人物。籍贯巴縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xuYVswImED-C-5LXFnOW3f
          claim_id: c_r7jTPoPTJMQCm6ytg29Tyc
          source_id: s_pEuV9E8nKPkmEeE62uF3Jw
          stance: supports
          locator: CBDB:126745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x1tqtirthzUfklsRSEJdJ3
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G1Gt1LFAmZz3G1oaC6JQf9
          claim_id: c_x1tqtirthzUfklsRSEJdJ3
          source_id: s_rr2QHsiLgFPrWBsDApRQGq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rr2QHsiLgFPrWBsDApRQGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷宣（CBDB 210020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210020&o=json
            external_identifier: CBDB:210020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        status: active
        display_name: 王廷宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sZgAgMG9Wptrh2sd8rowhq
        subject_person_id: p_F2TBF6uaD1hXaVg2JLva61
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvO5zyXQD5Dh5nezQr_Jez
          claim_id: c_sZgAgMG9Wptrh2sd8rowhq
          source_id: s_B7MZBZqHjL9EapABn2e6He
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B7MZBZqHjL9EapABn2e6He
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 210019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210019&o=json
            external_identifier: CBDB:210019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F2TBF6uaD1hXaVg2JLva61
        status: active
        display_name: 王輅
        merged_into_person_id: null
    - claim:
        id: c_AayupScFnO0kIVNNPYIYbL
        subject_person_id: p_bGtwBsMuUAuXoi2ok9LjRY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FIFnmAj8sck9ZkK_1qN5s2
          claim_id: c_AayupScFnO0kIVNNPYIYbL
          source_id: s_BaK1qyg6QggR9879DKj7jz
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BaK1qyg6QggR9879DKj7jz
            source_type: api_record
            title: 中国历代人物传记资料库：王武才（CBDB 210018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210018&o=json
            external_identifier: CBDB:210018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bGtwBsMuUAuXoi2ok9LjRY
        status: active
        display_name: 王武才
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_qcSQ98IhJ4TLSG--3IQmlg
        subject_person_id: p_AJU2uC4HsNpFdE1QyYAPxP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvMNU6fWJE9wolta1XYNWS
          claim_id: c_qcSQ98IhJ4TLSG--3IQmlg
          source_id: s_qo0ceCRmjwu443AQb5rLRQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qo0ceCRmjwu443AQb5rLRQ
            source_type: api_record
            title: 中国历代人物传记资料库：王道遠（CBDB 210023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json
            external_identifier: CBDB:210023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJU2uC4HsNpFdE1QyYAPxP
        status: active
        display_name: 王道遠
        merged_into_person_id: null
    - claim:
        id: c_ktLSRN-5PecGgpYu4fOw9F
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oF7rhQJSGej1cnmcCY-wr6
          claim_id: c_ktLSRN-5PecGgpYu4fOw9F
          source_id: s_R8Uz2rsFWywzl9P7f5DaCl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R8Uz2rsFWywzl9P7f5DaCl
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 210027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json
            external_identifier: CBDB:210027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RCLpHyH1WNKKe3qSfLzVrJ
        status: active
        display_name: 王道亨
        merged_into_person_id: null
    - claim:
        id: c_zn2QFzysBsEbNhg556kccZ
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SARGxsteUThGCM2YecX6Re
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBjTKQQ6HOL5M-00HKdk6Q
          claim_id: c_zn2QFzysBsEbNhg556kccZ
          source_id: s_phz8IWYmH3Eyrs-a3m9qEq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_phz8IWYmH3Eyrs-a3m9qEq
            source_type: api_record
            title: 中国历代人物传记资料库：王道溥（CBDB 210028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json
            external_identifier: CBDB:210028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SARGxsteUThGCM2YecX6Re
        status: active
        display_name: 王道溥
        merged_into_person_id: null
    - claim:
        id: c_FRPhCBKrrJCfjjr01nabXV
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W5iMANxwXH8t5YX2Aw47nF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1Cj3rcB9kfcch7e8A4isv
          claim_id: c_FRPhCBKrrJCfjjr01nabXV
          source_id: s_yVDUFMCftdTzj9w4bs_23i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yVDUFMCftdTzj9w4bs_23i
            source_type: api_record
            title: 中国历代人物传记资料库：王道顯（CBDB 210025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json
            external_identifier: CBDB:210025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5iMANxwXH8t5YX2Aw47nF
        status: active
        display_name: 王道顯
        merged_into_person_id: null
    - claim:
        id: c_5T8tD7yYr6rGz_bVNKUxTn
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mJoBUvY45vU7TGbn427LrR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6bWjSMRRb_ncn24nEnDslN
          claim_id: c_5T8tD7yYr6rGz_bVNKUxTn
          source_id: s_niM7WhxsaOBtZP4uQcYqm4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_niM7WhxsaOBtZP4uQcYqm4
            source_type: api_record
            title: 中国历代人物传记资料库：王道榮（CBDB 210024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json
            external_identifier: CBDB:210024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJoBUvY45vU7TGbn427LrR
        status: active
        display_name: 王道榮
        merged_into_person_id: null
---

# 王道成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道成 | accepted |
| bio.summary | 王道成，明人物。籍贯巴縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4CkBCwtn2nCSmzMrTCZ7Ut | 王廷宣 | accepted |
| ancestors | p_F2TBF6uaD1hXaVg2JLva61 | 王輅 | accepted |
| ancestors | p_bGtwBsMuUAuXoi2ok9LjRY | 王武才 | accepted |
| other | p_AJU2uC4HsNpFdE1QyYAPxP | 王道遠 | accepted |
| other | p_RCLpHyH1WNKKe3qSfLzVrJ | 王道亨 | accepted |
| other | p_SARGxsteUThGCM2YecX6Re | 王道溥 | accepted |
| other | p_W5iMANxwXH8t5YX2Aw47nF | 王道顯 | accepted |
| other | p_mJoBUvY45vU7TGbn427LrR | 王道榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 126745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126745&o=json)
- [中国历代人物传记资料库：王道亨（CBDB 210027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json)
- [中国历代人物传记资料库：王道溥（CBDB 210028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210028&o=json)
- [中国历代人物传记资料库：王道榮（CBDB 210024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210024&o=json)
- [中国历代人物传记资料库：王道顯（CBDB 210025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json)
- [中国历代人物传记资料库：王道遠（CBDB 210023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210023&o=json)
- [中国历代人物传记资料库：王輅（CBDB 210019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210019&o=json)
- [中国历代人物传记资料库：王廷宣（CBDB 210020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210020&o=json)
- [中国历代人物传记资料库：王武才（CBDB 210018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210018&o=json)

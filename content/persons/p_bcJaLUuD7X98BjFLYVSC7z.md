---
schema: wang-person/v1
id: p_bcJaLUuD7X98BjFLYVSC7z
status: active
merged_into: null
display_name: 王賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_osrCH6jPmMu3qPRWapdEmW
        subject_person_id: p_bcJaLUuD7X98BjFLYVSC7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vEqXsquaLCY3KMWwMoGZ5S
          claim_id: c_osrCH6jPmMu3qPRWapdEmW
          source_id: s_9jBbBZ6ExnGnx5XnHFcAGC
          stance: supports
          locator: CBDB:326392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326392）
          source: &a1
            id: s_9jBbBZ6ExnGnx5XnHFcAGC
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 326392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json
            external_identifier: CBDB:326392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fhaCb9T19bRqQjWVgf74ut
        subject_person_id: p_bcJaLUuD7X98BjFLYVSC7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326392）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pKt6UlYWK8vOlQOFR8gk1t
          claim_id: c_fhaCb9T19bRqQjWVgf74ut
          source_id: s_9jBbBZ6ExnGnx5XnHFcAGC
          stance: supports
          locator: CBDB:326392
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__6xCOuxOUtBxh6YusVTgOt
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bcJaLUuD7X98BjFLYVSC7z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZeWj5HILU2T9xpDyDDsL8F
          claim_id: c__6xCOuxOUtBxh6YusVTgOt
          source_id: s_to5yyoNBkqnHvikI6ouPwc
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王賓 之父／母。
          source:
            id: s_to5yyoNBkqnHvikI6ouPwc
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 326392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json
            external_identifier: CBDB:326392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mxcPanzqKKzAH8GE9Zk1aa
        status: active
        display_name: 王絹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7PNK97zHjbp1cod-0fFH-l
        subject_person_id: p_bcJaLUuD7X98BjFLYVSC7z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_TIoejDhyc9zam_00MHTg
          claim_id: c_7PNK97zHjbp1cod-0fFH-l
          source_id: s_to5yyoNBkqnHvikI6ouPwc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204956 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_to5yyoNBkqnHvikI6ouPwc
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 326392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json
            external_identifier: CBDB:326392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326392） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxcPanzqKKzAH8GE9Zk1aa | 王絹 | accepted |
| other | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 326392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json)

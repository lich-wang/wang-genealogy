---
schema: wang-person/v1
id: p_wxnhLMGKBDpnB11x3t5XX2
status: active
merged_into: null
display_name: 王輗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9Lpb5NqfFCJcKyTG6fGXR
        subject_person_id: p_wxnhLMGKBDpnB11x3t5XX2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JoUwuBMmp2P57fkXVFte2y
          claim_id: c_J9Lpb5NqfFCJcKyTG6fGXR
          source_id: s_mgQ9ESjpxz5wcNnMuBD3We
          stance: supports
          locator: CBDB:246032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246032）
          source: &a1
            id: s_mgQ9ESjpxz5wcNnMuBD3We
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 246032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246032&o=json
            external_identifier: CBDB:246032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jeZFzik5V3hGCf24PDKiW9
        subject_person_id: p_wxnhLMGKBDpnB11x3t5XX2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BZ1Mn0E3q40Lh_KWId9MFL
          claim_id: c_jeZFzik5V3hGCf24PDKiW9
          source_id: s_mgQ9ESjpxz5wcNnMuBD3We
          stance: supports
          locator: CBDB:246032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xVwhDDoS8fDhWD-TYfYov5
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wxnhLMGKBDpnB11x3t5XX2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EcHYSmdgBSOSIGa-3EazSR
          claim_id: c_xVwhDDoS8fDhWD-TYfYov5
          source_id: s_btHpgbil0cBJYobkybYQ6f
          stance: supports
          locator: CBDB：兄弟 王輔（199509）之父／母 王禮
          quotation: null
          interpretation_note: 由兄弟关系推断：王輗 与 王輔 为同胞（CBDB 记「兄」），王輔 之父／母即 王輗 之父／母。
          source:
            id: s_btHpgbil0cBJYobkybYQ6f
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 246032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246032&o=json
            external_identifier: CBDB:246032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pdjXPPpE6u8B1ajFAKge7T
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NMHvdYNIxfDeR0yyj_nnFQ
        subject_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wxnhLMGKBDpnB11x3t5XX2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6tMKd1BK7wNNyy12G9ZdbW
          claim_id: c_NMHvdYNIxfDeR0yyj_nnFQ
          source_id: s_btHpgbil0cBJYobkybYQ6f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199509 王輔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_btHpgbil0cBJYobkybYQ6f
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 246032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246032&o=json
            external_identifier: CBDB:246032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UXEoSEHYsnZSPZrrqjPwf3
        status: active
        display_name: 王輔
        merged_into_person_id: null
---

# 王輗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輗 | accepted |
| bio.summary | 王輗，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pdjXPPpE6u8B1ajFAKge7T | 王禮 | accepted |
| other | p_UXEoSEHYsnZSPZrrqjPwf3 | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輗（CBDB 246032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246032&o=json)

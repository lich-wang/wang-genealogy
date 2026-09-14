---
schema: wang-person/v1
id: p_pdjXPPpE6u8B1ajFAKge7T
status: active
merged_into: null
display_name: 王禮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qzr6DvhUUvmTD8qy6qwypi
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZyUP6xEPsDQjyMy5CRAds2
          claim_id: c_Qzr6DvhUUvmTD8qy6qwypi
          source_id: s_JDXGQM52jtWKsAYoQtJ71Q
          stance: supports
          locator: CBDB:246027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246027）
          source: &a1
            id: s_JDXGQM52jtWKsAYoQtJ71Q
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 246027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246027&o=json
            external_identifier: CBDB:246027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aj4a8bCkPgpsT2L12diFsM
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JyrTAsXK0OsWuPYkK-lQ3v
          claim_id: c_aj4a8bCkPgpsT2L12diFsM
          source_id: s_JDXGQM52jtWKsAYoQtJ71Q
          stance: supports
          locator: CBDB:246027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_atIre5UeoY7bnJRG1RRGZl
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dgbv3k3BZR_fVch1sQ83oT
          claim_id: c_atIre5UeoY7bnJRG1RRGZl
          source_id: s_JDXGQM52jtWKsAYoQtJ71Q
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UXEoSEHYsnZSPZrrqjPwf3
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_5X9-lI0euSA8RCQi3GXk-S
        subject_person_id: p_pdjXPPpE6u8B1ajFAKge7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L7GQM6rcWfi7wFJPdTCBTg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7q0ZCTcFDJhddk0kSTJ4B3
          claim_id: c_5X9-lI0euSA8RCQi3GXk-S
          source_id: s_K3q36zJG_DQXZOdAikhffp
          stance: supports
          locator: CBDB：兄弟 王輔（199509）之父／母 王禮
          quotation: null
          interpretation_note: 由兄弟关系推断：王軏 与 王輔 为同胞（CBDB 记「兄」），王輔 之父／母即 王軏 之父／母。
          source:
            id: s_K3q36zJG_DQXZOdAikhffp
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 246031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246031&o=json
            external_identifier: CBDB:246031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L7GQM6rcWfi7wFJPdTCBTg
        status: active
        display_name: 王軏
        merged_into_person_id: null
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
        id: p_wxnhLMGKBDpnB11x3t5XX2
        status: active
        display_name: 王輗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | 王禮，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UXEoSEHYsnZSPZrrqjPwf3 | 王輔 | accepted |
| children | p_L7GQM6rcWfi7wFJPdTCBTg | 王軏 | accepted |
| children | p_wxnhLMGKBDpnB11x3t5XX2 | 王輗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 246027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246027&o=json)
- [中国历代人物传记资料库：王輗（CBDB 246032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246032&o=json)
- [中国历代人物传记资料库：王軏（CBDB 246031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246031&o=json)

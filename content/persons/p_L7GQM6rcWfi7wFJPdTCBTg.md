---
schema: wang-person/v1
id: p_L7GQM6rcWfi7wFJPdTCBTg
status: active
merged_into: null
display_name: 王軏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ak38Bgbs5qN95PnpHT71Jf
        subject_person_id: p_L7GQM6rcWfi7wFJPdTCBTg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tc74UBsXmkXdAJtf9L6JBn
          claim_id: c_Ak38Bgbs5qN95PnpHT71Jf
          source_id: s_ZE8NFaGWdoS3KC7Gp3jcVD
          stance: supports
          locator: CBDB:246031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246031）
          source: &a1
            id: s_ZE8NFaGWdoS3KC7Gp3jcVD
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 246031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246031&o=json
            external_identifier: CBDB:246031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7B4XGN3iYq2y2t4gAn8UEf
        subject_person_id: p_L7GQM6rcWfi7wFJPdTCBTg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軏，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UYbjGZoAxa9us0RRMDJRKp
          claim_id: c_7B4XGN3iYq2y2t4gAn8UEf
          source_id: s_ZE8NFaGWdoS3KC7Gp3jcVD
          stance: supports
          locator: CBDB:246031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: c_qZjSqM9pmWYjqGijOtWtIf
        subject_person_id: p_L7GQM6rcWfi7wFJPdTCBTg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UXEoSEHYsnZSPZrrqjPwf3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9BV-OGV94U5votVWhvNGyS
          claim_id: c_qZjSqM9pmWYjqGijOtWtIf
          source_id: s_K3q36zJG_DQXZOdAikhffp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199509 王輔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_UXEoSEHYsnZSPZrrqjPwf3
        status: active
        display_name: 王輔
        merged_into_person_id: null
---

# 王軏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軏 | accepted |
| bio.summary | 王軏，明人物。成化八年進士，籍贯同州。（中国历代人物传记资料库 CBDB 246031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pdjXPPpE6u8B1ajFAKge7T | 王禮 | accepted |
| other | p_UXEoSEHYsnZSPZrrqjPwf3 | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軏（CBDB 246031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246031&o=json)

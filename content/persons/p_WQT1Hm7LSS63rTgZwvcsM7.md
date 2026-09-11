---
schema: wang-person/v1
id: p_WQT1Hm7LSS63rTgZwvcsM7
status: active
merged_into: null
display_name: 王希堯
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G744LSWexR6smprB5ppBsR
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QbTtzrGGFmX27SBw4Zgt1W
          claim_id: c_G744LSWexR6smprB5ppBsR
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
          stance: supports
          locator: CBDB:203993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203993）
          source: &a1
            id: s_zn5QYE5dRaxgh4kEm1K4b3
            source_type: api_record
            title: 中国历代人物传记资料库：王希堯（CBDB 203993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203993&o=json
            external_identifier: CBDB:203993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uiQRG5VY5FHvXJAWz2yPsT
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csRkBPbStpnPBH1T8XSKk5
          claim_id: c_uiQRG5VY5FHvXJAWz2yPsT
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
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
        id: c_MfCJAyVq4SD8imqDufgvwq
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希堯（生于1525年），明人物。明清進士進士，籍贯安化，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 203993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y2m96ckqvU7s6YG5Qa5n-2
          claim_id: c_MfCJAyVq4SD8imqDufgvwq
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
          stance: supports
          locator: CBDB:203993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LaBQqg1Znrko3p0LCyD6OY
        subject_person_id: p_Fn3VWmbwHWaLfGAks8JyJ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spHtRW_4xuhPfx2ARlr_LP
          claim_id: c_LaBQqg1Znrko3p0LCyD6OY
          source_id: s_i2UaexLr7DobyCqJATPx7L
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i2UaexLr7DobyCqJATPx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 312974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312974&o=json
            external_identifier: CBDB:312974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fn3VWmbwHWaLfGAks8JyJ5
        status: active
        display_name: 王守正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ebf9tTETAt4mdrERhtk4P8
        subject_person_id: p_KmKGx7ZFKHs8bgbFhiSKKD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MM8YeS07FBcZl0BWIONbnz
          claim_id: c_Ebf9tTETAt4mdrERhtk4P8
          source_id: s_RmQYwi3tYiqwNQUsMjrXx2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RmQYwi3tYiqwNQUsMjrXx2
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 312971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312971&o=json
            external_identifier: CBDB:312971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KmKGx7ZFKHs8bgbFhiSKKD
        status: active
        display_name: 王允
        merged_into_person_id: null
    - claim:
        id: c_DwW7OB_IKHwvC1Qt5P6qUk
        subject_person_id: p_zGe2fA1bCJMQ5BpMf3A16W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gk5FUYkQ_A6NvHK4AypFOv
          claim_id: c_DwW7OB_IKHwvC1Qt5P6qUk
          source_id: s_jPfc8aAhADg43CjH3Aqv8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jPfc8aAhADg43CjH3Aqv8A
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 312972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312972&o=json
            external_identifier: CBDB:312972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zGe2fA1bCJMQ5BpMf3A16W
        status: active
        display_name: 王懷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希堯 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王希堯（生于1525年），明人物。明清進士進士，籍贯安化，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 203993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fn3VWmbwHWaLfGAks8JyJ5 | 王守正 | accepted |
| ancestors | p_KmKGx7ZFKHs8bgbFhiSKKD | 王允 | accepted |
| ancestors | p_zGe2fA1bCJMQ5BpMf3A16W | 王懷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷（CBDB 312972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312972&o=json)
- [中国历代人物传记资料库：王守正（CBDB 312974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312974&o=json)
- [中国历代人物传记资料库：王希堯（CBDB 203993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203993&o=json)
- [中国历代人物传记资料库：王允（CBDB 312971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312971&o=json)

---
schema: wang-person/v1
id: p_XyT13XqKTnrUi4sdfqMDd2
status: active
merged_into: null
display_name: 王志宏
cbdb_id: 235158
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tmj2ut1vp5zQdXn1Tfxq14
        subject_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志宏，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q_BSZLqQQc9GmuddRtsM36
          claim_id: c_tmj2ut1vp5zQdXn1Tfxq14
          source_id: s_VhcFiwNyfpXLZztiox4r8Y
          stance: supports
          locator: CBDB:235158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VhcFiwNyfpXLZztiox4r8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王志宏（CBDB 235158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json
            external_identifier: CBDB:235158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4emED64vvjgA7i4uRudUw
        subject_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZFB3BxmGZr4wPHuesaw5GM
          claim_id: c_A4emED64vvjgA7i4uRudUw
          source_id: s_VhcFiwNyfpXLZztiox4r8Y
          stance: supports
          locator: CBDB:235158
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FGNsXALwFKAcz7CU-tazzI
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OOVepZlEAvhj8eAvXqGNRg
          claim_id: c_FGNsXALwFKAcz7CU-tazzI
          source_id: s_Y64nCS6N91wSf4DbwbT4vJ
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志宏 与 王志堅 为同胞（CBDB 记「兄」），王志堅 之父／母即 王志宏 之父／母。
          source:
            id: s_Y64nCS6N91wSf4DbwbT4vJ
            source_type: api_record
            title: 中国历代人物传记资料库：王志宏（CBDB 235158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json
            external_identifier: CBDB:235158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sHoW_JO79NRXHrB9DIWjg1
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XyT13XqKTnrUi4sdfqMDd2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8ho3Xo2GyXqCOg7abiJJC
          claim_id: c_sHoW_JO79NRXHrB9DIWjg1
          source_id: s_Y64nCS6N91wSf4DbwbT4vJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y64nCS6N91wSf4DbwbT4vJ
            source_type: api_record
            title: 中国历代人物传记资料库：王志宏（CBDB 235158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json
            external_identifier: CBDB:235158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
---

# 王志宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志宏，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235158） | accepted |
| name.primary | 王志宏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |
| other | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志宏（CBDB 235158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235158&o=json)

---
schema: wang-person/v1
id: p_vMjpKHJoeuGDZhv3HdG2i8
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iri3ytAAQBBE5pahycUCKf
        subject_person_id: p_vMjpKHJoeuGDZhv3HdG2i8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKp5JK1y3111Qmp3tyKSLj
          claim_id: c_iri3ytAAQBBE5pahycUCKf
          source_id: s_Pps8cpsDnkBRCMNzUEybd7
          stance: supports
          locator: CBDB:285952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285952）
          source: &a1
            id: s_Pps8cpsDnkBRCMNzUEybd7
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 285952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285952&o=json
            external_identifier: CBDB:285952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5q6drA17GEXkhja7b3x7n
        subject_person_id: p_vMjpKHJoeuGDZhv3HdG2i8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。正德十六年進士，曾任百戶。（中国历代人物传记资料库 CBDB 285952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dnn8zCERo_C7rBk1j3uhxl
          claim_id: c_L5q6drA17GEXkhja7b3x7n
          source_id: s_Pps8cpsDnkBRCMNzUEybd7
          stance: supports
          locator: CBDB:285952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_B5TrRuBQm-qXxMdPUOGy1k
        subject_person_id: p_vMjpKHJoeuGDZhv3HdG2i8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvIARx8H0gwbP_JiJ2o_H0
          claim_id: c_B5TrRuBQm-qXxMdPUOGy1k
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jeazmAgpnL84Ce6RMwkVPH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json
            external_identifier: CBDB:202276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ihqwFHoQL5fezFftJsukMb
        status: active
        display_name: 王銳
        merged_into_person_id: null
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。正德十六年進士，曾任百戶。（中国历代人物传记资料库 CBDB 285952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ihqwFHoQL5fezFftJsukMb | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 202276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json)
- [中国历代人物传记资料库：王昇（CBDB 285952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285952&o=json)

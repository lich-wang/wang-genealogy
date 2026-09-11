---
schema: wang-person/v1
id: p_qo5VK1CeeyLVbmsSuofcsc
status: active
merged_into: null
display_name: 王魯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_67S6C9z32zqas8dFk7dKDo
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnUHG9Y1KTzWVErXa4Dq49
          claim_id: c_67S6C9z32zqas8dFk7dKDo
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: CBDB:327854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327854）
          source: &a1
            id: s_hF1yw9XY7gc18TAMpszZnX
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 327854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327854&o=json
            external_identifier: CBDB:327854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4TrTUeWEBRy8GBzfpc4jw
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯，明人物。嘉靖四十一年進士，籍贯常熟，曾任州同知。（中国历代人物传记资料库 CBDB 327854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cuNmQAt_E3d9b4AMWimgdK
          claim_id: c_b4TrTUeWEBRy8GBzfpc4jw
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: CBDB:327854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zeotAMauKDorlyNAzd0rIK
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mp_uuFxz3VHEFwr_sCJNOy
          claim_id: c_zeotAMauKDorlyNAzd0rIK
          source_id: s_hF1yw9XY7gc18TAMpszZnX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rnGMv5wiQ8owdX8n1Qtwbm
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯 | accepted |
| bio.summary | 王魯，明人物。嘉靖四十一年進士，籍贯常熟，曾任州同知。（中国历代人物传记资料库 CBDB 327854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rnGMv5wiQ8owdX8n1Qtwbm | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王魯（CBDB 327854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327854&o=json)

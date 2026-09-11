---
schema: wang-person/v1
id: p_pJunG57MHAi2x423pkpYEA
status: active
merged_into: null
display_name: 王珏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdXXZ2EEEgNXZ2rUKcdzxY
        subject_person_id: p_pJunG57MHAi2x423pkpYEA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nY5TzdZ2BDTbpyoEh5AHSb
          claim_id: c_fdXXZ2EEEgNXZ2rUKcdzxY
          source_id: s_ueciuDG3UG3NWJcfoGuZBf
          stance: supports
          locator: CBDB:306143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306143）
          source: &a1
            id: s_ueciuDG3UG3NWJcfoGuZBf
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 306143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306143&o=json
            external_identifier: CBDB:306143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ViKKNdqTSDGwXQiMQf26aa
        subject_person_id: p_pJunG57MHAi2x423pkpYEA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，明人物。嘉靖二十三年進士，曾任壽官。（中国历代人物传记资料库 CBDB 306143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lL_xeOG_WF93FTdazf9sb8
          claim_id: c_ViKKNdqTSDGwXQiMQf26aa
          source_id: s_ueciuDG3UG3NWJcfoGuZBf
          stance: supports
          locator: CBDB:306143
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
        id: c_VdABGjujICj78RVPUUlW-_
        subject_person_id: p_pJunG57MHAi2x423pkpYEA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyynXuQ5-o1hBIVffOTBWt
          claim_id: c_VdABGjujICj78RVPUUlW-_
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQ2Mbm44EcchNqrBaH456s
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 203535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json
            external_identifier: CBDB:203535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，明人物。嘉靖二十三年進士，曾任壽官。（中国历代人物传记资料库 CBDB 306143） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 306143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306143&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 203535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json)

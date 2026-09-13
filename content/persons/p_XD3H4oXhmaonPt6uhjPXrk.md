---
schema: wang-person/v1
id: p_XD3H4oXhmaonPt6uhjPXrk
status: active
merged_into: null
display_name: 王卓越
cbdb_id: 277148
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Xvo5wCPoAHhnRCewx7VDj
        subject_person_id: p_XD3H4oXhmaonPt6uhjPXrk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓越，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 277148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nu9_b_UkddJ6drs5XWnoHE
          claim_id: c_5Xvo5wCPoAHhnRCewx7VDj
          source_id: s_Ac8tNFB2NPbg6542CM5zCQ
          stance: supports
          locator: CBDB:277148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ac8tNFB2NPbg6542CM5zCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王卓越（CBDB 277148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277148&o=json
            external_identifier: CBDB:277148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dGZ91regtenQwiWA7URCQw
        subject_person_id: p_XD3H4oXhmaonPt6uhjPXrk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓越
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_j6jEztNbskJB4D5E3tk5PE
          claim_id: c_dGZ91regtenQwiWA7URCQw
          source_id: s_Ac8tNFB2NPbg6542CM5zCQ
          stance: supports
          locator: CBDB:277148
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_D9goLH_g1bu9QLZ4J6DviW
        subject_person_id: p_XD3H4oXhmaonPt6uhjPXrk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2oNcSP9ujVXCgNLvsNQq7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ivzd15dcnzn6HjBT2yBJ2k
          claim_id: c_D9goLH_g1bu9QLZ4J6DviW
          source_id: s_kekNW4qJqBQs88vjAxByMp
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kekNW4qJqBQs88vjAxByMp
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json
            external_identifier: CBDB:201722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D2oNcSP9ujVXCgNLvsNQq7
        status: active
        display_name: 王璽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王卓越

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王卓越，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 277148） | accepted |
| name.primary | 王卓越 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_D2oNcSP9ujVXCgNLvsNQq7 | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 201722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201722&o=json)
- [中国历代人物传记资料库：王卓越（CBDB 277148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277148&o=json)

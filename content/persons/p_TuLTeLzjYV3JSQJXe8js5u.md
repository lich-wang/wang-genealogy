---
schema: wang-person/v1
id: p_TuLTeLzjYV3JSQJXe8js5u
status: active
merged_into: null
display_name: 王遊藝
cbdb_id: 148891
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zLM4hm31cLBG3Ld22eyR7m
        subject_person_id: p_TuLTeLzjYV3JSQJXe8js5u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遊藝，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7M8HlFA-FiSMhoYGIByhjJ
          claim_id: c_zLM4hm31cLBG3Ld22eyR7m
          source_id: s_YTZ3eBZ95X4q3oPH9aD8ue
          stance: supports
          locator: CBDB:148891
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_YTZ3eBZ95X4q3oPH9aD8ue
            source_type: api_record
            title: 中国历代人物传记资料库：王遊藝（CBDB 148891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148891&o=json
            external_identifier: CBDB:148891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GUab3gfi5soGDq6H2CFE5T
        subject_person_id: p_TuLTeLzjYV3JSQJXe8js5u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遊藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L6xWt5qiAsYE7bCJ8mmpND
          claim_id: c_GUab3gfi5soGDq6H2CFE5T
          source_id: s_YTZ3eBZ95X4q3oPH9aD8ue
          stance: supports
          locator: CBDB:148891
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_YTZ3eBZ95X4q3oPH9aD8ue
            source_type: api_record
            title: 中国历代人物传记资料库：王遊藝（CBDB 148891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148891&o=json
            external_identifier: CBDB:148891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5AtujyBeuMjRZBRgAV2XKD
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TuLTeLzjYV3JSQJXe8js5u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKDZklBvYEAQh6sXlu3dho
          claim_id: c_5AtujyBeuMjRZBRgAV2XKD
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 3：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fkYoMRpWBFANnFxw9yoZcv
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 139734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json
            external_identifier: CBDB:139734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aS4oPbQ6onmxdLtHcM6aRy
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遊藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遊藝，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王遊藝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aS4oPbQ6onmxdLtHcM6aRy | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 139734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json)
- [中国历代人物传记资料库：王遊藝（CBDB 148891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148891&o=json)

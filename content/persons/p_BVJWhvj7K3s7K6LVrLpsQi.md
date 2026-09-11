---
schema: wang-person/v1
id: p_BVJWhvj7K3s7K6LVrLpsQi
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hy7vXQX4J6c6XcHA6QPPkS
        subject_person_id: p_BVJWhvj7K3s7K6LVrLpsQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1u6ENKsGbdqJnjwKhSfHr
          claim_id: c_hy7vXQX4J6c6XcHA6QPPkS
          source_id: s_5DraeZwcgD2J23y64VEPLx
          stance: supports
          locator: CBDB:457854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457854）
          source: &a1
            id: s_5DraeZwcgD2J23y64VEPLx
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 457854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457854&o=json
            external_identifier: CBDB:457854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPXdAkLRBLpLSPMGHaSzDb
        subject_person_id: p_BVJWhvj7K3s7K6LVrLpsQi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 457854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rvTg44VE3BAYQM28esLzc2
          claim_id: c_JPXdAkLRBLpLSPMGHaSzDb
          source_id: s_5DraeZwcgD2J23y64VEPLx
          stance: supports
          locator: CBDB:457854
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
  descendants: []
  other: []
---

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 457854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 457854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457854&o=json)

---
schema: wang-person/v1
id: p_58iQDET45Rf5yctJEXkoAn
status: active
merged_into: null
display_name: 王廷實
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hUQfnCe7ET5mVANfcJPgQ3
        subject_person_id: p_58iQDET45Rf5yctJEXkoAn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnD8M3AsJzFhR2TMVEHUcv
          claim_id: c_hUQfnCe7ET5mVANfcJPgQ3
          source_id: s_rJUjJe3r89P1tCo6rZtKCT
          stance: supports
          locator: CBDB:471093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471093）
          source: &a1
            id: s_rJUjJe3r89P1tCo6rZtKCT
            source_type: api_record
            title: 中国历代人物传记资料库：王廷實（CBDB 471093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471093&o=json
            external_identifier: CBDB:471093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrkovWz7idB4Y7MCK4BcwB
        subject_person_id: p_58iQDET45Rf5yctJEXkoAn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷實，清人物。入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 471093）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4kN6_tBXQmgW8-kWam_t2u
          claim_id: c_LrkovWz7idB4Y7MCK4BcwB
          source_id: s_rJUjJe3r89P1tCo6rZtKCT
          stance: supports
          locator: CBDB:471093
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

# 王廷實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷實 | accepted |
| bio.summary | 王廷實，清人物。入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 471093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷實（CBDB 471093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471093&o=json)

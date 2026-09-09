---
schema: wang-person/v1
id: p_D5D2FGc3ngT5ZXR1GHqAR5
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BomnghaH5EPTGkTjQaPDzX
        subject_person_id: p_D5D2FGc3ngT5ZXR1GHqAR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37iw5dYQ8jBLqakSBRgWTr
          claim_id: c_BomnghaH5EPTGkTjQaPDzX
          source_id: s_UenzTPM8R7gnQN6S2iP4r9
          stance: supports
          locator: CBDB:1841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1841）
          source: &a1
            id: s_UenzTPM8R7gnQN6S2iP4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 1841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1841&o=json
            external_identifier: CBDB:1841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r1W9KQUeAdXbBPdLGNjtqk
        subject_person_id: p_D5D2FGc3ngT5ZXR1GHqAR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dwtZ2R6TT6gX92FpNUF8nV
          claim_id: c_r1W9KQUeAdXbBPdLGNjtqk
          source_id: s_UenzTPM8R7gnQN6S2iP4r9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 1841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1841&o=json)

---
schema: wang-person/v1
id: p_LUj1Rdk8yNqgrhd27YFS7V
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZaW7i3pGXFX1ntFGAFiJvP
        subject_person_id: p_LUj1Rdk8yNqgrhd27YFS7V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oY3Ux9Si3ADtfsPzs8ozVm
          claim_id: c_ZaW7i3pGXFX1ntFGAFiJvP
          source_id: s_unUX95MMLgxV4m7TvPWhkM
          stance: supports
          locator: CBDB:454460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454460）
          source: &a1
            id: s_unUX95MMLgxV4m7TvPWhkM
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 454460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454460&o=json
            external_identifier: CBDB:454460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4kuQR3seG7fSH3hGCJijFs
        subject_person_id: p_LUj1Rdk8yNqgrhd27YFS7V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 454460）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g4sWBEh1uPem6uA9K2-8iV
          claim_id: c_4kuQR3seG7fSH3hGCJijFs
          source_id: s_unUX95MMLgxV4m7TvPWhkM
          stance: supports
          locator: CBDB:454460
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 454460） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 454460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454460&o=json)

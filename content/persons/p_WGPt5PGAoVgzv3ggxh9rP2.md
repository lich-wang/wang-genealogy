---
schema: wang-person/v1
id: p_WGPt5PGAoVgzv3ggxh9rP2
status: active
merged_into: null
display_name: 王召
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1m1B1PSai2Y4FNvBmHpGy
        subject_person_id: p_WGPt5PGAoVgzv3ggxh9rP2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_inuAxUBPrmUFKfBPcHJ9SS
          claim_id: c_m1m1B1PSai2Y4FNvBmHpGy
          source_id: s_bp9aF9DFJ3JDD7SuWGQhM8
          stance: supports
          locator: CBDB:494444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494444）
          source: &a1
            id: s_bp9aF9DFJ3JDD7SuWGQhM8
            source_type: api_record
            title: 中国历代人物传记资料库：王召（CBDB 494444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494444&o=json
            external_identifier: CBDB:494444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jBDZ5M27YhDBGvEiRTrzjp
        subject_person_id: p_WGPt5PGAoVgzv3ggxh9rP2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王召，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 494444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uV80rlGdXij46_888fvY3J
          claim_id: c_jBDZ5M27YhDBGvEiRTrzjp
          source_id: s_bp9aF9DFJ3JDD7SuWGQhM8
          stance: supports
          locator: CBDB:494444
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

# 王召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王召 | accepted |
| bio.summary | 王召，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 494444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王召（CBDB 494444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494444&o=json)

---
schema: wang-person/v1
id: p_nij3CyF938xG5q6589kczh
status: active
merged_into: null
display_name: 王彥威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuP4UYeuKozuHegEKJGdZ1
        subject_person_id: p_nij3CyF938xG5q6589kczh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXbBM4b6fYag4nShij57cD
          claim_id: c_iuP4UYeuKozuHegEKJGdZ1
          source_id: s_77YkYy3FfqiLGL8NWehQT5
          stance: supports
          locator: CBDB:71903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71903）
          source: &a1
            id: s_77YkYy3FfqiLGL8NWehQT5
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 71903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71903&o=json
            external_identifier: CBDB:71903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4hxHM3JbgpQEFy6HX2G65q
        subject_person_id: p_nij3CyF938xG5q6589kczh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZCQBtvnQ5GMvPm6y4WKwB
          claim_id: c_4hxHM3JbgpQEFy6HX2G65q
          source_id: s_77YkYy3FfqiLGL8NWehQT5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MogwMx2p6JPTBkYNFFbtuw
        subject_person_id: p_nij3CyF938xG5q6589kczh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1904年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6EN5uo85am6TiCq6j5VhzH
          claim_id: c_MogwMx2p6JPTBkYNFFbtuw
          source_id: s_77YkYy3FfqiLGL8NWehQT5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYLDqmA8opm8PmDiKPn3qu
        subject_person_id: p_nij3CyF938xG5q6589kczh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZKqF94a98b9seSVQZF4i6B
          claim_id: c_LYLDqmA8opm8PmDiKPn3qu
          source_id: s_77YkYy3FfqiLGL8NWehQT5
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

# 王彥威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥威 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1904年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥威（CBDB 71903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71903&o=json)

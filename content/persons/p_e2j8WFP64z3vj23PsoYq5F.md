---
schema: wang-person/v1
id: p_e2j8WFP64z3vj23PsoYq5F
status: active
merged_into: null
display_name: 王以慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1h8hcFf42JC8C5eGK4aLE
        subject_person_id: p_e2j8WFP64z3vj23PsoYq5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wtpymSGVxp64f8hoBgDT83
          claim_id: c_E1h8hcFf42JC8C5eGK4aLE
          source_id: s_yU23NR5GRvQnCWd97sGWc1
          stance: supports
          locator: CBDB:635920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635920）
          source: &a1
            id: s_yU23NR5GRvQnCWd97sGWc1
            source_type: api_record
            title: 中国历代人物传记资料库：王以慶（CBDB 635920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635920&o=json
            external_identifier: CBDB:635920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baAwUDbrD9tWW8AGhz2bm9
        subject_person_id: p_e2j8WFP64z3vj23PsoYq5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王以慶，清人物。籍贯永平府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 635920）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a8RkOQMk35tCbOk5p97ixG
          claim_id: c_baAwUDbrD9tWW8AGhz2bm9
          source_id: s_yU23NR5GRvQnCWd97sGWc1
          stance: supports
          locator: CBDB:635920
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

# 王以慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以慶 | accepted |
| bio.summary | 王以慶，清人物。籍贯永平府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 635920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以慶（CBDB 635920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635920&o=json)

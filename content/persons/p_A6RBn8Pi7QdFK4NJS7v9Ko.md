---
schema: wang-person/v1
id: p_A6RBn8Pi7QdFK4NJS7v9Ko
status: active
merged_into: null
display_name: 王廷弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_An5jbwPSF69DW5K749KH1d
        subject_person_id: p_A6RBn8Pi7QdFK4NJS7v9Ko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53cKA5J7cW2eECX7kvCFYG
          claim_id: c_An5jbwPSF69DW5K749KH1d
          source_id: s_R7yTJA985s8YAAE6X51WgH
          stance: supports
          locator: CBDB:575242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575242）
          source: &a1
            id: s_R7yTJA985s8YAAE6X51WgH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷弼（CBDB 575242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575242&o=json
            external_identifier: CBDB:575242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RpEKw8D1MwSXpLbMWjHvAh
        subject_person_id: p_A6RBn8Pi7QdFK4NJS7v9Ko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王廷弼，清人物。籍贯來鳳，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575242）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xeNXqk3tMO2HT3huLXJVfw
          claim_id: c_RpEKw8D1MwSXpLbMWjHvAh
          source_id: s_R7yTJA985s8YAAE6X51WgH
          stance: supports
          locator: CBDB:575242
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

# 王廷弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷弼 | accepted |
| bio.summary | 王廷弼，清人物。籍贯來鳳，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷弼（CBDB 575242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575242&o=json)

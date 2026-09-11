---
schema: wang-person/v1
id: p_h2MDPHWmN6VvieZzjnM86E
status: active
merged_into: null
display_name: 王椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EoALU5L2DeSsN3xJ4rNHfF
        subject_person_id: p_h2MDPHWmN6VvieZzjnM86E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pZLcUwHCkfa8SVQe5Kh4P6
          claim_id: c_EoALU5L2DeSsN3xJ4rNHfF
          source_id: s_6osfCssSHL1BcBDCTTyGEu
          stance: supports
          locator: CBDB:497879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497879）
          source: &a1
            id: s_6osfCssSHL1BcBDCTTyGEu
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 497879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497879&o=json
            external_identifier: CBDB:497879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NqVLHugndq6hGJYN4nneck
        subject_person_id: p_h2MDPHWmN6VvieZzjnM86E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿，清人物。曾任守備。（中国历代人物传记资料库 CBDB 497879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6oqj0y5nOm5UFn9QWun6NR
          claim_id: c_NqVLHugndq6hGJYN4nneck
          source_id: s_6osfCssSHL1BcBDCTTyGEu
          stance: supports
          locator: CBDB:497879
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

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | 王椿，清人物。曾任守備。（中国历代人物传记资料库 CBDB 497879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 497879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497879&o=json)

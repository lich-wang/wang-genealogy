---
schema: wang-person/v1
id: p_1LwU2LonpdUfhBZWWbLAUh
status: active
merged_into: null
display_name: 王驥隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4DSeQxg7NNW3yi851b9h1
        subject_person_id: p_1LwU2LonpdUfhBZWWbLAUh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6xs3Y9GWr5qWyx658AfPVN
          claim_id: c_r4DSeQxg7NNW3yi851b9h1
          source_id: s_va2A8NSjnHGV1mDc7Rgfhr
          stance: supports
          locator: CBDB:640904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640904）
          source: &a1
            id: s_va2A8NSjnHGV1mDc7Rgfhr
            source_type: api_record
            title: 中国历代人物传记资料库：王驥隆（CBDB 640904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640904&o=json
            external_identifier: CBDB:640904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DE5762Bk1txTqg2Jeo4TJm
        subject_person_id: p_1LwU2LonpdUfhBZWWbLAUh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥隆，清人物。籍贯會同，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640904）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3WqCqsUzoGJaZB5ePypgiN
          claim_id: c_DE5762Bk1txTqg2Jeo4TJm
          source_id: s_va2A8NSjnHGV1mDc7Rgfhr
          stance: supports
          locator: CBDB:640904
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

# 王驥隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥隆 | accepted |
| bio.summary | 王驥隆，清人物。籍贯會同，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥隆（CBDB 640904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640904&o=json)

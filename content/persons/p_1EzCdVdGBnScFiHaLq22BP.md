---
schema: wang-person/v1
id: p_1EzCdVdGBnScFiHaLq22BP
status: active
merged_into: null
display_name: 王漢潮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNJXtx6WTfqH6EfFpuQA46
        subject_person_id: p_1EzCdVdGBnScFiHaLq22BP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xDSe1ouxLrSy6qPLpb51Xw
          claim_id: c_tNJXtx6WTfqH6EfFpuQA46
          source_id: s_rNzrwTQQYx5iozVHtmNBQ8
          stance: supports
          locator: CBDB:700341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700341）
          source: &a1
            id: s_rNzrwTQQYx5iozVHtmNBQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王漢潮（CBDB 700341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700341&o=json
            external_identifier: CBDB:700341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pRAZHZtPk56x3AaxXbiMgG
        subject_person_id: p_1EzCdVdGBnScFiHaLq22BP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢潮，清人物。身份为叛臣。（中国历代人物传记资料库 CBDB 700341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z9lDhY1xgCBJYX6qS95ykP
          claim_id: c_pRAZHZtPk56x3AaxXbiMgG
          source_id: s_rNzrwTQQYx5iozVHtmNBQ8
          stance: supports
          locator: CBDB:700341
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

# 王漢潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢潮 | accepted |
| bio.summary | 王漢潮，清人物。身份为叛臣。（中国历代人物传记资料库 CBDB 700341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢潮（CBDB 700341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700341&o=json)

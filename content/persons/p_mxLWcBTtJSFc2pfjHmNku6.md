---
schema: wang-person/v1
id: p_mxLWcBTtJSFc2pfjHmNku6
status: active
merged_into: null
display_name: 王大順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E1yRWqzZ6QQ1gBEm3BGDyq
        subject_person_id: p_mxLWcBTtJSFc2pfjHmNku6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tAN2YU3dF4wHo3pbySzeqX
          claim_id: c_E1yRWqzZ6QQ1gBEm3BGDyq
          source_id: s_M3mD4RiTKaeWkwxFWs6p5B
          stance: supports
          locator: CBDB:414204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414204）
          source: &a1
            id: s_M3mD4RiTKaeWkwxFWs6p5B
            source_type: api_record
            title: 中国历代人物传记资料库：王大順（CBDB 414204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414204&o=json
            external_identifier: CBDB:414204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BbrCQLzBUsqbD3PxBHvqE
        subject_person_id: p_mxLWcBTtJSFc2pfjHmNku6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大順，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 414204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pHcvX8Ifh08A5P5n1SdEnO
          claim_id: c_9BbrCQLzBUsqbD3PxBHvqE
          source_id: s_M3mD4RiTKaeWkwxFWs6p5B
          stance: supports
          locator: CBDB:414204
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

# 王大順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大順 | accepted |
| bio.summary | 王大順，元人物。曾任照磨。（中国历代人物传记资料库 CBDB 414204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大順（CBDB 414204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414204&o=json)

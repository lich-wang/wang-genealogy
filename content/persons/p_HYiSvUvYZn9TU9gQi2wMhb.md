---
schema: wang-person/v1
id: p_HYiSvUvYZn9TU9gQi2wMhb
status: active
merged_into: null
display_name: 王凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uHfAD99AidZyVG7HvkWv89
        subject_person_id: p_HYiSvUvYZn9TU9gQi2wMhb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3g3fLTbizLt16zhpGuntJN
          claim_id: c_uHfAD99AidZyVG7HvkWv89
          source_id: s_77axPFcjKDqED8VnuX5C5F
          stance: supports
          locator: CBDB:509409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509409）
          source: &a1
            id: s_77axPFcjKDqED8VnuX5C5F
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 509409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509409&o=json
            external_identifier: CBDB:509409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssFf5TnLN6Pny1vHSN5cRE
        subject_person_id: p_HYiSvUvYZn9TU9gQi2wMhb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 509409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3wyhkSKKefzHS5jimkbMkG
          claim_id: c_ssFf5TnLN6Pny1vHSN5cRE
          source_id: s_77axPFcjKDqED8VnuX5C5F
          stance: supports
          locator: CBDB:509409
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

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| bio.summary | 王凱，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 509409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 509409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509409&o=json)

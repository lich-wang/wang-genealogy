---
schema: wang-person/v1
id: p_XXtn7n4KK1EofmiZtLSWkZ
status: active
merged_into: null
display_name: 王文昱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QoDm3ERmUMbS6uTX1n4BfP
        subject_person_id: p_XXtn7n4KK1EofmiZtLSWkZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNBpfSwL4ZwKB3TMW8oE7X
          claim_id: c_QoDm3ERmUMbS6uTX1n4BfP
          source_id: s_4CNmvjiqxQGvt7t4YgYh3M
          stance: supports
          locator: CBDB:509211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509211）
          source: &a1
            id: s_4CNmvjiqxQGvt7t4YgYh3M
            source_type: api_record
            title: 中国历代人物传记资料库：王文昱（CBDB 509211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509211&o=json
            external_identifier: CBDB:509211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57EpkFMXSLStWB8Kmw746n
        subject_person_id: p_XXtn7n4KK1EofmiZtLSWkZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文昱，明人物。曾任檢校。（中国历代人物传记资料库 CBDB 509211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XxozYdByLv7oIm7dUqsBgW
          claim_id: c_57EpkFMXSLStWB8Kmw746n
          source_id: s_4CNmvjiqxQGvt7t4YgYh3M
          stance: supports
          locator: CBDB:509211
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

# 王文昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文昱 | accepted |
| bio.summary | 王文昱，明人物。曾任檢校。（中国历代人物传记资料库 CBDB 509211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文昱（CBDB 509211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509211&o=json)

---
schema: wang-person/v1
id: p_TFwBNprEAYL6LedMK1Vqt6
status: active
merged_into: null
display_name: 王欽命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UgUpe5jS1fSE3uTJnMLggF
        subject_person_id: p_TFwBNprEAYL6LedMK1Vqt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKx6BcTpLFL8XFCpHZFUAR
          claim_id: c_UgUpe5jS1fSE3uTJnMLggF
          source_id: s_eroBqd4SPWg7oLpguetRd6
          stance: supports
          locator: CBDB:506413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506413）
          source: &a1
            id: s_eroBqd4SPWg7oLpguetRd6
            source_type: api_record
            title: 中国历代人物传记资料库：王欽命（CBDB 506413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506413&o=json
            external_identifier: CBDB:506413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1mkuPA36RYDTbAZjJi995
        subject_person_id: p_TFwBNprEAYL6LedMK1Vqt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽命，明人物。曾任學正。（中国历代人物传记资料库 CBDB 506413）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SnG2npoO9XsXUudtt4lo7Q
          claim_id: c_D1mkuPA36RYDTbAZjJi995
          source_id: s_eroBqd4SPWg7oLpguetRd6
          stance: supports
          locator: CBDB:506413
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

# 王欽命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽命 | accepted |
| bio.summary | 王欽命，明人物。曾任學正。（中国历代人物传记资料库 CBDB 506413） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽命（CBDB 506413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506413&o=json)

---
schema: wang-person/v1
id: p_69mTiteBJHnbbcwXRw7UNd
status: active
merged_into: null
display_name: 王剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FGMVzSRAx1pMRyL8sG5m61
        subject_person_id: p_69mTiteBJHnbbcwXRw7UNd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MrZUJfPiKA3NVbpgJitvK9
          claim_id: c_FGMVzSRAx1pMRyL8sG5m61
          source_id: s_J82U1vsXevA3vHzrcM4Hwj
          stance: supports
          locator: CBDB:507286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507286）
          source: &a1
            id: s_J82U1vsXevA3vHzrcM4Hwj
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 507286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507286&o=json
            external_identifier: CBDB:507286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyLyQ7BUpENXbeeGRKgzFe
        subject_person_id: p_69mTiteBJHnbbcwXRw7UNd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 507286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E9t3_qKF35qeAEYM6B63qX
          claim_id: c_RyLyQ7BUpENXbeeGRKgzFe
          source_id: s_J82U1vsXevA3vHzrcM4Hwj
          stance: supports
          locator: CBDB:507286
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

# 王剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛 | accepted |
| bio.summary | 王剛，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 507286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 507286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507286&o=json)

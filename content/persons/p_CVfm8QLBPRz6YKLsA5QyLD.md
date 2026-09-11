---
schema: wang-person/v1
id: p_CVfm8QLBPRz6YKLsA5QyLD
status: active
merged_into: null
display_name: 王志伊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AucvtiRo69DZmNsEA8maFe
        subject_person_id: p_CVfm8QLBPRz6YKLsA5QyLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志伊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xkCYZQuoGf9BqU33YNC4yB
          claim_id: c_AucvtiRo69DZmNsEA8maFe
          source_id: s_Kx12EirLq3SXG27bJxjnhk
          stance: supports
          locator: CBDB:235157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235157）
          source: &a1
            id: s_Kx12EirLq3SXG27bJxjnhk
            source_type: api_record
            title: 中国历代人物传记资料库：王志伊（CBDB 235157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json
            external_identifier: CBDB:235157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bdAAYTHSwhfKpHoBQ4tBWn
        subject_person_id: p_CVfm8QLBPRz6YKLsA5QyLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志伊，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 235157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zBpGSsklphXzglqMIUKOKX
          claim_id: c_bdAAYTHSwhfKpHoBQ4tBWn
          source_id: s_Kx12EirLq3SXG27bJxjnhk
          stance: supports
          locator: CBDB:235157
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

# 王志伊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志伊 | accepted |
| bio.summary | 王志伊，明人物。籍贯崑山。（中国历代人物传记资料库 CBDB 235157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志伊（CBDB 235157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235157&o=json)

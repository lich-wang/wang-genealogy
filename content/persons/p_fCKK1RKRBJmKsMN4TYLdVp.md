---
schema: wang-person/v1
id: p_fCKK1RKRBJmKsMN4TYLdVp
status: active
merged_into: null
display_name: 王鵠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BF6MM9REw1nPcSsevbyAF5
        subject_person_id: p_fCKK1RKRBJmKsMN4TYLdVp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5DFUp6ewQWvbbZaoQp2yNS
          claim_id: c_BF6MM9REw1nPcSsevbyAF5
          source_id: s_Wh3jfyzoMPJTsaohy4YzUD
          stance: supports
          locator: CBDB:122277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122277）
          source: &a1
            id: s_Wh3jfyzoMPJTsaohy4YzUD
            source_type: api_record
            title: 中国历代人物传记资料库：王鵠（CBDB 122277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122277&o=json
            external_identifier: CBDB:122277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxiLdELwPAQkJ9hFVZnicp
        subject_person_id: p_fCKK1RKRBJmKsMN4TYLdVp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵠，清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 122277）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I9m0WymxjBCd9m2DC5YCE-
          claim_id: c_TxiLdELwPAQkJ9hFVZnicp
          source_id: s_Wh3jfyzoMPJTsaohy4YzUD
          stance: supports
          locator: CBDB:122277
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

# 王鵠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵠 | accepted |
| bio.summary | 王鵠，清人物。籍贯長洲。（中国历代人物传记资料库 CBDB 122277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵠（CBDB 122277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122277&o=json)

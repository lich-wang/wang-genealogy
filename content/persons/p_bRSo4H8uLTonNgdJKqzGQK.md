---
schema: wang-person/v1
id: p_bRSo4H8uLTonNgdJKqzGQK
status: active
merged_into: null
display_name: 王景山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_apSXzpipb7TAZzHM5W7Lea
        subject_person_id: p_bRSo4H8uLTonNgdJKqzGQK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fyTH2UFzWLSAuTt3JDAeCa
          claim_id: c_apSXzpipb7TAZzHM5W7Lea
          source_id: s_6BCHc7nw9Pveef4A9rnqjx
          stance: supports
          locator: CBDB:545068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545068）
          source: &a1
            id: s_6BCHc7nw9Pveef4A9rnqjx
            source_type: api_record
            title: 中国历代人物传记资料库：王景山（CBDB 545068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545068&o=json
            external_identifier: CBDB:545068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BcDx1EM4FPj2VY9kTF8Umg
        subject_person_id: p_bRSo4H8uLTonNgdJKqzGQK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景山，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 545068）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IwV0PdD81EK5FsLXw71LpC
          claim_id: c_BcDx1EM4FPj2VY9kTF8Umg
          source_id: s_6BCHc7nw9Pveef4A9rnqjx
          stance: supports
          locator: CBDB:545068
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

# 王景山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景山 | accepted |
| bio.summary | 王景山，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 545068） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景山（CBDB 545068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545068&o=json)

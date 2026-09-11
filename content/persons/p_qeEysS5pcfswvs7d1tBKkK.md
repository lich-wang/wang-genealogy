---
schema: wang-person/v1
id: p_qeEysS5pcfswvs7d1tBKkK
status: active
merged_into: null
display_name: 王恩聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z7nGkvEwSzNP5VGU8z2Xjv
        subject_person_id: p_qeEysS5pcfswvs7d1tBKkK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fz5N4ygmnUCNkqeEGq42Cq
          claim_id: c_z7nGkvEwSzNP5VGU8z2Xjv
          source_id: s_N8PFEAexHzCNw31QPXJ2YQ
          stance: supports
          locator: CBDB:637861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637861）
          source: &a1
            id: s_N8PFEAexHzCNw31QPXJ2YQ
            source_type: api_record
            title: 中国历代人物传记资料库：王恩聰（CBDB 637861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637861&o=json
            external_identifier: CBDB:637861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNCYcvMrJmzfXHem4s8cQF
        subject_person_id: p_qeEysS5pcfswvs7d1tBKkK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩聰，清人物。籍贯新淦，入仕廩貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5SyKNBweNqn0NsdWGfLO1g
          claim_id: c_KNCYcvMrJmzfXHem4s8cQF
          source_id: s_N8PFEAexHzCNw31QPXJ2YQ
          stance: supports
          locator: CBDB:637861
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

# 王恩聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩聰 | accepted |
| bio.summary | 王恩聰，清人物。籍贯新淦，入仕廩貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩聰（CBDB 637861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637861&o=json)

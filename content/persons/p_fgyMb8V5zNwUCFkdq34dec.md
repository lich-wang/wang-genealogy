---
schema: wang-person/v1
id: p_fgyMb8V5zNwUCFkdq34dec
status: active
merged_into: null
display_name: 王嶠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWdqDHGcXS47TdYHXnyczh
        subject_person_id: p_fgyMb8V5zNwUCFkdq34dec
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7giEKqhdgFUPPUBovrdTYA
          claim_id: c_RWdqDHGcXS47TdYHXnyczh
          source_id: s_rpZLdy9m2iCj9CBwFU2AVL
          stance: supports
          locator: CBDB:27280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27280）
          source: &a1
            id: s_rpZLdy9m2iCj9CBwFU2AVL
            source_type: api_record
            title: 中国历代人物传记资料库：王嶠（CBDB 27280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27280&o=json
            external_identifier: CBDB:27280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZgsxYF7hR1CLsN5ucMcxg
        subject_person_id: p_fgyMb8V5zNwUCFkdq34dec
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶠，宋人物。籍贯廬陵，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 27280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_02bhFaLWPmILC4yR0_xnzG
          claim_id: c_KZgsxYF7hR1CLsN5ucMcxg
          source_id: s_rpZLdy9m2iCj9CBwFU2AVL
          stance: supports
          locator: CBDB:27280
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

# 王嶠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶠 | accepted |
| bio.summary | 王嶠，宋人物。籍贯廬陵，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 27280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶠（CBDB 27280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27280&o=json)

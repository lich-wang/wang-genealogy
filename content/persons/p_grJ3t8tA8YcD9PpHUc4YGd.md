---
schema: wang-person/v1
id: p_grJ3t8tA8YcD9PpHUc4YGd
status: active
merged_into: null
display_name: 王廷儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TkV194CRuJp4F4spWZxrg8
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F9wrhyxoHesxWGJn4Ej6q2
          claim_id: c_TkV194CRuJp4F4spWZxrg8
          source_id: s_fwgiN9pQyxi17uZyiZj764
          stance: supports
          locator: CBDB:279543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279543）
          source: &a1
            id: s_fwgiN9pQyxi17uZyiZj764
            source_type: api_record
            title: 中国历代人物传记资料库：王廷儒（CBDB 279543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json
            external_identifier: CBDB:279543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TbHZAHv4rBGb1a65zFwQu
        subject_person_id: p_grJ3t8tA8YcD9PpHUc4YGd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷儒，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279543）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nEwxO4_OUaL6JiR24NZ1As
          claim_id: c_5TbHZAHv4rBGb1a65zFwQu
          source_id: s_fwgiN9pQyxi17uZyiZj764
          stance: supports
          locator: CBDB:279543
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

# 王廷儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷儒 | accepted |
| bio.summary | 王廷儒，明人物。正德十二年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 279543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷儒（CBDB 279543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279543&o=json)

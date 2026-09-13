---
schema: wang-person/v1
id: p_kgxPxfbY588JGh6Am4FgXm
status: active
merged_into: null
display_name: 王帥日
cbdb_id: 414414
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZLekJzFp43dpBbzQi3Xu9
        subject_person_id: p_kgxPxfbY588JGh6Am4FgXm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王帥日，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_biA3qbXrJgNI9kbdgDM5c-
          claim_id: c_8ZLekJzFp43dpBbzQi3Xu9
          source_id: s_qZQUDDXHfNV35BAdqXLtQb
          stance: supports
          locator: CBDB:414414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qZQUDDXHfNV35BAdqXLtQb
            source_type: api_record
            title: 中国历代人物传记资料库：王帥日（CBDB 414414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414414&o=json
            external_identifier: CBDB:414414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:32.727Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_62RMKW2zmP3DHB9K6Ko6iP
        subject_person_id: p_kgxPxfbY588JGh6Am4FgXm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王帥日
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uvKvazTp6e1mLBfhqvHXbp
          claim_id: c_62RMKW2zmP3DHB9K6Ko6iP
          source_id: s_qZQUDDXHfNV35BAdqXLtQb
          stance: supports
          locator: CBDB:414414
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5401-5500）｜历史性依据：CBDB 朝代 = 清
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

# 王帥日

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王帥日，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414414） | accepted |
| name.primary | 王帥日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王帥日（CBDB 414414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414414&o=json)

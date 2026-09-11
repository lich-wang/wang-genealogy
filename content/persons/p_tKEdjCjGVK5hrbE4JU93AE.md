---
schema: wang-person/v1
id: p_tKEdjCjGVK5hrbE4JU93AE
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yAXKhp8DJBcnoNCGhpAVp9
        subject_person_id: p_tKEdjCjGVK5hrbE4JU93AE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BZyr7e6SyqHxokG4h11Sij
          claim_id: c_yAXKhp8DJBcnoNCGhpAVp9
          source_id: s_pYJMQLjP3fyEu4MYcF8ngs
          stance: supports
          locator: CBDB:459791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459791）
          source: &a1
            id: s_pYJMQLjP3fyEu4MYcF8ngs
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 459791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459791&o=json
            external_identifier: CBDB:459791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XKW5u4ab7DZjgvpfcPRMVa
        subject_person_id: p_tKEdjCjGVK5hrbE4JU93AE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 459791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YDkl3aYlmjs2IBRE51yiBA
          claim_id: c_XKW5u4ab7DZjgvpfcPRMVa
          source_id: s_pYJMQLjP3fyEu4MYcF8ngs
          stance: supports
          locator: CBDB:459791
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 459791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 459791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459791&o=json)

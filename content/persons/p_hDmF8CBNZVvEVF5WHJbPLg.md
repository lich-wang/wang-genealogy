---
schema: wang-person/v1
id: p_hDmF8CBNZVvEVF5WHJbPLg
status: active
merged_into: null
display_name: 王澤圻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFHKX3yL5iUBrNMH8dCGq9
        subject_person_id: p_hDmF8CBNZVvEVF5WHJbPLg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HS4BMtDW8jUqVMjijHbiH2
          claim_id: c_TFHKX3yL5iUBrNMH8dCGq9
          source_id: s_54YTKd9cQXFRBVb7pLJw54
          stance: supports
          locator: CBDB:639224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639224）
          source: &a1
            id: s_54YTKd9cQXFRBVb7pLJw54
            source_type: api_record
            title: 中国历代人物传记资料库：王澤圻（CBDB 639224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639224&o=json
            external_identifier: CBDB:639224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MyDZA6DdnJ2qABE1dQJKwp
        subject_person_id: p_hDmF8CBNZVvEVF5WHJbPLg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王澤圻，清人物。籍贯秀水，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 639224）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hinSMaswBjijSdabuEZ6PK
          claim_id: c_MyDZA6DdnJ2qABE1dQJKwp
          source_id: s_54YTKd9cQXFRBVb7pLJw54
          stance: supports
          locator: CBDB:639224
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

# 王澤圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤圻 | accepted |
| bio.summary | 王澤圻，清人物。籍贯秀水，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 639224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤圻（CBDB 639224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639224&o=json)

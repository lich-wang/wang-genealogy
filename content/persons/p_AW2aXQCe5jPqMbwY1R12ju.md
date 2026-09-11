---
schema: wang-person/v1
id: p_AW2aXQCe5jPqMbwY1R12ju
status: active
merged_into: null
display_name: 王浤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gjN1BcEWDb67b7BaozavEw
        subject_person_id: p_AW2aXQCe5jPqMbwY1R12ju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iCqLnDAYAoc7aPQ9UAHUT
          claim_id: c_gjN1BcEWDb67b7BaozavEw
          source_id: s_YuLVNh75n9qvCqcS7dkFY2
          stance: supports
          locator: CBDB:10693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10693）
          source: &a1
            id: s_YuLVNh75n9qvCqcS7dkFY2
            source_type: api_record
            title: 中国历代人物传记资料库：王浤（CBDB 10693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10693&o=json
            external_identifier: CBDB:10693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4EntKoKn45ZMtusomc4KAL
        subject_person_id: p_AW2aXQCe5jPqMbwY1R12ju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浤，宋人物。籍贯金華，曾任右承事郎、提點刑獄司幹辦公事。（中国历代人物传记资料库 CBDB 10693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n37w5tvocdZVz6NHNzScA5
          claim_id: c_4EntKoKn45ZMtusomc4KAL
          source_id: s_YuLVNh75n9qvCqcS7dkFY2
          stance: supports
          locator: CBDB:10693
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

# 王浤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浤 | accepted |
| bio.summary | 王浤，宋人物。籍贯金華，曾任右承事郎、提點刑獄司幹辦公事。（中国历代人物传记资料库 CBDB 10693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浤（CBDB 10693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10693&o=json)

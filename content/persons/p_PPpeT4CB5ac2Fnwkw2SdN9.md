---
schema: wang-person/v1
id: p_PPpeT4CB5ac2Fnwkw2SdN9
status: active
merged_into: null
display_name: 王錫吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLvq5na5qc2eFn66nj53CV
        subject_person_id: p_PPpeT4CB5ac2Fnwkw2SdN9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5nL9xKKKC1LhhMBJriC9ut
          claim_id: c_QLvq5na5qc2eFn66nj53CV
          source_id: s_4LK6wYbXW5E5fk4QxJ9NEg
          stance: supports
          locator: CBDB:640594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640594）
          source: &a1
            id: s_4LK6wYbXW5E5fk4QxJ9NEg
            source_type: api_record
            title: 中国历代人物传记资料库：王錫吉（CBDB 640594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640594&o=json
            external_identifier: CBDB:640594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ePLwXznzWwKsVDN77dXHk7
        subject_person_id: p_PPpeT4CB5ac2Fnwkw2SdN9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫吉，清人物。籍贯江川，入仕武童，曾任遊擊。（中国历代人物传记资料库 CBDB 640594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kSr-pz7VUbro0J1lBbas0j
          claim_id: c_ePLwXznzWwKsVDN77dXHk7
          source_id: s_4LK6wYbXW5E5fk4QxJ9NEg
          stance: supports
          locator: CBDB:640594
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

# 王錫吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫吉 | accepted |
| bio.summary | 王錫吉，清人物。籍贯江川，入仕武童，曾任遊擊。（中国历代人物传记资料库 CBDB 640594） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫吉（CBDB 640594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640594&o=json)

---
schema: wang-person/v1
id: p_GtUF7xQQqxoacR8xAb1d5B
status: active
merged_into: null
display_name: 王士翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKMv4GXcAYb1TMKxW146oV
        subject_person_id: p_GtUF7xQQqxoacR8xAb1d5B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8FzJMNNuNyabtXkK2BamyH
          claim_id: c_AKMv4GXcAYb1TMKxW146oV
          source_id: s_FYAwsbEnc1wF4L3TNAvE5u
          stance: supports
          locator: CBDB:636814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636814）
          source: &a1
            id: s_FYAwsbEnc1wF4L3TNAvE5u
            source_type: api_record
            title: 中国历代人物传记资料库：王士翔（CBDB 636814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636814&o=json
            external_identifier: CBDB:636814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dGPBFmRV6TU5MhgN4CYdQC
        subject_person_id: p_GtUF7xQQqxoacR8xAb1d5B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士翔，清人物。籍贯石阡府直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qHVmZRdfSZUlZvFKjvYR-1
          claim_id: c_dGPBFmRV6TU5MhgN4CYdQC
          source_id: s_FYAwsbEnc1wF4L3TNAvE5u
          stance: supports
          locator: CBDB:636814
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

# 王士翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士翔 | accepted |
| bio.summary | 王士翔，清人物。籍贯石阡府直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士翔（CBDB 636814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636814&o=json)

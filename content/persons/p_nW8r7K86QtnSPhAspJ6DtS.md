---
schema: wang-person/v1
id: p_nW8r7K86QtnSPhAspJ6DtS
status: active
merged_into: null
display_name: 王夢良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjmBqmZfXiE4n3JJSKUou2
        subject_person_id: p_nW8r7K86QtnSPhAspJ6DtS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vdN5TywM2g6VZoKGihHe3f
          claim_id: c_FjmBqmZfXiE4n3JJSKUou2
          source_id: s_b8bnSRsUwwim3sbTzvJKf5
          stance: supports
          locator: CBDB:636874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636874）
          source: &a1
            id: s_b8bnSRsUwwim3sbTzvJKf5
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 636874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636874&o=json
            external_identifier: CBDB:636874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XtnaWqZzjMe16qxVJPrx7q
        subject_person_id: p_nW8r7K86QtnSPhAspJ6DtS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良，清人物。籍贯魯山，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bBoHeumUzL3bw16r8lBbNd
          claim_id: c_XtnaWqZzjMe16qxVJPrx7q
          source_id: s_b8bnSRsUwwim3sbTzvJKf5
          stance: supports
          locator: CBDB:636874
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

# 王夢良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢良 | accepted |
| bio.summary | 王夢良，清人物。籍贯魯山，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢良（CBDB 636874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636874&o=json)

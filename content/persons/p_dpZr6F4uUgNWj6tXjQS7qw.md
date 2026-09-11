---
schema: wang-person/v1
id: p_dpZr6F4uUgNWj6tXjQS7qw
status: active
merged_into: null
display_name: 王兆涵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W6nPv4Q42K8fJPjj6nXUVt
        subject_person_id: p_dpZr6F4uUgNWj6tXjQS7qw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆涵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsGJH85uUz9xiqjqeo6ZQP
          claim_id: c_W6nPv4Q42K8fJPjj6nXUVt
          source_id: s_ZQc2P4tYwT5QSdYi6b64mE
          stance: supports
          locator: CBDB:636206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636206）
          source: &a1
            id: s_ZQc2P4tYwT5QSdYi6b64mE
            source_type: api_record
            title: 中国历代人物传记资料库：王兆涵（CBDB 636206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636206&o=json
            external_identifier: CBDB:636206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2eJSvy8iEGRjk5XTSQSBG
        subject_person_id: p_dpZr6F4uUgNWj6tXjQS7qw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆涵，清人物。籍贯樂山，入仕廩生，曾任知縣。（中国历代人物传记资料库 CBDB 636206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__28b_3Ed_Q6PKafZNBNGHg
          claim_id: c_w2eJSvy8iEGRjk5XTSQSBG
          source_id: s_ZQc2P4tYwT5QSdYi6b64mE
          stance: supports
          locator: CBDB:636206
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

# 王兆涵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆涵 | accepted |
| bio.summary | 王兆涵，清人物。籍贯樂山，入仕廩生，曾任知縣。（中国历代人物传记资料库 CBDB 636206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆涵（CBDB 636206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636206&o=json)

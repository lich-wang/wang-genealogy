---
schema: wang-person/v1
id: p_KPEB7rWMu1sQkxLX9sbJn2
status: active
merged_into: null
display_name: 王尚儒
cbdb_id: 414379
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JD4w7MD4EjJsLkDNkxNHd
        subject_person_id: p_KPEB7rWMu1sQkxLX9sbJn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚儒，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YefuQbQKZlerikJim3TnGU
          claim_id: c_5JD4w7MD4EjJsLkDNkxNHd
          source_id: s_hG7PyQtARnLjWJ5RDATJYy
          stance: supports
          locator: CBDB:414379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hG7PyQtARnLjWJ5RDATJYy
            source_type: api_record
            title: 中国历代人物传记资料库：王尚儒（CBDB 414379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414379&o=json
            external_identifier: CBDB:414379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:32.727Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ShN4UzH6EYvHHgVfqDnNpD
        subject_person_id: p_KPEB7rWMu1sQkxLX9sbJn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_suWxt7LhQnXHK4M5nWBGj1
          claim_id: c_ShN4UzH6EYvHHgVfqDnNpD
          source_id: s_hG7PyQtARnLjWJ5RDATJYy
          stance: supports
          locator: CBDB:414379
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5401-5500）｜历史性依据：CBDB 朝代 = 明
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

# 王尚儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚儒，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414379） | accepted |
| name.primary | 王尚儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚儒（CBDB 414379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414379&o=json)

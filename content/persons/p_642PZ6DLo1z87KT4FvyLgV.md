---
schema: wang-person/v1
id: p_642PZ6DLo1z87KT4FvyLgV
status: active
merged_into: null
display_name: 王成棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FmKeMuEMADuDP82NGYN6g
        subject_person_id: p_642PZ6DLo1z87KT4FvyLgV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BK8vSu5kEGjHpesRu5sdfX
          claim_id: c_4FmKeMuEMADuDP82NGYN6g
          source_id: s_9K5naKA4vPEZHoRkUcuK7D
          stance: supports
          locator: CBDB:638040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638040）
          source: &a1
            id: s_9K5naKA4vPEZHoRkUcuK7D
            source_type: api_record
            title: 中国历代人物传记资料库：王成棟（CBDB 638040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638040&o=json
            external_identifier: CBDB:638040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kTyNjbKGf4b74AGNKPHTw9
        subject_person_id: p_642PZ6DLo1z87KT4FvyLgV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成棟，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 638040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IRvLnrqnQM9Ir-JYJ7W8Wl
          claim_id: c_kTyNjbKGf4b74AGNKPHTw9
          source_id: s_9K5naKA4vPEZHoRkUcuK7D
          stance: supports
          locator: CBDB:638040
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

# 王成棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成棟 | accepted |
| bio.summary | 王成棟，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 638040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成棟（CBDB 638040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638040&o=json)

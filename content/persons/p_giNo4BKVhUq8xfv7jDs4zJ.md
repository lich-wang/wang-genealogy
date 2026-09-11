---
schema: wang-person/v1
id: p_giNo4BKVhUq8xfv7jDs4zJ
status: active
merged_into: null
display_name: 王之緯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thJFZco1BZG8CbjCoVgyNs
        subject_person_id: p_giNo4BKVhUq8xfv7jDs4zJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bi4ZPbmAdEDgWFsBP2ZKQM
          claim_id: c_thJFZco1BZG8CbjCoVgyNs
          source_id: s_ZBfgGyaCGDFehx3rhFpj8i
          stance: supports
          locator: CBDB:635814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635814）
          source: &a1
            id: s_ZBfgGyaCGDFehx3rhFpj8i
            source_type: api_record
            title: 中国历代人物传记资料库：王之緯（CBDB 635814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635814&o=json
            external_identifier: CBDB:635814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GzXMbW9BhJ3Uno6YCD7E4A
        subject_person_id: p_giNo4BKVhUq8xfv7jDs4zJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之緯，清人物。籍贯鄖西，曾任復設訓導。（中国历代人物传记资料库 CBDB 635814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OXvALdA-RGJiNjHYz6uy9l
          claim_id: c_GzXMbW9BhJ3Uno6YCD7E4A
          source_id: s_ZBfgGyaCGDFehx3rhFpj8i
          stance: supports
          locator: CBDB:635814
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

# 王之緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之緯 | accepted |
| bio.summary | 王之緯，清人物。籍贯鄖西，曾任復設訓導。（中国历代人物传记资料库 CBDB 635814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之緯（CBDB 635814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635814&o=json)

---
schema: wang-person/v1
id: p_sY6EcQYaNXDERhAcfXq9qm
status: active
merged_into: null
display_name: 王餘慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Vrn9mxFEKUMzFmJDARKQz
        subject_person_id: p_sY6EcQYaNXDERhAcfXq9qm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LEPrNfBZvXD5VBGD7Cwhxx
          claim_id: c_1Vrn9mxFEKUMzFmJDARKQz
          source_id: s_wapMcB5aw5tK1njSRD5u3o
          stance: supports
          locator: CBDB:101445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101445）
          source: &a1
            id: s_wapMcB5aw5tK1njSRD5u3o
            source_type: api_record
            title: 中国历代人物传记资料库：王餘慶（CBDB 101445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101445&o=json
            external_identifier: CBDB:101445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8NyaXtXsVfC3gjA1rowSss
        subject_person_id: p_sY6EcQYaNXDERhAcfXq9qm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶，元人物。籍贯金華，曾任南臺察院監察御史、經筵檢討。（中国历代人物传记资料库 CBDB 101445）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BFpdUD5uB6GDzf7ccdEO6t
          claim_id: c_8NyaXtXsVfC3gjA1rowSss
          source_id: s_wapMcB5aw5tK1njSRD5u3o
          stance: supports
          locator: CBDB:101445
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

# 王餘慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘慶 | accepted |
| bio.summary | 王餘慶，元人物。籍贯金華，曾任南臺察院監察御史、經筵檢討。（中国历代人物传记资料库 CBDB 101445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘慶（CBDB 101445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101445&o=json)

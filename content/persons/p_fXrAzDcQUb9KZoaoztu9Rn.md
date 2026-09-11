---
schema: wang-person/v1
id: p_fXrAzDcQUb9KZoaoztu9Rn
status: active
merged_into: null
display_name: 王世昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d6qCwF45MKt6wvdKMrGxA8
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3RwmsGD1D6qXG7kjTPKWr7
          claim_id: c_d6qCwF45MKt6wvdKMrGxA8
          source_id: s_7K5uyMJ7d8zbD4hCw6KWWE
          stance: supports
          locator: CBDB:27011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27011）
          source: &a1
            id: s_7K5uyMJ7d8zbD4hCw6KWWE
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 27011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27011&o=json
            external_identifier: CBDB:27011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zv4uLxKK6182DSzsb8nEPn
        subject_person_id: p_fXrAzDcQUb9KZoaoztu9Rn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌，宋人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 27011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kt8FpB9x4LA3qme9Jh4cN9
          claim_id: c_Zv4uLxKK6182DSzsb8nEPn
          source_id: s_7K5uyMJ7d8zbD4hCw6KWWE
          stance: supports
          locator: CBDB:27011
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

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | 王世昌，宋人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 27011） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 27011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27011&o=json)

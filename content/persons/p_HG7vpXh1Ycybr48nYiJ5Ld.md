---
schema: wang-person/v1
id: p_HG7vpXh1Ycybr48nYiJ5Ld
status: active
merged_into: null
display_name: 王世煌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HHQsVd8KPFozpCVahgv9N2
        subject_person_id: p_HG7vpXh1Ycybr48nYiJ5Ld
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世煌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AowogHNFQBKWGECBNtr9aW
          claim_id: c_HHQsVd8KPFozpCVahgv9N2
          source_id: s_Vqh5jyiD98RyBDDJcK8RJG
          stance: supports
          locator: CBDB:635696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635696）
          source: &a1
            id: s_Vqh5jyiD98RyBDDJcK8RJG
            source_type: api_record
            title: 中国历代人物传记资料库：王世煌（CBDB 635696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635696&o=json
            external_identifier: CBDB:635696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dkKCu4GL4fjTWXhdWK2CK
        subject_person_id: p_HG7vpXh1Ycybr48nYiJ5Ld
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世煌，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 635696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UbMFQY7UWVzHDKdGbv3BXV
          claim_id: c_9dkKCu4GL4fjTWXhdWK2CK
          source_id: s_Vqh5jyiD98RyBDDJcK8RJG
          stance: supports
          locator: CBDB:635696
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

# 王世煌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世煌 | accepted |
| bio.summary | 王世煌，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 635696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世煌（CBDB 635696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635696&o=json)

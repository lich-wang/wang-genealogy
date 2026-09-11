---
schema: wang-person/v1
id: p_4WSrmYPfKbCu3wwmREUMRo
status: active
merged_into: null
display_name: 王綸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dVWYT59pDZbeHvV5jG4vU8
        subject_person_id: p_4WSrmYPfKbCu3wwmREUMRo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bSLFBtmRsUwpqzNJbTtnx
          claim_id: c_dVWYT59pDZbeHvV5jG4vU8
          source_id: s_WZmUNpAdxMQMTnojW5TJbY
          stance: supports
          locator: CBDB:18895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18895）
          source: &a1
            id: s_WZmUNpAdxMQMTnojW5TJbY
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 18895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18895&o=json
            external_identifier: CBDB:18895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gvkQ5pTPBRK9sHgpQACxJe
        subject_person_id: p_4WSrmYPfKbCu3wwmREUMRo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，宋人物。籍贯海陵。（中国历代人物传记资料库 CBDB 18895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zW2wN7HWMrQjzFTYkYQXFp
          claim_id: c_gvkQ5pTPBRK9sHgpQACxJe
          source_id: s_WZmUNpAdxMQMTnojW5TJbY
          stance: supports
          locator: CBDB:18895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fjIk21vy1gsxNBbhUhjKn4
        subject_person_id: p_4WSrmYPfKbCu3wwmREUMRo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZSh1NwfKww7fR5oeW6ZKNG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLaFWCXGtifBZs2LHdj1qf
          claim_id: c_fjIk21vy1gsxNBbhUhjKn4
          source_id: s_WZmUNpAdxMQMTnojW5TJbY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1663：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZSh1NwfKww7fR5oeW6ZKNG
        status: active
        display_name: 王伯起
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，宋人物。籍贯海陵。（中国历代人物传记资料库 CBDB 18895） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZSh1NwfKww7fR5oeW6ZKNG | 王伯起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 18895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18895&o=json)

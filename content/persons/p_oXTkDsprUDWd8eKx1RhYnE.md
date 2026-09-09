---
schema: wang-person/v1
id: p_oXTkDsprUDWd8eKx1RhYnE
status: active
merged_into: null
display_name: 王定邦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KhcrQ7Z9fKDoic7fyEQkjW
        subject_person_id: p_oXTkDsprUDWd8eKx1RhYnE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1Sie18yzV5aaTyupXkRpt
          claim_id: c_KhcrQ7Z9fKDoic7fyEQkjW
          source_id: s_5SGxyjMMbUUyuCZGqgB7yY
          stance: supports
          locator: CBDB:460566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460566）
          source: &a1
            id: s_5SGxyjMMbUUyuCZGqgB7yY
            source_type: api_record
            title: 中国历代人物传记资料库：王定邦（CBDB 460566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460566&o=json
            external_identifier: CBDB:460566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zk2WQH5jWasnYtuq6r9Xg1
        subject_person_id: p_oXTkDsprUDWd8eKx1RhYnE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFSSNq2RTowHGnKCpviD5S
          claim_id: c_Zk2WQH5jWasnYtuq6r9Xg1
          source_id: s_5SGxyjMMbUUyuCZGqgB7yY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王定邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定邦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定邦（CBDB 460566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460566&o=json)

---
schema: wang-person/v1
id: p_6XSMJFK74x2nPyeQPARHTq
status: active
merged_into: null
display_name: 王廣文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vM3e9JVsGZCPZNgqnk7MW
        subject_person_id: p_6XSMJFK74x2nPyeQPARHTq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2H4c75nEqK63vhw3x1tYJJ
          claim_id: c_9vM3e9JVsGZCPZNgqnk7MW
          source_id: s_bjbZNpJncG2DW89UP84FAE
          stance: supports
          locator: CBDB:71344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71344）
          source: &a1
            id: s_bjbZNpJncG2DW89UP84FAE
            source_type: api_record
            title: 中国历代人物传记资料库：王廣文（CBDB 71344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71344&o=json
            external_identifier: CBDB:71344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UoA9obZPtRUCZBB8jTqwuY
        subject_person_id: p_6XSMJFK74x2nPyeQPARHTq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1658年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_19rspLj2HFP62ueFK8mNKP
          claim_id: c_UoA9obZPtRUCZBB8jTqwuY
          source_id: s_bjbZNpJncG2DW89UP84FAE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1j9En9Xb77A9ujdGCCeZZ6
        subject_person_id: p_6XSMJFK74x2nPyeQPARHTq
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
        - id: cs_S7KoT62e6vy976hkeR3zr2
          claim_id: c_1j9En9Xb77A9ujdGCCeZZ6
          source_id: s_bjbZNpJncG2DW89UP84FAE
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

# 王廣文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣文 | accepted |
| birth.date | 1658年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣文（CBDB 71344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71344&o=json)

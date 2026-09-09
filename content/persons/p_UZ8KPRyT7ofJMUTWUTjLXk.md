---
schema: wang-person/v1
id: p_UZ8KPRyT7ofJMUTWUTjLXk
status: active
merged_into: null
display_name: 王籤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n678ow3fnomV6AfU6w6Pyh
        subject_person_id: p_UZ8KPRyT7ofJMUTWUTjLXk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王籤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f11az7V2eeidKni64gkBnT
          claim_id: c_n678ow3fnomV6AfU6w6Pyh
          source_id: s_q3wj9sg5F4PWSmFHKQYPCk
          stance: supports
          locator: CBDB:639720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639720）
          source: &a1
            id: s_q3wj9sg5F4PWSmFHKQYPCk
            source_type: api_record
            title: 中国历代人物传记资料库：王籤（CBDB 639720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639720&o=json
            external_identifier: CBDB:639720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pvSPcuGVAbrqeCdeChGpKD
        subject_person_id: p_UZ8KPRyT7ofJMUTWUTjLXk
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
        - id: cs_4ytKJV77Vg5uVrrUALFkqV
          claim_id: c_pvSPcuGVAbrqeCdeChGpKD
          source_id: s_q3wj9sg5F4PWSmFHKQYPCk
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

# 王籤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王籤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王籤（CBDB 639720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639720&o=json)

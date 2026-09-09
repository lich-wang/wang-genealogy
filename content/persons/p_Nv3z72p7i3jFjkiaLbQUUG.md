---
schema: wang-person/v1
id: p_Nv3z72p7i3jFjkiaLbQUUG
status: active
merged_into: null
display_name: 王作梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_snB91KgCeVvPkBR2hKfW2u
        subject_person_id: p_Nv3z72p7i3jFjkiaLbQUUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_up4to5gnMFTeYHEo61qTuW
          claim_id: c_snB91KgCeVvPkBR2hKfW2u
          source_id: s_PiG8VaXueFEFYLtA9qDSmY
          stance: supports
          locator: CBDB:342452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342452）
          source: &a1
            id: s_PiG8VaXueFEFYLtA9qDSmY
            source_type: api_record
            title: 中国历代人物传记资料库：王作梅（CBDB 342452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342452&o=json
            external_identifier: CBDB:342452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sLN69DfEi65FX7NQzT6D5z
        subject_person_id: p_Nv3z72p7i3jFjkiaLbQUUG
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
        - id: cs_jZpBQ69Y7ioBZHsYNP84vP
          claim_id: c_sLN69DfEi65FX7NQzT6D5z
          source_id: s_PiG8VaXueFEFYLtA9qDSmY
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

# 王作梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作梅 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作梅（CBDB 342452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342452&o=json)

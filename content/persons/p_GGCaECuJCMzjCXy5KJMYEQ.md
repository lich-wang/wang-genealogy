---
schema: wang-person/v1
id: p_GGCaECuJCMzjCXy5KJMYEQ
status: active
merged_into: null
display_name: 王應軫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4a4KSuDDLP4RRp9r5tono
        subject_person_id: p_GGCaECuJCMzjCXy5KJMYEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應軫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sbCQHY3ZAki3qz2BwGgPfX
          claim_id: c_b4a4KSuDDLP4RRp9r5tono
          source_id: s_g4aiCyrwgSs6vLoBXi8Njp
          stance: supports
          locator: CBDB:302732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302732）
          source: &a1
            id: s_g4aiCyrwgSs6vLoBXi8Njp
            source_type: api_record
            title: 中国历代人物传记资料库：王應軫（CBDB 302732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302732&o=json
            external_identifier: CBDB:302732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zz9sAyuCnYnhGtbtvdysdh
        subject_person_id: p_GGCaECuJCMzjCXy5KJMYEQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9DUH6T15BMYPwNC757Mpn
          claim_id: c_zz9sAyuCnYnhGtbtvdysdh
          source_id: s_g4aiCyrwgSs6vLoBXi8Njp
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

# 王應軫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應軫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應軫（CBDB 302732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302732&o=json)

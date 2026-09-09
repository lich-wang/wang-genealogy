---
schema: wang-person/v1
id: p_PpVsj7Kya5GNaXnGu8H4VD
status: active
merged_into: null
display_name: 王遐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FbZaG1FBsA7NxHAth6Dc5q
        subject_person_id: p_PpVsj7Kya5GNaXnGu8H4VD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zWxELvKSG8LaDLXY7U6fz7
          claim_id: c_FbZaG1FBsA7NxHAth6Dc5q
          source_id: s_8SNbuELz5nk2MGDKfUv6EE
          stance: supports
          locator: CBDB:689802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689802）
          source: &a1
            id: s_8SNbuELz5nk2MGDKfUv6EE
            source_type: api_record
            title: 中国历代人物传记资料库：王遐（CBDB 689802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689802&o=json
            external_identifier: CBDB:689802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBpuAiTy575eVsC1UGJj9K
        subject_person_id: p_PpVsj7Kya5GNaXnGu8H4VD
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
        - id: cs_Tgmjcew69C3XfeWW5WNHa3
          claim_id: c_pBpuAiTy575eVsC1UGJj9K
          source_id: s_8SNbuELz5nk2MGDKfUv6EE
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

# 王遐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遐（CBDB 689802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689802&o=json)

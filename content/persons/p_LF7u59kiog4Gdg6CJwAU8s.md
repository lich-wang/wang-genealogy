---
schema: wang-person/v1
id: p_LF7u59kiog4Gdg6CJwAU8s
status: active
merged_into: null
display_name: 王美質
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YMrddnTi5E9HGxV2Fhzzb2
        subject_person_id: p_LF7u59kiog4Gdg6CJwAU8s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8P97GuPaB5KwHHQNaUqZoS
          claim_id: c_YMrddnTi5E9HGxV2Fhzzb2
          source_id: s_gYJ43Yfg1ofggn9ajESMEe
          stance: supports
          locator: CBDB:534227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534227）
          source: &a1
            id: s_gYJ43Yfg1ofggn9ajESMEe
            source_type: api_record
            title: 中国历代人物传记资料库：王美質（CBDB 534227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534227&o=json
            external_identifier: CBDB:534227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XHnuYW8Vck7JrUnE5f249H
        subject_person_id: p_LF7u59kiog4Gdg6CJwAU8s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LXuX5AZGjzsTwUUSSMThs
          claim_id: c_XHnuYW8Vck7JrUnE5f249H
          source_id: s_gYJ43Yfg1ofggn9ajESMEe
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

# 王美質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美質 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王美質（CBDB 534227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534227&o=json)

---
schema: wang-person/v1
id: p_S11L61iuwGbzquXaotR3iJ
status: active
merged_into: null
display_name: 王志清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TzaHiQdgR8j4BgLqoatsGG
        subject_person_id: p_S11L61iuwGbzquXaotR3iJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WCj2vwhSUJrToZHrQSBDPG
          claim_id: c_TzaHiQdgR8j4BgLqoatsGG
          source_id: s_GsZhCEcLdxD6pRdybotLe4
          stance: supports
          locator: CBDB:155559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155559）
          source: &a1
            id: s_GsZhCEcLdxD6pRdybotLe4
            source_type: api_record
            title: 中国历代人物传记资料库：王志清（CBDB 155559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155559&o=json
            external_identifier: CBDB:155559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2q6YeEDTH2tpdqsYiVU8as
        subject_person_id: p_S11L61iuwGbzquXaotR3iJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rc6a64P27aPz92jjY4Ed2u
          claim_id: c_2q6YeEDTH2tpdqsYiVU8as
          source_id: s_GsZhCEcLdxD6pRdybotLe4
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

# 王志清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志清 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志清（CBDB 155559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155559&o=json)

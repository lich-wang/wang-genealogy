---
schema: wang-person/v1
id: p_i1C3uJJYfYMw3861gcKMoP
status: active
merged_into: null
display_name: 王之寀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MTT9JyQa2bFVvPjx2JJva9
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Heb9WXc1cgV4CnCKBDJK2S
          claim_id: c_MTT9JyQa2bFVvPjx2JJva9
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: CBDB:65713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65713）
          source: &a1
            id: s_MusunsTMcJ8i4AepqBvGHy
            source_type: api_record
            title: 中国历代人物传记资料库：王之寀（CBDB 65713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json
            external_identifier: CBDB:65713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_F69n9nmRi9QPC27GAfifdz
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C17S7DhKB3CySR3BZQALgY
          claim_id: c_F69n9nmRi9QPC27GAfifdz
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9NhiT6jib3Dn7U3DN1KMUD
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
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
        - id: cs_GPgNJAEE8nzvrUTm6nMMdv
          claim_id: c_9NhiT6jib3Dn7U3DN1KMUD
          source_id: s_MusunsTMcJ8i4AepqBvGHy
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

# 王之寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之寀 | accepted |
| death.date | 1627年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之寀（CBDB 65713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json)

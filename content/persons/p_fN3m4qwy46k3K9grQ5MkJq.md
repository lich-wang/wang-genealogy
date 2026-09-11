---
schema: wang-person/v1
id: p_fN3m4qwy46k3K9grQ5MkJq
status: active
merged_into: null
display_name: 王豫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94kL4QhTBN72c1SMAKme3d
        subject_person_id: p_fN3m4qwy46k3K9grQ5MkJq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQj5QqstPjdRV8q4s8f4gB
          claim_id: c_94kL4QhTBN72c1SMAKme3d
          source_id: s_KSohmKJYw1ucpY257DJBdS
          stance: supports
          locator: CBDB:56103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56103）
          source: &a1
            id: s_KSohmKJYw1ucpY257DJBdS
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 56103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56103&o=json
            external_identifier: CBDB:56103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3gkNL2CyY9Uy4qA5vHW8xq
        subject_person_id: p_fN3m4qwy46k3K9grQ5MkJq
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
        - id: cs_hxKtz4iHUpCf5pVZ7fnjYG
          claim_id: c_3gkNL2CyY9Uy4qA5vHW8xq
          source_id: s_KSohmKJYw1ucpY257DJBdS
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
  spouses:
    - claim:
        id: c_OMLU0JMq8Pt0H4mSBR0051
        subject_person_id: p_fN3m4qwy46k3K9grQ5MkJq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_akF2WXs1yrgyLsWX82LDWi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yj2f6G8FmdgtD1jhPh5X4l
          claim_id: c_OMLU0JMq8Pt0H4mSBR0051
          source_id: s_t1yp_aszw1r4qUzXTNql8O
          stance: supports
          locator: CBDB 双向互证（妻子 姚世鑑）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t1yp_aszw1r4qUzXTNql8O
            source_type: api_record
            title: 中国历代人物传记资料库：姚世鑑（CBDB 56101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56101&o=json
            external_identifier: CBDB:56101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_akF2WXs1yrgyLsWX82LDWi
        status: active
        display_name: 姚世鑑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_akF2WXs1yrgyLsWX82LDWi | 姚世鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 56103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56103&o=json)
- [中国历代人物传记资料库：姚世鑑（CBDB 56101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56101&o=json)

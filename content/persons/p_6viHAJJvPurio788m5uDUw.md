---
schema: wang-person/v1
id: p_6viHAJJvPurio788m5uDUw
status: active
merged_into: null
display_name: 王收
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abC2Kw2PdPixRG2Tq9P98k
        subject_person_id: p_6viHAJJvPurio788m5uDUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王收
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eore1Ev7RN3ENpemcZdXJM
          claim_id: c_abC2Kw2PdPixRG2Tq9P98k
          source_id: s_B6bZAK4YtQREA5MaRmJ61F
          stance: supports
          locator: CBDB:159899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159899）
          source: &a1
            id: s_B6bZAK4YtQREA5MaRmJ61F
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 159899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159899&o=json
            external_identifier: CBDB:159899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jHpBibUjjkbVMtB3DkjbiQ
        subject_person_id: p_6viHAJJvPurio788m5uDUw
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
        - id: cs_9tJTGzVaxSto3C71uRqnB5
          claim_id: c_jHpBibUjjkbVMtB3DkjbiQ
          source_id: s_B6bZAK4YtQREA5MaRmJ61F
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

# 王收

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王收 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王收（CBDB 159899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159899&o=json)

---
schema: wang-person/v1
id: p_aaiHJwLEK4x15AzbShdWFc
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4soxrhFBinmVYJLisMt7p
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMwVtXMycC1bLpBLRStJMp
          claim_id: c_C4soxrhFBinmVYJLisMt7p
          source_id: s_2puGC82E4CtAEoaDwfg4iN
          stance: supports
          locator: CBDB:145625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145625）
          source: &a1
            id: s_2puGC82E4CtAEoaDwfg4iN
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 145625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json
            external_identifier: CBDB:145625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Z5gMQFgWzDPKrJHFRjSHmr
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 742年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TmGG39U9An8mzEVUGN8xkK
          claim_id: c_Z5gMQFgWzDPKrJHFRjSHmr
          source_id: s_2puGC82E4CtAEoaDwfg4iN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JY6LbPvbzj92x4EDpG3EyZ
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 812年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gSkPGBpAuMEKSNqkZRsij9
          claim_id: c_JY6LbPvbzj92x4EDpG3EyZ
          source_id: s_2puGC82E4CtAEoaDwfg4iN
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
        id: c_F8Cvd5XFRZpT4VFGkP5HdH
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
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
        - id: cs_ebNhJxRdtBfdGAt72GpVQ4
          claim_id: c_F8Cvd5XFRZpT4VFGkP5HdH
          source_id: s_2puGC82E4CtAEoaDwfg4iN
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| birth.date | 742年 | accepted |
| death.date | 812年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 145625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json)

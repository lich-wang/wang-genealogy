---
schema: wang-person/v1
id: p_qSuQmNGsi5BDMDpfCisEwQ
status: active
merged_into: null
display_name: 王正夫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGYpnQCsXDSNpEEb1D1wuJ
        subject_person_id: p_qSuQmNGsi5BDMDpfCisEwQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LVcJJMa2fhE1R6ZyB4EE2E
          claim_id: c_MGYpnQCsXDSNpEEb1D1wuJ
          source_id: s_GBdo6SWVAL7K5i9rqbCyCK
          stance: supports
          locator: CBDB:445442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445442）
          source: &a1
            id: s_GBdo6SWVAL7K5i9rqbCyCK
            source_type: api_record
            title: 中国历代人物传记资料库：王正夫（CBDB 445442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445442&o=json
            external_identifier: CBDB:445442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hXB2mpqApMohunxzappHUJ
        subject_person_id: p_qSuQmNGsi5BDMDpfCisEwQ
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
        - id: cs_Dx9CpG3U9rKNwRt828osfz
          claim_id: c_hXB2mpqApMohunxzappHUJ
          source_id: s_GBdo6SWVAL7K5i9rqbCyCK
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

# 王正夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正夫 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正夫（CBDB 445442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445442&o=json)

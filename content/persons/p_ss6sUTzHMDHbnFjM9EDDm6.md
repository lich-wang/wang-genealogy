---
schema: wang-person/v1
id: p_ss6sUTzHMDHbnFjM9EDDm6
status: active
merged_into: null
display_name: 王謩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtPF26g1sXCeLvXbd8LZfK
        subject_person_id: p_ss6sUTzHMDHbnFjM9EDDm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4MYREP4ukE6tEKauqSk5pw
          claim_id: c_LtPF26g1sXCeLvXbd8LZfK
          source_id: s_nLxaW3Jx7bv2ae1KFmMDpf
          stance: supports
          locator: CBDB:445608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445608）
          source: &a1
            id: s_nLxaW3Jx7bv2ae1KFmMDpf
            source_type: api_record
            title: 中国历代人物传记资料库：王謩（CBDB 445608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445608&o=json
            external_identifier: CBDB:445608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sVfgyTkRDbm86f8241gixa
        subject_person_id: p_ss6sUTzHMDHbnFjM9EDDm6
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
        - id: cs_3eTsFrNWHeAVWxT3t5mQCa
          claim_id: c_sVfgyTkRDbm86f8241gixa
          source_id: s_nLxaW3Jx7bv2ae1KFmMDpf
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

# 王謩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謩 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謩（CBDB 445608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445608&o=json)

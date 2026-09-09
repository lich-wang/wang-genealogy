---
schema: wang-person/v1
id: p_4j28cTB4FbkC46frs3J8PW
status: active
merged_into: null
display_name: 王俸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDrG9fLXbEXqV41iPPoiTk
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mykBzC7PFNiJNjAkfCw9Fw
          claim_id: c_pDrG9fLXbEXqV41iPPoiTk
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: CBDB:204993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204993）
          source: &a1
            id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 204993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json
            external_identifier: CBDB:204993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Cm38uejVYj3LFowku3z4zU
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3BANsqgGTEGLMugzaAnZ2
          claim_id: c_Cm38uejVYj3LFowku3z4zU
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rp5QV56Cfb5jEjsF4BMVU9
        subject_person_id: p_4j28cTB4FbkC46frs3J8PW
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
        - id: cs_NvEbGQ354GHr6mLXjWJFZC
          claim_id: c_Rp5QV56Cfb5jEjsF4BMVU9
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
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

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 204993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json)

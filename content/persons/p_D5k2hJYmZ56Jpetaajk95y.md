---
schema: wang-person/v1
id: p_D5k2hJYmZ56Jpetaajk95y
status: active
merged_into: null
display_name: 王公度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCmX3ByYirFRTkKVSeAsZB
        subject_person_id: p_D5k2hJYmZ56Jpetaajk95y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uCF3dodeofgpaQ8NQNADp4
          claim_id: c_PCmX3ByYirFRTkKVSeAsZB
          source_id: s_Ump4TkCa7psitCmYp5N7Q2
          stance: supports
          locator: CBDB:140843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140843）
          source: &a1
            id: s_Ump4TkCa7psitCmYp5N7Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王公度（CBDB 140843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140843&o=json
            external_identifier: CBDB:140843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EVs9SfBoc3ZGEXF5VYNSzb
        subject_person_id: p_D5k2hJYmZ56Jpetaajk95y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 673年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ojPHhTPGnFGPisu72M5Mp
          claim_id: c_EVs9SfBoc3ZGEXF5VYNSzb
          source_id: s_Ump4TkCa7psitCmYp5N7Q2
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
        id: c_DFo3NXfYUrKLZrYY8BPxca
        subject_person_id: p_D5k2hJYmZ56Jpetaajk95y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 734年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cEfTArveFP3a1eiLcXbVZi
          claim_id: c_DFo3NXfYUrKLZrYY8BPxca
          source_id: s_Ump4TkCa7psitCmYp5N7Q2
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
        id: c_RkQ9Aii4Hw4Dq5jDfjE8aj
        subject_person_id: p_D5k2hJYmZ56Jpetaajk95y
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
        - id: cs_ADsJFa6v8DzfL4FFDH9AsM
          claim_id: c_RkQ9Aii4Hw4Dq5jDfjE8aj
          source_id: s_Ump4TkCa7psitCmYp5N7Q2
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

# 王公度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公度 | accepted |
| birth.date | 673年 | accepted |
| death.date | 734年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公度（CBDB 140843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140843&o=json)

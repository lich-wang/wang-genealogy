---
schema: wang-person/v1
id: p_ZM7rXFHSqnZtQ8K9spE336
status: active
merged_into: null
display_name: 王頊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7HaFxaDLE485JUdY9kZB6N
        subject_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6PDXHzo6LVtxaErrmRwtm2
          claim_id: c_7HaFxaDLE485JUdY9kZB6N
          source_id: s_XEVYA6jrkKNS1XX2CfBCE4
          stance: supports
          locator: CBDB:270705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270705）
          source: &a1
            id: s_XEVYA6jrkKNS1XX2CfBCE4
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 270705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json
            external_identifier: CBDB:270705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8JJxJ5nvAJnT1CnrGW2ua3
        subject_person_id: p_ZM7rXFHSqnZtQ8K9spE336
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
        - id: cs_Y45STCCfzzXFgH7gVzUyq9
          claim_id: c_8JJxJ5nvAJnT1CnrGW2ua3
          source_id: s_XEVYA6jrkKNS1XX2CfBCE4
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

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 270705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json)

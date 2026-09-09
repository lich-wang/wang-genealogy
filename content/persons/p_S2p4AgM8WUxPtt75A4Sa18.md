---
schema: wang-person/v1
id: p_S2p4AgM8WUxPtt75A4Sa18
status: active
merged_into: null
display_name: 王永年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cx7tKJA6MyQrQW3tFjCwFF
        subject_person_id: p_S2p4AgM8WUxPtt75A4Sa18
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_57KumN1p5zqFpH5Ng8dQLD
          claim_id: c_Cx7tKJA6MyQrQW3tFjCwFF
          source_id: s_1v9FY9iFF9a7WkHJ5Ch6eP
          stance: supports
          locator: CBDB:71504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71504）
          source: &a1
            id: s_1v9FY9iFF9a7WkHJ5Ch6eP
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 71504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71504&o=json
            external_identifier: CBDB:71504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_adcPaAiwLt3vz5bYdcFNMi
        subject_person_id: p_S2p4AgM8WUxPtt75A4Sa18
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1834年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t88btBF6Wd3puSZfKKJYKY
          claim_id: c_adcPaAiwLt3vz5bYdcFNMi
          source_id: s_1v9FY9iFF9a7WkHJ5Ch6eP
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
        id: c_C13PMhcMc49ZyFJRSAVWq1
        subject_person_id: p_S2p4AgM8WUxPtt75A4Sa18
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
        - id: cs_ij3S7CkGcaj7XogE5LUZVx
          claim_id: c_C13PMhcMc49ZyFJRSAVWq1
          source_id: s_1v9FY9iFF9a7WkHJ5Ch6eP
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

# 王永年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永年 | accepted |
| birth.date | 1834年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永年（CBDB 71504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71504&o=json)

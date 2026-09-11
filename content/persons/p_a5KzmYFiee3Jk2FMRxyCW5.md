---
schema: wang-person/v1
id: p_a5KzmYFiee3Jk2FMRxyCW5
status: active
merged_into: null
display_name: 王朋顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuLRqSttMFoHvRdcAg7TEG
        subject_person_id: p_a5KzmYFiee3Jk2FMRxyCW5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b7JocNJvdi3EbP18wFjV8G
          claim_id: c_DuLRqSttMFoHvRdcAg7TEG
          source_id: s_mdfB7VYMQVpPhD7ZogThDt
          stance: supports
          locator: CBDB:138868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138868）
          source: &a1
            id: s_mdfB7VYMQVpPhD7ZogThDt
            source_type: api_record
            title: 中国历代人物传记资料库：王朋顯（CBDB 138868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138868&o=json
            external_identifier: CBDB:138868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h7SCtG1PXGGNvVcH7DeLdL
        subject_person_id: p_a5KzmYFiee3Jk2FMRxyCW5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 588年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H23BLetSPbgc944E9oUPf9
          claim_id: c_h7SCtG1PXGGNvVcH7DeLdL
          source_id: s_mdfB7VYMQVpPhD7ZogThDt
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
        id: c_aiHhz9pbhCFB1LHraAX49u
        subject_person_id: p_a5KzmYFiee3Jk2FMRxyCW5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eb3Wcts4nFnEDmZ77TPNoX
          claim_id: c_aiHhz9pbhCFB1LHraAX49u
          source_id: s_mdfB7VYMQVpPhD7ZogThDt
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
        id: c_qD4d4KzsFZj4rSqBx7TH3b
        subject_person_id: p_a5KzmYFiee3Jk2FMRxyCW5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋顯（588年—648年），唐人物。籍贯交河。（中国历代人物传记资料库 CBDB 138868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3rM1-hNUKl9izSkfoD6ZZE
          claim_id: c_qD4d4KzsFZj4rSqBx7TH3b
          source_id: s_mdfB7VYMQVpPhD7ZogThDt
          stance: supports
          locator: CBDB:138868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王朋顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朋顯 | accepted |
| birth.date | 588年 | accepted |
| death.date | 648年 | accepted |
| bio.summary | 王朋顯（588年—648年），唐人物。籍贯交河。（中国历代人物传记资料库 CBDB 138868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朋顯（CBDB 138868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138868&o=json)

---
schema: wang-person/v1
id: p_DyTGzzspjVWik15hHbyM4w
status: active
merged_into: null
display_name: 王昌齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MoMC2ZvDJFg6pZKsXUJuCM
        subject_person_id: p_DyTGzzspjVWik15hHbyM4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XzKZL2oa8DPX2Fr9JNYNUV
          claim_id: c_MoMC2ZvDJFg6pZKsXUJuCM
          source_id: s_zw8iFbtJgjEMN5ytSjeNUP
          stance: supports
          locator: CBDB:101253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101253）
          source: &a1
            id: s_zw8iFbtJgjEMN5ytSjeNUP
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 101253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101253&o=json
            external_identifier: CBDB:101253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AZkp5EcE1jgFsqXd1ktTnM
        subject_person_id: p_DyTGzzspjVWik15hHbyM4w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1197年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZ64fCxEHfxuqTFvaJyBdH
          claim_id: c_AZkp5EcE1jgFsqXd1ktTnM
          source_id: s_zw8iFbtJgjEMN5ytSjeNUP
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
        id: c_JN2hYm7qCKcXzC95ik7ABU
        subject_person_id: p_DyTGzzspjVWik15hHbyM4w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1259年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tauoLMir5YSzLnUMoLk8UC
          claim_id: c_JN2hYm7qCKcXzC95ik7ABU
          source_id: s_zw8iFbtJgjEMN5ytSjeNUP
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
        id: c_RdNHVeY9g5xa35QJi4Qok4
        subject_person_id: p_DyTGzzspjVWik15hHbyM4w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKnZHob1hrFeh5PWFEUZa5
          claim_id: c_RdNHVeY9g5xa35QJi4Qok4
          source_id: s_zw8iFbtJgjEMN5ytSjeNUP
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

# 王昌齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌齡 | accepted |
| birth.date | 1197年 | accepted |
| death.date | 1259年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 101253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101253&o=json)

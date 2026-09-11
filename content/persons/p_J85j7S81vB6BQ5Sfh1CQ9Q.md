---
schema: wang-person/v1
id: p_J85j7S81vB6BQ5Sfh1CQ9Q
status: active
merged_into: null
display_name: 王廷俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDLKCXeyaL4Cp4YzpTQNgL
        subject_person_id: p_J85j7S81vB6BQ5Sfh1CQ9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7keLgqgQoXfihQERTkYJTQ
          claim_id: c_DDLKCXeyaL4Cp4YzpTQNgL
          source_id: s_3HMwwnq7arAx8yEnccv8PG
          stance: supports
          locator: CBDB:71564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71564）
          source: &a1
            id: s_3HMwwnq7arAx8yEnccv8PG
            source_type: api_record
            title: 中国历代人物传记资料库：王廷俊（CBDB 71564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71564&o=json
            external_identifier: CBDB:71564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P8FEfHh6tn7DmXCZYq6gYr
        subject_person_id: p_J85j7S81vB6BQ5Sfh1CQ9Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1754年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZxP4QyRVwz6TwCRyxgHPQN
          claim_id: c_P8FEfHh6tn7DmXCZYq6gYr
          source_id: s_3HMwwnq7arAx8yEnccv8PG
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
        id: c_gDNSDjo95awZrC11LMj6NF
        subject_person_id: p_J85j7S81vB6BQ5Sfh1CQ9Q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1808年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZKi6gXMJrwdjPwvXYY3LP
          claim_id: c_gDNSDjo95awZrC11LMj6NF
          source_id: s_3HMwwnq7arAx8yEnccv8PG
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
        id: c_rC7parWLRdm4AuYDbC26s6
        subject_person_id: p_J85j7S81vB6BQ5Sfh1CQ9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊（1754年—1808年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pvbuQoPs29reLpvvoQcOlM
          claim_id: c_rC7parWLRdm4AuYDbC26s6
          source_id: s_3HMwwnq7arAx8yEnccv8PG
          stance: supports
          locator: CBDB:71564
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

# 王廷俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷俊 | accepted |
| birth.date | 1754年 | accepted |
| death.date | 1808年 | accepted |
| bio.summary | 王廷俊（1754年—1808年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷俊（CBDB 71564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71564&o=json)

---
schema: wang-person/v1
id: p_dNigcZK2tV756trhQNaFSc
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pJdjCGocsHmzDWAu8BzJ4J
        subject_person_id: p_dNigcZK2tV756trhQNaFSc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJtRJLz2muLu1e7pJ6dRts
          claim_id: c_pJdjCGocsHmzDWAu8BzJ4J
          source_id: s_XeoKwQgq8PiF452qAZe4MD
          stance: supports
          locator: CBDB:142485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142485）
          source: &a1
            id: s_XeoKwQgq8PiF452qAZe4MD
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 142485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142485&o=json
            external_identifier: CBDB:142485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MsMS6Q8X4goZKyNmqyJAsh
        subject_person_id: p_dNigcZK2tV756trhQNaFSc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 659年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_py2aaxcvc3j3CnijtV9rpb
          claim_id: c_MsMS6Q8X4goZKyNmqyJAsh
          source_id: s_XeoKwQgq8PiF452qAZe4MD
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
        id: c_EBiNsGxXH2Udn46om8T322
        subject_person_id: p_dNigcZK2tV756trhQNaFSc
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
        - id: cs_N28nLJzu1FfPS9uUcE3g6A
          claim_id: c_EBiNsGxXH2Udn46om8T322
          source_id: s_XeoKwQgq8PiF452qAZe4MD
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| death.date | 659年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 142485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142485&o=json)

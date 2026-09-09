---
schema: wang-person/v1
id: p_nksXewUDBw3udNfmxGGtci
status: active
merged_into: null
display_name: 王立楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sL9MK3CurAuqCstAmM9AeK
        subject_person_id: p_nksXewUDBw3udNfmxGGtci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C9FxNM5gAF5xPrpQuBS68M
          claim_id: c_sL9MK3CurAuqCstAmM9AeK
          source_id: s_fPp6GSwVhpaM7ErTmEFTej
          stance: supports
          locator: CBDB:169731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169731）
          source: &a1
            id: s_fPp6GSwVhpaM7ErTmEFTej
            source_type: api_record
            title: 中国历代人物传记资料库：王立楷（CBDB 169731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169731&o=json
            external_identifier: CBDB:169731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yZsubC7bNyPxk8zRzTTgE1
        subject_person_id: p_nksXewUDBw3udNfmxGGtci
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 753年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PmhohGuuNaU3NAEA3iuEAK
          claim_id: c_yZsubC7bNyPxk8zRzTTgE1
          source_id: s_fPp6GSwVhpaM7ErTmEFTej
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
        id: c_jzBCRLJ1QpPGBSkscQUxKn
        subject_person_id: p_nksXewUDBw3udNfmxGGtci
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
        - id: cs_AQSZaQeoZ9wBtA7SEMJYj2
          claim_id: c_jzBCRLJ1QpPGBSkscQUxKn
          source_id: s_fPp6GSwVhpaM7ErTmEFTej
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

# 王立楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立楷 | accepted |
| death.date | 753年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立楷（CBDB 169731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169731&o=json)

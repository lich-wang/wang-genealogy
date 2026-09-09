---
schema: wang-person/v1
id: p_BBjh54oy2Rk6bDUmYwzsdA
status: active
merged_into: null
display_name: 王逢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ksq5YtXJ3KQ5rReQJbJe7Z
        subject_person_id: p_BBjh54oy2Rk6bDUmYwzsdA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QT3T5yypmxouwRaYiXQfEJ
          claim_id: c_ksq5YtXJ3KQ5rReQJbJe7Z
          source_id: s_Qk5vyLPAYdqUPRHCvVE4SC
          stance: supports
          locator: CBDB:146296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146296）
          source: &a1
            id: s_Qk5vyLPAYdqUPRHCvVE4SC
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 146296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146296&o=json
            external_identifier: CBDB:146296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2bsBmnZ7FaX5sh4kGs7Yu3
        subject_person_id: p_BBjh54oy2Rk6bDUmYwzsdA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JUZQMDXHNLiXrj6jt9LJB
          claim_id: c_2bsBmnZ7FaX5sh4kGs7Yu3
          source_id: s_Qk5vyLPAYdqUPRHCvVE4SC
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
        id: c_56xHT9Z3ME71WS16CqRERk
        subject_person_id: p_BBjh54oy2Rk6bDUmYwzsdA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3f3RcANjMPcp9xVFA6gKN
          claim_id: c_56xHT9Z3ME71WS16CqRERk
          source_id: s_Qk5vyLPAYdqUPRHCvVE4SC
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
        id: c_yCWhmB8SeCbt4F2qP2gtxa
        subject_person_id: p_BBjh54oy2Rk6bDUmYwzsdA
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
        - id: cs_S398jRSoMQ7FdeMCTGtvV9
          claim_id: c_yCWhmB8SeCbt4F2qP2gtxa
          source_id: s_Qk5vyLPAYdqUPRHCvVE4SC
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

# 王逢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢 | accepted |
| birth.date | 798年 | accepted |
| death.date | 854年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 146296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146296&o=json)

---
schema: wang-person/v1
id: p_cRDJuiP8f7xVGbDFru9cJH
status: active
merged_into: null
display_name: 王寶權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZJ3Lnc6kg4BYQNdJ9gKF1
        subject_person_id: p_cRDJuiP8f7xVGbDFru9cJH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qropeQ43WHb3AZLGeRT7Mp
          claim_id: c_iZJ3Lnc6kg4BYQNdJ9gKF1
          source_id: s_e5hq8sKTmzeu2ZSr9Gcjjq
          stance: supports
          locator: CBDB:71800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71800）
          source: &a1
            id: s_e5hq8sKTmzeu2ZSr9Gcjjq
            source_type: api_record
            title: 中国历代人物传记资料库：王寶權（CBDB 71800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71800&o=json
            external_identifier: CBDB:71800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rT2GC22dcxjvDB872Wqx24
        subject_person_id: p_cRDJuiP8f7xVGbDFru9cJH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRjLF5WLSHwYNpcFNqSnyP
          claim_id: c_rT2GC22dcxjvDB872Wqx24
          source_id: s_e5hq8sKTmzeu2ZSr9Gcjjq
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
        id: c_2PLZqvRJH67hPNJ2KRHg1A
        subject_person_id: p_cRDJuiP8f7xVGbDFru9cJH
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
        - id: cs_waf1X6CF6krDDSry6rPypG
          claim_id: c_2PLZqvRJH67hPNJ2KRHg1A
          source_id: s_e5hq8sKTmzeu2ZSr9Gcjjq
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

# 王寶權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶權 | accepted |
| birth.date | 1811年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶權（CBDB 71800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71800&o=json)

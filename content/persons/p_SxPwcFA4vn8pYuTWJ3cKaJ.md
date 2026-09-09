---
schema: wang-person/v1
id: p_SxPwcFA4vn8pYuTWJ3cKaJ
status: active
merged_into: null
display_name: 王瑗達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hQ7iQfsSG86c5LjWFRXvzH
        subject_person_id: p_SxPwcFA4vn8pYuTWJ3cKaJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑗達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WdP1vC4JdeDAN41rEK2WuU
          claim_id: c_hQ7iQfsSG86c5LjWFRXvzH
          source_id: s_Y7i218KrM8dKwszNJx8SNe
          stance: supports
          locator: CBDB:139056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139056）
          source: &a1
            id: s_Y7i218KrM8dKwszNJx8SNe
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗達（CBDB 139056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139056&o=json
            external_identifier: CBDB:139056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1j5LPWbNT9P4t3KBPctdcD
        subject_person_id: p_SxPwcFA4vn8pYuTWJ3cKaJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 579年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cyyFUstPJwEGWcTA1wpdSa
          claim_id: c_1j5LPWbNT9P4t3KBPctdcD
          source_id: s_Y7i218KrM8dKwszNJx8SNe
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
        id: c_A6K4KfvpCxUKWHWAiNTY2y
        subject_person_id: p_SxPwcFA4vn8pYuTWJ3cKaJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 650年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fig8NZsoRHVXQuvNg4Ryc1
          claim_id: c_A6K4KfvpCxUKWHWAiNTY2y
          source_id: s_Y7i218KrM8dKwszNJx8SNe
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
        id: c_7dDrpuV3vZKsGo2v2jHKBC
        subject_person_id: p_SxPwcFA4vn8pYuTWJ3cKaJ
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
        - id: cs_TsrLYTJ3Lsb6asVm18h8qQ
          claim_id: c_7dDrpuV3vZKsGo2v2jHKBC
          source_id: s_Y7i218KrM8dKwszNJx8SNe
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

# 王瑗達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑗達 | accepted |
| birth.date | 579年 | accepted |
| death.date | 650年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑗達（CBDB 139056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139056&o=json)

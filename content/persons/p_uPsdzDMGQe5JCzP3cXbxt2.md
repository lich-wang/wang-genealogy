---
schema: wang-person/v1
id: p_uPsdzDMGQe5JCzP3cXbxt2
status: active
merged_into: null
display_name: 王智本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJ8NBHbYimDiJCQBm3g65Y
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rnMuXfzSCjzjS6mkKkX1v4
          claim_id: c_LJ8NBHbYimDiJCQBm3g65Y
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
          stance: supports
          locator: CBDB:140009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140009）
          source: &a1
            id: s_EzwbGFdDzCq8bYcu29n1sn
            source_type: api_record
            title: 中国历代人物传记资料库：王智本（CBDB 140009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140009&o=json
            external_identifier: CBDB:140009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sZg8w56H3JJRvDgAGbtyod
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgsSMhthCf979m7nzpUqfe
          claim_id: c_sZg8w56H3JJRvDgAGbtyod
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
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
        id: c_VKu5MUAsPUB2TReeJRmNhL
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmfHJVxY3hWXYoDSvV244u
          claim_id: c_VKu5MUAsPUB2TReeJRmNhL
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
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
        id: c_pZMbdCwPoV66GaZV2vjphd
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
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
        - id: cs_d5syY1xLNME5QQAhzo9LAX
          claim_id: c_pZMbdCwPoV66GaZV2vjphd
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
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

# 王智本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智本 | accepted |
| birth.date | 621年 | accepted |
| death.date | 696年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智本（CBDB 140009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140009&o=json)

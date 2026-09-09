---
schema: wang-person/v1
id: p_Nr6cC8aCSbCg3Ze1z9mwuH
status: active
merged_into: null
display_name: 王承武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BzJu4G93ChheKLrcnSQ2Vz
        subject_person_id: p_Nr6cC8aCSbCg3Ze1z9mwuH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mBp1MMR9igSGHr61uHsPry
          claim_id: c_BzJu4G93ChheKLrcnSQ2Vz
          source_id: s_8hXxzpDB1cJrywhyHo8rg9
          stance: supports
          locator: CBDB:638086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638086）
          source: &a1
            id: s_8hXxzpDB1cJrywhyHo8rg9
            source_type: api_record
            title: 中国历代人物传记资料库：王承武（CBDB 638086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638086&o=json
            external_identifier: CBDB:638086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jiJqtiFF2FCbe1YB1GcCV9
        subject_person_id: p_Nr6cC8aCSbCg3Ze1z9mwuH
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
        - id: cs_x4nKbR9Lv5P72yX4sh49bW
          claim_id: c_jiJqtiFF2FCbe1YB1GcCV9
          source_id: s_8hXxzpDB1cJrywhyHo8rg9
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

# 王承武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承武 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承武（CBDB 638086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638086&o=json)

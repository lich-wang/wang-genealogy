---
schema: wang-person/v1
id: p_MeKQfAqMJX39uSH2KCosJY
status: active
merged_into: null
display_name: 王犖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pBhyG8CCXJbw8uFr637dxD
        subject_person_id: p_MeKQfAqMJX39uSH2KCosJY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王犖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DunoQDZFqGjCBbXp8FDEQ5
          claim_id: c_pBhyG8CCXJbw8uFr637dxD
          source_id: s_QvQPPckzp9QySvf6YBgs4g
          stance: supports
          locator: CBDB:71124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71124）
          source: &a1
            id: s_QvQPPckzp9QySvf6YBgs4g
            source_type: api_record
            title: 中国历代人物传记资料库：王犖（CBDB 71124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71124&o=json
            external_identifier: CBDB:71124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ahf4d8gSNHNyAY5PzmRFHE
        subject_person_id: p_MeKQfAqMJX39uSH2KCosJY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1937年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM5GLCV4fm4knethPwxBcP
          claim_id: c_ahf4d8gSNHNyAY5PzmRFHE
          source_id: s_QvQPPckzp9QySvf6YBgs4g
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
        id: c_AhfKiAyaFEwGwHEq7697Q9
        subject_person_id: p_MeKQfAqMJX39uSH2KCosJY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4kekHy3wjPdgZPmkBtJjM
          claim_id: c_AhfKiAyaFEwGwHEq7697Q9
          source_id: s_QvQPPckzp9QySvf6YBgs4g
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

# 王犖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王犖 | accepted |
| death.date | 1937年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王犖（CBDB 71124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71124&o=json)

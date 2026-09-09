---
schema: wang-person/v1
id: p_GGoCNoVNHxmsGgT4y3whCN
status: active
merged_into: null
display_name: 王瓖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Be8EruAkwBvxQoDewya62Z
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjtpsKQNiw8F5pMvAwKRVB
          claim_id: c_Be8EruAkwBvxQoDewya62Z
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
          stance: supports
          locator: CBDB:338696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338696）
          source: &a1
            id: s_EL4fQCRvvTPQL9bSP48vVV
            source_type: api_record
            title: 中国历代人物传记资料库：王瓖（CBDB 338696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338696&o=json
            external_identifier: CBDB:338696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vY3S6c9VvvdQVBDBjiW5JR
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1erUPtikh8B6jftzgnjB1
          claim_id: c_vY3S6c9VvvdQVBDBjiW5JR
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
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
        id: c_sKn7grDA8okuLPZUyo86cP
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zSyENJk5D8KpLQGvD431cU
          claim_id: c_sKn7grDA8okuLPZUyo86cP
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
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

# 王瓖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓖 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓖（CBDB 338696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338696&o=json)

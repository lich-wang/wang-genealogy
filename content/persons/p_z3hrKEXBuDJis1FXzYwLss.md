---
schema: wang-person/v1
id: p_z3hrKEXBuDJis1FXzYwLss
status: active
merged_into: null
display_name: 王自强
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZyRa5Fb3SDAQ2sGuG5wxhK
        subject_person_id: p_z3hrKEXBuDJis1FXzYwLss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自强
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JdavjzQd2KEKfPWe5aFEaY
          claim_id: c_ZyRa5Fb3SDAQ2sGuG5wxhK
          source_id: s_CYmQfgvwPxRhzg4vFiQ7p9
          stance: supports
          locator: CBDB:415317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415317）
          source: &a1
            id: s_CYmQfgvwPxRhzg4vFiQ7p9
            source_type: api_record
            title: 中国历代人物传记资料库：王自强（CBDB 415317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415317&o=json
            external_identifier: CBDB:415317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w19T8iFhDWfPGSEigbw5ZL
        subject_person_id: p_z3hrKEXBuDJis1FXzYwLss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4FFVZktUpSMTzTG7ZvXrb
          claim_id: c_w19T8iFhDWfPGSEigbw5ZL
          source_id: s_CYmQfgvwPxRhzg4vFiQ7p9
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

# 王自强

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自强 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自强（CBDB 415317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415317&o=json)

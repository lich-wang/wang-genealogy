---
schema: wang-person/v1
id: p_TFDmYcCS6M2LRroQsEjCeQ
status: active
merged_into: null
display_name: 王宏道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBDipws51nveqnM8NmGGTY
        subject_person_id: p_TFDmYcCS6M2LRroQsEjCeQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8xJi3zVzJ8TZALkhK8sXEf
          claim_id: c_VBDipws51nveqnM8NmGGTY
          source_id: s_sZN7vWJxgCLcsYVdui9cNT
          stance: supports
          locator: CBDB:454644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454644）
          source: &a1
            id: s_sZN7vWJxgCLcsYVdui9cNT
            source_type: api_record
            title: 中国历代人物传记资料库：王宏道（CBDB 454644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454644&o=json
            external_identifier: CBDB:454644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bYD62ZAPgwAJxpDibwJpvt
        subject_person_id: p_TFDmYcCS6M2LRroQsEjCeQ
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
        - id: cs_sbvdrL5ufSFmuze7PEx7Ns
          claim_id: c_bYD62ZAPgwAJxpDibwJpvt
          source_id: s_sZN7vWJxgCLcsYVdui9cNT
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

# 王宏道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏道 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏道（CBDB 454644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454644&o=json)

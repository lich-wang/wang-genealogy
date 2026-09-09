---
schema: wang-person/v1
id: p_Csuj2QJTqrd7Y5GjeQoGyb
status: active
merged_into: null
display_name: 王兆偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ctayaqiU6UQt52VreS4CF6
        subject_person_id: p_Csuj2QJTqrd7Y5GjeQoGyb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kKUp2R77YEr2cLDeV6yMsg
          claim_id: c_ctayaqiU6UQt52VreS4CF6
          source_id: s_B23JjFrWHwBTmHCobfkz5H
          stance: supports
          locator: CBDB:574145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574145）
          source: &a1
            id: s_B23JjFrWHwBTmHCobfkz5H
            source_type: api_record
            title: 中国历代人物传记资料库：王兆偉（CBDB 574145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574145&o=json
            external_identifier: CBDB:574145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t64V1VcoUzze4KDtYAwnZE
        subject_person_id: p_Csuj2QJTqrd7Y5GjeQoGyb
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
        - id: cs_DcrqUL3ZbRCBLKKVDJ29ed
          claim_id: c_t64V1VcoUzze4KDtYAwnZE
          source_id: s_B23JjFrWHwBTmHCobfkz5H
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

# 王兆偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆偉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆偉（CBDB 574145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574145&o=json)

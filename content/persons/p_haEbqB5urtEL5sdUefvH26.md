---
schema: wang-person/v1
id: p_haEbqB5urtEL5sdUefvH26
status: active
merged_into: null
display_name: 王嘉宴
cbdb_id: 414094
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZtaN54vQjpcGp9ErQ4z3Eh
        subject_person_id: p_haEbqB5urtEL5sdUefvH26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉宴，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uwAldM_h88gvrHTv3vrRbZ
          claim_id: c_ZtaN54vQjpcGp9ErQ4z3Eh
          source_id: s_Ca7DyCvhkY53CnQ7kKWzL6
          stance: supports
          locator: CBDB:414094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ca7DyCvhkY53CnQ7kKWzL6
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉宴（CBDB 414094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414094&o=json
            external_identifier: CBDB:414094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:28.654Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBDAXEoxomPHmKyQ7DPe8r
        subject_person_id: p_haEbqB5urtEL5sdUefvH26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉宴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WvKSUsMSiA44vZJHE1cTr8
          claim_id: c_SBDAXEoxomPHmKyQ7DPe8r
          source_id: s_Ca7DyCvhkY53CnQ7kKWzL6
          stance: supports
          locator: CBDB:414094
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5201-5300）｜历史性依据：CBDB 朝代 = 明
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

# 王嘉宴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉宴，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414094） | accepted |
| name.primary | 王嘉宴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉宴（CBDB 414094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414094&o=json)

---
schema: wang-person/v1
id: p_PETdD8Jz2DJR4mSmHcNTrv
status: active
merged_into: null
display_name: 王仲舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BfJTNFY35TQe5oGPg5wZF
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EM3acQohe9RJsHnrvybKPP
          claim_id: c_1BfJTNFY35TQe5oGPg5wZF
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
          stance: supports
          locator: CBDB:10337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10337）
          source: &a1
            id: s_Uuj1nLRNJwBg8b5b2msGq7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲舉（CBDB 10337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json
            external_identifier: CBDB:10337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h38tyy6Kbdge2Lb6XStoSH
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i469Ao5289wz1GZbEQtgtB
          claim_id: c_h38tyy6Kbdge2Lb6XStoSH
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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
        id: c_8tFgiYMM8ooyKvLP6T17Vd
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1111年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3DNAeaVTHZ1KvMu7smPLY
          claim_id: c_8tFgiYMM8ooyKvLP6T17Vd
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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
        id: c_JVXg24G1uNC9TwmbPf6ZhH
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
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
        - id: cs_YunWB1C4rtvpgmFDdLedpv
          claim_id: c_JVXg24G1uNC9TwmbPf6ZhH
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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

# 王仲舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲舉 | accepted |
| birth.date | 1044年 | accepted |
| death.date | 1111年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲舉（CBDB 10337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json)

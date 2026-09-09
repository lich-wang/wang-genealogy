---
schema: wang-person/v1
id: p_kdHuJ4Ejc7vPnJ2rdS4eG6
status: active
merged_into: null
display_name: 王鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_35hKTFyCzGcYLb6j8Fep1A
        subject_person_id: p_kdHuJ4Ejc7vPnJ2rdS4eG6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_881EvsAVUt61bYY5Y4Betv
          claim_id: c_35hKTFyCzGcYLb6j8Fep1A
          source_id: s_ac7SKQAApqvKkTnVMZRSPJ
          stance: supports
          locator: CBDB:71102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71102）
          source: &a1
            id: s_ac7SKQAApqvKkTnVMZRSPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴（CBDB 71102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71102&o=json
            external_identifier: CBDB:71102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c4oHEi1UbQYK22PZcky93r
        subject_person_id: p_kdHuJ4Ejc7vPnJ2rdS4eG6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1716年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cs7k1DDEByk4CfGw9dKZeP
          claim_id: c_c4oHEi1UbQYK22PZcky93r
          source_id: s_ac7SKQAApqvKkTnVMZRSPJ
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
        id: c_je2tukRTJ4eGUALbEgFQck
        subject_person_id: p_kdHuJ4Ejc7vPnJ2rdS4eG6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1771年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kRDyVmUZ1ZTr4JgJzvDoTy
          claim_id: c_je2tukRTJ4eGUALbEgFQck
          source_id: s_ac7SKQAApqvKkTnVMZRSPJ
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
        id: c_iw9hLPZ7m4ADbC612SBtvH
        subject_person_id: p_kdHuJ4Ejc7vPnJ2rdS4eG6
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
        - id: cs_pphc8Wqe7e18En2nFXDYLK
          claim_id: c_iw9hLPZ7m4ADbC612SBtvH
          source_id: s_ac7SKQAApqvKkTnVMZRSPJ
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

# 王鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴 | accepted |
| birth.date | 1716年 | accepted |
| death.date | 1771年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴（CBDB 71102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71102&o=json)

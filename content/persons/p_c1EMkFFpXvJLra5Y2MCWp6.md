---
schema: wang-person/v1
id: p_c1EMkFFpXvJLra5Y2MCWp6
status: active
merged_into: null
display_name: 王逵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPb1uV74oduGfLQEQq2ui8
        subject_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uxPAoANaKUgGGrAUKYzTa2
          claim_id: c_tPb1uV74oduGfLQEQq2ui8
          source_id: s_KDsX316WevbQFjGFhDcfXS
          stance: supports
          locator: CBDB:1835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1835）
          source: &a1
            id: s_KDsX316WevbQFjGFhDcfXS
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 1835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1835&o=json
            external_identifier: CBDB:1835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_k8rM1RGApfuvbjDUzTEc61
        subject_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imGPADBR3riFk9g6hNVQaV
          claim_id: c_k8rM1RGApfuvbjDUzTEc61
          source_id: s_KDsX316WevbQFjGFhDcfXS
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
        id: c_nraFQEJ7tCN8PLiSU6QJyk
        subject_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1072年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7SAYonxAHEFKju8cCGnPN
          claim_id: c_nraFQEJ7tCN8PLiSU6QJyk
          source_id: s_KDsX316WevbQFjGFhDcfXS
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
        id: c_KUYcX1wMd3vMdQvGhpwDST
        subject_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
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
        - id: cs_UcxTs2PjWiyPKLNJ9z9EG4
          claim_id: c_KUYcX1wMd3vMdQvGhpwDST
          source_id: s_KDsX316WevbQFjGFhDcfXS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f-Rivwzu3JxsygrDlBt_qO
        subject_person_id: p_dX7u7237Hx16GA83PoAMLv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFMVeip8Wfq2QhmszORw89
          claim_id: c_f-Rivwzu3JxsygrDlBt_qO
          source_id: s_KDsX316WevbQFjGFhDcfXS
          stance: supports
          locator: CBDB 双向互证（父 王翰 ⇄ 子 王逵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_dX7u7237Hx16GA83PoAMLv
        status: active
        display_name: 王翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| birth.date | 991年 | accepted |
| death.date | 1072年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dX7u7237Hx16GA83PoAMLv | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 1835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1835&o=json)

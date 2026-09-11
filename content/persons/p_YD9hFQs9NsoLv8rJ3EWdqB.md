---
schema: wang-person/v1
id: p_YD9hFQs9NsoLv8rJ3EWdqB
status: active
merged_into: null
display_name: 王方興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JeAgZzaqWe6UpPzPfQ1jWR
        subject_person_id: p_YD9hFQs9NsoLv8rJ3EWdqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8oUYuAbEq1RboGVWpKpVSK
          claim_id: c_JeAgZzaqWe6UpPzPfQ1jWR
          source_id: s_vm6KjDuSeR3BSw6GabxcKw
          stance: supports
          locator: CBDB:175794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175794）
          source: &a1
            id: s_vm6KjDuSeR3BSw6GabxcKw
            source_type: api_record
            title: 中国历代人物传记资料库：王方興（CBDB 175794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175794&o=json
            external_identifier: CBDB:175794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_s4FTXU5drsWsEvQ5VS4DYP
        subject_person_id: p_YD9hFQs9NsoLv8rJ3EWdqB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCnzZaVnA8S7d4VBJ7vDKQ
          claim_id: c_s4FTXU5drsWsEvQ5VS4DYP
          source_id: s_vm6KjDuSeR3BSw6GabxcKw
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
        id: c_NmbNrronh3nUE9GJh2Au8S
        subject_person_id: p_YD9hFQs9NsoLv8rJ3EWdqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJPSVgGgztRaVFtSj6N93f
          claim_id: c_NmbNrronh3nUE9GJh2Au8S
          source_id: s_vm6KjDuSeR3BSw6GabxcKw
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
        id: c_5pH25_UctK7QNMwMzM5Zy7
        subject_person_id: p_qoaDe7jk8H62BEe1dH2W5h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YD9hFQs9NsoLv8rJ3EWdqB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NZ79oQoQ_ZX2-ztqOF1Yyv
          claim_id: c_5pH25_UctK7QNMwMzM5Zy7
          source_id: s_NL45qFpi3XMKLA2TCk3cPM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NL45qFpi3XMKLA2TCk3cPM
            source_type: api_record
            title: 中国历代人物传记资料库：王大鼎（CBDB 175793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json
            external_identifier: CBDB:175793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qoaDe7jk8H62BEe1dH2W5h
        status: active
        display_name: 王大鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方興 | accepted |
| death.date | 715年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoaDe7jk8H62BEe1dH2W5h | 王大鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大鼎（CBDB 175793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json)
- [中国历代人物传记资料库：王方興（CBDB 175794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175794&o=json)

---
schema: wang-person/v1
id: p_qv2pM2Ko4fdAsFixSCh9mg
status: active
merged_into: null
display_name: 王城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2R5hTA3yRUsYWE9mB7Jqep
        subject_person_id: p_qv2pM2Ko4fdAsFixSCh9mg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QjSoMZg9TdqQqaMZdcWfy
          claim_id: c_2R5hTA3yRUsYWE9mB7Jqep
          source_id: s_uGedo3B3jG89SZKTnJ5jN6
          stance: supports
          locator: CBDB:71120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71120）
          source: &a1
            id: s_uGedo3B3jG89SZKTnJ5jN6
            source_type: api_record
            title: 中国历代人物传记资料库：王城（CBDB 71120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71120&o=json
            external_identifier: CBDB:71120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QmhHyGJZoHmVuDFy9MCX7N
        subject_person_id: p_qv2pM2Ko4fdAsFixSCh9mg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1783年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45wFRdJqFTDUoFAEKidQTQ
          claim_id: c_QmhHyGJZoHmVuDFy9MCX7N
          source_id: s_uGedo3B3jG89SZKTnJ5jN6
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
        id: c_dUESkxUmKqNFzc1NQj1969
        subject_person_id: p_qv2pM2Ko4fdAsFixSCh9mg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4uxukd2y5gTi1YRwkar6H
          claim_id: c_dUESkxUmKqNFzc1NQj1969
          source_id: s_uGedo3B3jG89SZKTnJ5jN6
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
        id: c_Nt8dqePAPpxRDP3TpjtwKP
        subject_person_id: p_qv2pM2Ko4fdAsFixSCh9mg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王城（1783年—1842年），清人物。籍贯全椒。（中国历代人物传记资料库 CBDB 71120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uCCV3z3oskc_2fRBV4WBZH
          claim_id: c_Nt8dqePAPpxRDP3TpjtwKP
          source_id: s_uGedo3B3jG89SZKTnJ5jN6
          stance: supports
          locator: CBDB:71120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王城 | accepted |
| birth.date | 1783年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | 王城（1783年—1842年），清人物。籍贯全椒。（中国历代人物传记资料库 CBDB 71120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王城（CBDB 71120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71120&o=json)

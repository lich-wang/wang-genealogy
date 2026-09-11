---
schema: wang-person/v1
id: p_7VtVn2P2atR33u6A8tLqwk
status: active
merged_into: null
display_name: 王諫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4EiiEQZ24SjBXGt5FzeZ5
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nv7A33fb6SBqpqzoN3p3Lv
          claim_id: c_p4EiiEQZ24SjBXGt5FzeZ5
          source_id: s_ySTBPaG87sVmqDwANNnyuC
          stance: supports
          locator: CBDB:169123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169123）
          source: &a1
            id: s_ySTBPaG87sVmqDwANNnyuC
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 169123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169123&o=json
            external_identifier: CBDB:169123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8otFfKjx2w3RnmCGGrwFwj
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 795年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKjyvJF5pmpE31axVWS2Wp
          claim_id: c_8otFfKjx2w3RnmCGGrwFwj
          source_id: s_ySTBPaG87sVmqDwANNnyuC
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
        id: c_PZWbXvGtCWZFdv1FGmTp14
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫（卒于795年），唐人物。籍贯豐州，曾任縣令。（中国历代人物传记资料库 CBDB 169123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aLR9NxcImBtZJSkd_gQt_r
          claim_id: c_PZWbXvGtCWZFdv1FGmTp14
          source_id: s_ySTBPaG87sVmqDwANNnyuC
          stance: supports
          locator: CBDB:169123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-7__zDgOq_v7XCAvjXybeK
        subject_person_id: p_325jrH1EFBwtWtCAmLwe3Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7VtVn2P2atR33u6A8tLqwk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3CtAqjQ1lK7Vd3sQvD88T
          claim_id: c_-7__zDgOq_v7XCAvjXybeK
          source_id: s_yVbFtp7bN2erQWjpqugKKd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yVbFtp7bN2erQWjpqugKKd
            source_type: api_record
            title: 中国历代人物传记资料库：王元愛（CBDB 169657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169657&o=json
            external_identifier: CBDB:169657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_325jrH1EFBwtWtCAmLwe3Z
        status: active
        display_name: 王元愛
        merged_into_person_id: null
  children:
    - claim:
        id: c_q-CDFO1caHBZUI0W3Epc5y
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_meEJMsmnSyJgXvxdt3zvHa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SPIcilPciteO77lTd0iKs
          claim_id: c_q-CDFO1caHBZUI0W3Epc5y
          source_id: s_TDk5jVoLtbDiipRDH6amS1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TDk5jVoLtbDiipRDH6amS1
            source_type: api_record
            title: 中国历代人物传记资料库：王逆修（CBDB 145292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json
            external_identifier: CBDB:145292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_meEJMsmnSyJgXvxdt3zvHa
        status: active
        display_name: 王逆修
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| death.date | 795年 | accepted |
| bio.summary | 王諫（卒于795年），唐人物。籍贯豐州，曾任縣令。（中国历代人物传记资料库 CBDB 169123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_325jrH1EFBwtWtCAmLwe3Z | 王元愛 | accepted |
| children | p_meEJMsmnSyJgXvxdt3zvHa | 王逆修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 169123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169123&o=json)
- [中国历代人物传记资料库：王逆修（CBDB 145292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145292&o=json)
- [中国历代人物传记资料库：王元愛（CBDB 169657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169657&o=json)

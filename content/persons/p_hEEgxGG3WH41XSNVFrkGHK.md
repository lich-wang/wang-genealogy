---
schema: wang-person/v1
id: p_hEEgxGG3WH41XSNVFrkGHK
status: active
merged_into: null
display_name: 王嘉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiZT8HiEsETZdTaFAUwf3Y
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6XM1n249gbWKpg2tdJ45pb
          claim_id: c_AiZT8HiEsETZdTaFAUwf3Y
          source_id: s_qPExyUBvjHvmEQNgrGjZuD
          stance: supports
          locator: CBDB:140127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140127）
          source: &a1
            id: s_qPExyUBvjHvmEQNgrGjZuD
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 140127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140127&o=json
            external_identifier: CBDB:140127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yh21qsusiXFDQq34U1qhcQ
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 622年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JvSdca5oEqMc5ARjpDgaCd
          claim_id: c_yh21qsusiXFDQq34U1qhcQ
          source_id: s_qPExyUBvjHvmEQNgrGjZuD
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
        id: c_Bb2FVse1eQQDDQ38w2EHi1
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 682年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xogd1nbz1BdmaWSdEtKMc
          claim_id: c_Bb2FVse1eQQDDQ38w2EHi1
          source_id: s_qPExyUBvjHvmEQNgrGjZuD
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
        id: c_UtnevdN4MjuC8oo3nSuU8Y
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
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
        - id: cs_7YqG8S2ijnhzXC7XDZCpgm
          claim_id: c_UtnevdN4MjuC8oo3nSuU8Y
          source_id: s_qPExyUBvjHvmEQNgrGjZuD
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
        id: c_rjx-glpEZ3m7FeS0AJ3CWg
        subject_person_id: p_fWQug9xQCTzMH5DTZi3S5g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lWMF0xRRRPaECBx5HzqpG7
          claim_id: c_rjx-glpEZ3m7FeS0AJ3CWg
          source_id: s_NqFzz14dQFJFJ1bhKZxhCw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 22：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NqFzz14dQFJFJ1bhKZxhCw
            source_type: api_record
            title: 中国历代人物传记资料库：王僧（CBDB 150369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150369&o=json
            external_identifier: CBDB:150369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fWQug9xQCTzMH5DTZi3S5g
        status: active
        display_name: 王僧
        merged_into_person_id: null
  children:
    - claim:
        id: c_lVZ874mWRNe-lpabDt5D11
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AQEJAxuWUw4trzxUBBnquK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Je5xknfaATRDT8A3c3BXMx
          claim_id: c_lVZ874mWRNe-lpabDt5D11
          source_id: s_T6wyxyNNeDZrUzWvifdqEB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 22：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T6wyxyNNeDZrUzWvifdqEB
            source_type: api_record
            title: 中国历代人物传记资料库：王元獎（CBDB 150371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150371&o=json
            external_identifier: CBDB:150371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AQEJAxuWUw4trzxUBBnquK
        status: active
        display_name: 王元獎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉 | accepted |
| birth.date | 622年 | accepted |
| death.date | 682年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fWQug9xQCTzMH5DTZi3S5g | 王僧 | accepted |
| children | p_AQEJAxuWUw4trzxUBBnquK | 王元獎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉（CBDB 140127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140127&o=json)
- [中国历代人物传记资料库：王僧（CBDB 150369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150369&o=json)
- [中国历代人物传记资料库：王元獎（CBDB 150371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150371&o=json)

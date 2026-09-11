---
schema: wang-person/v1
id: p_Tz7BGr7hq8U8gRrDLhMUC6
status: active
merged_into: null
display_name: 王承業
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1bN7sTuh3SG58REZJgwP4i
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcQZakPEVh4HLYkdwtSsGY
          claim_id: c_1bN7sTuh3SG58REZJgwP4i
          source_id: s_MGbE7XupRx4xaGrv4JbQBP
          stance: supports
          locator: CBDB:22235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22235）
          source: &a1
            id: s_MGbE7XupRx4xaGrv4JbQBP
            source_type: api_record
            title: 中国历代人物传记资料库：王承業（CBDB 22235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22235&o=json
            external_identifier: CBDB:22235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8FnuWr8yNoy1ATzCpFeKGA
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 886年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hDZNuFXwVAyj8nGscJBm8T
          claim_id: c_8FnuWr8yNoy1ATzCpFeKGA
          source_id: s_MGbE7XupRx4xaGrv4JbQBP
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
        id: c_EGJfCWEG4zVcs17zvhAXbr
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 962年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UeVqzTZUghvU2EBdgF9aG2
          claim_id: c_EGJfCWEG4zVcs17zvhAXbr
          source_id: s_MGbE7XupRx4xaGrv4JbQBP
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
        id: c_NxTkXoT6sKsRr6gdfZMSTN
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9svtdfgFH492juqE25w4RG
          claim_id: c_NxTkXoT6sKsRr6gdfZMSTN
          source_id: s_MGbE7XupRx4xaGrv4JbQBP
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
        id: c_pC5hzuZVoPCVQVhbMfs53H
        subject_person_id: p_adSFBxvab7wAmE72xwSTAi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jk4yuys99Qg1_ih_tFOlVi
          claim_id: c_pC5hzuZVoPCVQVhbMfs53H
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
          stance: supports
          locator: CBDB 双向互证（子 王承業 ⇄ 父 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KRJDFzK7vuQ6vTDbWQADNr
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 22234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json
            external_identifier: CBDB:22234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_adSFBxvab7wAmE72xwSTAi
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children:
    - claim:
        id: c_UGEBxCrynoJPPDTeLubsG6
        subject_person_id: p_Tz7BGr7hq8U8gRrDLhMUC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rhPMH1L1WhkkLTuAwsRNjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NstWgJ7bh3S8SOJGpY5kZ-
          claim_id: c_UGEBxCrynoJPPDTeLubsG6
          source_id: s_LM16ejXHbJU3qXmwM6mRjR
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LM16ejXHbJU3qXmwM6mRjR
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 38107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38107&o=json
            external_identifier: CBDB:38107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rhPMH1L1WhkkLTuAwsRNjt
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承業 | accepted |
| birth.date | 886年 | accepted |
| death.date | 962年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_adSFBxvab7wAmE72xwSTAi | 王珣 | accepted |
| children | p_rhPMH1L1WhkkLTuAwsRNjt | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承業（CBDB 22235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22235&o=json)
- [中国历代人物传记资料库：王信（CBDB 38107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38107&o=json)
- [中国历代人物传记资料库：王珣（CBDB 22234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json)

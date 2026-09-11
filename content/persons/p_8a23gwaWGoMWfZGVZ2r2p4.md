---
schema: wang-person/v1
id: p_8a23gwaWGoMWfZGVZ2r2p4
status: active
merged_into: null
display_name: 王郎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wVawwqS6bfy9erzyiDNEAk
        subject_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KoGCw99WE7dUzkeJ9rurLY
          claim_id: c_wVawwqS6bfy9erzyiDNEAk
          source_id: s_ELhxQGiRV46JkMokkuSyyN
          stance: supports
          locator: CBDB:139689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139689）
          source: &a1
            id: s_ELhxQGiRV46JkMokkuSyyN
            source_type: api_record
            title: 中国历代人物传记资料库：王郎（CBDB 139689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139689&o=json
            external_identifier: CBDB:139689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wvMFaN8fZEakAXN4K6B385
        subject_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 605年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnY7rTEXwL2qCzoxUTDqNJ
          claim_id: c_wvMFaN8fZEakAXN4K6B385
          source_id: s_ELhxQGiRV46JkMokkuSyyN
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
        id: c_4AXPNZqqWcyu83ZszcpyJc
        subject_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKxVCApDmtacBiQfMPgkK4
          claim_id: c_4AXPNZqqWcyu83ZszcpyJc
          source_id: s_ELhxQGiRV46JkMokkuSyyN
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
        id: c_7RPY5UrA1PuFFJT9oWsB55
        subject_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
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
        - id: cs_i5dqW62U4hSoGFfKMTufia
          claim_id: c_7RPY5UrA1PuFFJT9oWsB55
          source_id: s_ELhxQGiRV46JkMokkuSyyN
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
        id: c_MCbIz1yNWq8AAa_wfbYj79
        subject_person_id: p_bqziQixDk7cRhyVnUP2TRf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8a23gwaWGoMWfZGVZ2r2p4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1EtNsoF82rvGpDdB6Y1nhN
          claim_id: c_MCbIz1yNWq8AAa_wfbYj79
          source_id: s_ELhxQGiRV46JkMokkuSyyN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 112：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bqziQixDk7cRhyVnUP2TRf
        status: active
        display_name: 王伽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郎 | accepted |
| birth.date | 605年 | accepted |
| death.date | 674年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bqziQixDk7cRhyVnUP2TRf | 王伽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郎（CBDB 139689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139689&o=json)

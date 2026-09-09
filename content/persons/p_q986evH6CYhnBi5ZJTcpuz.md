---
schema: wang-person/v1
id: p_q986evH6CYhnBi5ZJTcpuz
status: active
merged_into: null
display_name: 王元宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7jGo3eQpyrVSdEgiY9DC6
        subject_person_id: p_q986evH6CYhnBi5ZJTcpuz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mnAyzEGsRHuFBkSeQm2PBK
          claim_id: c_s7jGo3eQpyrVSdEgiY9DC6
          source_id: s_fwWxxg7nmvHekiTnw75mEM
          stance: supports
          locator: CBDB:31161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（31161）
          source: &a1
            id: s_fwWxxg7nmvHekiTnw75mEM
            source_type: api_record
            title: 中国历代人物传记资料库：王元宗（CBDB 31161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31161&o=json
            external_identifier: CBDB:31161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UWwgc8415G24n16SVMf9AZ
        subject_person_id: p_q986evH6CYhnBi5ZJTcpuz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9RkmckRL4th6tPG8Cm8op
          claim_id: c_UWwgc8415G24n16SVMf9AZ
          source_id: s_fwWxxg7nmvHekiTnw75mEM
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
        id: c_hFQXhRABpNkv45vaUFQ75Q
        subject_person_id: p_q986evH6CYhnBi5ZJTcpuz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 686年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRdJKbq14B9fPZ4DFo1xMK
          claim_id: c_hFQXhRABpNkv45vaUFQ75Q
          source_id: s_fwWxxg7nmvHekiTnw75mEM
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
        id: c_qScA78BGkW9wRZ59HHgez8
        subject_person_id: p_q986evH6CYhnBi5ZJTcpuz
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
        - id: cs_vCBK1BEfPb1cK9EMFzGyr4
          claim_id: c_qScA78BGkW9wRZ59HHgez8
          source_id: s_fwWxxg7nmvHekiTnw75mEM
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

# 王元宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元宗 | accepted |
| birth.date | 632年 | accepted |
| death.date | 686年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元宗（CBDB 31161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31161&o=json)

---
schema: wang-person/v1
id: p_1dDUfoPDrypfyq5dfHhY4C
status: active
merged_into: null
display_name: 王瓊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8oNDcTB3BPfnZV92FpNGTF
        subject_person_id: p_1dDUfoPDrypfyq5dfHhY4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvGT7KSQdc6suzcuGPZ9Mu
          claim_id: c_8oNDcTB3BPfnZV92FpNGTF
          source_id: s_a9vSz1MjkqPiQmABf9Hk5s
          stance: supports
          locator: CBDB:192978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192978）
          source: &a1
            id: s_a9vSz1MjkqPiQmABf9Hk5s
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 192978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192978&o=json
            external_identifier: CBDB:192978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RmDt5GYrtwPCdmDpieWJ87
        subject_person_id: p_1dDUfoPDrypfyq5dfHhY4C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvi8uiRQ6EHdSmMr7EnfVB
          claim_id: c_RmDt5GYrtwPCdmDpieWJ87
          source_id: s_a9vSz1MjkqPiQmABf9Hk5s
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
        id: c_isDQKM1pHWCzzvrv7VttpD
        subject_person_id: p_1dDUfoPDrypfyq5dfHhY4C
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
        - id: cs_FYfZ9YCL32LYfwUXsoQySs
          claim_id: c_isDQKM1pHWCzzvrv7VttpD
          source_id: s_a9vSz1MjkqPiQmABf9Hk5s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6Y12giYrsZ7XA4hqqwOJx8
        subject_person_id: p_1dDUfoPDrypfyq5dfHhY4C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFHd1HePcZxzPPEmJtTsvn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1oa40zo2uv3lJS9bJWsOj
          claim_id: c_6Y12giYrsZ7XA4hqqwOJx8
          source_id: s_a9vSz1MjkqPiQmABf9Hk5s
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 32812：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VFHd1HePcZxzPPEmJtTsvn
        status: active
        display_name: 王洪簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| death.date | 690年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VFHd1HePcZxzPPEmJtTsvn | 王洪簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 192978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192978&o=json)

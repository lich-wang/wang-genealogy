---
schema: wang-person/v1
id: p_vbEaTwSyS6JEzGzTU5DQPA
status: active
merged_into: null
display_name: 王涯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7o22wY3PHQ6J3SKh2A6KTQ
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ykQPFnz4cyBk8XMgYQbib4
          claim_id: c_7o22wY3PHQ6J3SKh2A6KTQ
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: CBDB:92079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92079）
          source: &a1
            id: s_L31EN7QNzNJZ5r69x7mKXJ
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 92079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json
            external_identifier: CBDB:92079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qGEAw3nGwVEYpiMPfMSt7K
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BiwCJh6UPTkoRC62Hy38HL
          claim_id: c_qGEAw3nGwVEYpiMPfMSt7K
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
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
        id: c_keM5v8uQnT3yi3CSMvoHLD
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_chAHXH5yAvBZ76FmXVUe3c
          claim_id: c_keM5v8uQnT3yi3CSMvoHLD
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
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
        id: c_vJQ9Dak2mcpNJYQW1PN76X
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
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
        - id: cs_Qv3SizwF5vDDLiT6nT9LK1
          claim_id: c_vJQ9Dak2mcpNJYQW1PN76X
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
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
        id: c_sOvmfuzb-1i9bh6CvbUw7o
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bGvdwylByoe5ePtd4_1-A
          claim_id: c_sOvmfuzb-1i9bh6CvbUw7o
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8jSpcxrGiAGkwV96Q4xB8
        status: active
        display_name: 王晃
        merged_into_person_id: null
  children:
    - claim:
        id: c_zHQC-iXDY1zA1qOG3YnEBA
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqtofWaqSAEqVZFFEQFzEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb3RRIy663EcTt4p58tUUh
          claim_id: c_zHQC-iXDY1zA1qOG3YnEBA
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bqtofWaqSAEqVZFFEQFzEG
        status: active
        display_name: 王孟堅
        merged_into_person_id: null
    - claim:
        id: c_5qd4lDo8XJqvQtyGDoaeXQ
        subject_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S41CzKZany2BrX6FG1HHPQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zyYTcVUewRkPEwrBSRBepL
          claim_id: c_5qd4lDo8XJqvQtyGDoaeXQ
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S41CzKZany2BrX6FG1HHPQ
        status: active
        display_name: 王仲翔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涯 | accepted |
| birth.date | 763年 | accepted |
| death.date | 835年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E8jSpcxrGiAGkwV96Q4xB8 | 王晃 | accepted |
| children | p_bqtofWaqSAEqVZFFEQFzEG | 王孟堅 | accepted |
| children | p_S41CzKZany2BrX6FG1HHPQ | 王仲翔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王涯（CBDB 92079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json)

---
schema: wang-person/v1
id: p_9kLQ4yExp5H3DYCSBGreYy
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gtkGFSLL5qiAy1h8u33CCT
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UC4jLLNF7oUWyRH1JeLn12
          claim_id: c_gtkGFSLL5qiAy1h8u33CCT
          source_id: s_wDscmwezuKNvM97CmriQPE
          stance: supports
          locator: CBDB:145967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145967）
          source: &a1
            id: s_wDscmwezuKNvM97CmriQPE
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 145967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145967&o=json
            external_identifier: CBDB:145967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Sb5TXL6EWkEUqgr8bePQzg
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
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
        - id: cs_ZAZDEXVzVq3KC64dKd4VKk
          claim_id: c_Sb5TXL6EWkEUqgr8bePQzg
          source_id: s_wDscmwezuKNvM97CmriQPE
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
        id: c_55L2fbqcMgs7PP9KDJfUqV
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSPiZc3Bk27LBysFwNNt3N
          claim_id: c_55L2fbqcMgs7PP9KDJfUqV
          source_id: s_wDscmwezuKNvM97CmriQPE
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
        id: c_UH6ufrRXMPdecm9NGECapD
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成（763年—843年），唐人物。籍贯潞州，曾任州刺史。（中国历代人物传记资料库 CBDB 145967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPaAO0HU_Iyk77ygQJvuV1
          claim_id: c_UH6ufrRXMPdecm9NGECapD
          source_id: s_wDscmwezuKNvM97CmriQPE
          stance: supports
          locator: CBDB:145967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_av_DasqiAHT3KKVC7Jk9o6
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AW1UnMKkChx9rCs5vC2waN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqjadcP12vH8DzpesnTvf1
          claim_id: c_av_DasqiAHT3KKVC7Jk9o6
          source_id: s_wDscmwezuKNvM97CmriQPE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AW1UnMKkChx9rCs5vC2waN
        status: active
        display_name: 王山
        merged_into_person_id: null
    - claim:
        id: c_-_PRlKn0H822pPnAmjenjF
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tF9626TcFf87wu7nRHmwZL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rgQ7IHNGfvmXS-hX7_a7qs
          claim_id: c_-_PRlKn0H822pPnAmjenjF
          source_id: s_wDscmwezuKNvM97CmriQPE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tF9626TcFf87wu7nRHmwZL
        status: active
        display_name: 王秀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| birth.date | 763年 | accepted |
| death.date | 843年 | accepted |
| bio.summary | 王成（763年—843年），唐人物。籍贯潞州，曾任州刺史。（中国历代人物传记资料库 CBDB 145967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AW1UnMKkChx9rCs5vC2waN | 王山 | accepted |
| children | p_tF9626TcFf87wu7nRHmwZL | 王秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 145967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145967&o=json)

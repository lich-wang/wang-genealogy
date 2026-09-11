---
schema: wang-person/v1
id: p_zCynFmee7tr2Rik4nbjkK7
status: active
merged_into: null
display_name: 王宥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hrL2N7YJw4UMAYN41zVpJo
        subject_person_id: p_zCynFmee7tr2Rik4nbjkK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NhLBUK4PgsFNevobHrKDUM
          claim_id: c_hrL2N7YJw4UMAYN41zVpJo
          source_id: s_YJjLE2cDfu3DDjD9LFgqHZ
          stance: supports
          locator: CBDB:175943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175943）
          source: &a1
            id: s_YJjLE2cDfu3DDjD9LFgqHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 175943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175943&o=json
            external_identifier: CBDB:175943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9FosZNVJGNGffJLTNJggmV
        subject_person_id: p_zCynFmee7tr2Rik4nbjkK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkmGMkRDVChecTxz6Rk14T
          claim_id: c_9FosZNVJGNGffJLTNJggmV
          source_id: s_YJjLE2cDfu3DDjD9LFgqHZ
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
        id: c_vWHmd37Cj3c37PQGZr7eQr
        subject_person_id: p_zCynFmee7tr2Rik4nbjkK7
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
        - id: cs_rBQcRvx63AgvubxSrTyFHK
          claim_id: c_vWHmd37Cj3c37PQGZr7eQr
          source_id: s_YJjLE2cDfu3DDjD9LFgqHZ
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
        id: c_Wr19yU6SKS_qclfgWnnBUR
        subject_person_id: p_9uzT9MsPAMdeGut41RiW3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zCynFmee7tr2Rik4nbjkK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sy93lSrEa5kzadQg2m5HCe
          claim_id: c_Wr19yU6SKS_qclfgWnnBUR
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaQHp5mjAHgZukLwRbkP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王易從（CBDB 92036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json
            external_identifier: CBDB:92036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9uzT9MsPAMdeGut41RiW3f
        status: active
        display_name: 王易從
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宥 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9uzT9MsPAMdeGut41RiW3f | 王易從 | accepted |

## 外部来源

- [中国历代人物传记资料库：王易從（CBDB 92036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json)
- [中国历代人物传记资料库：王宥（CBDB 175943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175943&o=json)

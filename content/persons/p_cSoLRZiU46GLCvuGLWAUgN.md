---
schema: wang-person/v1
id: p_cSoLRZiU46GLCvuGLWAUgN
status: active
merged_into: null
display_name: 王遂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vvsSFH8uDkAkj3UrsPZp3z
        subject_person_id: p_cSoLRZiU46GLCvuGLWAUgN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UWNS9NLTowUaAXtiD6PCEj
          claim_id: c_vvsSFH8uDkAkj3UrsPZp3z
          source_id: s_xkgy8v7Q99x7wbjSRtKHJ8
          stance: supports
          locator: CBDB:175860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175860）
          source: &a1
            id: s_xkgy8v7Q99x7wbjSRtKHJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 175860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175860&o=json
            external_identifier: CBDB:175860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AJuyPDizUBV17nAneiCxaA
        subject_person_id: p_cSoLRZiU46GLCvuGLWAUgN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uctHuvg6N5h8FqCbaiL9vN
          claim_id: c_AJuyPDizUBV17nAneiCxaA
          source_id: s_xkgy8v7Q99x7wbjSRtKHJ8
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
        id: c_s5pbMdLvre6zvW1jfC1Kif
        subject_person_id: p_cSoLRZiU46GLCvuGLWAUgN
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
        - id: cs_dbPvJPekN7M3PA84X3bD6v
          claim_id: c_s5pbMdLvre6zvW1jfC1Kif
          source_id: s_xkgy8v7Q99x7wbjSRtKHJ8
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
        id: c_l-TbceSt2Tvnkbxj_9F1V_
        subject_person_id: p_X6jrCw6Y7DQpEkbz1DuCWH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cSoLRZiU46GLCvuGLWAUgN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qwzqkj_d6t7fRsFbntXmu9
          claim_id: c_l-TbceSt2Tvnkbxj_9F1V_
          source_id: s_21pL2VwsaWo8U6ejWRHnnV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_21pL2VwsaWo8U6ejWRHnnV
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 33017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json
            external_identifier: CBDB:33017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_X6jrCw6Y7DQpEkbz1DuCWH
        status: active
        display_name: 王燾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| death.date | 802年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X6jrCw6Y7DQpEkbz1DuCWH | 王燾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 33017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33017&o=json)
- [中国历代人物传记资料库：王遂（CBDB 175860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175860&o=json)

---
schema: wang-person/v1
id: p_L86j9Q4bCgpGk34ZzMxQLj
status: active
merged_into: null
display_name: 王紹宗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_naBLB46t5hwtPEDqRqkBvA
        subject_person_id: p_L86j9Q4bCgpGk34ZzMxQLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2wtdYi7ZLQ4jjV6bv5SUr9
          claim_id: c_naBLB46t5hwtPEDqRqkBvA
          source_id: s_5wJRaLTveD6VYjrfNUsd3t
          stance: supports
          locator: CBDB:192941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192941）
          source: &a1
            id: s_5wJRaLTveD6VYjrfNUsd3t
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 192941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192941&o=json
            external_identifier: CBDB:192941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_b3NhLeaiD3rgEiGBdG91D2
        subject_person_id: p_L86j9Q4bCgpGk34ZzMxQLj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DEwYpHpKipkyCqtPesrZ2a
          claim_id: c_b3NhLeaiD3rgEiGBdG91D2
          source_id: s_5wJRaLTveD6VYjrfNUsd3t
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
        id: c_FoxVhhSPHgcbQVCyw748xk
        subject_person_id: p_L86j9Q4bCgpGk34ZzMxQLj
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
        - id: cs_B8GGk8Vm7QgybnYKZwfge5
          claim_id: c_FoxVhhSPHgcbQVCyw748xk
          source_id: s_5wJRaLTveD6VYjrfNUsd3t
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
        id: c_AapZNqBo9nnWKw0ulbD2Zq
        subject_person_id: p_J2pzEJGR3YLiPZfkakUuHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L86j9Q4bCgpGk34ZzMxQLj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxrbTOMgne0h-YFusbVdBs
          claim_id: c_AapZNqBo9nnWKw0ulbD2Zq
          source_id: s_GhbhvupPydLhgJjp5wKMw4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GhbhvupPydLhgJjp5wKMw4
            source_type: api_record
            title: 中国历代人物传记资料库：王進玄（CBDB 192942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192942&o=json
            external_identifier: CBDB:192942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J2pzEJGR3YLiPZfkakUuHK
        status: active
        display_name: 王進玄
        merged_into_person_id: null
  children:
    - claim:
        id: c_2p3F-EvsDe0Q87QzC0f_C6
        subject_person_id: p_L86j9Q4bCgpGk34ZzMxQLj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kqE9ZvWD1jCkShvg3cHZoF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FqfmjQhJ9R78sEwXnpnNRh
          claim_id: c_2p3F-EvsDe0Q87QzC0f_C6
          source_id: s_LVvBY1ftoawL29XGbLrKVo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LVvBY1ftoawL29XGbLrKVo
            source_type: api_record
            title: 中国历代人物传记资料库：王志堅（CBDB 192940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192940&o=json
            external_identifier: CBDB:192940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kqE9ZvWD1jCkShvg3cHZoF
        status: active
        display_name: 王志堅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹宗 | accepted |
| death.date | 811年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J2pzEJGR3YLiPZfkakUuHK | 王進玄 | accepted |
| children | p_kqE9ZvWD1jCkShvg3cHZoF | 王志堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進玄（CBDB 192942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192942&o=json)
- [中国历代人物传记资料库：王紹宗（CBDB 192941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192941&o=json)
- [中国历代人物传记资料库：王志堅（CBDB 192940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192940&o=json)

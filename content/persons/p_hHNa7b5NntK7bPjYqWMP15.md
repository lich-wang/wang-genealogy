---
schema: wang-person/v1
id: p_hHNa7b5NntK7bPjYqWMP15
status: active
merged_into: null
display_name: 王价
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n9eAiLpedB9cQ4W8kpCqnD
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z6Mx6W1Y8FogNJt6AhV69R
          claim_id: c_n9eAiLpedB9cQ4W8kpCqnD
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
          stance: supports
          locator: CBDB:203975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203975）
          source: &a1
            id: s_vizm1o5jZt3HpFKCQmVFZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 203975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203975&o=json
            external_identifier: CBDB:203975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_arM6a6XGa5xXpz1pTDCqsK
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNgEAfen6rtNAjkEdq4kU3
          claim_id: c_arM6a6XGa5xXpz1pTDCqsK
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KTK9XjuqQjEszVSK6XwCig
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDvogNGyToGDahmH8QwHFN
          claim_id: c_KTK9XjuqQjEszVSK6XwCig
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
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
        id: c_6PHghHQFn_5q76AiSeKUjI
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hHNa7b5NntK7bPjYqWMP15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaYLACXOAQIYKORsWdB52O
          claim_id: c_6PHghHQFn_5q76AiSeKUjI
          source_id: s_nCeqdEAj5sfgy96bLC2rYW
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nCeqdEAj5sfgy96bLC2rYW
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 312743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312743&o=json
            external_identifier: CBDB:312743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dDiqSoKbAEPJ32n4DP82Hn
        status: active
        display_name: 王簡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TS_c7yavqUjkVcPlOPzjxP
        subject_person_id: p_i9weoCH3RKGxuzx9VU6Bou
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hHNa7b5NntK7bPjYqWMP15
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8pj_19_zckj0Bpw1boDq9z
          claim_id: c_TS_c7yavqUjkVcPlOPzjxP
          source_id: s_Lw9w74dZuogkPDdSAGkpCE
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lw9w74dZuogkPDdSAGkpCE
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 312741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312741&o=json
            external_identifier: CBDB:312741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i9weoCH3RKGxuzx9VU6Bou
        status: active
        display_name: 王昂
        merged_into_person_id: null
    - claim:
        id: c_1MCmCQesKBd-w4zZBrOtHk
        subject_person_id: p_kcFhGz7DYsJgUPKyRCVmi4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hHNa7b5NntK7bPjYqWMP15
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vd76Zf661q4dA6knWjQNzU
          claim_id: c_1MCmCQesKBd-w4zZBrOtHk
          source_id: s_HCtc3ZoWMQG61XefEf6N1p
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HCtc3ZoWMQG61XefEf6N1p
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 312742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312742&o=json
            external_identifier: CBDB:312742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kcFhGz7DYsJgUPKyRCVmi4
        status: active
        display_name: 王縉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dDiqSoKbAEPJ32n4DP82Hn | 王簡 | accepted |
| ancestors | p_i9weoCH3RKGxuzx9VU6Bou | 王昂 | accepted |
| ancestors | p_kcFhGz7DYsJgUPKyRCVmi4 | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 312741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312741&o=json)
- [中国历代人物传记资料库：王价（CBDB 203975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203975&o=json)
- [中国历代人物传记资料库：王簡（CBDB 312743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312743&o=json)
- [中国历代人物传记资料库：王縉（CBDB 312742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312742&o=json)

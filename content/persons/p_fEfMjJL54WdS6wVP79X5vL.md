---
schema: wang-person/v1
id: p_fEfMjJL54WdS6wVP79X5vL
status: active
merged_into: null
display_name: 王時中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fp9r141xZaCeSQUpgLoRUy
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d3HcD6kkj49iTShK2eE3VW
          claim_id: c_Fp9r141xZaCeSQUpgLoRUy
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: CBDB:68328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68328）
          source: &a1
            id: s_XorrntH4J6QdzdVHhn6Fby
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_g76mNnCwKEWFrrx7UtWMGs
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1466年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oapNcdUL2Efh5UPhpJ2Kpe
          claim_id: c_g76mNnCwKEWFrrx7UtWMGs
          source_id: s_XorrntH4J6QdzdVHhn6Fby
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
        id: c_vQGZGuxnkJofvcWeHAnrDk
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsPEJQ5WA9Bm561LRuvvGc
          claim_id: c_vQGZGuxnkJofvcWeHAnrDk
          source_id: s_XorrntH4J6QdzdVHhn6Fby
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
        id: c_BTSDExNx9f9EVHvaKjQkNf
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
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
        - id: cs_sriWTZyQYdst7gMXqxKmbb
          claim_id: c_BTSDExNx9f9EVHvaKjQkNf
          source_id: s_XorrntH4J6QdzdVHhn6Fby
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
        id: c_EdR-0N5fC-b-zB6YA3ZG_v
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAle7BNTGle2qrw6mX4bnU
          claim_id: c_EdR-0N5fC-b-zB6YA3ZG_v
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children:
    - claim:
        id: c_i1p4-1x7aGVJmUi5KbLiro
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hj1aopnNq8QeV1CBAKUXuj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjuGmvsszXe0JvIkKoFOSd
          claim_id: c_i1p4-1x7aGVJmUi5KbLiro
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12000：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hj1aopnNq8QeV1CBAKUXuj
        status: active
        display_name: 王守綱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__HXweP-vRhu6pKGthQcwRl
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uDws44fZu54Eq8cAigBHGN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_33AnSivEyrJWnZLtQfbrDP
          claim_id: c__HXweP-vRhu6pKGthQcwRl
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uDws44fZu54Eq8cAigBHGN
        status: active
        display_name: 阎氏
        merged_into_person_id: null
    - claim:
        id: c_dxjnsXSyb39_c4ZMtJgsAy
        subject_person_id: p_uDws44fZu54Eq8cAigBHGN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dn7AvpB5bCecI9oF5iDeiC
          claim_id: c_dxjnsXSyb39_c4ZMtJgsAy
          source_id: s_WR4FVLexzdT5jvPbjG2tFA
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WR4FVLexzdT5jvPbjG2tFA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：閻氏（262451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262451&o=json
            external_identifier: CBDB:262451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:43.275Z
            metadata_json: null
      object_person:
        id: p_uDws44fZu54Eq8cAigBHGN
        status: active
        display_name: 阎氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4i_75Thps7XdKavR0C-n8r
        subject_person_id: p_NVLBQYa3QUnLwwY5PFFU11
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5LXURqzMiXQNWLz9eor0oo
          claim_id: c_4i_75Thps7XdKavR0C-n8r
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NVLBQYa3QUnLwwY5PFFU11
        status: active
        display_name: 王升
        merged_into_person_id: null
    - claim:
        id: c_v0A696Yjx35rH4sZ-6zrL3
        subject_person_id: p_snnHYhecDpk5HZ7B1gQ1jo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSUyfyeq39zMD3XKbDVLEl
          claim_id: c_v0A696Yjx35rH4sZ-6zrL3
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_snnHYhecDpk5HZ7B1gQ1jo
        status: active
        display_name: 王琏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時中 | accepted |
| birth.date | 1466年 | accepted |
| death.date | 1542年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| children | p_hj1aopnNq8QeV1CBAKUXuj | 王守綱 | accepted |
| spouses | p_uDws44fZu54Eq8cAigBHGN | 阎氏 | accepted |
| spouses | p_uDws44fZu54Eq8cAigBHGN | 阎氏 | accepted |
| ancestors | p_NVLBQYa3QUnLwwY5PFFU11 | 王升 | accepted |
| ancestors | p_snnHYhecDpk5HZ7B1gQ1jo | 王琏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時中（CBDB 68328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json)
- [CBDB 中国历代人物传记资料库：閻氏（262451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262451&o=json)

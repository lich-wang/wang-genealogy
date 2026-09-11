---
schema: wang-person/v1
id: p_Ge7FEkGdRYL2w8reRpexBN
status: active
merged_into: null
display_name: 王繕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ArcnhJfNysKbeenEWuNSs
        subject_person_id: p_Ge7FEkGdRYL2w8reRpexBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hNPLvuVN6MgyPofk7qChC9
          claim_id: c_9ArcnhJfNysKbeenEWuNSs
          source_id: s_eFXLCWnjE1pmP89LGYRHj2
          stance: supports
          locator: CBDB:175663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175663）
          source: &a1
            id: s_eFXLCWnjE1pmP89LGYRHj2
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 175663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175663&o=json
            external_identifier: CBDB:175663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2J9wZxpBUunn4T97G2qGaB
        subject_person_id: p_Ge7FEkGdRYL2w8reRpexBN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qLws6Awc2rE5ha1LKtnN3b
          claim_id: c_2J9wZxpBUunn4T97G2qGaB
          source_id: s_eFXLCWnjE1pmP89LGYRHj2
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
        id: c_kTNP178sXzSscEQD5fAgMF
        subject_person_id: p_Ge7FEkGdRYL2w8reRpexBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oUHRjjq1aMWEddriDgvMoY
          claim_id: c_kTNP178sXzSscEQD5fAgMF
          source_id: s_eFXLCWnjE1pmP89LGYRHj2
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
        id: c_98q4Yjufpd99xkFsxt20De
        subject_person_id: p_GKQhdXFztLtPL7bohPvpcw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ge7FEkGdRYL2w8reRpexBN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1RWFprHnqiJyuAntW8SB00
          claim_id: c_98q4Yjufpd99xkFsxt20De
          source_id: s_eFXLCWnjE1pmP89LGYRHj2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GKQhdXFztLtPL7bohPvpcw
        status: active
        display_name: 王猛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繕 | accepted |
| death.date | 589年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GKQhdXFztLtPL7bohPvpcw | 王猛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繕（CBDB 175663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175663&o=json)

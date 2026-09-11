---
schema: wang-person/v1
id: p_abn5c1tn73gUjznNrJ2LNQ
status: active
merged_into: null
display_name: 王旻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cY1AtQbYNz33RYDG5mEN8c
        subject_person_id: p_abn5c1tn73gUjznNrJ2LNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94bwFKUY9osad78rx3Spef
          claim_id: c_cY1AtQbYNz33RYDG5mEN8c
          source_id: s_WHWWEPdNPKmd9uP6e8NVey
          stance: supports
          locator: CBDB:189911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189911）
          source: &a1
            id: s_WHWWEPdNPKmd9uP6e8NVey
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 189911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189911&o=json
            external_identifier: CBDB:189911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hcw6CcnV4q9r6FeXizvJ9G
        subject_person_id: p_abn5c1tn73gUjznNrJ2LNQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 725年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MtWdAQGbvZ6zSuDuNLfaWW
          claim_id: c_hcw6CcnV4q9r6FeXizvJ9G
          source_id: s_WHWWEPdNPKmd9uP6e8NVey
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
        id: c_r6XodLGr91kRofSynRQQDY
        subject_person_id: p_abn5c1tn73gUjznNrJ2LNQ
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
        - id: cs_T2e2rthfoJqC8DRD3HcMnA
          claim_id: c_r6XodLGr91kRofSynRQQDY
          source_id: s_WHWWEPdNPKmd9uP6e8NVey
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
        id: c_SxE-zTc1iHItW8ak5wqyI9
        subject_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_abn5c1tn73gUjznNrJ2LNQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rz-uaA4SVmWgzYxK5hbxwa
          claim_id: c_SxE-zTc1iHItW8ak5wqyI9
          source_id: s_WHWWEPdNPKmd9uP6e8NVey
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PtYEMqNo3Ja6CBRf3JpwLp
        status: active
        display_name: 王希儁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旻 | accepted |
| death.date | 725年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PtYEMqNo3Ja6CBRf3JpwLp | 王希儁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旻（CBDB 189911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189911&o=json)

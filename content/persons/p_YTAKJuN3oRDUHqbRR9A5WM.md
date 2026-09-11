---
schema: wang-person/v1
id: p_YTAKJuN3oRDUHqbRR9A5WM
status: active
merged_into: null
display_name: 王崇俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1B2Y7k8BfqYmfA4HKkRBXF
        subject_person_id: p_YTAKJuN3oRDUHqbRR9A5WM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xFZgASkUgiXPoVrMjC1YVC
          claim_id: c_1B2Y7k8BfqYmfA4HKkRBXF
          source_id: s_CzQwMTXM2A4X549zAKMZF5
          stance: supports
          locator: CBDB:193686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193686）
          source: &a1
            id: s_CzQwMTXM2A4X549zAKMZF5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇俊（CBDB 193686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193686&o=json
            external_identifier: CBDB:193686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JzERjMeyr7KbtNptxosQLK
        subject_person_id: p_YTAKJuN3oRDUHqbRR9A5WM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kSEcP7wCAK1yukLxDb123c
          claim_id: c_JzERjMeyr7KbtNptxosQLK
          source_id: s_CzQwMTXM2A4X549zAKMZF5
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
        id: c_921mMSPCmwXcnLsD3B9t7P
        subject_person_id: p_YTAKJuN3oRDUHqbRR9A5WM
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
        - id: cs_968dLguXpj3ckxG6AQmpoh
          claim_id: c_921mMSPCmwXcnLsD3B9t7P
          source_id: s_CzQwMTXM2A4X549zAKMZF5
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
        id: c_RWv1bM-TFQ8iwRriJfKN3P
        subject_person_id: p_YTAKJuN3oRDUHqbRR9A5WM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NOsR4IRWphcltET9rbRA-6
          claim_id: c_RWv1bM-TFQ8iwRriJfKN3P
          source_id: s_UM1ukVpDkuGQMAD4sySHaG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UM1ukVpDkuGQMAD4sySHaG
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 145614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145614&o=json
            external_identifier: CBDB:145614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fxe5xHdxf3bKv9Cgrjj1aC
        status: active
        display_name: 王榮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇俊 | accepted |
| death.date | 774年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Fxe5xHdxf3bKv9Cgrjj1aC | 王榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 193686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193686&o=json)
- [中国历代人物传记资料库：王榮（CBDB 145614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145614&o=json)

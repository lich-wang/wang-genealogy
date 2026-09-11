---
schema: wang-person/v1
id: p_Q3pxDs2RkzbXHeFthGNeju
status: active
merged_into: null
display_name: 王文寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HH6a2w1mqx8LVLq9CCHqd8
        subject_person_id: p_Q3pxDs2RkzbXHeFthGNeju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G2ut2ncS7fAp1nJFCsEPqs
          claim_id: c_HH6a2w1mqx8LVLq9CCHqd8
          source_id: s_Sv8tQ5pTRcajDjrxKefrvQ
          stance: supports
          locator: CBDB:37997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37997）
          source: &a1
            id: s_Sv8tQ5pTRcajDjrxKefrvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文寶（CBDB 37997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37997&o=json
            external_identifier: CBDB:37997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_y1hGGWrizd8n45xYy4jVey
        subject_person_id: p_Q3pxDs2RkzbXHeFthGNeju
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SrkNECBk2qeiCoEp8U8dPF
          claim_id: c_y1hGGWrizd8n45xYy4jVey
          source_id: s_Sv8tQ5pTRcajDjrxKefrvQ
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
        id: c_xoj4EVgksdqb3C1gg3tg1y
        subject_person_id: p_Q3pxDs2RkzbXHeFthGNeju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xt7Gqd6TR51vDseLxT73ch
          claim_id: c_xoj4EVgksdqb3C1gg3tg1y
          source_id: s_Sv8tQ5pTRcajDjrxKefrvQ
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
        id: c_8lgZ6pkuSpwzH34fCYkgGL
        subject_person_id: p_WC3t7ScaDP8rdM6Bed4qDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q3pxDs2RkzbXHeFthGNeju
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPMkeKdnmDlWWTysARoxfO
          claim_id: c_8lgZ6pkuSpwzH34fCYkgGL
          source_id: s_Sv8tQ5pTRcajDjrxKefrvQ
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WC3t7ScaDP8rdM6Bed4qDQ
        status: active
        display_name: 王承美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文寶 | accepted |
| death.date | 991年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WC3t7ScaDP8rdM6Bed4qDQ | 王承美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文寶（CBDB 37997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37997&o=json)

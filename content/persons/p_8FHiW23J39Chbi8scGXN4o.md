---
schema: wang-person/v1
id: p_8FHiW23J39Chbi8scGXN4o
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1LdrEMyJziD7fzX5a3PPNP
        subject_person_id: p_8FHiW23J39Chbi8scGXN4o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_371TQEz4vf2ifw24ovBhuM
          claim_id: c_1LdrEMyJziD7fzX5a3PPNP
          source_id: s_3x6QuTDFvBJQEh1BBVxzaZ
          stance: supports
          locator: CBDB:175848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175848）
          source: &a1
            id: s_3x6QuTDFvBJQEh1BBVxzaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 175848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175848&o=json
            external_identifier: CBDB:175848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ghM5ZGBGj4fRpAEhT8jmUZ
        subject_person_id: p_8FHiW23J39Chbi8scGXN4o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 778年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EdpMMtzJYRE51RgN4jAA5u
          claim_id: c_ghM5ZGBGj4fRpAEhT8jmUZ
          source_id: s_3x6QuTDFvBJQEh1BBVxzaZ
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
        id: c_SsHfzs85qHyX9GBepvCnU2
        subject_person_id: p_8FHiW23J39Chbi8scGXN4o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼（卒于778年），唐人物。籍贯汝州，曾任丞。（中国历代人物传记资料库 CBDB 175848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_COc0fskQ4tlz_6Qh8wO5EF
          claim_id: c_SsHfzs85qHyX9GBepvCnU2
          source_id: s_3x6QuTDFvBJQEh1BBVxzaZ
          stance: supports
          locator: CBDB:175848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VAbSHG22dZ_6_Ossa8UP7o
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8FHiW23J39Chbi8scGXN4o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ0g7m2lVCup4aCYO_H6d0
          claim_id: c_VAbSHG22dZ_6_Ossa8UP7o
          source_id: s_3x6QuTDFvBJQEh1BBVxzaZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CWPBrhMiB4QhsDQzD22Bfc
        status: active
        display_name: 王美暢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| death.date | 778年 | accepted |
| bio.summary | 王弼（卒于778年），唐人物。籍贯汝州，曾任丞。（中国历代人物传记资料库 CBDB 175848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CWPBrhMiB4QhsDQzD22Bfc | 王美暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 175848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175848&o=json)

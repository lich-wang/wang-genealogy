---
schema: wang-person/v1
id: p_Z8DtSBjAEoUzy8cxQNFS2x
status: active
merged_into: null
display_name: 王縱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AyWp2PegMYLmhXuaKcL6Bv
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kYrndZHr78MN9eZRPxPkEM
          claim_id: c_AyWp2PegMYLmhXuaKcL6Bv
          source_id: s_69Gh848koGViSF4f8SDaQj
          stance: supports
          locator: CBDB:144879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144879）
          source: &a1
            id: s_69Gh848koGViSF4f8SDaQj
            source_type: api_record
            title: 中国历代人物传记资料库：王縱（CBDB 144879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json
            external_identifier: CBDB:144879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_odbj5MtHnPNzmQYAWd8BGD
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCFE7sQBmCd5p4D6qykson
          claim_id: c_odbj5MtHnPNzmQYAWd8BGD
          source_id: s_69Gh848koGViSF4f8SDaQj
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
        id: c_83nGFQu7LnYuETJ9AA62DB
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KpQdLAfAUMY9JBK99ZBtSe
          claim_id: c_83nGFQu7LnYuETJ9AA62DB
          source_id: s_69Gh848koGViSF4f8SDaQj
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
        id: c_fZvzCeNRWUMZEg6uxP18NH
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
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
        - id: cs_zjj8QZ44cwFRrdPYn4nEU1
          claim_id: c_fZvzCeNRWUMZEg6uxP18NH
          source_id: s_69Gh848koGViSF4f8SDaQj
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
        id: c_f0ttddxMM3Yu-vH1ysEyVB
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqVfzEQQc7kLt47ybSsKOA
          claim_id: c_f0ttddxMM3Yu-vH1ysEyVB
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Kh4ohyjr1CuQj4gARXkoz
            source_type: api_record
            title: 中国历代人物传记资料库：王重榮（CBDB 185355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json
            external_identifier: CBDB:185355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8WSGHAfAoQ3TLEpo8p8wJU
        status: active
        display_name: 王重榮
        merged_into_person_id: null
    - claim:
        id: c_1hCqSnYbwR-8zGDYRpGt0Z
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A9HBUiPheNuZXSzS6uKNGM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oSIoQ21Sm39xuM62YWy_Mr
          claim_id: c_1hCqSnYbwR-8zGDYRpGt0Z
          source_id: s_TqJvxYK9r8o8ewpfaMB22K
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TqJvxYK9r8o8ewpfaMB22K
            source_type: api_record
            title: 中国历代人物传记资料库：王重簡（CBDB 185353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185353&o=json
            external_identifier: CBDB:185353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A9HBUiPheNuZXSzS6uKNGM
        status: active
        display_name: 王重簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王縱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縱 | accepted |
| birth.date | 795年 | accepted |
| death.date | 862年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8WSGHAfAoQ3TLEpo8p8wJU | 王重榮 | accepted |
| children | p_A9HBUiPheNuZXSzS6uKNGM | 王重簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重簡（CBDB 185353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185353&o=json)
- [中国历代人物传记资料库：王重榮（CBDB 185355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json)
- [中国历代人物传记资料库：王縱（CBDB 144879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json)

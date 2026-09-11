---
schema: wang-person/v1
id: p_koD3spJXALD17m9fDxTHWp
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KaUvX3X79tjHvDvh7vE3cT
        subject_person_id: p_koD3spJXALD17m9fDxTHWp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ejDbDbMKc7uZo2ZzbFDNHF
          claim_id: c_KaUvX3X79tjHvDvh7vE3cT
          source_id: s_LULHVowQ3pB9wzukfem4Lb
          stance: supports
          locator: CBDB:175800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175800）
          source: &a1
            id: s_LULHVowQ3pB9wzukfem4Lb
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 175800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175800&o=json
            external_identifier: CBDB:175800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Duw29vv1XEqhJeKz6NUvZ3
        subject_person_id: p_koD3spJXALD17m9fDxTHWp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A66yoewCs1W5q2KJnk8hcq
          claim_id: c_Duw29vv1XEqhJeKz6NUvZ3
          source_id: s_LULHVowQ3pB9wzukfem4Lb
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
        id: c_HzJ4LewmffXuzBNgQe5713
        subject_person_id: p_koD3spJXALD17m9fDxTHWp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達（卒于789年），唐人物。籍贯丹徒，曾任參軍。（中国历代人物传记资料库 CBDB 175800）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WtvJrvWLtdbrR6nzYsWIqO
          claim_id: c_HzJ4LewmffXuzBNgQe5713
          source_id: s_LULHVowQ3pB9wzukfem4Lb
          stance: supports
          locator: CBDB:175800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uqiJ4-h3OgmoHYGbWJ0IEJ
        subject_person_id: p_ZDmMNcB7MedPTQbgwxH7RB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_koD3spJXALD17m9fDxTHWp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__-5dnSGXaSDi8D0N3XVvaK
          claim_id: c_uqiJ4-h3OgmoHYGbWJ0IEJ
          source_id: s_LULHVowQ3pB9wzukfem4Lb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZDmMNcB7MedPTQbgwxH7RB
        status: active
        display_name: 王鄭卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| death.date | 789年 | accepted |
| bio.summary | 王達（卒于789年），唐人物。籍贯丹徒，曾任參軍。（中国历代人物传记资料库 CBDB 175800） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZDmMNcB7MedPTQbgwxH7RB | 王鄭卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 175800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175800&o=json)

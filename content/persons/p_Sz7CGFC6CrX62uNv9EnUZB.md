---
schema: wang-person/v1
id: p_Sz7CGFC6CrX62uNv9EnUZB
status: active
merged_into: null
display_name: 王淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARAY9KSTHBH2EW3m45vkLg
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kk8c9i85QNu7HR82VVLFKe
          claim_id: c_ARAY9KSTHBH2EW3m45vkLg
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: CBDB:145483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145483）
          source: &a1
            id: s_dfkC4KJcmf7ieg5LRCZpQR
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 145483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145483&o=json
            external_identifier: CBDB:145483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M2MUoWb6RumvFGTy2pmD9q
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNcbXRCsCv8BgsKNVdRjxC
          claim_id: c_M2MUoWb6RumvFGTy2pmD9q
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
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
        id: c_G2bS2CEJdCZE9Gr4Bxnc8g
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZhbA3TujVPNnEK371oyQwD
          claim_id: c_G2bS2CEJdCZE9Gr4Bxnc8g
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
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
        id: c_XhJfzcLX45BrpaWdaHj74N
        subject_person_id: p_Sz7CGFC6CrX62uNv9EnUZB
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
        - id: cs_mYZTd2u1KoPESTqSNGFara
          claim_id: c_XhJfzcLX45BrpaWdaHj74N
          source_id: s_dfkC4KJcmf7ieg5LRCZpQR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| birth.date | 762年 | accepted |
| death.date | 800年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 145483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145483&o=json)

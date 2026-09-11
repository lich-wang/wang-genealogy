---
schema: wang-person/v1
id: p_g2qc4piXEUaM3GmzDY5nSR
status: active
merged_into: null
display_name: 王鎡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A57jxfTN8wWNxC3KjKv7aS
        subject_person_id: p_g2qc4piXEUaM3GmzDY5nSR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MhhPRt8GFGt72LpvDUTzKc
          claim_id: c_A57jxfTN8wWNxC3KjKv7aS
          source_id: s_fGjseeVZK1bTZD6WTLbY7J
          stance: supports
          locator: CBDB:175823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175823）
          source: &a1
            id: s_fGjseeVZK1bTZD6WTLbY7J
            source_type: api_record
            title: 中国历代人物传记资料库：王鎡（CBDB 175823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175823&o=json
            external_identifier: CBDB:175823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YKfRTAqwHWKooxNWF5Zouw
        subject_person_id: p_g2qc4piXEUaM3GmzDY5nSR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VCCZ48hiEsP1dKfRe7oFH7
          claim_id: c_YKfRTAqwHWKooxNWF5Zouw
          source_id: s_fGjseeVZK1bTZD6WTLbY7J
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
        id: c_NqjXLe2sNNUEPCJ1RTZq9A
        subject_person_id: p_g2qc4piXEUaM3GmzDY5nSR
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
        - id: cs_WYqdNJ7kvt6YcMBD2m3a13
          claim_id: c_NqjXLe2sNNUEPCJ1RTZq9A
          source_id: s_fGjseeVZK1bTZD6WTLbY7J
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
        id: c_LJRsXJl7mm_RzEi2p4IcfR
        subject_person_id: p_2BHkEYekoT1S8S2R49LZgW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g2qc4piXEUaM3GmzDY5nSR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5yZSsySvjWpAbOgj0L5h1
          claim_id: c_LJRsXJl7mm_RzEi2p4IcfR
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4DY5qh6wfzSJyo6PBzSVxU
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 175822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json
            external_identifier: CBDB:175822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BHkEYekoT1S8S2R49LZgW
        status: active
        display_name: 王晤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎡 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2BHkEYekoT1S8S2R49LZgW | 王晤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晤（CBDB 175822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json)
- [中国历代人物传记资料库：王鎡（CBDB 175823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175823&o=json)

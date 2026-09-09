---
schema: wang-person/v1
id: p_Y8d1ZqFP3JJLyjCBSMWV59
status: active
merged_into: null
display_name: 王詠霓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_128qJGw3Nn9ndt2a5D9wiA
        subject_person_id: p_Y8d1ZqFP3JJLyjCBSMWV59
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠霓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5KrP23PACi6fmMLXGZsxEJ
          claim_id: c_128qJGw3Nn9ndt2a5D9wiA
          source_id: s_X2rpLYbJcyaKZVi2kpsDx2
          stance: supports
          locator: CBDB:71770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71770）
          source: &a1
            id: s_X2rpLYbJcyaKZVi2kpsDx2
            source_type: api_record
            title: 中国历代人物传记资料库：王詠霓（CBDB 71770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71770&o=json
            external_identifier: CBDB:71770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WzsiyuBqE6CsEtnJ4N2zgK
        subject_person_id: p_Y8d1ZqFP3JJLyjCBSMWV59
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpCugDSPD8E6tfLteCJdne
          claim_id: c_WzsiyuBqE6CsEtnJ4N2zgK
          source_id: s_X2rpLYbJcyaKZVi2kpsDx2
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
        id: c_Dck6YACap3g2xCMXPH134Q
        subject_person_id: p_Y8d1ZqFP3JJLyjCBSMWV59
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1915年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUEUgTvPHnTimJHZLu1795
          claim_id: c_Dck6YACap3g2xCMXPH134Q
          source_id: s_X2rpLYbJcyaKZVi2kpsDx2
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
        id: c_GfyjtJwCyksBBok53XC9Bg
        subject_person_id: p_Y8d1ZqFP3JJLyjCBSMWV59
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW41dTpUHAxYiuKHHHH5FZ
          claim_id: c_GfyjtJwCyksBBok53XC9Bg
          source_id: s_X2rpLYbJcyaKZVi2kpsDx2
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

# 王詠霓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠霓 | accepted |
| birth.date | 1838年 | accepted |
| death.date | 1915年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詠霓（CBDB 71770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71770&o=json)

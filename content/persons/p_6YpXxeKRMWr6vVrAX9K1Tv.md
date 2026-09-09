---
schema: wang-person/v1
id: p_6YpXxeKRMWr6vVrAX9K1Tv
status: active
merged_into: null
display_name: 王婉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wvU3arYXhd1Mpa2kFyo8fp
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cykfy6GU119yzmgbAyU5YE
          claim_id: c_wvU3arYXhd1Mpa2kFyo8fp
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: CBDB:142690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142690）
          source: &a1
            id: s_KFkS5hiMaGh1959L5ARJrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 142690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json
            external_identifier: CBDB:142690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CqnQ7vhnCW1REbqfPR68Vg
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 604年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t8by25HJi7HrfF8cuYmjyA
          claim_id: c_CqnQ7vhnCW1REbqfPR68Vg
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
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
        id: c_o5d3br9FPJSUTLS3cmdqkt
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 682年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2A2y3QXzENh9CypgvGs56P
          claim_id: c_o5d3br9FPJSUTLS3cmdqkt
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
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
        id: c_aCBojdNKNHnRn3LPgGQf26
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
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
        - id: cs_km4RNfLAvC1jhxHDM5nGdc
          claim_id: c_aCBojdNKNHnRn3LPgGQf26
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
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

# 王婉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王婉 | accepted |
| birth.date | 604年 | accepted |
| death.date | 682年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王婉（CBDB 142690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json)

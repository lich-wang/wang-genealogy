---
schema: wang-person/v1
id: p_B66dkqwmxQnHimr8zprK22
status: active
merged_into: null
display_name: 王固廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yQiARusJw4Yzf9mmDq2qfA
        subject_person_id: p_B66dkqwmxQnHimr8zprK22
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u67fFp68Mtb435yj29XVqK
          claim_id: c_yQiARusJw4Yzf9mmDq2qfA
          source_id: s_fVNQy9cm36mtpqwEmM7XRn
          stance: supports
          locator: CBDB:175657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175657）
          source: &a1
            id: s_fVNQy9cm36mtpqwEmM7XRn
            source_type: api_record
            title: 中国历代人物传记资料库：王固廉（CBDB 175657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175657&o=json
            external_identifier: CBDB:175657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_39FSFR6aFtiMs3vZm4vRSe
        subject_person_id: p_B66dkqwmxQnHimr8zprK22
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jJCMC4A7KRkGuJw3TMDt1
          claim_id: c_39FSFR6aFtiMs3vZm4vRSe
          source_id: s_fVNQy9cm36mtpqwEmM7XRn
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
        id: c_8kUpwRpN6vRJA9CkgMnRqD
        subject_person_id: p_B66dkqwmxQnHimr8zprK22
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
        - id: cs_s2M6VYTE2wmAW8g1G1VzP3
          claim_id: c_8kUpwRpN6vRJA9CkgMnRqD
          source_id: s_fVNQy9cm36mtpqwEmM7XRn
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
        id: c_9s1BZ4psrByol7hy8mt5D9
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B66dkqwmxQnHimr8zprK22
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kVA3RgPEtt5DG0rAoQfetG
          claim_id: c_9s1BZ4psrByol7hy8mt5D9
          source_id: s_fVNQy9cm36mtpqwEmM7XRn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4EU5hab5MGo71FXwq1jBL2
        status: active
        display_name: 王方智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王固廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固廉 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EU5hab5MGo71FXwq1jBL2 | 王方智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固廉（CBDB 175657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175657&o=json)

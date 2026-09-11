---
schema: wang-person/v1
id: p_1W7FNDdsQGT7uB5yfT8rU3
status: active
merged_into: null
display_name: 王鳳祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VCoHATx7LzkXEpeGKsTurz
        subject_person_id: p_1W7FNDdsQGT7uB5yfT8rU3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xzHFCZXxgAYfLH6aamYFUN
          claim_id: c_VCoHATx7LzkXEpeGKsTurz
          source_id: s_YrjhKLs6Kc3LXGchPmieEf
          stance: supports
          locator: CBDB:69418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69418）
          source: &a1
            id: s_YrjhKLs6Kc3LXGchPmieEf
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳祥（CBDB 69418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69418&o=json
            external_identifier: CBDB:69418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QAMKYr2FhATVB1rueAgws3
        subject_person_id: p_1W7FNDdsQGT7uB5yfT8rU3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cRt4VTkgWiXv6zzAutfvtU
          claim_id: c_QAMKYr2FhATVB1rueAgws3
          source_id: s_YrjhKLs6Kc3LXGchPmieEf
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
        id: c_dDJxkpNMQe3zqq8FGD4VXX
        subject_person_id: p_1W7FNDdsQGT7uB5yfT8rU3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGCAHBwxA81zKrSGWHERCo
          claim_id: c_dDJxkpNMQe3zqq8FGD4VXX
          source_id: s_YrjhKLs6Kc3LXGchPmieEf
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
        id: c_00tVqZG-f-KMBPRTMxkYNg
        subject_person_id: p_1W7FNDdsQGT7uB5yfT8rU3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HP8CrBYhwLDmDELX7RAy8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuIrft-fhKd1PoxXj6X_wq
          claim_id: c_00tVqZG-f-KMBPRTMxkYNg
          source_id: s_YrjhKLs6Kc3LXGchPmieEf
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13124：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HP8CrBYhwLDmDELX7RAy8v
        status: active
        display_name: 王朝霖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鳳祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳祥 | accepted |
| death.date | 1860年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HP8CrBYhwLDmDELX7RAy8v | 王朝霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳祥（CBDB 69418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69418&o=json)

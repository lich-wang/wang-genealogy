---
schema: wang-person/v1
id: p_AThdHkn6Kx37wKXpWFH1ph
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L9DPrJe39rF6KnF9xMBetm
        subject_person_id: p_AThdHkn6Kx37wKXpWFH1ph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AH47fGuJm2JrGzgm7yATtU
          claim_id: c_L9DPrJe39rF6KnF9xMBetm
          source_id: s_SD3FTv59YJwdQs71u3QtJX
          stance: supports
          locator: CBDB:126566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126566）
          source: &a1
            id: s_SD3FTv59YJwdQs71u3QtJX
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 126566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126566&o=json
            external_identifier: CBDB:126566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GRL1f1zToAZ6QacS1XhoKM
        subject_person_id: p_AThdHkn6Kx37wKXpWFH1ph
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_szZ1JDMWbSga3PmzTac8YA
          claim_id: c_GRL1f1zToAZ6QacS1XhoKM
          source_id: s_SD3FTv59YJwdQs71u3QtJX
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
        id: c_jdtQyRmSo2zuPotsWtvBBw
        subject_person_id: p_AThdHkn6Kx37wKXpWFH1ph
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3yR9PF8ta8t9hgzYfHe7q
          claim_id: c_jdtQyRmSo2zuPotsWtvBBw
          source_id: s_SD3FTv59YJwdQs71u3QtJX
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
        id: c_FnzEp8QfMxt2Wjmm7BmLeR
        subject_person_id: p_AThdHkn6Kx37wKXpWFH1ph
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MYgBrFJ1L6g3tzuH8hSUXy
          claim_id: c_FnzEp8QfMxt2Wjmm7BmLeR
          source_id: s_SD3FTv59YJwdQs71u3QtJX
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| birth.date | 1434年 | accepted |
| death.date | 1520年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 126566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126566&o=json)

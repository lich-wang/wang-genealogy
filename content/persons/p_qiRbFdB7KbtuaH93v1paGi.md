---
schema: wang-person/v1
id: p_qiRbFdB7KbtuaH93v1paGi
status: active
merged_into: null
display_name: 王驥德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qVZ65RAerdjahVGvqijY7f
        subject_person_id: p_qiRbFdB7KbtuaH93v1paGi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2JSSBxKYD6BaMDA3U19act
          claim_id: c_qVZ65RAerdjahVGvqijY7f
          source_id: s_D99posah4VH9MEusswurpm
          stance: supports
          locator: CBDB:690994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690994）
          source: &a1
            id: s_D99posah4VH9MEusswurpm
            source_type: api_record
            title: 中国历代人物传记资料库：王驥德（CBDB 690994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690994&o=json
            external_identifier: CBDB:690994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_s8bsEYJE9ASjRVwRVyKSu7
        subject_person_id: p_qiRbFdB7KbtuaH93v1paGi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUyQ3qp8LtbcToiJ9iCiZ9
          claim_id: c_s8bsEYJE9ASjRVwRVyKSu7
          source_id: s_D99posah4VH9MEusswurpm
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
        id: c_97orsgc5njWHZp1VnzPfka
        subject_person_id: p_qiRbFdB7KbtuaH93v1paGi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkGjvx7ETH1a95e9LJqH7Z
          claim_id: c_97orsgc5njWHZp1VnzPfka
          source_id: s_D99posah4VH9MEusswurpm
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
        id: c_pafoHu3fbdd7LwyimaB1eR
        subject_person_id: p_qiRbFdB7KbtuaH93v1paGi
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
        - id: cs_L83jybMstGKeMFad9Mc4iP
          claim_id: c_pafoHu3fbdd7LwyimaB1eR
          source_id: s_D99posah4VH9MEusswurpm
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

# 王驥德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥德 | accepted |
| birth.date | 1557年 | accepted |
| death.date | 1623年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥德（CBDB 690994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690994&o=json)

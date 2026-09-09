---
schema: wang-person/v1
id: p_wGS27LDc1JotBNrBbKAVNM
status: active
merged_into: null
display_name: 王金鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_poeuQSd7whtBxuR8UHzqxX
        subject_person_id: p_wGS27LDc1JotBNrBbKAVNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AAGS9AU7peGZcGdTtAu9RS
          claim_id: c_poeuQSd7whtBxuR8UHzqxX
          source_id: s_TpHr7q6dRQBAi5rAJErBd2
          stance: supports
          locator: CBDB:71783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71783）
          source: &a1
            id: s_TpHr7q6dRQBAi5rAJErBd2
            source_type: api_record
            title: 中国历代人物传记资料库：王金鼎（CBDB 71783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71783&o=json
            external_identifier: CBDB:71783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SHYVc1DrTFG1etPBGV5yG9
        subject_person_id: p_wGS27LDc1JotBNrBbKAVNM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srnV5RueUm4ac89GHrm61Y
          claim_id: c_SHYVc1DrTFG1etPBGV5yG9
          source_id: s_TpHr7q6dRQBAi5rAJErBd2
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
        id: c_LRz5d6A1JgEVy16LHAJf3j
        subject_person_id: p_wGS27LDc1JotBNrBbKAVNM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_My9VJrV4oG5PtNRb9NSFAP
          claim_id: c_LRz5d6A1JgEVy16LHAJf3j
          source_id: s_TpHr7q6dRQBAi5rAJErBd2
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
        id: c_49n9Q7SfYCHAFyxmVAUHFB
        subject_person_id: p_wGS27LDc1JotBNrBbKAVNM
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
        - id: cs_8b2wHafANku3CVa4FrZBFV
          claim_id: c_49n9Q7SfYCHAFyxmVAUHFB
          source_id: s_TpHr7q6dRQBAi5rAJErBd2
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

# 王金鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金鼎 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金鼎（CBDB 71783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71783&o=json)

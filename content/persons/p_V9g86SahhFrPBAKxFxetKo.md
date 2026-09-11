---
schema: wang-person/v1
id: p_V9g86SahhFrPBAKxFxetKo
status: active
merged_into: null
display_name: 王璉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aM7TExA77v6upDYHC1LsbF
        subject_person_id: p_V9g86SahhFrPBAKxFxetKo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UfjecQcaHprJUceMbF1bg
          claim_id: c_aM7TExA77v6upDYHC1LsbF
          source_id: s_FJk72Ai4h93z15hzNz72b7
          stance: supports
          locator: CBDB:275701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275701）
          source: &a1
            id: s_FJk72Ai4h93z15hzNz72b7
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 275701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275701&o=json
            external_identifier: CBDB:275701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZCY6jfN8HDx9nCzdDpHi5
        subject_person_id: p_V9g86SahhFrPBAKxFxetKo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。弘治十八年進士，籍贯大興。（中国历代人物传记资料库 CBDB 275701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0FeCD1L4FFEnRyG1lecUO_
          claim_id: c_tZCY6jfN8HDx9nCzdDpHi5
          source_id: s_FJk72Ai4h93z15hzNz72b7
          stance: supports
          locator: CBDB:275701
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。弘治十八年進士，籍贯大興。（中国历代人物传记资料库 CBDB 275701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 275701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275701&o=json)

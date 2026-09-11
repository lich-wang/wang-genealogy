---
schema: wang-person/v1
id: p_P4KZT8t3zLqfPnTvjnqDMt
status: active
merged_into: null
display_name: 王丕釐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vL2z1GPMpwbyUjEKRDu9QE
        subject_person_id: p_P4KZT8t3zLqfPnTvjnqDMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕釐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dc9fS16jAydUC9Pq65ntrw
          claim_id: c_vL2z1GPMpwbyUjEKRDu9QE
          source_id: s_tDUvdKQd6pUdRv7GEoo8RN
          stance: supports
          locator: CBDB:71479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71479）
          source: &a1
            id: s_tDUvdKQd6pUdRv7GEoo8RN
            source_type: api_record
            title: 中国历代人物传记资料库：王丕釐（CBDB 71479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71479&o=json
            external_identifier: CBDB:71479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UGvdefKLjUYp4rSydL4U35
        subject_person_id: p_P4KZT8t3zLqfPnTvjnqDMt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m9ob7VKShUAZeN9WwhkVcF
          claim_id: c_UGvdefKLjUYp4rSydL4U35
          source_id: s_tDUvdKQd6pUdRv7GEoo8RN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tihz65rRAn4fe12FBDcLSv
        subject_person_id: p_P4KZT8t3zLqfPnTvjnqDMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕釐（生于1847年），清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 71479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DITlCuxGM4-G9wZVKZWzr4
          claim_id: c_Tihz65rRAn4fe12FBDcLSv
          source_id: s_tDUvdKQd6pUdRv7GEoo8RN
          stance: supports
          locator: CBDB:71479
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

# 王丕釐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕釐 | accepted |
| birth.date | 1847年 | accepted |
| bio.summary | 王丕釐（生于1847年），清人物。籍贯黃岡。（中国历代人物传记资料库 CBDB 71479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕釐（CBDB 71479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71479&o=json)

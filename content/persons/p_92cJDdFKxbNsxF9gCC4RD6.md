---
schema: wang-person/v1
id: p_92cJDdFKxbNsxF9gCC4RD6
status: active
merged_into: null
display_name: 王日烜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JXCBmWYKvdnaLGj77EtJsd
        subject_person_id: p_92cJDdFKxbNsxF9gCC4RD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fQarDnyLj6GXU2JDSgRx7
          claim_id: c_JXCBmWYKvdnaLGj77EtJsd
          source_id: s_h9WhvimvqjW9i5LmNRrHMw
          stance: supports
          locator: CBDB:71392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71392）
          source: &a1
            id: s_h9WhvimvqjW9i5LmNRrHMw
            source_type: api_record
            title: 中国历代人物传记资料库：王日烜（CBDB 71392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71392&o=json
            external_identifier: CBDB:71392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pdZqPN5T5x7HWL5pJ7rSQX
        subject_person_id: p_92cJDdFKxbNsxF9gCC4RD6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9J9yuHmWZ7LxD7CNdpdRLM
          claim_id: c_pdZqPN5T5x7HWL5pJ7rSQX
          source_id: s_h9WhvimvqjW9i5LmNRrHMw
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
        id: c_XuD7WGDfXbPpfv6i2Xjynj
        subject_person_id: p_92cJDdFKxbNsxF9gCC4RD6
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
        - id: cs_hPEh2JYQgT7rec8DLWWgc3
          claim_id: c_XuD7WGDfXbPpfv6i2Xjynj
          source_id: s_h9WhvimvqjW9i5LmNRrHMw
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

# 王日烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日烜 | accepted |
| birth.date | 1815年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日烜（CBDB 71392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71392&o=json)

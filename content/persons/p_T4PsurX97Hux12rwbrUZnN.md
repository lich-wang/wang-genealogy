---
schema: wang-person/v1
id: p_T4PsurX97Hux12rwbrUZnN
status: active
merged_into: null
display_name: 王秒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Ayny5i3ukaHZPkuXzrwPt
        subject_person_id: p_T4PsurX97Hux12rwbrUZnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v63UoPmvHywNmAFqZDJ77R
          claim_id: c_3Ayny5i3ukaHZPkuXzrwPt
          source_id: s_6EbLF5HrkwTqcLmqgT7ySB
          stance: supports
          locator: CBDB:683921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683921）
          source: &a1
            id: s_6EbLF5HrkwTqcLmqgT7ySB
            source_type: api_record
            title: 中国历代人物传记资料库：王秒（CBDB 683921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683921&o=json
            external_identifier: CBDB:683921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v5sRAeHeJjKkfF18CUyj5F
        subject_person_id: p_T4PsurX97Hux12rwbrUZnN
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
        - id: cs_u8i9QfsKnhKCp9e6Xa8uxy
          claim_id: c_v5sRAeHeJjKkfF18CUyj5F
          source_id: s_6EbLF5HrkwTqcLmqgT7ySB
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

# 王秒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秒（CBDB 683921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683921&o=json)

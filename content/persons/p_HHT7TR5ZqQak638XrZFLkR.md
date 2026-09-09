---
schema: wang-person/v1
id: p_HHT7TR5ZqQak638XrZFLkR
status: active
merged_into: null
display_name: 王孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gZv22KhgSjUTZjg3LDGCY5
        subject_person_id: p_HHT7TR5ZqQak638XrZFLkR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hrHHxv4Rdug36AhdxrcuJ
          claim_id: c_gZv22KhgSjUTZjg3LDGCY5
          source_id: s_KTyBSUnCENXzWjTf2dB7ex
          stance: supports
          locator: CBDB:71081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71081）
          source: &a1
            id: s_KTyBSUnCENXzWjTf2dB7ex
            source_type: api_record
            title: 中国历代人物传记资料库：王孚（CBDB 71081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71081&o=json
            external_identifier: CBDB:71081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YCNaMNdWrKohP1jPC1mNni
        subject_person_id: p_HHT7TR5ZqQak638XrZFLkR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VcxrT8KG17xAuj7ksuR4HB
          claim_id: c_YCNaMNdWrKohP1jPC1mNni
          source_id: s_KTyBSUnCENXzWjTf2dB7ex
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
        id: c_7Z5jjBzFLYNiAmG7ymiNk8
        subject_person_id: p_HHT7TR5ZqQak638XrZFLkR
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
        - id: cs_CcUDDK3KGzJRR3BSfQczDB
          claim_id: c_7Z5jjBzFLYNiAmG7ymiNk8
          source_id: s_KTyBSUnCENXzWjTf2dB7ex
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

# 王孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孚 | accepted |
| birth.date | 1692年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孚（CBDB 71081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71081&o=json)

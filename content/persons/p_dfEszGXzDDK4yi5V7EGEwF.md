---
schema: wang-person/v1
id: p_dfEszGXzDDK4yi5V7EGEwF
status: active
merged_into: null
display_name: 王芸臺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCtsxtVX86FSiAovAgZYq2
        subject_person_id: p_dfEszGXzDDK4yi5V7EGEwF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芸臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rcJo6Y3YzkzyM5YRY4KgXw
          claim_id: c_qCtsxtVX86FSiAovAgZYq2
          source_id: s_4jk4SK8TnZfnf9iX4wTXg6
          stance: supports
          locator: CBDB:640066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640066）
          source: &a1
            id: s_4jk4SK8TnZfnf9iX4wTXg6
            source_type: api_record
            title: 中国历代人物传记资料库：王芸臺（CBDB 640066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640066&o=json
            external_identifier: CBDB:640066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuthYCE6Nfin42QbwRcV4E
        subject_person_id: p_dfEszGXzDDK4yi5V7EGEwF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芸臺，清人物。籍贯密縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640066）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DPydvI1EilFLgOFpZp7S2
          claim_id: c_FuthYCE6Nfin42QbwRcV4E
          source_id: s_4jk4SK8TnZfnf9iX4wTXg6
          stance: supports
          locator: CBDB:640066
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

# 王芸臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芸臺 | accepted |
| bio.summary | 王芸臺，清人物。籍贯密縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640066） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芸臺（CBDB 640066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640066&o=json)

---
schema: wang-person/v1
id: p_4Ff2g6UKwmYCpMMDQ8EErX
status: active
merged_into: null
display_name: 王雲偀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANJ4Q9JVzM9F9yvMSZNiU9
        subject_person_id: p_4Ff2g6UKwmYCpMMDQ8EErX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲偀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V44syFEiBe5DhrwD8vYhPb
          claim_id: c_ANJ4Q9JVzM9F9yvMSZNiU9
          source_id: s_XHNeqLY98vRSNLzfjTqY5N
          stance: supports
          locator: CBDB:640802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640802）
          source: &a1
            id: s_XHNeqLY98vRSNLzfjTqY5N
            source_type: api_record
            title: 中国历代人物传记资料库：王雲偀（CBDB 640802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640802&o=json
            external_identifier: CBDB:640802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7oGW2iR9R8u2X6BjzRQKMA
        subject_person_id: p_4Ff2g6UKwmYCpMMDQ8EErX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲偀，清人物。籍贯亳州，入仕縣學附生，曾任典史。（中国历代人物传记资料库 CBDB 640802）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3RH6KylwxVN6GgVsckpf3A
          claim_id: c_7oGW2iR9R8u2X6BjzRQKMA
          source_id: s_XHNeqLY98vRSNLzfjTqY5N
          stance: supports
          locator: CBDB:640802
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

# 王雲偀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲偀 | accepted |
| bio.summary | 王雲偀，清人物。籍贯亳州，入仕縣學附生，曾任典史。（中国历代人物传记资料库 CBDB 640802） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲偀（CBDB 640802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640802&o=json)

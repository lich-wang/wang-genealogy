---
schema: wang-person/v1
id: p_DMx6zAySGiGi9P9RroofGH
status: active
merged_into: null
display_name: 王興先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t1qc6RhLarmQArLYKwBeMF
        subject_person_id: p_DMx6zAySGiGi9P9RroofGH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a2DBgPCXMUar4gAJnwXHHg
          claim_id: c_t1qc6RhLarmQArLYKwBeMF
          source_id: s_wS7Bm87D3K98RbAPGWjDhv
          stance: supports
          locator: CBDB:640028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640028）
          source: &a1
            id: s_wS7Bm87D3K98RbAPGWjDhv
            source_type: api_record
            title: 中国历代人物传记资料库：王興先（CBDB 640028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640028&o=json
            external_identifier: CBDB:640028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C87X9RBkTYFSbrZupatQYT
        subject_person_id: p_DMx6zAySGiGi9P9RroofGH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興先，清人物。籍贯黃縣，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640028）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJs19nslO1AvK8Ad2-l5n8
          claim_id: c_C87X9RBkTYFSbrZupatQYT
          source_id: s_wS7Bm87D3K98RbAPGWjDhv
          stance: supports
          locator: CBDB:640028
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

# 王興先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興先 | accepted |
| bio.summary | 王興先，清人物。籍贯黃縣，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興先（CBDB 640028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640028&o=json)

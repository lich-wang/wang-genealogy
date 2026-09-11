---
schema: wang-person/v1
id: p_25JPiJYbmxKiEB7FAsyejL
status: active
merged_into: null
display_name: 王天相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RQ9xemzeB287JBi8cLQCLi
        subject_person_id: p_25JPiJYbmxKiEB7FAsyejL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_otMfQKkBQ5NyNVby1dJkYR
          claim_id: c_RQ9xemzeB287JBi8cLQCLi
          source_id: s_8w8KVJHu74Ur46H29F715o
          stance: supports
          locator: CBDB:414213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414213）
          source: &a1
            id: s_8w8KVJHu74Ur46H29F715o
            source_type: api_record
            title: 中国历代人物传记资料库：王天相（CBDB 414213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414213&o=json
            external_identifier: CBDB:414213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AF2zep4krJ3xZ9e9GC2yy
        subject_person_id: p_25JPiJYbmxKiEB7FAsyejL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天相，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IX8UzUPlf4ytqBTTyAlO7Q
          claim_id: c_7AF2zep4krJ3xZ9e9GC2yy
          source_id: s_8w8KVJHu74Ur46H29F715o
          stance: supports
          locator: CBDB:414213
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

# 王天相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天相 | accepted |
| bio.summary | 王天相，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天相（CBDB 414213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414213&o=json)

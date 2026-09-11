---
schema: wang-person/v1
id: p_8KFBmducj8dcW5R44P1PB8
status: active
merged_into: null
display_name: 王文舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UjEhyjGnwPC9mKb18dudew
        subject_person_id: p_8KFBmducj8dcW5R44P1PB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7pLusaGqCfPKJgn9aTsjni
          claim_id: c_UjEhyjGnwPC9mKb18dudew
          source_id: s_mz7fQFTRpK9A2dhWDQWQFz
          stance: supports
          locator: CBDB:638226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638226）
          source: &a1
            id: s_mz7fQFTRpK9A2dhWDQWQFz
            source_type: api_record
            title: 中国历代人物传记资料库：王文舉（CBDB 638226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638226&o=json
            external_identifier: CBDB:638226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VGd1eShLVzhEuJHzqQRxy3
        subject_person_id: p_8KFBmducj8dcW5R44P1PB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文舉，清人物。籍贯張掖，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sOIz6FmzOOqAwXzz3ATLi2
          claim_id: c_VGd1eShLVzhEuJHzqQRxy3
          source_id: s_mz7fQFTRpK9A2dhWDQWQFz
          stance: supports
          locator: CBDB:638226
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

# 王文舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文舉 | accepted |
| bio.summary | 王文舉，清人物。籍贯張掖，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文舉（CBDB 638226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638226&o=json)

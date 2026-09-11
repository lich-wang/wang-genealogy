---
schema: wang-person/v1
id: p_FCkcRb2aXJ6WSXpi9fMdfM
status: active
merged_into: null
display_name: 王鼎昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymAZqWDVv7KGFriaiFPB3Q
        subject_person_id: p_FCkcRb2aXJ6WSXpi9fMdfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TMVEhjekzf83u84Eg6T2fW
          claim_id: c_ymAZqWDVv7KGFriaiFPB3Q
          source_id: s_yxGDxfykmAkjJSCwy5pNKy
          stance: supports
          locator: CBDB:641046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641046）
          source: &a1
            id: s_yxGDxfykmAkjJSCwy5pNKy
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎昌（CBDB 641046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641046&o=json
            external_identifier: CBDB:641046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1WL8kREfzMmxTzH8D4aPJ5
        subject_person_id: p_FCkcRb2aXJ6WSXpi9fMdfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎昌，清人物。籍贯安徽省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 641046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5pC3yysnB2gCWxqT2FmcBF
          claim_id: c_1WL8kREfzMmxTzH8D4aPJ5
          source_id: s_yxGDxfykmAkjJSCwy5pNKy
          stance: supports
          locator: CBDB:641046
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

# 王鼎昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎昌 | accepted |
| bio.summary | 王鼎昌，清人物。籍贯安徽省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 641046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎昌（CBDB 641046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641046&o=json)

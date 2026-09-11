---
schema: wang-person/v1
id: p_9yuJSVJ48zo9yAhR4aeFnT
status: active
merged_into: null
display_name: 王有恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8AtbsGB3tnL2yBF8Yk966h
        subject_person_id: p_9yuJSVJ48zo9yAhR4aeFnT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YdWZjv5L4aigTogJnpoBf
          claim_id: c_8AtbsGB3tnL2yBF8Yk966h
          source_id: s_cuHbcuUynSE74jp6A77Taa
          stance: supports
          locator: CBDB:638585
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638585）
          source: &a1
            id: s_cuHbcuUynSE74jp6A77Taa
            source_type: api_record
            title: 中国历代人物传记资料库：王有恆（CBDB 638585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638585&o=json
            external_identifier: CBDB:638585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ej9HJBTjRdNQkgVyEheBkQ
        subject_person_id: p_9yuJSVJ48zo9yAhR4aeFnT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恆，清人物。籍贯金壇，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iOJAY5hxqsxcpNz-GFjqLw
          claim_id: c_Ej9HJBTjRdNQkgVyEheBkQ
          source_id: s_cuHbcuUynSE74jp6A77Taa
          stance: supports
          locator: CBDB:638585
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

# 王有恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有恆 | accepted |
| bio.summary | 王有恆，清人物。籍贯金壇，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638585） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有恆（CBDB 638585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638585&o=json)

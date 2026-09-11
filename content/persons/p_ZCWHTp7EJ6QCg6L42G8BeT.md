---
schema: wang-person/v1
id: p_ZCWHTp7EJ6QCg6L42G8BeT
status: active
merged_into: null
display_name: 王承楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FJ3Xsqz2nvHm7TQRgB11v
        subject_person_id: p_ZCWHTp7EJ6QCg6L42G8BeT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v1A5R9a8FDjk9u19HYN6MS
          claim_id: c_9FJ3Xsqz2nvHm7TQRgB11v
          source_id: s_37vuNqaWdNFqGvmDx4tShD
          stance: supports
          locator: CBDB:638085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638085）
          source: &a1
            id: s_37vuNqaWdNFqGvmDx4tShD
            source_type: api_record
            title: 中国历代人物传记资料库：王承楷（CBDB 638085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638085&o=json
            external_identifier: CBDB:638085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WSpuBMt8F19qYMCLiTVt9
        subject_person_id: p_ZCWHTp7EJ6QCg6L42G8BeT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承楷，清人物。籍贯吳縣，入仕鄉貢舉人，曾任同知、知縣。（中国历代人物传记资料库 CBDB 638085）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tVLzWO7ApU6FzV3pPT6LlC
          claim_id: c_5WSpuBMt8F19qYMCLiTVt9
          source_id: s_37vuNqaWdNFqGvmDx4tShD
          stance: supports
          locator: CBDB:638085
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

# 王承楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承楷 | accepted |
| bio.summary | 王承楷，清人物。籍贯吳縣，入仕鄉貢舉人，曾任同知、知縣。（中国历代人物传记资料库 CBDB 638085） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承楷（CBDB 638085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638085&o=json)

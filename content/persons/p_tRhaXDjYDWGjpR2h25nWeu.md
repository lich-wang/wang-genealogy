---
schema: wang-person/v1
id: p_tRhaXDjYDWGjpR2h25nWeu
status: active
merged_into: null
display_name: 王祝三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xb43VLBqKCthfR9L7eNSFF
        subject_person_id: p_tRhaXDjYDWGjpR2h25nWeu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kYBtkJvCjx83RenK6Q894Y
          claim_id: c_Xb43VLBqKCthfR9L7eNSFF
          source_id: s_4pvoAVUCdZyS3FRypKJAMu
          stance: supports
          locator: CBDB:639591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639591）
          source: &a1
            id: s_4pvoAVUCdZyS3FRypKJAMu
            source_type: api_record
            title: 中国历代人物传记资料库：王祝三（CBDB 639591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639591&o=json
            external_identifier: CBDB:639591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a8nHgpCB8ECWzVZ4eYxmuq
        subject_person_id: p_tRhaXDjYDWGjpR2h25nWeu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝三，清人物。籍贯廣靈，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639591）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o2i9MXw_YYu0sVeEFrsbTy
          claim_id: c_a8nHgpCB8ECWzVZ4eYxmuq
          source_id: s_4pvoAVUCdZyS3FRypKJAMu
          stance: supports
          locator: CBDB:639591
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

# 王祝三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祝三 | accepted |
| bio.summary | 王祝三，清人物。籍贯廣靈，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639591） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祝三（CBDB 639591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639591&o=json)

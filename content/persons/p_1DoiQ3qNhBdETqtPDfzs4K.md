---
schema: wang-person/v1
id: p_1DoiQ3qNhBdETqtPDfzs4K
status: active
merged_into: null
display_name: 王增禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FA21w8rF494zas3gWNGtj9
        subject_person_id: p_1DoiQ3qNhBdETqtPDfzs4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPTNYqSZXq6TqWEFqf8qws
          claim_id: c_FA21w8rF494zas3gWNGtj9
          source_id: s_HwRQGwRaow7ob3fwYG9VZf
          stance: supports
          locator: CBDB:636775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636775）
          source: &a1
            id: s_HwRQGwRaow7ob3fwYG9VZf
            source_type: api_record
            title: 中国历代人物传记资料库：王增禧（CBDB 636775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636775&o=json
            external_identifier: CBDB:636775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S4FcVxBsSHeauJ3K2H8wwq
        subject_person_id: p_1DoiQ3qNhBdETqtPDfzs4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增禧，清人物。籍贯上海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9k-j0vvDRov_wuSb7Fy2U_
          claim_id: c_S4FcVxBsSHeauJ3K2H8wwq
          source_id: s_HwRQGwRaow7ob3fwYG9VZf
          stance: supports
          locator: CBDB:636775
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

# 王增禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增禧 | accepted |
| bio.summary | 王增禧，清人物。籍贯上海，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增禧（CBDB 636775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636775&o=json)

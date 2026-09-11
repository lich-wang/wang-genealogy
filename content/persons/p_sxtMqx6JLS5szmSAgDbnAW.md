---
schema: wang-person/v1
id: p_sxtMqx6JLS5szmSAgDbnAW
status: active
merged_into: null
display_name: 王之垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sSvKE4Cmc55hwH8mAXg2Zs
        subject_person_id: p_sxtMqx6JLS5szmSAgDbnAW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FyvYB3o44aaD4iYfBJmw8j
          claim_id: c_sSvKE4Cmc55hwH8mAXg2Zs
          source_id: s_gq7UEdHGCcbnjjA2fB6BZG
          stance: supports
          locator: CBDB:560101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560101）
          source: &a1
            id: s_gq7UEdHGCcbnjjA2fB6BZG
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 560101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560101&o=json
            external_identifier: CBDB:560101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_udrzoX2daSTeJggk9RmoLv
        subject_person_id: p_sxtMqx6JLS5szmSAgDbnAW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣，明人物。籍贯德化，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 560101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFnSrECrbDKY-lKsozN5Rv
          claim_id: c_udrzoX2daSTeJggk9RmoLv
          source_id: s_gq7UEdHGCcbnjjA2fB6BZG
          stance: supports
          locator: CBDB:560101
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

# 王之垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之垣 | accepted |
| bio.summary | 王之垣，明人物。籍贯德化，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 560101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之垣（CBDB 560101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560101&o=json)

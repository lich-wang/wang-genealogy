---
schema: wang-person/v1
id: p_ixt3BfhSSs6593PgTEAqtb
status: active
merged_into: null
display_name: 王觌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XK3ut9LDWuXUEeFPL9dJh2
        subject_person_id: p_ixt3BfhSSs6593PgTEAqtb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nfhMGdMLF55KAMhJtbJkHw
          claim_id: c_XK3ut9LDWuXUEeFPL9dJh2
          source_id: s_V1kMJ83BFpGKvxSz8Ro96k
          stance: supports
          locator: CBDB:98022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98022）
          source: &a1
            id: s_V1kMJ83BFpGKvxSz8Ro96k
            source_type: api_record
            title: 中国历代人物传记资料库：王觌（CBDB 98022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98022&o=json
            external_identifier: CBDB:98022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6rUBkk9khAQMvY1Qy3e1E7
        subject_person_id: p_ixt3BfhSSs6593PgTEAqtb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觌，宋人物。曾任承議郎、直龍圖閣。（中国历代人物传记资料库 CBDB 98022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dyuilNFLV3g_-i8j6j7GCT
          claim_id: c_6rUBkk9khAQMvY1Qy3e1E7
          source_id: s_V1kMJ83BFpGKvxSz8Ro96k
          stance: supports
          locator: CBDB:98022
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

# 王觌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觌 | accepted |
| bio.summary | 王觌，宋人物。曾任承議郎、直龍圖閣。（中国历代人物传记资料库 CBDB 98022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觌（CBDB 98022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98022&o=json)

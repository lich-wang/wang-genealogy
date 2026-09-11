---
schema: wang-person/v1
id: p_i43pahKt4ryAxsmPN7VE98
status: active
merged_into: null
display_name: 王信臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tTbaLYsBrsqsNkGLMSsGgi
        subject_person_id: p_i43pahKt4ryAxsmPN7VE98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BFfN6QnuWNGakpTHbz38UF
          claim_id: c_tTbaLYsBrsqsNkGLMSsGgi
          source_id: s_kA3TaRBNFjLmvWMu7TwQ99
          stance: supports
          locator: CBDB:636066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636066）
          source: &a1
            id: s_kA3TaRBNFjLmvWMu7TwQ99
            source_type: api_record
            title: 中国历代人物传记资料库：王信臣（CBDB 636066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636066&o=json
            external_identifier: CBDB:636066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ipF2ikL8a4yeVdFYXcR1G
        subject_person_id: p_i43pahKt4ryAxsmPN7VE98
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信臣，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 636066）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tpx4l3HRZKF41x15XDaMGf
          claim_id: c_4ipF2ikL8a4yeVdFYXcR1G
          source_id: s_kA3TaRBNFjLmvWMu7TwQ99
          stance: supports
          locator: CBDB:636066
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

# 王信臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信臣 | accepted |
| bio.summary | 王信臣，清人物。籍贯山陰，曾任司獄。（中国历代人物传记资料库 CBDB 636066） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信臣（CBDB 636066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636066&o=json)

---
schema: wang-person/v1
id: p_NrLZ84hX7obpaSCu8XXAX5
status: active
merged_into: null
display_name: 王蘭壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJL66JPogPGcNgu2e7M1zC
        subject_person_id: p_NrLZ84hX7obpaSCu8XXAX5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L6a3rByJw7EBKkPPuGNxjC
          claim_id: c_ZJL66JPogPGcNgu2e7M1zC
          source_id: s_Hf65aqrsH7TopoaRdU6AYN
          stance: supports
          locator: CBDB:640189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640189）
          source: &a1
            id: s_Hf65aqrsH7TopoaRdU6AYN
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭壁（CBDB 640189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640189&o=json
            external_identifier: CBDB:640189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YKZKwFCGJ4TM571SyPYCWH
        subject_person_id: p_NrLZ84hX7obpaSCu8XXAX5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭壁，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640189）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OKeRARoGto7Sjwpya7ByBb
          claim_id: c_YKZKwFCGJ4TM571SyPYCWH
          source_id: s_Hf65aqrsH7TopoaRdU6AYN
          stance: supports
          locator: CBDB:640189
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

# 王蘭壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭壁 | accepted |
| bio.summary | 王蘭壁，清人物。籍贯聊城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640189） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭壁（CBDB 640189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640189&o=json)

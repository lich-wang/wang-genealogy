---
schema: wang-person/v1
id: p_gAKrswfwFyPcCN5eeLtStw
status: active
merged_into: null
display_name: 王元褔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ktcBPBUk9kvyikw4mBVHWa
        subject_person_id: p_gAKrswfwFyPcCN5eeLtStw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元褔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6Ad7Fgg6JckpsLeqTcM5U
          claim_id: c_ktcBPBUk9kvyikw4mBVHWa
          source_id: s_UN7SDVZeE4d5WP371mVXRD
          stance: supports
          locator: CBDB:636179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636179）
          source: &a1
            id: s_UN7SDVZeE4d5WP371mVXRD
            source_type: api_record
            title: 中国历代人物传记资料库：王元褔（CBDB 636179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636179&o=json
            external_identifier: CBDB:636179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KtmEUyQZSRoSMECTCj8NvS
        subject_person_id: p_gAKrswfwFyPcCN5eeLtStw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元褔，清人物。籍贯肥鄉，曾任復設訓導。（中国历代人物传记资料库 CBDB 636179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Zd9jY3dvZHL6e_J1NOsz9
          claim_id: c_KtmEUyQZSRoSMECTCj8NvS
          source_id: s_UN7SDVZeE4d5WP371mVXRD
          stance: supports
          locator: CBDB:636179
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

# 王元褔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元褔 | accepted |
| bio.summary | 王元褔，清人物。籍贯肥鄉，曾任復設訓導。（中国历代人物传记资料库 CBDB 636179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元褔（CBDB 636179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636179&o=json)

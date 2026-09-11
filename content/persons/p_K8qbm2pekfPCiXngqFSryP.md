---
schema: wang-person/v1
id: p_K8qbm2pekfPCiXngqFSryP
status: active
merged_into: null
display_name: 王友雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nvS2TdE7AzptVBAFJ95Pcn
        subject_person_id: p_K8qbm2pekfPCiXngqFSryP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PtZ7z4kX8WpdkZ1B5vizBE
          claim_id: c_nvS2TdE7AzptVBAFJ95Pcn
          source_id: s_UsdkKXx2FBhKqgSVkiCEUj
          stance: supports
          locator: CBDB:561078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561078）
          source: &a1
            id: s_UsdkKXx2FBhKqgSVkiCEUj
            source_type: api_record
            title: 中国历代人物传记资料库：王友雲（CBDB 561078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561078&o=json
            external_identifier: CBDB:561078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_su5igc19MQubRW8K9HAyG5
        subject_person_id: p_K8qbm2pekfPCiXngqFSryP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友雲，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 561078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MWS1-LFuYOQjGm1H3Dn1Mq
          claim_id: c_su5igc19MQubRW8K9HAyG5
          source_id: s_UsdkKXx2FBhKqgSVkiCEUj
          stance: supports
          locator: CBDB:561078
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

# 王友雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友雲 | accepted |
| bio.summary | 王友雲，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 561078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友雲（CBDB 561078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561078&o=json)

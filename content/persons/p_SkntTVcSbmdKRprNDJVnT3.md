---
schema: wang-person/v1
id: p_SkntTVcSbmdKRprNDJVnT3
status: active
merged_into: null
display_name: 王純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bo4FNYgYPEJ4jdoT9WiXqG
        subject_person_id: p_SkntTVcSbmdKRprNDJVnT3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rHaGMcJLC52TGcAiwWtECh
          claim_id: c_bo4FNYgYPEJ4jdoT9WiXqG
          source_id: s_JAp1tw8fKqSg1pY4kznofq
          stance: supports
          locator: CBDB:471820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471820）
          source: &a1
            id: s_JAp1tw8fKqSg1pY4kznofq
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 471820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471820&o=json
            external_identifier: CBDB:471820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQpSyEJJG38AVE8tNMDADv
        subject_person_id: p_SkntTVcSbmdKRprNDJVnT3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府。（中国历代人物传记资料库 CBDB 471820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mQGg0F0SKbsX3_lQLvu5yV
          claim_id: c_RQpSyEJJG38AVE8tNMDADv
          source_id: s_JAp1tw8fKqSg1pY4kznofq
          stance: supports
          locator: CBDB:471820
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

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府。（中国历代人物传记资料库 CBDB 471820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 471820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471820&o=json)

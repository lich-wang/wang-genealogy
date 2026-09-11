---
schema: wang-person/v1
id: p_uL9HuYmGLdtWTWt4ZWNUtd
status: active
merged_into: null
display_name: 王恩錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZaFCZZwhyFxL766E5T6Bo
        subject_person_id: p_uL9HuYmGLdtWTWt4ZWNUtd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QUuFtTPs1s2dxt9fCvc2Bt
          claim_id: c_XZaFCZZwhyFxL766E5T6Bo
          source_id: s_BmV6R1d4k4agkqVpGcFZXm
          stance: supports
          locator: CBDB:637863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637863）
          source: &a1
            id: s_BmV6R1d4k4agkqVpGcFZXm
            source_type: api_record
            title: 中国历代人物传记资料库：王恩錫（CBDB 637863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637863&o=json
            external_identifier: CBDB:637863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Z7bYYnzKtWnaVrQBrmeJJ
        subject_person_id: p_uL9HuYmGLdtWTWt4ZWNUtd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王恩錫，清人物。籍贯蒙化直隸廳，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637863）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GlAejnnmT40IUlpy39ocxI
          claim_id: c_9Z7bYYnzKtWnaVrQBrmeJJ
          source_id: s_BmV6R1d4k4agkqVpGcFZXm
          stance: supports
          locator: CBDB:637863
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

# 王恩錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩錫 | accepted |
| bio.summary | 王恩錫，清人物。籍贯蒙化直隸廳，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩錫（CBDB 637863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637863&o=json)

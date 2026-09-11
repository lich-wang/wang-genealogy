---
schema: wang-person/v1
id: p_gWw3cJDaUaCtPeicLDCjH4
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PDnzLiea5TgGLfZwXEETQa
        subject_person_id: p_gWw3cJDaUaCtPeicLDCjH4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pTcJrqjEkZgxZUf5PbNMTR
          claim_id: c_PDnzLiea5TgGLfZwXEETQa
          source_id: s_aSux55mAZ2GKLoc15Z89Ae
          stance: supports
          locator: CBDB:480968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480968）
          source: &a1
            id: s_aSux55mAZ2GKLoc15Z89Ae
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 480968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480968&o=json
            external_identifier: CBDB:480968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NdUfU36G27a5cTqyz6W9b5
        subject_person_id: p_gWw3cJDaUaCtPeicLDCjH4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 480968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bwt_ybuStBRtQIv37zdc1t
          claim_id: c_NdUfU36G27a5cTqyz6W9b5
          source_id: s_aSux55mAZ2GKLoc15Z89Ae
          stance: supports
          locator: CBDB:480968
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 480968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 480968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480968&o=json)

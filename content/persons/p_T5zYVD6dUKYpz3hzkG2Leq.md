---
schema: wang-person/v1
id: p_T5zYVD6dUKYpz3hzkG2Leq
status: active
merged_into: null
display_name: 王汶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vWVpNuBaR1W197vodEPxc6
        subject_person_id: p_T5zYVD6dUKYpz3hzkG2Leq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q8guHxRV1NXdMSPGRbse1N
          claim_id: c_vWVpNuBaR1W197vodEPxc6
          source_id: s_K826AGy7oQHb7gpsHuNTDg
          stance: supports
          locator: CBDB:437893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437893）
          source: &a1
            id: s_K826AGy7oQHb7gpsHuNTDg
            source_type: api_record
            title: 中国历代人物传记资料库：王汶（CBDB 437893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437893&o=json
            external_identifier: CBDB:437893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MYfsJR8j5k2QGYm3KLD1qE
        subject_person_id: p_T5zYVD6dUKYpz3hzkG2Leq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶，明人物。籍贯義烏，曾任中書舍人。（中国历代人物传记资料库 CBDB 437893）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CoTCDOKFmt7LvZnoXD1Ad8
          claim_id: c_MYfsJR8j5k2QGYm3KLD1qE
          source_id: s_K826AGy7oQHb7gpsHuNTDg
          stance: supports
          locator: CBDB:437893
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
  ancestors:
    - claim:
        id: c_btag_CNWRjGBXdwaRnWOEt
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T5zYVD6dUKYpz3hzkG2Leq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3Pelmmftqa-XDBsZpJAh_
          claim_id: c_btag_CNWRjGBXdwaRnWOEt
          source_id: s_K826AGy7oQHb7gpsHuNTDg
          stance: supports
          locator: CBDB 双向互证（曾祖 王褘 ⇄ 曾孫; 重孫 王汶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汶 | accepted |
| bio.summary | 王汶，明人物。籍贯義烏，曾任中書舍人。（中国历代人物传记资料库 CBDB 437893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汶（CBDB 437893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437893&o=json)

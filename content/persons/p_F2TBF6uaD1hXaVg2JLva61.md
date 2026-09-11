---
schema: wang-person/v1
id: p_F2TBF6uaD1hXaVg2JLva61
status: active
merged_into: null
display_name: 王輅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCJxriZ3sUwUpHKjSoVnKt
        subject_person_id: p_F2TBF6uaD1hXaVg2JLva61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VCWJj5J5i7ZFbkk2eBmvDD
          claim_id: c_PCJxriZ3sUwUpHKjSoVnKt
          source_id: s_B7MZBZqHjL9EapABn2e6He
          stance: supports
          locator: CBDB:210019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210019）
          source: &a1
            id: s_B7MZBZqHjL9EapABn2e6He
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 210019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210019&o=json
            external_identifier: CBDB:210019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_op7YF5X2Mob16SRV7oAELJ
        subject_person_id: p_F2TBF6uaD1hXaVg2JLva61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210019）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y_MmMQA_1zIukV1Z8JcZ2E
          claim_id: c_op7YF5X2Mob16SRV7oAELJ
          source_id: s_B7MZBZqHjL9EapABn2e6He
          stance: supports
          locator: CBDB:210019
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
  descendants:
    - claim:
        id: c_sZgAgMG9Wptrh2sd8rowhq
        subject_person_id: p_F2TBF6uaD1hXaVg2JLva61
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EaFxi6NHrChzwLEA1T89LT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvO5zyXQD5Dh5nezQr_Jez
          claim_id: c_sZgAgMG9Wptrh2sd8rowhq
          source_id: s_B7MZBZqHjL9EapABn2e6He
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EaFxi6NHrChzwLEA1T89LT
        status: active
        display_name: 王道成
        merged_into_person_id: null
  other: []
---

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EaFxi6NHrChzwLEA1T89LT | 王道成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 210019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210019&o=json)

---
schema: wang-person/v1
id: p_Ggo2BpyyhfrE6os3unF236
status: active
merged_into: null
display_name: 王勛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RRry3MK3nbTAkoYZH561eM
        subject_person_id: p_Ggo2BpyyhfrE6os3unF236
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFwCfkKXye2Wh5MNaQCyLZ
          claim_id: c_RRry3MK3nbTAkoYZH561eM
          source_id: s_DQsKKbbSmmVi22XmPYYUMV
          stance: supports
          locator: CBDB:282376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282376）
          source: &a1
            id: s_DQsKKbbSmmVi22XmPYYUMV
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 282376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282376&o=json
            external_identifier: CBDB:282376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9U2ZvPBPcKixcDyKPoowts
        subject_person_id: p_Ggo2BpyyhfrE6os3unF236
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勛，明人物。正德十二年進士，曾任戶部員外郎、助教。（中国历代人物传记资料库 CBDB 282376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3zn5PMxqdfbvu7qAUuZi_n
          claim_id: c_9U2ZvPBPcKixcDyKPoowts
          source_id: s_DQsKKbbSmmVi22XmPYYUMV
          stance: supports
          locator: CBDB:282376
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
        id: c_C_y9nu8EOgiL_Y6pQoX_kr
        subject_person_id: p_Ggo2BpyyhfrE6os3unF236
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSkRZGYmQXW6AUmRkjhzh1
          claim_id: c_C_y9nu8EOgiL_Y6pQoX_kr
          source_id: s_DQsKKbbSmmVi22XmPYYUMV
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xjFrEJTtUqGXh8SmiFrc9m
        status: active
        display_name: 王光濟
        merged_into_person_id: null
  other: []
---

# 王勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勛 | accepted |
| bio.summary | 王勛，明人物。正德十二年進士，曾任戶部員外郎、助教。（中国历代人物传记资料库 CBDB 282376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xjFrEJTtUqGXh8SmiFrc9m | 王光濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勛（CBDB 282376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282376&o=json)

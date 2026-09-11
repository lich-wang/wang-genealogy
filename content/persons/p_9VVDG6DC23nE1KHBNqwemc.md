---
schema: wang-person/v1
id: p_9VVDG6DC23nE1KHBNqwemc
status: active
merged_into: null
display_name: 王納諫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M6G81ePXpPfEq8icd3QKGE
        subject_person_id: p_9VVDG6DC23nE1KHBNqwemc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uhu2dDCAY3BGBC71xSXDog
          claim_id: c_M6G81ePXpPfEq8icd3QKGE
          source_id: s_bWGNAwYDy21jDbZEDkndpN
          stance: supports
          locator: CBDB:555434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555434）
          source: &a1
            id: s_bWGNAwYDy21jDbZEDkndpN
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 555434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555434&o=json
            external_identifier: CBDB:555434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sk7rXqRm92mzf1qfWVDpBD
        subject_person_id: p_9VVDG6DC23nE1KHBNqwemc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxt4X7aBxgVh2zVPdC6Gux
          claim_id: c_Sk7rXqRm92mzf1qfWVDpBD
          source_id: s_bWGNAwYDy21jDbZEDkndpN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2PK_vCoPBALD0O6ynpSG_w
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9VVDG6DC23nE1KHBNqwemc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ElZADY5pb3UYw1A9CwLdpp
          claim_id: c_2PK_vCoPBALD0O6ynpSG_w
          source_id: s_bWGNAwYDy21jDbZEDkndpN
          stance: supports
          locator: 南陽府志，lgid=878700：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cpa88FnT8xpUzJrWwpTN6E
        status: active
        display_name: 王好問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王納諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納諫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cpa88FnT8xpUzJrWwpTN6E | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納諫（CBDB 555434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555434&o=json)

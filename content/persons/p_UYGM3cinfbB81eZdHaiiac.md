---
schema: wang-person/v1
id: p_UYGM3cinfbB81eZdHaiiac
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cYdedsbPQPNk3N9Lq81jYf
        subject_person_id: p_UYGM3cinfbB81eZdHaiiac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bLC4tH5rA4VgKUeB5EQjQb
          claim_id: c_cYdedsbPQPNk3N9Lq81jYf
          source_id: s_zKRN3tMTF3NgypCPKbx3AS
          stance: supports
          locator: CBDB:270448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270448）
          source: &a1
            id: s_zKRN3tMTF3NgypCPKbx3AS
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 270448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270448&o=json
            external_identifier: CBDB:270448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7RV7UMVCkHyZCBbPtT8Nf5
        subject_person_id: p_UYGM3cinfbB81eZdHaiiac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 270448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W60-PdZi5p0-gBZj7dZath
          claim_id: c_7RV7UMVCkHyZCBbPtT8Nf5
          source_id: s_zKRN3tMTF3NgypCPKbx3AS
          stance: supports
          locator: CBDB:270448
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
        id: c_QW-KI2LkFATX_RczrIL_lr
        subject_person_id: p_UYGM3cinfbB81eZdHaiiac
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUdKChfVxQcIQHOWyaZhk5
          claim_id: c_QW-KI2LkFATX_RczrIL_lr
          source_id: s_zKRN3tMTF3NgypCPKbx3AS
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTq2erMoECd9k33QFqPJKB
        status: active
        display_name: 王宗
        merged_into_person_id: null
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 270448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TTq2erMoECd9k33QFqPJKB | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 270448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270448&o=json)

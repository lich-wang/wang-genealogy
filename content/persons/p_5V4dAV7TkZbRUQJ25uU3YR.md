---
schema: wang-person/v1
id: p_5V4dAV7TkZbRUQJ25uU3YR
status: active
merged_into: null
display_name: 王士元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MsTA7YA57Sr65n97UGYPf1
        subject_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gaPpqA4EfgbbUiBhv4e351
          claim_id: c_MsTA7YA57Sr65n97UGYPf1
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
          stance: supports
          locator: CBDB:698406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698406）
          source: &a1
            id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 698406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698406&o=json
            external_identifier: CBDB:698406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CA7sdSnGG1M8JCwqaCUdGe
        subject_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6NpUzQM6J3eAhjb8oAUaHp
          claim_id: c_CA7sdSnGG1M8JCwqaCUdGe
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPM9sLyD6nkdgPxQ7BYm9j
        subject_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
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
        - id: cs_h2Y6TpTpPYHykzUS4AdaHc
          claim_id: c_rPM9sLyD6nkdgPxQ7BYm9j
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
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
        id: c_jWXQvsk7nZm0wguNp6q8QQ
        subject_person_id: p_7Ukt4DNtupMEWtbTT66Pb3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UbzNcLvkYScxlzDc2E0lUC
          claim_id: c_jWXQvsk7nZm0wguNp6q8QQ
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
          stance: supports
          locator: 新修菏澤縣志，lgid=725096：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Ukt4DNtupMEWtbTT66Pb3
        status: active
        display_name: 王世泰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_IB9NF9vP0UBR-15NSOJL59
        subject_person_id: p_5V4dAV7TkZbRUQJ25uU3YR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YgdQdoLJ96S4CVyccCWu8Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YC7EUdCQDddjbEYzBVy0JI
          claim_id: c_IB9NF9vP0UBR-15NSOJL59
          source_id: s_t2Zq3NdpJ6Zf9XAYbuhRRM
          stance: supports
          locator: 新修菏澤縣志，lgid=725100：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YgdQdoLJ96S4CVyccCWu8Q
        status: active
        display_name: 王猷新
        merged_into_person_id: null
  other: []
---

# 王士元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士元 | accepted |
| death.date | 1642年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Ukt4DNtupMEWtbTT66Pb3 | 王世泰 | accepted |
| descendants | p_YgdQdoLJ96S4CVyccCWu8Q | 王猷新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 698406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698406&o=json)

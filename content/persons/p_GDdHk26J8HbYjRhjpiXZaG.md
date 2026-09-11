---
schema: wang-person/v1
id: p_GDdHk26J8HbYjRhjpiXZaG
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gwcFMQRy2Z6RxHnFj8aQPs
        subject_person_id: p_GDdHk26J8HbYjRhjpiXZaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3NoDVVKXx72LKgbYBiAth
          claim_id: c_gwcFMQRy2Z6RxHnFj8aQPs
          source_id: s_H4W14e8ww2jrNPermREHg5
          stance: supports
          locator: CBDB:211131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211131）
          source: &a1
            id: s_H4W14e8ww2jrNPermREHg5
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 211131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211131&o=json
            external_identifier: CBDB:211131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4LVDtaP3dF2ADHfJfARpU8
        subject_person_id: p_GDdHk26J8HbYjRhjpiXZaG
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
        - id: cs_9LKfvtFTLxTFSyQxJifRZ2
          claim_id: c_4LVDtaP3dF2ADHfJfARpU8
          source_id: s_H4W14e8ww2jrNPermREHg5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_b9pSyJH4xc7AJqRN9X9-qO
        subject_person_id: p_GDdHk26J8HbYjRhjpiXZaG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnrnOV5JwVaUEi0LeAdUhS
          claim_id: c_b9pSyJH4xc7AJqRN9X9-qO
          source_id: s_H4W14e8ww2jrNPermREHg5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百一十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DoWNVNC6JZBAasWbqdoiCX
        status: active
        display_name: 王祖嫡
        merged_into_person_id: null
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DoWNVNC6JZBAasWbqdoiCX | 王祖嫡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 211131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211131&o=json)

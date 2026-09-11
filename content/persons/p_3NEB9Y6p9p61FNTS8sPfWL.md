---
schema: wang-person/v1
id: p_3NEB9Y6p9p61FNTS8sPfWL
status: active
merged_into: null
display_name: 王友信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqyLoHWqGvNKVQaoXvuDcZ
        subject_person_id: p_3NEB9Y6p9p61FNTS8sPfWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7bjF8A6W75P29mAojZgeUH
          claim_id: c_jqyLoHWqGvNKVQaoXvuDcZ
          source_id: s_WtvQEpuTrY3txjsLJoGNjx
          stance: supports
          locator: CBDB:262417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262417）
          source: &a1
            id: s_WtvQEpuTrY3txjsLJoGNjx
            source_type: api_record
            title: 中国历代人物传记资料库：王友信（CBDB 262417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262417&o=json
            external_identifier: CBDB:262417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1m27QT9fyqzXyG8xBPXJfN
        subject_person_id: p_3NEB9Y6p9p61FNTS8sPfWL
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
        - id: cs_ivzmjLAsoU3B52U5c2vU3B
          claim_id: c_1m27QT9fyqzXyG8xBPXJfN
          source_id: s_WtvQEpuTrY3txjsLJoGNjx
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
        id: c_HAU4NdEr6-lAtdLK69j6v3
        subject_person_id: p_3NEB9Y6p9p61FNTS8sPfWL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YceNBN15o86ppR8vWGWpHN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFO_dtq5KK6OIJuzm1aS9l
          claim_id: c_HAU4NdEr6-lAtdLK69j6v3
          source_id: s_WtvQEpuTrY3txjsLJoGNjx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YceNBN15o86ppR8vWGWpHN
        status: active
        display_name: 王欽
        merged_into_person_id: null
  other: []
---

# 王友信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友信 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YceNBN15o86ppR8vWGWpHN | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友信（CBDB 262417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262417&o=json)

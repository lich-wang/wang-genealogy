---
schema: wang-person/v1
id: p_NjuqxHYFowP8erFGeN3Z21
status: active
merged_into: null
display_name: 王樸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3Cisjx5L5aLsZpzLBoDRz
        subject_person_id: p_NjuqxHYFowP8erFGeN3Z21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7jAGM4NX4R4B68Gq8EfS7W
          claim_id: c_z3Cisjx5L5aLsZpzLBoDRz
          source_id: s_LXFcVF4ou49hujPA2HPLks
          stance: supports
          locator: CBDB:39576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39576）
          source: &a1
            id: s_LXFcVF4ou49hujPA2HPLks
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 39576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39576&o=json
            external_identifier: CBDB:39576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_svpaAwHp3Rh4Top7qo3Pg7
        subject_person_id: p_NjuqxHYFowP8erFGeN3Z21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jWQREq6xcuijrofr27aHtR
          claim_id: c_svpaAwHp3Rh4Top7qo3Pg7
          source_id: s_LXFcVF4ou49hujPA2HPLks
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_llIXVYxwafKKi5bcNxCCzE
        subject_person_id: p_NjuqxHYFowP8erFGeN3Z21
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bhAmYqEbUVVrFpdRH2MVYq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2M7tNnchuzPER3KS9Vo_km
          claim_id: c_llIXVYxwafKKi5bcNxCCzE
          source_id: s_LXFcVF4ou49hujPA2HPLks
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bhAmYqEbUVVrFpdRH2MVYq
        status: active
        display_name: 王侁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bhAmYqEbUVVrFpdRH2MVYq | 王侁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 39576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39576&o=json)

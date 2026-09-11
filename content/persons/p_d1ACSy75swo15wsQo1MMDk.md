---
schema: wang-person/v1
id: p_d1ACSy75swo15wsQo1MMDk
status: active
merged_into: null
display_name: 王瑛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXHXwnUP8uMdAqEMqNDxJV
        subject_person_id: p_d1ACSy75swo15wsQo1MMDk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hUuGqKKopvk34V22UZHgEg
          claim_id: c_aXHXwnUP8uMdAqEMqNDxJV
          source_id: s_8JsDXf7t9KLUkms8KbLaDw
          stance: supports
          locator: CBDB:274428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274428）
          source: &a1
            id: s_8JsDXf7t9KLUkms8KbLaDw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 274428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274428&o=json
            external_identifier: CBDB:274428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cm5jNeupmAEbQtDxfzDz4V
        subject_person_id: p_d1ACSy75swo15wsQo1MMDk
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
        - id: cs_DXoW5D3YWBeaPMAByoqu3o
          claim_id: c_cm5jNeupmAEbQtDxfzDz4V
          source_id: s_8JsDXf7t9KLUkms8KbLaDw
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
        id: c_ovicO8iZD9eTybpjP-6cnf
        subject_person_id: p_d1ACSy75swo15wsQo1MMDk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_symEbET7Z2xMj0CfJGugB6
          claim_id: c_ovicO8iZD9eTybpjP-6cnf
          source_id: s_8JsDXf7t9KLUkms8KbLaDw
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ofDNL1hsFt1v6GYpjecDnr
        status: active
        display_name: 王億
        merged_into_person_id: null
  other: []
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ofDNL1hsFt1v6GYpjecDnr | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 274428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274428&o=json)

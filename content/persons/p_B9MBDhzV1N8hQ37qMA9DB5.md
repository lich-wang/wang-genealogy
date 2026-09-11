---
schema: wang-person/v1
id: p_B9MBDhzV1N8hQ37qMA9DB5
status: active
merged_into: null
display_name: 王埜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_38aD7cmDehBjBjNqFEHxpp
        subject_person_id: p_B9MBDhzV1N8hQ37qMA9DB5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oUPCxiZkJG7HartjzpY1Gf
          claim_id: c_38aD7cmDehBjBjNqFEHxpp
          source_id: s_oe7B5Gw6ApPt7ZhUTRzoV5
          stance: supports
          locator: CBDB:304721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304721）
          source: &a1
            id: s_oe7B5Gw6ApPt7ZhUTRzoV5
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 304721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json
            external_identifier: CBDB:304721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bS1BMWYLJGHE55Z2Pjesy3
        subject_person_id: p_B9MBDhzV1N8hQ37qMA9DB5
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
        - id: cs_L8Q9vdo8zWv3LythUnBMBy
          claim_id: c_bS1BMWYLJGHE55Z2Pjesy3
          source_id: s_oe7B5Gw6ApPt7ZhUTRzoV5
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
        id: c_CKXjNBXEFxa_GIt5m32zIg
        subject_person_id: p_B9MBDhzV1N8hQ37qMA9DB5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3vm3lO_9zP_hhfuPb8RI_
          claim_id: c_CKXjNBXEFxa_GIt5m32zIg
          source_id: s_oe7B5Gw6ApPt7ZhUTRzoV5
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z6vCWYnkMUoH1H52LSJS5y
        status: active
        display_name: 王俸
        merged_into_person_id: null
  other: []
---

# 王埜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Z6vCWYnkMUoH1H52LSJS5y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王埜（CBDB 304721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json)

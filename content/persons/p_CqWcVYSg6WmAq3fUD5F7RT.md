---
schema: wang-person/v1
id: p_CqWcVYSg6WmAq3fUD5F7RT
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HZjErehRU9rNwPh5revT1i
        subject_person_id: p_CqWcVYSg6WmAq3fUD5F7RT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RtwgNwfpmdMBfBxqW1kvSk
          claim_id: c_HZjErehRU9rNwPh5revT1i
          source_id: s_Vk1EZ2Sn4WSAXWmtzGB526
          stance: supports
          locator: CBDB:119723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119723）
          source: &a1
            id: s_Vk1EZ2Sn4WSAXWmtzGB526
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 119723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119723&o=json
            external_identifier: CBDB:119723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSh9BAnTQXPBSTkZPm6Yo5
        subject_person_id: p_CqWcVYSg6WmAq3fUD5F7RT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，宋人物。籍贯兩浙西路。（中国历代人物传记资料库 CBDB 119723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1lvRSvTvV36tWwRVhiKYoL
          claim_id: c_HSh9BAnTQXPBSTkZPm6Yo5
          source_id: s_Vk1EZ2Sn4WSAXWmtzGB526
          stance: supports
          locator: CBDB:119723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Prc3xRA0_hoqDHp3E_tY3M
        subject_person_id: p_17a7h6QnbHXFMMvBUxCLbB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqWcVYSg6WmAq3fUD5F7RT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJ0vGH23growquyHrrX33g
          claim_id: c_Prc3xRA0_hoqDHp3E_tY3M
          source_id: s_Vk1EZ2Sn4WSAXWmtzGB526
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_17a7h6QnbHXFMMvBUxCLbB
        status: active
        display_name: 王子韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，宋人物。籍贯兩浙西路。（中国历代人物传记资料库 CBDB 119723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_17a7h6QnbHXFMMvBUxCLbB | 王子韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 119723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119723&o=json)

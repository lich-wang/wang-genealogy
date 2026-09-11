---
schema: wang-person/v1
id: p_ysj9zCMvPkKZNwe25QEque
status: active
merged_into: null
display_name: 王大有
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUQGXyCUDnAD8rKjmunrTu
        subject_person_id: p_ysj9zCMvPkKZNwe25QEque
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zr9RgrR9ebLENefyzm3nw8
          claim_id: c_jUQGXyCUDnAD8rKjmunrTu
          source_id: s_gg3t4hjmB7YtPg7AXqVdZm
          stance: supports
          locator: CBDB:327773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327773）
          source: &a1
            id: s_gg3t4hjmB7YtPg7AXqVdZm
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 327773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327773&o=json
            external_identifier: CBDB:327773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PsBH7Hn3sZNsBDTk9NvNDQ
        subject_person_id: p_ysj9zCMvPkKZNwe25QEque
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
        - id: cs_1WfwFVJ3EFN3rn28qDQMLQ
          claim_id: c_PsBH7Hn3sZNsBDTk9NvNDQ
          source_id: s_gg3t4hjmB7YtPg7AXqVdZm
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
        id: c_9n9vMkp-lTVlffFPa7hOA9
        subject_person_id: p_ysj9zCMvPkKZNwe25QEque
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3EBS2K6Hzf1gDCygfC7XB
          claim_id: c_9n9vMkp-lTVlffFPa7hOA9
          source_id: s_gg3t4hjmB7YtPg7AXqVdZm
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jmQBNF2thuLTj5CEgg4gFw
        status: active
        display_name: 王宗載
        merged_into_person_id: null
  other: []
---

# 王大有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大有 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jmQBNF2thuLTj5CEgg4gFw | 王宗載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 327773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327773&o=json)

---
schema: wang-person/v1
id: p_1vXBcYgVQiVxBH61v91xXQ
status: active
merged_into: null
display_name: 王廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDhR4jaL69wNS1TE9Uxuf4
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VsxWwWWuq6QVEJwgAgNSnP
          claim_id: c_tDhR4jaL69wNS1TE9Uxuf4
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: CBDB:304722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304722）
          source: &a1
            id: s_LCWsS3btiTdj2aM5MXxBoq
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 304722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json
            external_identifier: CBDB:304722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VUrYn95jZZvSy1buk62C5B
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
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
        - id: cs_G5kVDJ3Y4X3G6N2GF1CRDZ
          claim_id: c_VUrYn95jZZvSy1buk62C5B
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
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
        id: c_N4f5w6qE-csJzv_mqoMhbv
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LI2grqW6rhQH6tKv1bdAjA
          claim_id: c_N4f5w6qE-csJzv_mqoMhbv
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z6vCWYnkMUoH1H52LSJS5y
        status: active
        display_name: 王俸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z6vCWYnkMUoH1H52LSJS5y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 304722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json)

---
schema: wang-person/v1
id: p_5P2pjqjJXngJU3ZE1Djfif
status: active
merged_into: null
display_name: 王諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_shreXJrA9uogWFBiFhKqhN
        subject_person_id: p_5P2pjqjJXngJU3ZE1Djfif
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gF28szvBGTSq6KA7SxCLDc
          claim_id: c_shreXJrA9uogWFBiFhKqhN
          source_id: s_eMw8s9mxJvVggKxzwAm6CA
          stance: supports
          locator: CBDB:271245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271245）
          source: &a1
            id: s_eMw8s9mxJvVggKxzwAm6CA
            source_type: api_record
            title: 中国历代人物传记资料库：王諒（CBDB 271245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271245&o=json
            external_identifier: CBDB:271245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_548ULy4e8FqPpQGk462Dy9
        subject_person_id: p_5P2pjqjJXngJU3ZE1Djfif
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
        - id: cs_AkWvbCzFL9i1NmyenKQkx4
          claim_id: c_548ULy4e8FqPpQGk462Dy9
          source_id: s_eMw8s9mxJvVggKxzwAm6CA
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
        id: c_JMgkPFhM5oPcTB3UB8SIpr
        subject_person_id: p_5P2pjqjJXngJU3ZE1Djfif
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S8npJt6xyWtdFEv7fZiZK9
          claim_id: c_JMgkPFhM5oPcTB3UB8SIpr
          source_id: s_eMw8s9mxJvVggKxzwAm6CA
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U9mkTVdbhdN8j3G86uAN6S
        status: active
        display_name: 王注
        merged_into_person_id: null
  other: []
---

# 王諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_U9mkTVdbhdN8j3G86uAN6S | 王注 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諒（CBDB 271245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271245&o=json)

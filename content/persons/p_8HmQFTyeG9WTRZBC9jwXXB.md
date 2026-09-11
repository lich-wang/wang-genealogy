---
schema: wang-person/v1
id: p_8HmQFTyeG9WTRZBC9jwXXB
status: active
merged_into: null
display_name: 諸助
revision: 1
cbdb_id: 134050
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWtyBhzSkgH_GTLWw58fj8
        subject_person_id: p_8HmQFTyeG9WTRZBC9jwXXB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 諸助
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LG9FmOPBVmbM4NHvGeE5A
          claim_id: c_nWtyBhzSkgH_GTLWw58fj8
          source_id: s_p8RI0eH4gmaeV3ZTGHIAnb
          stance: supports
          locator: CBDB:134050
          quotation: null
          interpretation_note: CBDB 明确记录的王順配偶
          source: &a1
            id: s_p8RI0eH4gmaeV3ZTGHIAnb
            source_type: api_record
            title: 中国历代人物传记资料库：諸助(王順妻)（CBDB 134050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134050&o=json
            external_identifier: CBDB:134050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XX9KmwPvsfIRV04YUUC0UU
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8HmQFTyeG9WTRZBC9jwXXB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1kXKuZ2pLk646Sc-HnxeN
          claim_id: c_XX9KmwPvsfIRV04YUUC0UU
          source_id: s_p8RI0eH4gmaeV3ZTGHIAnb
          stance: supports
          locator: 宋濂全集，1195：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 諸助

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 諸助 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：諸助(王順妻)（CBDB 134050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134050&o=json)

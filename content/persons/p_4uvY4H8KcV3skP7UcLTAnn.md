---
schema: wang-person/v1
id: p_4uvY4H8KcV3skP7UcLTAnn
status: active
merged_into: null
display_name: 王田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PARZPb36D4eCo9PF5UJYDV
        subject_person_id: p_4uvY4H8KcV3skP7UcLTAnn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RprC9ZccU8BQFuSBvHgYz5
          claim_id: c_PARZPb36D4eCo9PF5UJYDV
          source_id: s_QFW4Lnm4uDhw9uMoBdYHzE
          stance: supports
          locator: CBDB:478023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478023）
          source: &a1
            id: s_QFW4Lnm4uDhw9uMoBdYHzE
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 478023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478023&o=json
            external_identifier: CBDB:478023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cYHxznyuus3wKLmGUzt4Cx
        subject_person_id: p_4uvY4H8KcV3skP7UcLTAnn
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
        - id: cs_QLpZgUCiKfm17gQcbrXAG9
          claim_id: c_cYHxznyuus3wKLmGUzt4Cx
          source_id: s_QFW4Lnm4uDhw9uMoBdYHzE
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
  descendants: []
  other: []
---

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王田 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王田（CBDB 478023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478023&o=json)

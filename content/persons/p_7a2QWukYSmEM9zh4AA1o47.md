---
schema: wang-person/v1
id: p_7a2QWukYSmEM9zh4AA1o47
status: active
merged_into: null
display_name: 王得孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JSvtY6p2S6hU4AV1YfchXW
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BMC45wc8UFcLMg3QGmegT1
          claim_id: c_JSvtY6p2S6hU4AV1YfchXW
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
          stance: supports
          locator: CBDB:126702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126702）
          source: &a1
            id: s_52T2aSFWsr5m5vZdKN9n9v
            source_type: api_record
            title: 中国历代人物传记资料库：王得孚（CBDB 126702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126702&o=json
            external_identifier: CBDB:126702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WkQyrBxTF1WmkPSavcBLq1
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_br6tuLdUvgCPq491qUGk4j
          claim_id: c_WkQyrBxTF1WmkPSavcBLq1
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rKzw3a21sKDxipRVN8qV9R
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1530年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjSQ66wS9Q1qFvq4WkKQEc
          claim_id: c_rKzw3a21sKDxipRVN8qV9R
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXYBRotF5czm769mLXuCiN
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
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
        - id: cs_ACAHHXB5tsSu2gNsHthQJG
          claim_id: c_JXYBRotF5czm769mLXuCiN
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
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

# 王得孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得孚 | accepted |
| birth.date | 1440年 | accepted |
| death.date | 1530年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得孚（CBDB 126702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126702&o=json)

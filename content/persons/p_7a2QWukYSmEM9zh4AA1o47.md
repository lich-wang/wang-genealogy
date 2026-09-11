---
schema: wang-person/v1
id: p_7a2QWukYSmEM9zh4AA1o47
status: active
merged_into: null
display_name: 王得孚
revision: 2
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
  ancestors:
    - claim:
        id: c_tBpcOBdtvxiV0o3Ni0bm4Y
        subject_person_id: p_56sUTAFmEaA2xmEhCBUKJe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MgKOP6oBu3t12LyCv9mcqW
          claim_id: c_tBpcOBdtvxiV0o3Ni0bm4Y
          source_id: s_G66pvrkQBVFyLYKQcjc7E3
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G66pvrkQBVFyLYKQcjc7E3
            source_type: api_record
            title: 中国历代人物传记资料库：王永芳（CBDB 241839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241839&o=json
            external_identifier: CBDB:241839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56sUTAFmEaA2xmEhCBUKJe
        status: active
        display_name: 王永芳
        merged_into_person_id: null
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
| ancestors | p_56sUTAFmEaA2xmEhCBUKJe | 王永芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得孚（CBDB 126702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126702&o=json)
- [中国历代人物传记资料库：王永芳（CBDB 241839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241839&o=json)

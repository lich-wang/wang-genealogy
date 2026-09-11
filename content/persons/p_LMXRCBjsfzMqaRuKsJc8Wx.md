---
schema: wang-person/v1
id: p_LMXRCBjsfzMqaRuKsJc8Wx
status: active
merged_into: null
display_name: 王津
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tik93HQ1YvGYLeLJ3zYBtM
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DuQxaysjXFxWgB6wFByDrN
          claim_id: c_tik93HQ1YvGYLeLJ3zYBtM
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: CBDB:213202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213202）
          source: &a1
            id: s_h4fb8hebaSCF7ivWsq6wnS
            source_type: api_record
            title: 中国历代人物传记资料库：王津（CBDB 213202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json
            external_identifier: CBDB:213202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7UsFWJHe7q2uWJBV2ScYE
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王津，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213202）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qCJdKr3-3RL9jpn94-mH2E
          claim_id: c_A7UsFWJHe7q2uWJBV2ScYE
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: CBDB:213202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_L5WOaYm1xQcbfOVzQSl9-a
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TirH8Xhthe5OfN8szaPtV
          claim_id: c_L5WOaYm1xQcbfOVzQSl9-a
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王津

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王津 | accepted |
| bio.summary | 王津，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王津（CBDB 213202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json)

---
schema: wang-person/v1
id: p_v5g4H2q2EXrnEQmwfqdSHb
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rtj3YShRF6hxdw42Nug8AR
        subject_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLehUfDbD3t8bo1NBVCvFg
          claim_id: c_rtj3YShRF6hxdw42Nug8AR
          source_id: s_qURiNbD8r7idLW4C6kMM7M
          stance: supports
          locator: CBDB:199368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199368）
          source: &a1
            id: s_qURiNbD8r7idLW4C6kMM7M
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 199368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199368&o=json
            external_identifier: CBDB:199368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A5xtc7XXUxYVvRu688haP8
        subject_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFTrV8fiFAQgt8vpyitD5b
          claim_id: c_A5xtc7XXUxYVvRu688haP8
          source_id: s_qURiNbD8r7idLW4C6kMM7M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWwR2BbwpngXQny879Q1RV
        subject_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
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
        - id: cs_LehoUw3xLMLmW4UwAmx1Rp
          claim_id: c_KWwR2BbwpngXQny879Q1RV
          source_id: s_qURiNbD8r7idLW4C6kMM7M
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
        id: c_inkTNKRHAlxmc0LkXuekha
        subject_person_id: p_3kCgZeVuvZ2BjS2o8M9UxN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZLgMI2M6bSgfQ6RvzxOg4G
          claim_id: c_inkTNKRHAlxmc0LkXuekha
          source_id: s_ZJC85z2W4p6LCYBq67GeB1
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZJC85z2W4p6LCYBq67GeB1
            source_type: api_record
            title: 中国历代人物传记资料库：王得（CBDB 244044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244044&o=json
            external_identifier: CBDB:244044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3kCgZeVuvZ2BjS2o8M9UxN
        status: active
        display_name: 王得
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3kCgZeVuvZ2BjS2o8M9UxN | 王得 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得（CBDB 244044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244044&o=json)
- [中国历代人物传记资料库：王溥（CBDB 199368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199368&o=json)

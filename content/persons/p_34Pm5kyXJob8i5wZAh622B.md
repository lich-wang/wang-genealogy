---
schema: wang-person/v1
id: p_34Pm5kyXJob8i5wZAh622B
status: active
merged_into: null
display_name: 王洋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jsXEkhpR8n9QmC1TQj3Db3
        subject_person_id: p_34Pm5kyXJob8i5wZAh622B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ct6VgDgDPVGAbPjnmNBJH2
          claim_id: c_jsXEkhpR8n9QmC1TQj3Db3
          source_id: s_x2rgzue3aiVLLpArCk4mhC
          stance: supports
          locator: CBDB:15443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（15443）
          source: &a1
            id: s_x2rgzue3aiVLLpArCk4mhC
            source_type: api_record
            title: 中国历代人物传记资料库：王洋（CBDB 15443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15443&o=json
            external_identifier: CBDB:15443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LPYVnJn2Lh4jeQNevcE5aU
        subject_person_id: p_34Pm5kyXJob8i5wZAh622B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSt1aiH8CNTufNQdFBUzFD
          claim_id: c_LPYVnJn2Lh4jeQNevcE5aU
          source_id: s_x2rgzue3aiVLLpArCk4mhC
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
        id: c_FjLCLRd1r9nVENrDHkGags
        subject_person_id: p_34Pm5kyXJob8i5wZAh622B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1153年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVAJoJfSR6DEYHtHHYPAAG
          claim_id: c_FjLCLRd1r9nVENrDHkGags
          source_id: s_x2rgzue3aiVLLpArCk4mhC
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
        id: c_858wsBQ1DC1hGVsqE9u7k1
        subject_person_id: p_34Pm5kyXJob8i5wZAh622B
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
        - id: cs_kRrAXZRkXCE14C7LBg7MqV
          claim_id: c_858wsBQ1DC1hGVsqE9u7k1
          source_id: s_x2rgzue3aiVLLpArCk4mhC
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
  spouses:
    - claim:
        id: c_BEiT8gKNqTCb26nXX0Z1x2
        subject_person_id: p_4i3jHPAhfhAhxjuPATCoyQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_34Pm5kyXJob8i5wZAh622B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-efwkhsxjEZXkwAOxqEQkS
          claim_id: c_BEiT8gKNqTCb26nXX0Z1x2
          source_id: s_oVAzmPBkyJYTr557Ng41iJ
          stance: supports
          locator: CBDB 双向互证（丈夫 王洋 ⇄ 妻子 李珏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oVAzmPBkyJYTr557Ng41iJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李珏（5236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5236&o=json
            external_identifier: CBDB:5236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.740Z
            metadata_json: null
      object_person:
        id: p_4i3jHPAhfhAhxjuPATCoyQ
        status: active
        display_name: 李珏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王洋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洋 | accepted |
| birth.date | 1087年 | accepted |
| death.date | 1153年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4i3jHPAhfhAhxjuPATCoyQ | 李珏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洋（CBDB 15443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15443&o=json)
- [CBDB 中国历代人物传记资料库：李珏（5236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5236&o=json)

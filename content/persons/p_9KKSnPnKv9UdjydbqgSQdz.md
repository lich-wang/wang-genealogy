---
schema: wang-person/v1
id: p_9KKSnPnKv9UdjydbqgSQdz
status: active
merged_into: null
display_name: 王同祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMFPK2Z33SgTe6WM6auSR7
        subject_person_id: p_9KKSnPnKv9UdjydbqgSQdz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvgL2rDpFbnF9x5pwHW85B
          claim_id: c_AMFPK2Z33SgTe6WM6auSR7
          source_id: s_ZwD1HCHazCgZwqQXMMDfV9
          stance: supports
          locator: CBDB:24875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24875）
          source: &a1
            id: s_ZwD1HCHazCgZwqQXMMDfV9
            source_type: api_record
            title: 中国历代人物传记资料库：王同祖（CBDB 24875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24875&o=json
            external_identifier: CBDB:24875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QJTsEsJkQUXES1TZuLPtQ
        subject_person_id: p_9KKSnPnKv9UdjydbqgSQdz
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
        - id: cs_yBoMWCg89hP7nX25ogRWFa
          claim_id: c_1QJTsEsJkQUXES1TZuLPtQ
          source_id: s_ZwD1HCHazCgZwqQXMMDfV9
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
        id: c_lAt7PDY1QyjpU6CF66PehQ
        subject_person_id: p_N1sjWWAngPbNQ5mXRM9s3H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9KKSnPnKv9UdjydbqgSQdz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__lkwflXSSwCZ7Ds6a8ykp0
          claim_id: c_lAt7PDY1QyjpU6CF66PehQ
          source_id: s_ZwD1HCHazCgZwqQXMMDfV9
          stance: supports
          locator: 全宋文，卷 7197：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N1sjWWAngPbNQ5mXRM9s3H
        status: active
        display_name: 王介
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同祖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_N1sjWWAngPbNQ5mXRM9s3H | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同祖（CBDB 24875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24875&o=json)

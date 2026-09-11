---
schema: wang-person/v1
id: p_q3G6EYiKzzFYDRCt1Ch6Ta
status: active
merged_into: null
display_name: 王謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iMyaKeNkyfGnzf8njqefFz
        subject_person_id: p_q3G6EYiKzzFYDRCt1Ch6Ta
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4nWUUrN7TdLaQvCbrsyVNB
          claim_id: c_iMyaKeNkyfGnzf8njqefFz
          source_id: s_6m3CSjstQFqnz7dybZvaFi
          stance: supports
          locator: CBDB:100982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100982）
          source: &a1
            id: s_6m3CSjstQFqnz7dybZvaFi
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 100982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100982&o=json
            external_identifier: CBDB:100982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9cJ19Pbc3ZrED6zK2L39X
        subject_person_id: p_q3G6EYiKzzFYDRCt1Ch6Ta
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZJr8evDJgJJpGcpVHwq1T
          claim_id: c_x9cJ19Pbc3ZrED6zK2L39X
          source_id: s_6m3CSjstQFqnz7dybZvaFi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eiSydMmB2rD2CQQaBfIXjr
        subject_person_id: p_bnA3961k3JoTm11z7TSTS5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3G6EYiKzzFYDRCt1Ch6Ta
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_PR2gOqY4tUYOdFJM-81L
          claim_id: c_eiSydMmB2rD2CQQaBfIXjr
          source_id: s_VsD9ktYiW3BBpq7VUSucRs
          stance: supports
          locator: 元人傳記資料索引，809：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VsD9ktYiW3BBpq7VUSucRs
            source_type: api_record
            title: 中国历代人物传记资料库：王泰來（CBDB 22241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json
            external_identifier: CBDB:22241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bnA3961k3JoTm11z7TSTS5
        status: active
        display_name: 王泰來
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bnA3961k3JoTm11z7TSTS5 | 王泰來 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 100982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100982&o=json)
- [中国历代人物传记资料库：王泰來（CBDB 22241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22241&o=json)

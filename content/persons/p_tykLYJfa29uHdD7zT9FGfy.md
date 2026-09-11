---
schema: wang-person/v1
id: p_tykLYJfa29uHdD7zT9FGfy
status: active
merged_into: null
display_name: 王開
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5mJtN4bjDeCLQ6MqLzQ5A
        subject_person_id: p_tykLYJfa29uHdD7zT9FGfy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u6an5nzrDNz5UpK6ZFcm2E
          claim_id: c_n5mJtN4bjDeCLQ6MqLzQ5A
          source_id: s_LrcW86HC6WeUXxy41o3A77
          stance: supports
          locator: CBDB:384614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384614）
          source: &a1
            id: s_LrcW86HC6WeUXxy41o3A77
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 384614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384614&o=json
            external_identifier: CBDB:384614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WD3P1ZhNEGDMKci7hnziNB
        subject_person_id: p_tykLYJfa29uHdD7zT9FGfy
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
        - id: cs_B2thHAUH6FVAFBDpAbexiy
          claim_id: c_WD3P1ZhNEGDMKci7hnziNB
          source_id: s_LrcW86HC6WeUXxy41o3A77
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
        id: c_sq4R39Vwy7hJg6POVqmcVM
        subject_person_id: p_tykLYJfa29uHdD7zT9FGfy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BB551pX7HBHf4CAtBHuMmH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8MaoqQeY4JkeV5cgt6MNc
          claim_id: c_sq4R39Vwy7hJg6POVqmcVM
          source_id: s_HQBG68YRTERLy2mnXHfgt1
          stance: supports
          locator: 蘭溪縣志，13：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HQBG68YRTERLy2mnXHfgt1
            source_type: api_record
            title: 中国历代人物传记资料库：王宗澤（CBDB 384616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384616&o=json
            external_identifier: CBDB:384616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BB551pX7HBHf4CAtBHuMmH
        status: active
        display_name: 王宗澤
        merged_into_person_id: null
  other: []
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BB551pX7HBHf4CAtBHuMmH | 王宗澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 384614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384614&o=json)
- [中国历代人物传记资料库：王宗澤（CBDB 384616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384616&o=json)

---
schema: wang-person/v1
id: p_2QBKdoQihD7L78RRdUmqCg
status: active
merged_into: null
display_name: 王士元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U3ccCF7XDyydnVJu1kSi8J
        subject_person_id: p_2QBKdoQihD7L78RRdUmqCg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4JPJemkMAJWnH5z8jqe6nh
          claim_id: c_U3ccCF7XDyydnVJu1kSi8J
          source_id: s_RnmN5BwuQ1BAXVDgE4WDeM
          stance: supports
          locator: CBDB:45879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45879）
          source: &a1
            id: s_RnmN5BwuQ1BAXVDgE4WDeM
            source_type: api_record
            title: 中国历代人物传记资料库：王士元（CBDB 45879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45879&o=json
            external_identifier: CBDB:45879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hjqi1mFmarJbZtym5SzLKs
        subject_person_id: p_2QBKdoQihD7L78RRdUmqCg
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
        - id: cs_fNCYDvoQE2YVA1Az7uwckm
          claim_id: c_Hjqi1mFmarJbZtym5SzLKs
          source_id: s_RnmN5BwuQ1BAXVDgE4WDeM
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
        id: c_iNvRJqkHd52v0k7r5wIgNu
        subject_person_id: p_5Q5kcbebUfut1oa58PJD9Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2QBKdoQihD7L78RRdUmqCg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ItwVf7WfxjlmXwsOMWeDPa
          claim_id: c_iNvRJqkHd52v0k7r5wIgNu
          source_id: s_RnmN5BwuQ1BAXVDgE4WDeM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1387：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5Q5kcbebUfut1oa58PJD9Q
        status: active
        display_name: 王仁壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士元 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5Q5kcbebUfut1oa58PJD9Q | 王仁壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士元（CBDB 45879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45879&o=json)

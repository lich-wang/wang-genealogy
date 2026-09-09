---
schema: wang-person/v1
id: p_2LmAoLQfacgJM3Ub6uRAgM
status: active
merged_into: null
display_name: 王烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2WpKtNAPJ2PCc6B23KfvDA
        subject_person_id: p_2LmAoLQfacgJM3Ub6uRAgM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7tnxMdneAPMD44C1PT5GB4
          claim_id: c_2WpKtNAPJ2PCc6B23KfvDA
          source_id: s_DMWGwN7H5DNmedpaWr7xXi
          stance: supports
          locator: CBDB:139697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139697）
          source: &a1
            id: s_DMWGwN7H5DNmedpaWr7xXi
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139697&o=json
            external_identifier: CBDB:139697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9CP3VrNWtR78WFP1ZK4Cm4
        subject_person_id: p_2LmAoLQfacgJM3Ub6uRAgM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qu3oYc58gt5W1oJZM9LC8d
          claim_id: c_9CP3VrNWtR78WFP1ZK4Cm4
          source_id: s_DMWGwN7H5DNmedpaWr7xXi
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
        id: c_AKP1ES4pjeM7SDFcVgPhEQ
        subject_person_id: p_2LmAoLQfacgJM3Ub6uRAgM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jptRJNcek8Rwepv4xn3xVa
          claim_id: c_AKP1ES4pjeM7SDFcVgPhEQ
          source_id: s_DMWGwN7H5DNmedpaWr7xXi
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
        id: c_X4tRUys6qiB4EHQTQzrRPV
        subject_person_id: p_2LmAoLQfacgJM3Ub6uRAgM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gb299J3GT1BkxwjDnrFy82
          claim_id: c_X4tRUys6qiB4EHQTQzrRPV
          source_id: s_DMWGwN7H5DNmedpaWr7xXi
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

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| birth.date | 662年 | accepted |
| death.date | 677年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139697&o=json)

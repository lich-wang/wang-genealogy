---
schema: wang-person/v1
id: p_7j7J49ngvvxhFKjvaiM9YM
status: active
merged_into: null
display_name: 王勤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ivK2ECSFNsDh7iRDu2maGR
        subject_person_id: p_7j7J49ngvvxhFKjvaiM9YM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1muPeSmQk2qJdkcAAWEJUb
          claim_id: c_ivK2ECSFNsDh7iRDu2maGR
          source_id: s_LVpsska5H3con7HuzkMsqm
          stance: supports
          locator: CBDB:257023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257023）
          source: &a1
            id: s_LVpsska5H3con7HuzkMsqm
            source_type: api_record
            title: 中国历代人物传记资料库：王勤（CBDB 257023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257023&o=json
            external_identifier: CBDB:257023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jcwaQqMDcr6svpwLX7X3v
        subject_person_id: p_7j7J49ngvvxhFKjvaiM9YM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d1OqDZGQoZe9lkDxqvFWyn
          claim_id: c_5jcwaQqMDcr6svpwLX7X3v
          source_id: s_LVpsska5H3con7HuzkMsqm
          stance: supports
          locator: CBDB:257023
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_kR_NSE8S2Waq6uhPIKfNQ4
        subject_person_id: p_7j7J49ngvvxhFKjvaiM9YM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XP0kDe01nBXgV5WXd5p8KI
          claim_id: c_kR_NSE8S2Waq6uhPIKfNQ4
          source_id: s_LVpsska5H3con7HuzkMsqm
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y6fRdWmSHjB68krJYq7FPT
        status: active
        display_name: 王杲
        merged_into_person_id: null
  other: []
---

# 王勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勤 | accepted |
| bio.summary | 王勤，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Y6fRdWmSHjB68krJYq7FPT | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勤（CBDB 257023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257023&o=json)

---
schema: wang-person/v1
id: p_rZybDyRe2HKfQnCBb1Pk1a
status: active
merged_into: null
display_name: 王師文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XMMRoQy5jfy6AE97i9nZ3H
        subject_person_id: p_rZybDyRe2HKfQnCBb1Pk1a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H8khtnh1XJFgHyDWNJKmQr
          claim_id: c_XMMRoQy5jfy6AE97i9nZ3H
          source_id: s_j6Ka3JzJWF9gWkvE4AKRiu
          stance: supports
          locator: CBDB:36394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36394）
          source: &a1
            id: s_j6Ka3JzJWF9gWkvE4AKRiu
            source_type: api_record
            title: 中国历代人物传记资料库：王師文（CBDB 36394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36394&o=json
            external_identifier: CBDB:36394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CB22Pr8bzvHx1aNQ9WdSoD
        subject_person_id: p_rZybDyRe2HKfQnCBb1Pk1a
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
        - id: cs_dsTB6n4JTEC1Zb2BkSh8PP
          claim_id: c_CB22Pr8bzvHx1aNQ9WdSoD
          source_id: s_j6Ka3JzJWF9gWkvE4AKRiu
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

# 王師文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師文 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師文（CBDB 36394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36394&o=json)

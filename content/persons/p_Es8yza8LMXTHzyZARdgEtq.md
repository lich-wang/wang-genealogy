---
schema: wang-person/v1
id: p_Es8yza8LMXTHzyZARdgEtq
status: active
merged_into: null
display_name: 王安貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UDmMxJcv27FAqtA6kC9Snj
        subject_person_id: p_Es8yza8LMXTHzyZARdgEtq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mm2EnnEFeQbsQc26J88fUm
          claim_id: c_UDmMxJcv27FAqtA6kC9Snj
          source_id: s_ucjjN7GFcSFfNHD6M2g2AN
          stance: supports
          locator: CBDB:35395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35395）
          source: &a1
            id: s_ucjjN7GFcSFfNHD6M2g2AN
            source_type: api_record
            title: 中国历代人物传记资料库：王安貞（CBDB 35395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json
            external_identifier: CBDB:35395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_db5nP6ydF9uKPjh6y5kPC1
        subject_person_id: p_Es8yza8LMXTHzyZARdgEtq
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
        - id: cs_nxotr5tCq3Awd3ZySC7qAN
          claim_id: c_db5nP6ydF9uKPjh6y5kPC1
          source_id: s_ucjjN7GFcSFfNHD6M2g2AN
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

# 王安貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安貞 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安貞（CBDB 35395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json)

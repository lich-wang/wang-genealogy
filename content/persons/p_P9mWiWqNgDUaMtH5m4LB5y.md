---
schema: wang-person/v1
id: p_P9mWiWqNgDUaMtH5m4LB5y
status: active
merged_into: null
display_name: 王綽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ff6VhJQ8U43s5JKJv4zem8
        subject_person_id: p_P9mWiWqNgDUaMtH5m4LB5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NooxGvFFQWGEywYRBynv8K
          claim_id: c_ff6VhJQ8U43s5JKJv4zem8
          source_id: s_3f8NELuxjQzRsQDV2HL9Ta
          stance: supports
          locator: CBDB:1770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1770）
          source: &a1
            id: s_3f8NELuxjQzRsQDV2HL9Ta
            source_type: api_record
            title: 中国历代人物传记资料库：王綽（CBDB 1770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1770&o=json
            external_identifier: CBDB:1770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cCi9osm5t61DJ3UaDpsUGx
        subject_person_id: p_P9mWiWqNgDUaMtH5m4LB5y
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
        - id: cs_GUiAUkomsPm1JmoWobM8bb
          claim_id: c_cCi9osm5t61DJ3UaDpsUGx
          source_id: s_3f8NELuxjQzRsQDV2HL9Ta
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

# 王綽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綽（CBDB 1770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1770&o=json)

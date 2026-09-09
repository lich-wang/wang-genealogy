---
schema: wang-person/v1
id: p_ejUC7CGVt86beHAZF1QQxo
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLwbj9JBQwz6SepnQCDdnn
        subject_person_id: p_ejUC7CGVt86beHAZF1QQxo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9T4vx3WM7csBqLyyze7gCB
          claim_id: c_VLwbj9JBQwz6SepnQCDdnn
          source_id: s_Fg18TG2dWykV7g4WVxApYz
          stance: supports
          locator: CBDB:210730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210730）
          source: &a1
            id: s_Fg18TG2dWykV7g4WVxApYz
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 210730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json
            external_identifier: CBDB:210730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HDFc4KA5d6ia4DovCH9bda
        subject_person_id: p_ejUC7CGVt86beHAZF1QQxo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mfPFpD2utAyAZ5MQceNoL
          claim_id: c_HDFc4KA5d6ia4DovCH9bda
          source_id: s_Fg18TG2dWykV7g4WVxApYz
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 210730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210730&o=json)

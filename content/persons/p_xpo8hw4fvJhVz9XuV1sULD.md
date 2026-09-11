---
schema: wang-person/v1
id: p_xpo8hw4fvJhVz9XuV1sULD
status: active
merged_into: null
display_name: 王治
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNvLz36q4vrQ7T5MYDvMJ1
        subject_person_id: p_xpo8hw4fvJhVz9XuV1sULD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qTGxEFwbf7gcEbZrDNkRhC
          claim_id: c_QNvLz36q4vrQ7T5MYDvMJ1
          source_id: s_FDDtUofmQHVAyvxbg83o9K
          stance: supports
          locator: CBDB:335476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335476）
          source: &a1
            id: s_FDDtUofmQHVAyvxbg83o9K
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 335476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335476&o=json
            external_identifier: CBDB:335476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QNsgNMmAV49baAHLx3o83L
        subject_person_id: p_xpo8hw4fvJhVz9XuV1sULD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335476）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2o38mAqyN6IAZT7ZxgMKbu
          claim_id: c_QNsgNMmAV49baAHLx3o83L
          source_id: s_FDDtUofmQHVAyvxbg83o9K
          stance: supports
          locator: CBDB:335476
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
        id: c_jVFZIv0ZsxrDWYe4i3lLuC
        subject_person_id: p_xpo8hw4fvJhVz9XuV1sULD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BL7rj7PHhF7F4oUMfTstQc
          claim_id: c_jVFZIv0ZsxrDWYe4i3lLuC
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
  other: []
---

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | 王治，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 335476） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
- [中国历代人物传记资料库：王治（CBDB 335476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335476&o=json)

---
schema: wang-person/v1
id: p_Fv6Y9VHXqQMoiEDU1qENe6
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BCbPQGNQ8MfQ5gGARQhZo9
        subject_person_id: p_Fv6Y9VHXqQMoiEDU1qENe6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QeqD6PVPi7sDLviynxB6uu
          claim_id: c_BCbPQGNQ8MfQ5gGARQhZo9
          source_id: s_E8c5gom4ootbeMvw3WRJLR
          stance: supports
          locator: CBDB:333523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333523）
          source: &a1
            id: s_E8c5gom4ootbeMvw3WRJLR
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 333523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333523&o=json
            external_identifier: CBDB:333523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFvRQuaPWgyrDKj6r6wZU7
        subject_person_id: p_Fv6Y9VHXqQMoiEDU1qENe6
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
        - id: cs_dWEQNQhTDKBtmT6okJnaEs
          claim_id: c_TFvRQuaPWgyrDKj6r6wZU7
          source_id: s_E8c5gom4ootbeMvw3WRJLR
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
        id: c_7_uj86wXDp55zfExW_vbvn
        subject_person_id: p_Fv6Y9VHXqQMoiEDU1qENe6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T96D3iBAKlKjUMeIfvkwgv
          claim_id: c_7_uj86wXDp55zfExW_vbvn
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ojc1Nx2sKvUhzNK6QBShJA
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 205461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json
            external_identifier: CBDB:205461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9cGcDit6NRvdLZ3oy6Mbe
        status: active
        display_name: 王一治
        merged_into_person_id: null
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_C9cGcDit6NRvdLZ3oy6Mbe | 王一治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 333523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333523&o=json)
- [中国历代人物传记资料库：王一治（CBDB 205461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json)

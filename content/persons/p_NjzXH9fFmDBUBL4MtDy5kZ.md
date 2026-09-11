---
schema: wang-person/v1
id: p_NjzXH9fFmDBUBL4MtDy5kZ
status: active
merged_into: null
display_name: 王震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vrUhLr3PgTKnPdKa7YALmh
        subject_person_id: p_NjzXH9fFmDBUBL4MtDy5kZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpZaq7tnHEUNKNucq82LPR
          claim_id: c_vrUhLr3PgTKnPdKa7YALmh
          source_id: s_MxNDnq59fxbUgH7BviRAF2
          stance: supports
          locator: CBDB:302717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302717）
          source: &a1
            id: s_MxNDnq59fxbUgH7BviRAF2
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 302717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302717&o=json
            external_identifier: CBDB:302717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChPS3iCRpHhED7orzNk5oQ
        subject_person_id: p_NjzXH9fFmDBUBL4MtDy5kZ
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
        - id: cs_VzSb3bXLkChfRTsnZ5gRZB
          claim_id: c_ChPS3iCRpHhED7orzNk5oQ
          source_id: s_MxNDnq59fxbUgH7BviRAF2
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
        id: c_oUDrKQbdGuRXMzngA-AN76
        subject_person_id: p_NjzXH9fFmDBUBL4MtDy5kZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUzzUYoY1yHQ-_EyG6lX4R
          claim_id: c_oUDrKQbdGuRXMzngA-AN76
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5zcswoRuK7oFRUJUGyavEE
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 203298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json
            external_identifier: CBDB:203298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6DErnJ465hB4EQ6obzhoFP
        status: active
        display_name: 王言
        merged_into_person_id: null
  other: []
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6DErnJ465hB4EQ6obzhoFP | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 203298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json)
- [中国历代人物传记资料库：王震（CBDB 302717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302717&o=json)

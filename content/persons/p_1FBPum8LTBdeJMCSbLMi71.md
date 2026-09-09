---
schema: wang-person/v1
id: p_1FBPum8LTBdeJMCSbLMi71
status: active
merged_into: null
display_name: 王曰可
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5H1LitL8wA4xN5ac9mK6sb
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aWkxF78Y4ittFKdaow8FMC
          claim_id: c_5H1LitL8wA4xN5ac9mK6sb
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
          stance: supports
          locator: CBDB:214227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214227）
          source: &a1
            id: s_Ew3yKZ6g5wxDGR12BzttQa
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 214227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json
            external_identifier: CBDB:214227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZA3b5cKeEb85Ui7bNU1MXT
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
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
        - id: cs_TJfwTaQUA27T7p2bJ2fHpB
          claim_id: c_ZA3b5cKeEb85Ui7bNU1MXT
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
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

# 王曰可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰可 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰可（CBDB 214227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json)

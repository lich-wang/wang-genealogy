---
schema: wang-person/v1
id: p_PzCR5khH48dxkyKzDoAsiq
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqUqsVPPiymnjmY1PyfoCL
        subject_person_id: p_PzCR5khH48dxkyKzDoAsiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ZPFzkje8M9HXCpfgeXP6T
          claim_id: c_jqUqsVPPiymnjmY1PyfoCL
          source_id: s_S1o6QFNMVkG52BsChDQhWE
          stance: supports
          locator: CBDB:200846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200846）
          source: &a1
            id: s_S1o6QFNMVkG52BsChDQhWE
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 200846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200846&o=json
            external_identifier: CBDB:200846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yr16r7M8eW8Dy2zwHaMHte
        subject_person_id: p_PzCR5khH48dxkyKzDoAsiq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8tCgY8wzhJNFHQkGbXC6V
          claim_id: c_yr16r7M8eW8Dy2zwHaMHte
          source_id: s_S1o6QFNMVkG52BsChDQhWE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2Q7PAtMzRCm5FRtbJeJF5
        subject_person_id: p_PzCR5khH48dxkyKzDoAsiq
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
        - id: cs_hAUNJ4QsQ1pSZ7HnrYz3gA
          claim_id: c_a2Q7PAtMzRCm5FRtbJeJF5
          source_id: s_S1o6QFNMVkG52BsChDQhWE
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 200846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200846&o=json)

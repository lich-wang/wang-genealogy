---
schema: wang-person/v1
id: p_GzUwRmP9J4qMSsDx68p3so
status: active
merged_into: null
display_name: 王尚文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zguipd8uBHkpEdVsQw3Tp7
        subject_person_id: p_GzUwRmP9J4qMSsDx68p3so
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N56sURRKK6P3eHPBHBaYBW
          claim_id: c_Zguipd8uBHkpEdVsQw3Tp7
          source_id: s_ntH8Pp5wUM7f1Z4x8dTUpB
          stance: supports
          locator: CBDB:343888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343888）
          source: &a1
            id: s_ntH8Pp5wUM7f1Z4x8dTUpB
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 343888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343888&o=json
            external_identifier: CBDB:343888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qs7mNthG953kjj6rL6U5b6
        subject_person_id: p_GzUwRmP9J4qMSsDx68p3so
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
        - id: cs_umVgS3rWUPHfRYxFo844qX
          claim_id: c_Qs7mNthG953kjj6rL6U5b6
          source_id: s_ntH8Pp5wUM7f1Z4x8dTUpB
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

# 王尚文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚文（CBDB 343888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343888&o=json)

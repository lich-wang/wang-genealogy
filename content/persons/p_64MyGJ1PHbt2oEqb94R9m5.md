---
schema: wang-person/v1
id: p_64MyGJ1PHbt2oEqb94R9m5
status: active
merged_into: null
display_name: 王元之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4B62HmZaaHpqKo5qJAAe6t
        subject_person_id: p_64MyGJ1PHbt2oEqb94R9m5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQLe4W6G2v81EtZTpKU5e6
          claim_id: c_4B62HmZaaHpqKo5qJAAe6t
          source_id: s_RJW4zBGUM7EpXiPujeyS38
          stance: supports
          locator: CBDB:532966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532966）
          source: &a1
            id: s_RJW4zBGUM7EpXiPujeyS38
            source_type: api_record
            title: 中国历代人物传记资料库：王元之（CBDB 532966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532966&o=json
            external_identifier: CBDB:532966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5YwYCKB4o32huKMun5Uj5
        subject_person_id: p_64MyGJ1PHbt2oEqb94R9m5
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
        - id: cs_6RBXkYMPbSoJYRo8pQiTmS
          claim_id: c_B5YwYCKB4o32huKMun5Uj5
          source_id: s_RJW4zBGUM7EpXiPujeyS38
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

# 王元之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元之（CBDB 532966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532966&o=json)

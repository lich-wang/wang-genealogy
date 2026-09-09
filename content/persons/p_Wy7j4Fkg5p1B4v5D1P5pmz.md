---
schema: wang-person/v1
id: p_Wy7j4Fkg5p1B4v5D1P5pmz
status: active
merged_into: null
display_name: 王茝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Whie6CgihvJ8BESPAB8Kwm
        subject_person_id: p_Wy7j4Fkg5p1B4v5D1P5pmz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u8WecRNUB2HC5dJ9W7gRH9
          claim_id: c_Whie6CgihvJ8BESPAB8Kwm
          source_id: s_3QpbrgXDhwBECE3wsa9WGg
          stance: supports
          locator: CBDB:640089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640089）
          source: &a1
            id: s_3QpbrgXDhwBECE3wsa9WGg
            source_type: api_record
            title: 中国历代人物传记资料库：王茝（CBDB 640089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640089&o=json
            external_identifier: CBDB:640089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Li1LkEGAHs4AeVefFQdiMG
        subject_person_id: p_Wy7j4Fkg5p1B4v5D1P5pmz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZWMS72VMDR64q9Fs6YhtC
          claim_id: c_Li1LkEGAHs4AeVefFQdiMG
          source_id: s_3QpbrgXDhwBECE3wsa9WGg
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

# 王茝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茝 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茝（CBDB 640089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640089&o=json)

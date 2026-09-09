---
schema: wang-person/v1
id: p_EF2EztPM6Y54TqPNFEyTSz
status: active
merged_into: null
display_name: 王蔭三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WL6oYmzEspw8uApAJvJJ88
        subject_person_id: p_EF2EztPM6Y54TqPNFEyTSz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPdaDMeUB5mCiyoSg6v5UQ
          claim_id: c_WL6oYmzEspw8uApAJvJJ88
          source_id: s_uZ371qA4mUV4YGXtsLLp2K
          stance: supports
          locator: CBDB:640152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640152）
          source: &a1
            id: s_uZ371qA4mUV4YGXtsLLp2K
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭三（CBDB 640152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640152&o=json
            external_identifier: CBDB:640152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEJduoXb8r9kVxcXxtTLDk
        subject_person_id: p_EF2EztPM6Y54TqPNFEyTSz
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
        - id: cs_MEeWgtEGGG11w4uBwVgseF
          claim_id: c_BEJduoXb8r9kVxcXxtTLDk
          source_id: s_uZ371qA4mUV4YGXtsLLp2K
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

# 王蔭三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭三 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭三（CBDB 640152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640152&o=json)

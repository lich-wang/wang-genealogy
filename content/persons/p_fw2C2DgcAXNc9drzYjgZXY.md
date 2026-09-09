---
schema: wang-person/v1
id: p_fw2C2DgcAXNc9drzYjgZXY
status: active
merged_into: null
display_name: 王錫文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ow1c8WYjn9Kdkoh78uj4CH
        subject_person_id: p_fw2C2DgcAXNc9drzYjgZXY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dgYUg2CW188gFF4RNxgpU5
          claim_id: c_ow1c8WYjn9Kdkoh78uj4CH
          source_id: s_fVMGhEK6YK8eoaiKuRJyND
          stance: supports
          locator: CBDB:640604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640604）
          source: &a1
            id: s_fVMGhEK6YK8eoaiKuRJyND
            source_type: api_record
            title: 中国历代人物传记资料库：王錫文（CBDB 640604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640604&o=json
            external_identifier: CBDB:640604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HznwNaUKBpobfSdFMYF9sd
        subject_person_id: p_fw2C2DgcAXNc9drzYjgZXY
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
        - id: cs_ta4fwuChbmWG9ha4equByV
          claim_id: c_HznwNaUKBpobfSdFMYF9sd
          source_id: s_fVMGhEK6YK8eoaiKuRJyND
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

# 王錫文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫文（CBDB 640604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640604&o=json)

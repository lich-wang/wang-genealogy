---
schema: wang-person/v1
id: p_GVdJXGRvXB9DxN69cdCCHG
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U1qt2W8FGBXFL2AnqwuC3R
        subject_person_id: p_GVdJXGRvXB9DxN69cdCCHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJAt15r8q7kXyaixmKUWt3
          claim_id: c_U1qt2W8FGBXFL2AnqwuC3R
          source_id: s_ynHz9LqQWRvEPH15SCETBF
          stance: supports
          locator: CBDB:230463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230463）
          source: &a1
            id: s_ynHz9LqQWRvEPH15SCETBF
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 230463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230463&o=json
            external_identifier: CBDB:230463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QjKFHBVwQTGt7AGXispTAY
        subject_person_id: p_GVdJXGRvXB9DxN69cdCCHG
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
        - id: cs_id2jCwChnZfpVwAKFJWcPd
          claim_id: c_QjKFHBVwQTGt7AGXispTAY
          source_id: s_ynHz9LqQWRvEPH15SCETBF
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 230463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230463&o=json)

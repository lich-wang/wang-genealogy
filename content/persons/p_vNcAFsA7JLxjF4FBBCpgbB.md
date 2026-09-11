---
schema: wang-person/v1
id: p_vNcAFsA7JLxjF4FBBCpgbB
status: active
merged_into: null
display_name: 王煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W4CVnBSVAjjbLQmzE9dDxV
        subject_person_id: p_vNcAFsA7JLxjF4FBBCpgbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_49QNN6NuPSbYnUNJFKUykU
          claim_id: c_W4CVnBSVAjjbLQmzE9dDxV
          source_id: s_xh53AT9z3H5mMDxAPh8wa8
          stance: supports
          locator: CBDB:343552
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343552）
          source: &a1
            id: s_xh53AT9z3H5mMDxAPh8wa8
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 343552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343552&o=json
            external_identifier: CBDB:343552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1mNM12KRnAKLSxyPHHXpa
        subject_person_id: p_vNcAFsA7JLxjF4FBBCpgbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦，清人物。明清進士進士，籍贯肅寧，入仕進士。（中国历代人物传记资料库 CBDB 343552）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fJeZ737w50w8bU6x89yZ88
          claim_id: c_w1mNM12KRnAKLSxyPHHXpa
          source_id: s_xh53AT9z3H5mMDxAPh8wa8
          stance: supports
          locator: CBDB:343552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| bio.summary | 王煦，清人物。明清進士進士，籍贯肅寧，入仕進士。（中国历代人物传记资料库 CBDB 343552） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煦（CBDB 343552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343552&o=json)

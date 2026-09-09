---
schema: wang-person/v1
id: p_VLXHmJpMp4wz4g5naM2r4z
status: active
merged_into: null
display_name: 王密
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eM8p53rYvxETLPF9gFCEdG
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xojeij5vNUo7E22TMH3NWu
          claim_id: c_eM8p53rYvxETLPF9gFCEdG
          source_id: s_STwMwE7heahqrujmFTvwjM
          stance: supports
          locator: CBDB:304271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304271）
          source: &a1
            id: s_STwMwE7heahqrujmFTvwjM
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 304271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json
            external_identifier: CBDB:304271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N22uDXphBVco68Xf4na1en
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
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
        - id: cs_PqoFKPbFEUe2SoQ4Gkf7yC
          claim_id: c_N22uDXphBVco68Xf4na1en
          source_id: s_STwMwE7heahqrujmFTvwjM
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

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 304271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json)

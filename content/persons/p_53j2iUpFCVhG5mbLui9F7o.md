---
schema: wang-person/v1
id: p_53j2iUpFCVhG5mbLui9F7o
status: active
merged_into: null
display_name: 王家彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jzw2c1L73QPLPooz1cC8tE
        subject_person_id: p_53j2iUpFCVhG5mbLui9F7o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GK8rCN8rDB33tnDwAVL89f
          claim_id: c_jzw2c1L73QPLPooz1cC8tE
          source_id: s_d5Xx73jYXZGffrf3S9G3Hn
          stance: supports
          locator: CBDB:342519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342519）
          source: &a1
            id: s_d5Xx73jYXZGffrf3S9G3Hn
            source_type: api_record
            title: 中国历代人物传记资料库：王家彥（CBDB 342519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342519&o=json
            external_identifier: CBDB:342519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LvMqdJBGUaV2p4DV31LCAF
        subject_person_id: p_53j2iUpFCVhG5mbLui9F7o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家彥，明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 342519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DX7CaVHgqWOi4WujNgnE3b
          claim_id: c_LvMqdJBGUaV2p4DV31LCAF
          source_id: s_d5Xx73jYXZGffrf3S9G3Hn
          stance: supports
          locator: CBDB:342519
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

# 王家彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家彥 | accepted |
| bio.summary | 王家彥，明人物。明清進士進士，籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 342519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家彥（CBDB 342519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342519&o=json)

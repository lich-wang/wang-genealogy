---
schema: wang-person/v1
id: p_6SkRzPvYC49deJJ5756Tsc
status: active
merged_into: null
display_name: 王璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFnNKcbVNByjgM93LHnAug
        subject_person_id: p_6SkRzPvYC49deJJ5756Tsc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTggtiLgC5k6Lkq97P6dV3
          claim_id: c_zFnNKcbVNByjgM93LHnAug
          source_id: s_vENKVDFY5eKBocjy3WM7Dj
          stance: supports
          locator: CBDB:267886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267886）
          source: &a1
            id: s_vENKVDFY5eKBocjy3WM7Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 267886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json
            external_identifier: CBDB:267886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eokX6g9C8uhpoEo7sgAPyM
        subject_person_id: p_6SkRzPvYC49deJJ5756Tsc
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
        - id: cs_2qV49S2RNKEMNqRamL8UsZ
          claim_id: c_eokX6g9C8uhpoEo7sgAPyM
          source_id: s_vENKVDFY5eKBocjy3WM7Dj
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
  descendants:
    - claim:
        id: c_iz4qnnmWPRJMbHn8S5sE-u
        subject_person_id: p_6SkRzPvYC49deJJ5756Tsc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZovQZ4wojWUMm881WczAtq
          claim_id: c_iz4qnnmWPRJMbHn8S5sE-u
          source_id: s_vENKVDFY5eKBocjy3WM7Dj
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 267886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json)

---
schema: wang-person/v1
id: p_GtiHdSXyEzwPD4VNzAPsSZ
status: active
merged_into: null
display_name: 王幼珥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5jq6M7idY2N7LHRLiHKYH
        subject_person_id: p_GtiHdSXyEzwPD4VNzAPsSZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼珥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7ezFCJmrG3rfgMv3wcrNp
          claim_id: c_i5jq6M7idY2N7LHRLiHKYH
          source_id: s_bno4PWXd99MbJ48K1Kv3AB
          stance: supports
          locator: CBDB:637410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637410）
          source: &a1
            id: s_bno4PWXd99MbJ48K1Kv3AB
            source_type: api_record
            title: 中国历代人物传记资料库：王幼珥（CBDB 637410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637410&o=json
            external_identifier: CBDB:637410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kT8yPdgB2A81UeAwL1Gg82
        subject_person_id: p_GtiHdSXyEzwPD4VNzAPsSZ
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
        - id: cs_7S7DDUxBZVEi1ApKhc3BDR
          claim_id: c_kT8yPdgB2A81UeAwL1Gg82
          source_id: s_bno4PWXd99MbJ48K1Kv3AB
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

# 王幼珥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王幼珥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王幼珥（CBDB 637410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637410&o=json)

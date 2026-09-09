---
schema: wang-person/v1
id: p_6RnvtVYq6URbPHfMHXcuj8
status: active
merged_into: null
display_name: 王世荃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uAkutmhU9WGfrY4UmYjkTn
        subject_person_id: p_6RnvtVYq6URbPHfMHXcuj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世荃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zoSY8RZFCaFmwVVefk2r1z
          claim_id: c_uAkutmhU9WGfrY4UmYjkTn
          source_id: s_nHECEve7mRZ1n3cKy9E1dX
          stance: supports
          locator: CBDB:71460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71460）
          source: &a1
            id: s_nHECEve7mRZ1n3cKy9E1dX
            source_type: api_record
            title: 中国历代人物传记资料库：王世荃（CBDB 71460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71460&o=json
            external_identifier: CBDB:71460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_b5AGGNgp4rpLDH6p8mPH1K
        subject_person_id: p_6RnvtVYq6URbPHfMHXcuj8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1785年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5kv6N85CCRxHpDPgYhxrJ
          claim_id: c_b5AGGNgp4rpLDH6p8mPH1K
          source_id: s_nHECEve7mRZ1n3cKy9E1dX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w266b1NE15Z3pRb6Yq6HQD
        subject_person_id: p_6RnvtVYq6URbPHfMHXcuj8
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
        - id: cs_43fJQmGUz8szLARFDQyuaD
          claim_id: c_w266b1NE15Z3pRb6Yq6HQD
          source_id: s_nHECEve7mRZ1n3cKy9E1dX
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

# 王世荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世荃 | accepted |
| birth.date | 1785年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世荃（CBDB 71460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71460&o=json)

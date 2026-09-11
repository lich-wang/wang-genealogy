---
schema: wang-person/v1
id: p_UsKD1vi4zKGNSTBQQEmz2X
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u1LFjoYRDBsa3VkcRpUnNZ
        subject_person_id: p_UsKD1vi4zKGNSTBQQEmz2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4MyZ4YNX2VnFZawcgvte5
          claim_id: c_u1LFjoYRDBsa3VkcRpUnNZ
          source_id: s_hyqZ87bcXbjUSVMoUwrKuW
          stance: supports
          locator: CBDB:39105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39105）
          source: &a1
            id: s_hyqZ87bcXbjUSVMoUwrKuW
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 39105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39105&o=json
            external_identifier: CBDB:39105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ecBJN1SSoT4AVbak74GTj8
        subject_person_id: p_UsKD1vi4zKGNSTBQQEmz2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，宋人物。籍贯晉江，身份为理學家，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 39105）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J5EU6S0HTMtcZrtyLJg20s
          claim_id: c_ecBJN1SSoT4AVbak74GTj8
          source_id: s_hyqZ87bcXbjUSVMoUwrKuW
          stance: supports
          locator: CBDB:39105
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，宋人物。籍贯晉江，身份为理學家，入仕進士，曾任縣主簿。（中国历代人物传记资料库 CBDB 39105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 39105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39105&o=json)

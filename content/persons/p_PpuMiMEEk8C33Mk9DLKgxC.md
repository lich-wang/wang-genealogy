---
schema: wang-person/v1
id: p_PpuMiMEEk8C33Mk9DLKgxC
status: active
merged_into: null
display_name: 王顥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57SKrByo7F382DFxnhsfNs
        subject_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vjWLfHhafP3f4Meh3AExxA
          claim_id: c_57SKrByo7F382DFxnhsfNs
          source_id: s_benPWxWtDv3DpaRHLH9m7y
          stance: supports
          locator: CBDB:336763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336763）
          source: &a1
            id: s_benPWxWtDv3DpaRHLH9m7y
            source_type: api_record
            title: 中国历代人物传记资料库：王顥（CBDB 336763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json
            external_identifier: CBDB:336763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eBLRvcW1j2u55tyKAuNwF9
        subject_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顥，明人物。隆慶二年進士，籍贯潛山，曾任都指揮僉事。（中国历代人物传记资料库 CBDB 336763）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mA8bfg0tnjOS9o8wteBt6S
          claim_id: c_eBLRvcW1j2u55tyKAuNwF9
          source_id: s_benPWxWtDv3DpaRHLH9m7y
          stance: supports
          locator: CBDB:336763
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

# 王顥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顥 | accepted |
| bio.summary | 王顥，明人物。隆慶二年進士，籍贯潛山，曾任都指揮僉事。（中国历代人物传记资料库 CBDB 336763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顥（CBDB 336763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json)

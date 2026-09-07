---
schema: wang-person/v1
id: p_BNP6oPtKhY88Lc6k7HCBF5
status: active
merged_into: null
display_name: 王遇某
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ob1VRD5s8bG3BG6ZR2z2Po
        subject_person_id: p_BNP6oPtKhY88Lc6k7HCBF5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇某，明人物。中国历代人物传记资料库（CBDB）以人物编号 509372 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_kOYUGS29vIR_iKj4Y9fZOz
          claim_id: c_ob1VRD5s8bG3BG6ZR2z2Po
          source_id: s_UdBMT7axMYjQ5kit2jTTfb
          stance: supports
          locator: CBDB:509372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_UdBMT7axMYjQ5kit2jTTfb
            source_type: api_record
            title: 中国历代人物传记资料库：王遇某（CBDB 509372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509372&o=json
            external_identifier: CBDB:509372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zvw6T7LvimvvG4SDCqcpFC
        subject_person_id: p_BNP6oPtKhY88Lc6k7HCBF5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oDyp5D8QwSmiFCPNuJ9VAT
          claim_id: c_Zvw6T7LvimvvG4SDCqcpFC
          source_id: s_UdBMT7axMYjQ5kit2jTTfb
          stance: supports
          locator: CBDB:509372
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_UdBMT7axMYjQ5kit2jTTfb
            source_type: api_record
            title: 中国历代人物传记资料库：王遇某（CBDB 509372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509372&o=json
            external_identifier: CBDB:509372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
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

# 王遇某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遇某，明人物。中国历代人物传记资料库（CBDB）以人物编号 509372 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王遇某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇某（CBDB 509372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509372&o=json)

---
schema: wang-person/v1
id: p_bNWzVMRuY33hpJg66sEmhN
status: active
merged_into: null
display_name: 王士倧
cbdb_id: 59893
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TuwE5sZ7exD4U1KAxX3Q6C
        subject_person_id: p_bNWzVMRuY33hpJg66sEmhN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士倧（生于1712年），清人物。明清進士進士，籍贯漢軍鑲紅旗，入仕進士，曾任司員外郎、縣知縣、營繕司主事。（中国历代人物传记资料库 CBDB 59893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_J2jPqE5wGYg-E3TyFakYHk
          claim_id: c_TuwE5sZ7exD4U1KAxX3Q6C
          source_id: s_C84UUUiXJwf9mcPTj6WPQw
          stance: supports
          locator: CBDB:59893
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C84UUUiXJwf9mcPTj6WPQw
            source_type: api_record
            title: 中国历代人物传记资料库：王士倧（CBDB 59893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59893&o=json
            external_identifier: CBDB:59893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TCiwbQkh241W3fWNiERf4S
        subject_person_id: p_bNWzVMRuY33hpJg66sEmhN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1712年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1712-01-01
            latest: 1712-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QncnzvwHCuy1T2hXZkJqJ7
          claim_id: c_TCiwbQkh241W3fWNiERf4S
          source_id: s_C84UUUiXJwf9mcPTj6WPQw
          stance: supports
          locator: CBDB:59893
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1712
          source:
            id: s_C84UUUiXJwf9mcPTj6WPQw
            source_type: api_record
            title: 中国历代人物传记资料库：王士倧（CBDB 59893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59893&o=json
            external_identifier: CBDB:59893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DoQCBosguagkM1RGDGV11k
        subject_person_id: p_bNWzVMRuY33hpJg66sEmhN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士倧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f211aEzUxNcpD5fZ5FCV1C
          claim_id: c_DoQCBosguagkM1RGDGV11k
          source_id: s_C84UUUiXJwf9mcPTj6WPQw
          stance: supports
          locator: CBDB:59893
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1712
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

# 王士倧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士倧（生于1712年），清人物。明清進士進士，籍贯漢軍鑲紅旗，入仕進士，曾任司員外郎、縣知縣、營繕司主事。（中国历代人物传记资料库 CBDB 59893） | accepted |
| birth.date | 1712年 | accepted |
| name.primary | 王士倧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士倧（CBDB 59893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59893&o=json)

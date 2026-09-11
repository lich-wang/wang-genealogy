---
schema: wang-person/v1
id: p_EHdDPSz7sTRfsci727YFnz
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 561595
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yi72E1zeJM5JN36etuRjES
        subject_person_id: p_EHdDPSz7sTRfsci727YFnz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。籍贯淅川，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 561595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uAEP-MMsfnKr5h8J1dxTOn
          claim_id: c_Yi72E1zeJM5JN36etuRjES
          source_id: s_FzhQ2rZNPkgeZOKQo5x017
          stance: supports
          locator: CBDB:561595
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FzhQ2rZNPkgeZOKQo5x017
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王誥妻)（CBDB 561595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561595&o=json
            external_identifier: CBDB:561595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qVZhM_DxfZCeog-XRTXS4W
        subject_person_id: p_EHdDPSz7sTRfsci727YFnz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6BKShqGp1lSc116NbEHBsL
          claim_id: c_qVZhM_DxfZCeog-XRTXS4W
          source_id: s_FzhQ2rZNPkgeZOKQo5x017
          stance: supports
          locator: CBDB:561595
          quotation: null
          interpretation_note: CBDB 明确记录的王誥配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zjQE4Q5QciDW5VDcEqoB6d
        subject_person_id: p_hP7xj8ChBQMwBR5GvA36Z5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EHdDPSz7sTRfsci727YFnz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SS2xcxk6qqo4aGM7hkqfQF
          claim_id: c_zjQE4Q5QciDW5VDcEqoB6d
          source_id: s_FzhQ2rZNPkgeZOKQo5x017
          stance: supports
          locator: 南陽府志，lgid=878865：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hP7xj8ChBQMwBR5GvA36Z5
        status: active
        display_name: 王誥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。籍贯淅川，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 561595） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hP7xj8ChBQMwBR5GvA36Z5 | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王誥妻)（CBDB 561595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561595&o=json)

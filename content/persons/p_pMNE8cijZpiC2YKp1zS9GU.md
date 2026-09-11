---
schema: wang-person/v1
id: p_pMNE8cijZpiC2YKp1zS9GU
status: active
merged_into: null
display_name: 王亘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDwGsWd8urtbTMhsf3vWsU
        subject_person_id: p_pMNE8cijZpiC2YKp1zS9GU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EwX3Pp2gFzBPMReUJiFkfm
          claim_id: c_kDwGsWd8urtbTMhsf3vWsU
          source_id: s_in9vzEErhcC93LuHFEjuBR
          stance: supports
          locator: CBDB:460374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460374）
          source: &a1
            id: s_in9vzEErhcC93LuHFEjuBR
            source_type: api_record
            title: 中国历代人物传记资料库：王亘（CBDB 460374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460374&o=json
            external_identifier: CBDB:460374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeLSfFyrdFUNBipuD64xRd
        subject_person_id: p_pMNE8cijZpiC2YKp1zS9GU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亘，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 460374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c1evR_bDQDkxRn4EohmW3B
          claim_id: c_AeLSfFyrdFUNBipuD64xRd
          source_id: s_in9vzEErhcC93LuHFEjuBR
          stance: supports
          locator: CBDB:460374
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

# 王亘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亘 | accepted |
| bio.summary | 王亘，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 460374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亘（CBDB 460374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460374&o=json)

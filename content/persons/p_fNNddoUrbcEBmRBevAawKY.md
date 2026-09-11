---
schema: wang-person/v1
id: p_fNNddoUrbcEBmRBevAawKY
status: active
merged_into: null
display_name: 王徽彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PsZpbHPi9Tvyy6umCqRDbf
        subject_person_id: p_fNNddoUrbcEBmRBevAawKY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hq4zXy6k8sj5RNzPHhDvSn
          claim_id: c_PsZpbHPi9Tvyy6umCqRDbf
          source_id: s_RnWBUCDXNe5QEQE6bXDwpq
          stance: supports
          locator: CBDB:637729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637729）
          source: &a1
            id: s_RnWBUCDXNe5QEQE6bXDwpq
            source_type: api_record
            title: 中国历代人物传记资料库：王徽彝（CBDB 637729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637729&o=json
            external_identifier: CBDB:637729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9tn9kvBs5nT1WZADPPSjtG
        subject_person_id: p_fNNddoUrbcEBmRBevAawKY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽彝，清人物。籍贯靈石，入仕進士，曾任知州、主事。（中国历代人物传记资料库 CBDB 637729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GXfaPwNmNtKfLaMnjkS_S_
          claim_id: c_9tn9kvBs5nT1WZADPPSjtG
          source_id: s_RnWBUCDXNe5QEQE6bXDwpq
          stance: supports
          locator: CBDB:637729
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

# 王徽彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽彝 | accepted |
| bio.summary | 王徽彝，清人物。籍贯靈石，入仕進士，曾任知州、主事。（中国历代人物传记资料库 CBDB 637729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徽彝（CBDB 637729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637729&o=json)

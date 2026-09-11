---
schema: wang-person/v1
id: p_gVFJ1GtoeHiHVu7M1RbxWt
status: active
merged_into: null
display_name: 王侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPc2xqtMat9P5i29PG6Pph
        subject_person_id: p_gVFJ1GtoeHiHVu7M1RbxWt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KDspkSKX6GifYXtdQZfePA
          claim_id: c_HPc2xqtMat9P5i29PG6Pph
          source_id: s_4GdRq5tN21rS1rh25cDiWt
          stance: supports
          locator: CBDB:39547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39547）
          source: &a1
            id: s_4GdRq5tN21rS1rh25cDiWt
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 39547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39547&o=json
            external_identifier: CBDB:39547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hwUAJhS9w1HHkrtyaTS6j7
        subject_person_id: p_gVFJ1GtoeHiHVu7M1RbxWt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1231年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaL65X9MtTF9RjSeMAFJmq
          claim_id: c_hwUAJhS9w1HHkrtyaTS6j7
          source_id: s_4GdRq5tN21rS1rh25cDiWt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9HwDM7iSMWRjCD1WFYwwbb
        subject_person_id: p_gVFJ1GtoeHiHVu7M1RbxWt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃（卒于1231年），宋人物。身份为武將、死國難，曾任都統制、統制。（中国历代人物传记资料库 CBDB 39547）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CUVYaj0uQ2WKNtdwVD24XH
          claim_id: c_9HwDM7iSMWRjCD1WFYwwbb
          source_id: s_4GdRq5tN21rS1rh25cDiWt
          stance: supports
          locator: CBDB:39547
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

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| death.date | 1231年 | accepted |
| bio.summary | 王侃（卒于1231年），宋人物。身份为武將、死國難，曾任都統制、統制。（中国历代人物传记资料库 CBDB 39547） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 39547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39547&o=json)

---
schema: wang-person/v1
id: p_McmP6bCCZnRezy8G59Ndh2
status: active
merged_into: null
display_name: 王隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_79ZJALsfTjmkas7M8XvYgK
        subject_person_id: p_McmP6bCCZnRezy8G59Ndh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSC6qENueYXTZMFiGkgGe4
          claim_id: c_79ZJALsfTjmkas7M8XvYgK
          source_id: s_9w9RnKRrMTGrMgvLykm2Gy
          stance: supports
          locator: CBDB:501633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501633）
          source: &a1
            id: s_9w9RnKRrMTGrMgvLykm2Gy
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 501633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501633&o=json
            external_identifier: CBDB:501633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kaGL4idCZaYmxaxmdKaS21
        subject_person_id: p_McmP6bCCZnRezy8G59Ndh2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 501633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wpUfBkQ4-tJF6IX4KxHETf
          claim_id: c_kaGL4idCZaYmxaxmdKaS21
          source_id: s_9w9RnKRrMTGrMgvLykm2Gy
          stance: supports
          locator: CBDB:501633
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

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 501633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 501633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501633&o=json)

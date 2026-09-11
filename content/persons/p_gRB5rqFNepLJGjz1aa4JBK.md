---
schema: wang-person/v1
id: p_gRB5rqFNepLJGjz1aa4JBK
status: active
merged_into: null
display_name: 王文薦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CaYeAA1w8XkVGvXoA6f3AX
        subject_person_id: p_gRB5rqFNepLJGjz1aa4JBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文薦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1MsvgoXRvKXZPtptxhRGPv
          claim_id: c_CaYeAA1w8XkVGvXoA6f3AX
          source_id: s_GN9Tj6MonaGMeKnSn6c8sH
          stance: supports
          locator: CBDB:336684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336684）
          source: &a1
            id: s_GN9Tj6MonaGMeKnSn6c8sH
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 336684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336684&o=json
            external_identifier: CBDB:336684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dXRTbn1CER9DqU3B8W3jeS
        subject_person_id: p_gRB5rqFNepLJGjz1aa4JBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文薦，明人物。隆慶二年進士，籍贯清源。（中国历代人物传记资料库 CBDB 336684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pq-yaYWcKBG5E_X6tVGer1
          claim_id: c_dXRTbn1CER9DqU3B8W3jeS
          source_id: s_GN9Tj6MonaGMeKnSn6c8sH
          stance: supports
          locator: CBDB:336684
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

# 王文薦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文薦 | accepted |
| bio.summary | 王文薦，明人物。隆慶二年進士，籍贯清源。（中国历代人物传记资料库 CBDB 336684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文薦（CBDB 336684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336684&o=json)

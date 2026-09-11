---
schema: wang-person/v1
id: p_3zZ3m4NutEjdGZyuNmfBsM
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDJcfanPDhFjABbCRHShrE
        subject_person_id: p_3zZ3m4NutEjdGZyuNmfBsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2xhoCVKFK22FeVKg6zb4x
          claim_id: c_tDJcfanPDhFjABbCRHShrE
          source_id: s_jv8v842gvyUg57L9WE548Y
          stance: supports
          locator: CBDB:473485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473485）
          source: &a1
            id: s_jv8v842gvyUg57L9WE548Y
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 473485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473485&o=json
            external_identifier: CBDB:473485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f9HgQ59g9s3GoZ5qTbZFuN
        subject_person_id: p_3zZ3m4NutEjdGZyuNmfBsM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_02fnFwNzx5uvTNtxeM1rJw
          claim_id: c_f9HgQ59g9s3GoZ5qTbZFuN
          source_id: s_jv8v842gvyUg57L9WE548Y
          stance: supports
          locator: CBDB:473485
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | 王奇，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473485） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 473485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473485&o=json)

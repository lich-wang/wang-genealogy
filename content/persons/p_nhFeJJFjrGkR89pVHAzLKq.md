---
schema: wang-person/v1
id: p_nhFeJJFjrGkR89pVHAzLKq
status: active
merged_into: null
display_name: 王琴心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y9DYfa6oGSdHNY2mg8nFM1
        subject_person_id: p_nhFeJJFjrGkR89pVHAzLKq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cx5c5o8CAHo1seXpAiCnUF
          claim_id: c_y9DYfa6oGSdHNY2mg8nFM1
          source_id: s_iqC6AD3L7KvdtPjBu63KKS
          stance: supports
          locator: CBDB:639420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639420）
          source: &a1
            id: s_iqC6AD3L7KvdtPjBu63KKS
            source_type: api_record
            title: 中国历代人物传记资料库：王琴心（CBDB 639420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639420&o=json
            external_identifier: CBDB:639420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dxWSwMGGFz9TPiZziVST1R
        subject_person_id: p_nhFeJJFjrGkR89pVHAzLKq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴心，清人物。籍贯濱州，入仕廩貢生，曾任撫民通判。（中国历代人物传记资料库 CBDB 639420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nFzSGcr7w40D9xGRTDbqIq
          claim_id: c_dxWSwMGGFz9TPiZziVST1R
          source_id: s_iqC6AD3L7KvdtPjBu63KKS
          stance: supports
          locator: CBDB:639420
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

# 王琴心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴心 | accepted |
| bio.summary | 王琴心，清人物。籍贯濱州，入仕廩貢生，曾任撫民通判。（中国历代人物传记资料库 CBDB 639420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琴心（CBDB 639420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639420&o=json)

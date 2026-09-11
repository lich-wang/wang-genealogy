---
schema: wang-person/v1
id: p_W7saWY44omRFzGAXJPtrd7
status: active
merged_into: null
display_name: 王第
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6ZSspg9N1E81cf4M332W2
        subject_person_id: p_W7saWY44omRFzGAXJPtrd7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u1bfyNzNqnFtFwKHcssUX6
          claim_id: c_G6ZSspg9N1E81cf4M332W2
          source_id: s_qH9TaJ9319RCvPPKG85XRu
          stance: supports
          locator: CBDB:639714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639714）
          source: &a1
            id: s_qH9TaJ9319RCvPPKG85XRu
            source_type: api_record
            title: 中国历代人物传记资料库：王第（CBDB 639714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639714&o=json
            external_identifier: CBDB:639714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vxCMt3HWNCd6HsLB6tMvkA
        subject_person_id: p_W7saWY44omRFzGAXJPtrd7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王第，清人物。籍贯延安府，入仕廩貢生，曾任教諭。（中国历代人物传记资料库 CBDB 639714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DRiiPkSLh0MZsx-uHxZNVU
          claim_id: c_vxCMt3HWNCd6HsLB6tMvkA
          source_id: s_qH9TaJ9319RCvPPKG85XRu
          stance: supports
          locator: CBDB:639714
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

# 王第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王第 | accepted |
| bio.summary | 王第，清人物。籍贯延安府，入仕廩貢生，曾任教諭。（中国历代人物传记资料库 CBDB 639714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王第（CBDB 639714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639714&o=json)

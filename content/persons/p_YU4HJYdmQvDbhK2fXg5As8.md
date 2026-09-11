---
schema: wang-person/v1
id: p_YU4HJYdmQvDbhK2fXg5As8
status: active
merged_into: null
display_name: 王師南
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jrunMaXMrs7kA1sJzNT5z7
        subject_person_id: p_YU4HJYdmQvDbhK2fXg5As8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師南
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a2FHW67CybNGCL8E3Y34N4
          claim_id: c_jrunMaXMrs7kA1sJzNT5z7
          source_id: s_GPcJMP54hNPuJGMk6od8Vq
          stance: supports
          locator: CBDB:555548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555548）
          source: &a1
            id: s_GPcJMP54hNPuJGMk6od8Vq
            source_type: api_record
            title: 中国历代人物传记资料库：王師南（CBDB 555548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555548&o=json
            external_identifier: CBDB:555548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23FWfifpaFDr2GtDZQR2oR
        subject_person_id: p_YU4HJYdmQvDbhK2fXg5As8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師南，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 555548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVyjSK_VpjBzWxzYokO3KL
          claim_id: c_23FWfifpaFDr2GtDZQR2oR
          source_id: s_GPcJMP54hNPuJGMk6od8Vq
          stance: supports
          locator: CBDB:555548
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

# 王師南

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師南 | accepted |
| bio.summary | 王師南，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 555548） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師南（CBDB 555548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555548&o=json)

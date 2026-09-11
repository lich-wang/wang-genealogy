---
schema: wang-person/v1
id: p_6gPj6xad1ZwYUdrrnbzABM
status: active
merged_into: null
display_name: 王一鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xfQg1u6L76dP71puxURSfC
        subject_person_id: p_6gPj6xad1ZwYUdrrnbzABM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6a65FuL4w7MKWdfZC2Bh1H
          claim_id: c_xfQg1u6L76dP71puxURSfC
          source_id: s_gsNMGHCzYzuZ6rXp9qxkkd
          stance: supports
          locator: CBDB:578875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578875）
          source: &a1
            id: s_gsNMGHCzYzuZ6rXp9qxkkd
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 578875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578875&o=json
            external_identifier: CBDB:578875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4MB1tSoeCJgJSGUCKGjsSB
        subject_person_id: p_6gPj6xad1ZwYUdrrnbzABM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴，明人物。籍贯湖北分守道，身份为史學家，入仕科舉，曾任知縣。（中国历代人物传记资料库 CBDB 578875）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxARnyWOuTbCjRtopbTzv1
          claim_id: c_4MB1tSoeCJgJSGUCKGjsSB
          source_id: s_gsNMGHCzYzuZ6rXp9qxkkd
          stance: supports
          locator: CBDB:578875
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

# 王一鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳴 | accepted |
| bio.summary | 王一鳴，明人物。籍贯湖北分守道，身份为史學家，入仕科舉，曾任知縣。（中国历代人物传记资料库 CBDB 578875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 578875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578875&o=json)

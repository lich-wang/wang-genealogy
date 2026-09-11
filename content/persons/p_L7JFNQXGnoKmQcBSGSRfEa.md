---
schema: wang-person/v1
id: p_L7JFNQXGnoKmQcBSGSRfEa
status: active
merged_into: null
display_name: 王輝龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDrat7K3yZvRVANeTpHsed
        subject_person_id: p_L7JFNQXGnoKmQcBSGSRfEa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rLGkPVw1LZTsuE6hCzi6Cm
          claim_id: c_hDrat7K3yZvRVANeTpHsed
          source_id: s_eAH6o3sfJki9RLWCPJtVFb
          stance: supports
          locator: CBDB:640379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640379）
          source: &a1
            id: s_eAH6o3sfJki9RLWCPJtVFb
            source_type: api_record
            title: 中国历代人物传记资料库：王輝龍（CBDB 640379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640379&o=json
            external_identifier: CBDB:640379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bsRaqMLJ2xDBC4vJ9ZvrUt
        subject_person_id: p_L7JFNQXGnoKmQcBSGSRfEa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝龍，清人物。籍贯廣東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640379）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sn2zhpCccCQ5DgLpRJr2Fp
          claim_id: c_bsRaqMLJ2xDBC4vJ9ZvrUt
          source_id: s_eAH6o3sfJki9RLWCPJtVFb
          stance: supports
          locator: CBDB:640379
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

# 王輝龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝龍 | accepted |
| bio.summary | 王輝龍，清人物。籍贯廣東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輝龍（CBDB 640379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640379&o=json)

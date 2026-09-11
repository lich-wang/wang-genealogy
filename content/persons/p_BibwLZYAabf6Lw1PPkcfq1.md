---
schema: wang-person/v1
id: p_BibwLZYAabf6Lw1PPkcfq1
status: active
merged_into: null
display_name: 王獻臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h659c2EAgDzXEyANgWKgFt
        subject_person_id: p_BibwLZYAabf6Lw1PPkcfq1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H8hBLSYQ6F5ZLVrFHQ2n36
          claim_id: c_h659c2EAgDzXEyANgWKgFt
          source_id: s_rn7WcABcEEh6JyyGmX9S9L
          stance: supports
          locator: CBDB:38401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38401）
          source: &a1
            id: s_rn7WcABcEEh6JyyGmX9S9L
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 38401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38401&o=json
            external_identifier: CBDB:38401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zdq1hS28wV2VTaoSXva7kh
        subject_person_id: p_BibwLZYAabf6Lw1PPkcfq1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻臣，宋人物。籍贯成都府，身份为行醫，曾任國子監四門助教、醫人。（中国历代人物传记资料库 CBDB 38401）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DkTdLwZ20CvLJlzj-ePoqH
          claim_id: c_Zdq1hS28wV2VTaoSXva7kh
          source_id: s_rn7WcABcEEh6JyyGmX9S9L
          stance: supports
          locator: CBDB:38401
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

# 王獻臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻臣 | accepted |
| bio.summary | 王獻臣，宋人物。籍贯成都府，身份为行醫，曾任國子監四門助教、醫人。（中国历代人物传记资料库 CBDB 38401） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻臣（CBDB 38401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38401&o=json)

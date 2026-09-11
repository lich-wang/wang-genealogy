---
schema: wang-person/v1
id: p_XQGjrV5D45HeHi4Uo992jU
status: active
merged_into: null
display_name: 王禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EFHnoTDFME8Da2CKtyhnbE
        subject_person_id: p_XQGjrV5D45HeHi4Uo992jU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gUwSEK1nmgimF1DGHC21vq
          claim_id: c_EFHnoTDFME8Da2CKtyhnbE
          source_id: s_6DgeGh82jZDVXE4iAk6hd7
          stance: supports
          locator: CBDB:686949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686949）
          source: &a1
            id: s_6DgeGh82jZDVXE4iAk6hd7
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 686949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686949&o=json
            external_identifier: CBDB:686949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hRf4knbPts6ENGQ2qr4p7L
        subject_person_id: p_XQGjrV5D45HeHi4Uo992jU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 686949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5kTz0am1wJ1YB_T2log7Xu
          claim_id: c_hRf4knbPts6ENGQ2qr4p7L
          source_id: s_6DgeGh82jZDVXE4iAk6hd7
          stance: supports
          locator: CBDB:686949
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

# 王禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧 | accepted |
| bio.summary | 王禧，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 686949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禧（CBDB 686949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686949&o=json)

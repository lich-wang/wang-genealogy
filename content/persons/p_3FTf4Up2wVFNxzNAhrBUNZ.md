---
schema: wang-person/v1
id: p_3FTf4Up2wVFNxzNAhrBUNZ
status: active
merged_into: null
display_name: 王玉麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YC6sHKorrPJeSGuNqfo6dB
        subject_person_id: p_3FTf4Up2wVFNxzNAhrBUNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hF9hVuj1GLy5jTthU2bF51
          claim_id: c_YC6sHKorrPJeSGuNqfo6dB
          source_id: s_KU8PWAJKpDEBXBoCNxMbGn
          stance: supports
          locator: CBDB:639389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639389）
          source: &a1
            id: s_KU8PWAJKpDEBXBoCNxMbGn
            source_type: api_record
            title: 中国历代人物传记资料库：王玉麒（CBDB 639389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639389&o=json
            external_identifier: CBDB:639389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ehPC4v9bFxHc4XHaspD4GH
        subject_person_id: p_3FTf4Up2wVFNxzNAhrBUNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉麒，清人物。籍贯宛平，入仕監生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 639389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ITUC6__SXmHJai9bKDVFtf
          claim_id: c_ehPC4v9bFxHc4XHaspD4GH
          source_id: s_KU8PWAJKpDEBXBoCNxMbGn
          stance: supports
          locator: CBDB:639389
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

# 王玉麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉麒 | accepted |
| bio.summary | 王玉麒，清人物。籍贯宛平，入仕監生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 639389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉麒（CBDB 639389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639389&o=json)

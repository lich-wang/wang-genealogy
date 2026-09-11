---
schema: wang-person/v1
id: p_zYaA4Mif8La2huxrdXV5Ev
status: active
merged_into: null
display_name: 王垚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kt2n3ZhYtQBk6vVfsf1NWr
        subject_person_id: p_zYaA4Mif8La2huxrdXV5Ev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xyaKSMCh9dc4f93wcQBEvB
          claim_id: c_kt2n3ZhYtQBk6vVfsf1NWr
          source_id: s_BqHLpADKmvCGBnRmGZovjj
          stance: supports
          locator: CBDB:100711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100711）
          source: &a1
            id: s_BqHLpADKmvCGBnRmGZovjj
            source_type: api_record
            title: 中国历代人物传记资料库：王垚（CBDB 100711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100711&o=json
            external_identifier: CBDB:100711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4KbVHs67w1MbY2RDvYzZX
        subject_person_id: p_zYaA4Mif8La2huxrdXV5Ev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垚，元人物。籍贯丹徒，身份为以疾廢，曾任資國院判官。（中国历代人物传记资料库 CBDB 100711）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YvIdhfe917zWzTKfrIU7Il
          claim_id: c_B4KbVHs67w1MbY2RDvYzZX
          source_id: s_BqHLpADKmvCGBnRmGZovjj
          stance: supports
          locator: CBDB:100711
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

# 王垚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垚 | accepted |
| bio.summary | 王垚，元人物。籍贯丹徒，身份为以疾廢，曾任資國院判官。（中国历代人物传记资料库 CBDB 100711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垚（CBDB 100711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100711&o=json)

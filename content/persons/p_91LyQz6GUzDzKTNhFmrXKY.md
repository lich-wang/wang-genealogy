---
schema: wang-person/v1
id: p_91LyQz6GUzDzKTNhFmrXKY
status: active
merged_into: null
display_name: 王洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRmwR6Hd2PrE3pkCFPe2cq
        subject_person_id: p_91LyQz6GUzDzKTNhFmrXKY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YjdEYN3X2mjp7jym9nXQ2j
          claim_id: c_VRmwR6Hd2PrE3pkCFPe2cq
          source_id: s_C9Nf1Qj7qDWNb2oFUQHBgM
          stance: supports
          locator: CBDB:482871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482871）
          source: &a1
            id: s_C9Nf1Qj7qDWNb2oFUQHBgM
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 482871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482871&o=json
            external_identifier: CBDB:482871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8J4Nt11yk1iNiJ3Wei7Gta
        subject_person_id: p_91LyQz6GUzDzKTNhFmrXKY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 482871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UQjWPZ1VC0gZC2Zrsxy8Z2
          claim_id: c_8J4Nt11yk1iNiJ3Wei7Gta
          source_id: s_C9Nf1Qj7qDWNb2oFUQHBgM
          stance: supports
          locator: CBDB:482871
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

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 482871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 482871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482871&o=json)

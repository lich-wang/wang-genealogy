---
schema: wang-person/v1
id: p_RCKMh93hQ98SxhWdA4eWkv
status: active
merged_into: null
display_name: 王秩教
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7jHWirJ2Xffc3s2fJ3DJCT
        subject_person_id: p_RCKMh93hQ98SxhWdA4eWkv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3zx8r9Z1MXmYW6yL5woVbK
          claim_id: c_7jHWirJ2Xffc3s2fJ3DJCT
          source_id: s_BEbzGKX39tWihwz5dUvzS2
          stance: supports
          locator: CBDB:639675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639675）
          source: &a1
            id: s_BEbzGKX39tWihwz5dUvzS2
            source_type: api_record
            title: 中国历代人物传记资料库：王秩教（CBDB 639675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639675&o=json
            external_identifier: CBDB:639675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1ZxVVBxkEQ6fj8RQe69YJ
        subject_person_id: p_RCKMh93hQ98SxhWdA4eWkv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秩教，清人物。籍贯開化府，入仕鄉貢舉人，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 639675）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MF-QjtRP7DCTNFkDcVriVR
          claim_id: c_w1ZxVVBxkEQ6fj8RQe69YJ
          source_id: s_BEbzGKX39tWihwz5dUvzS2
          stance: supports
          locator: CBDB:639675
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

# 王秩教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秩教 | accepted |
| bio.summary | 王秩教，清人物。籍贯開化府，入仕鄉貢舉人，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 639675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秩教（CBDB 639675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639675&o=json)

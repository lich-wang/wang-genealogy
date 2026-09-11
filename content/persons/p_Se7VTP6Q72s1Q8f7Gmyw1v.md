---
schema: wang-person/v1
id: p_Se7VTP6Q72s1Q8f7Gmyw1v
status: active
merged_into: null
display_name: 王暐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yhswpAmFoJysxo3SKN7Cri
        subject_person_id: p_Se7VTP6Q72s1Q8f7Gmyw1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPTgP2xmdjm598wW1poZX4
          claim_id: c_yhswpAmFoJysxo3SKN7Cri
          source_id: s_ZnwWNoFNGDWAG3QiAAbkzy
          stance: supports
          locator: CBDB:638521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638521）
          source: &a1
            id: s_ZnwWNoFNGDWAG3QiAAbkzy
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 638521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638521&o=json
            external_identifier: CBDB:638521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YiNTDT3c9o7ZCVLy4Gfrha
        subject_person_id: p_Se7VTP6Q72s1Q8f7Gmyw1v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王暐，清人物。籍贯益都，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638521）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HhXzFWt0o_FkHRb6zvNVGZ
          claim_id: c_YiNTDT3c9o7ZCVLy4Gfrha
          source_id: s_ZnwWNoFNGDWAG3QiAAbkzy
          stance: supports
          locator: CBDB:638521
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

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| bio.summary | 王暐，清人物。籍贯益都，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暐（CBDB 638521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638521&o=json)

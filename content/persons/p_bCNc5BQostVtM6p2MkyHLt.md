---
schema: wang-person/v1
id: p_bCNc5BQostVtM6p2MkyHLt
status: active
merged_into: null
display_name: 王承志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wsiDSsGrDgzE9pL8HqkCxG
        subject_person_id: p_bCNc5BQostVtM6p2MkyHLt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4NQ4ZKth7j1ccu3VeKbMRe
          claim_id: c_wsiDSsGrDgzE9pL8HqkCxG
          source_id: s_6nWsmMJCPz6qbFb1r8yZLC
          stance: supports
          locator: CBDB:638078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638078）
          source: &a1
            id: s_6nWsmMJCPz6qbFb1r8yZLC
            source_type: api_record
            title: 中国历代人物传记资料库：王承志（CBDB 638078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638078&o=json
            external_identifier: CBDB:638078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RjvS59oZHX18F834uKVYV1
        subject_person_id: p_bCNc5BQostVtM6p2MkyHLt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王承志，清人物。籍贯保定，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638078）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cKO_ZJgwBKQYOU1SLVQ-vN
          claim_id: c_RjvS59oZHX18F834uKVYV1
          source_id: s_6nWsmMJCPz6qbFb1r8yZLC
          stance: supports
          locator: CBDB:638078
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

# 王承志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承志 | accepted |
| bio.summary | 王承志，清人物。籍贯保定，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 638078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承志（CBDB 638078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638078&o=json)

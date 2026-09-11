---
schema: wang-person/v1
id: p_vF7wsjy8CryN8V8rVK6pap
status: active
merged_into: null
display_name: 王養性
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4HZ3o7sQF3aseHhGQHWzv
        subject_person_id: p_vF7wsjy8CryN8V8rVK6pap
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vnzWHXcZBGNphpmkMXPdFE
          claim_id: c_A4HZ3o7sQF3aseHhGQHWzv
          source_id: s_1Y552hXYih67X8i9uv1iWi
          stance: supports
          locator: CBDB:501628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501628）
          source: &a1
            id: s_1Y552hXYih67X8i9uv1iWi
            source_type: api_record
            title: 中国历代人物传记资料库：王養性（CBDB 501628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501628&o=json
            external_identifier: CBDB:501628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sx7pZvH9Dq3yqLtejXPa71
        subject_person_id: p_vF7wsjy8CryN8V8rVK6pap
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王養性，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任主簿。（中国历代人物传记资料库 CBDB 501628）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VJX_G_dbgIPl_m-mPSS8h5
          claim_id: c_sx7pZvH9Dq3yqLtejXPa71
          source_id: s_1Y552hXYih67X8i9uv1iWi
          stance: supports
          locator: CBDB:501628
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

# 王養性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養性 | accepted |
| bio.summary | 王養性，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任主簿。（中国历代人物传记资料库 CBDB 501628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養性（CBDB 501628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501628&o=json)

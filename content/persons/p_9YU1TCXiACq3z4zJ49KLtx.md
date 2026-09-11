---
schema: wang-person/v1
id: p_9YU1TCXiACq3z4zJ49KLtx
status: active
merged_into: null
display_name: 王健
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eqP1Q2CuSzGZ84LGeZ7LAJ
        subject_person_id: p_9YU1TCXiACq3z4zJ49KLtx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9jL6kGXF5GEw3qGxJEztzC
          claim_id: c_eqP1Q2CuSzGZ84LGeZ7LAJ
          source_id: s_6A7TNbGTH4WTonMtWxH7Gg
          stance: supports
          locator: CBDB:453193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453193）
          source: &a1
            id: s_6A7TNbGTH4WTonMtWxH7Gg
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 453193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453193&o=json
            external_identifier: CBDB:453193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4is7VXdXLDrXagQtXT8vg2
        subject_person_id: p_9YU1TCXiACq3z4zJ49KLtx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王健，清人物。入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 453193）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_siQ_S8p21FtGc5k1_tFy9z
          claim_id: c_4is7VXdXLDrXagQtXT8vg2
          source_id: s_6A7TNbGTH4WTonMtWxH7Gg
          stance: supports
          locator: CBDB:453193
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

# 王健

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王健 | accepted |
| bio.summary | 王健，清人物。入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 453193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王健（CBDB 453193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453193&o=json)

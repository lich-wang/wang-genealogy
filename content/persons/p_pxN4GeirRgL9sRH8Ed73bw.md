---
schema: wang-person/v1
id: p_pxN4GeirRgL9sRH8Ed73bw
status: active
merged_into: null
display_name: 王紹烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nf7UVYTAbGkTKBaHJ3Q5nb
        subject_person_id: p_pxN4GeirRgL9sRH8Ed73bw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAyK1Gqm9yc3qB34MNvyFo
          claim_id: c_nf7UVYTAbGkTKBaHJ3Q5nb
          source_id: s_xZ6kZxkBzp3u599cfhhUqt
          stance: supports
          locator: CBDB:497836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497836）
          source: &a1
            id: s_xZ6kZxkBzp3u599cfhhUqt
            source_type: api_record
            title: 中国历代人物传记资料库：王紹烈（CBDB 497836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497836&o=json
            external_identifier: CBDB:497836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m7y7hvHwXYK5sQrZp9zPeV
        subject_person_id: p_pxN4GeirRgL9sRH8Ed73bw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王紹烈，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 497836）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UUkxKnVHUUnXKnGFDj3M-P
          claim_id: c_m7y7hvHwXYK5sQrZp9zPeV
          source_id: s_xZ6kZxkBzp3u599cfhhUqt
          stance: supports
          locator: CBDB:497836
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

# 王紹烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹烈 | accepted |
| bio.summary | 王紹烈，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 497836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹烈（CBDB 497836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497836&o=json)

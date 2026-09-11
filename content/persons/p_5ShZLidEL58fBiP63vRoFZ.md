---
schema: wang-person/v1
id: p_5ShZLidEL58fBiP63vRoFZ
status: active
merged_into: null
display_name: 王兆麒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_br3RiuLT5CDCAaZzdD4pAJ
        subject_person_id: p_5ShZLidEL58fBiP63vRoFZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwScqcVAE8io2owg82EfDc
          claim_id: c_br3RiuLT5CDCAaZzdD4pAJ
          source_id: s_s4na8ZAFUqgs11yWQWJruX
          stance: supports
          locator: CBDB:636227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636227）
          source: &a1
            id: s_s4na8ZAFUqgs11yWQWJruX
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麒（CBDB 636227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636227&o=json
            external_identifier: CBDB:636227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aCw1K8jM8EyQQBQJkwZoa8
        subject_person_id: p_5ShZLidEL58fBiP63vRoFZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王兆麒，清人物。籍贯吉林副都統轄區，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636227）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l3esYxNEbkZLLLyFCo6PJ2
          claim_id: c_aCw1K8jM8EyQQBQJkwZoa8
          source_id: s_s4na8ZAFUqgs11yWQWJruX
          stance: supports
          locator: CBDB:636227
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

# 王兆麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆麒 | accepted |
| bio.summary | 王兆麒，清人物。籍贯吉林副都統轄區，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆麒（CBDB 636227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636227&o=json)

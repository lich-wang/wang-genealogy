---
schema: wang-person/v1
id: p_Svm9j1SZfCGL1FEwCDh5Gu
status: active
merged_into: null
display_name: 王睿生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DHb1DCDRLzeLCgGUDiDziY
        subject_person_id: p_Svm9j1SZfCGL1FEwCDh5Gu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKGiv87LFsUTQ6cNBQPbmj
          claim_id: c_DHb1DCDRLzeLCgGUDiDziY
          source_id: s_godkRtAEc2huKxzEAg3L3c
          stance: supports
          locator: CBDB:639550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639550）
          source: &a1
            id: s_godkRtAEc2huKxzEAg3L3c
            source_type: api_record
            title: 中国历代人物传记资料库：王睿生（CBDB 639550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639550&o=json
            external_identifier: CBDB:639550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLLK6C64qWoBTbzgm6j9Bb
        subject_person_id: p_Svm9j1SZfCGL1FEwCDh5Gu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿生，清人物。籍贯廣西直隸州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PcKtQpHydvDjcUxsOUH7M9
          claim_id: c_HLLK6C64qWoBTbzgm6j9Bb
          source_id: s_godkRtAEc2huKxzEAg3L3c
          stance: supports
          locator: CBDB:639550
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

# 王睿生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿生 | accepted |
| bio.summary | 王睿生，清人物。籍贯廣西直隸州，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王睿生（CBDB 639550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639550&o=json)

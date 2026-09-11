---
schema: wang-person/v1
id: p_32vzgEo2BW3TW7M2xg9W6b
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r3CuKXHFJHHAume3uPjn2N
        subject_person_id: p_32vzgEo2BW3TW7M2xg9W6b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ApeLNn5MDn8q3oL9DqJzP9
          claim_id: c_r3CuKXHFJHHAume3uPjn2N
          source_id: s_yic4QgQeZ6Rtc2FksubBU1
          stance: supports
          locator: CBDB:472015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472015）
          source: &a1
            id: s_yic4QgQeZ6Rtc2FksubBU1
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 472015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472015&o=json
            external_identifier: CBDB:472015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DRap8H1DJNpp1U1XM8FynQ
        subject_person_id: p_32vzgEo2BW3TW7M2xg9W6b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 472015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6MsEco_n7dAq271fmRIvh4
          claim_id: c_DRap8H1DJNpp1U1XM8FynQ
          source_id: s_yic4QgQeZ6Rtc2FksubBU1
          stance: supports
          locator: CBDB:472015
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| bio.summary | 王樞，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 472015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 472015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472015&o=json)

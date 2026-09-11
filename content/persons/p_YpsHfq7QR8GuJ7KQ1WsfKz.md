---
schema: wang-person/v1
id: p_YpsHfq7QR8GuJ7KQ1WsfKz
status: active
merged_into: null
display_name: 王拱宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5nF8uDREvctocLN8GKUPUG
        subject_person_id: p_YpsHfq7QR8GuJ7KQ1WsfKz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hr8GFsDyaL5R4XA2acznzB
          claim_id: c_5nF8uDREvctocLN8GKUPUG
          source_id: s_mKCjKCDkfeUdWzzBVdc28g
          stance: supports
          locator: CBDB:638115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638115）
          source: &a1
            id: s_mKCjKCDkfeUdWzzBVdc28g
            source_type: api_record
            title: 中国历代人物传记资料库：王拱宸（CBDB 638115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638115&o=json
            external_identifier: CBDB:638115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qajGMwTvt1JyQJixeAnoX4
        subject_person_id: p_YpsHfq7QR8GuJ7KQ1WsfKz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱宸，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 638115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CnaJF7Wk9FCPawlOV_QIUH
          claim_id: c_qajGMwTvt1JyQJixeAnoX4
          source_id: s_mKCjKCDkfeUdWzzBVdc28g
          stance: supports
          locator: CBDB:638115
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

# 王拱宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱宸 | accepted |
| bio.summary | 王拱宸，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 638115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱宸（CBDB 638115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638115&o=json)

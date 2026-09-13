---
schema: wang-person/v1
id: p_hcftHKiqB3DShyYMb4bCM2
status: active
merged_into: null
display_name: 王玉文
cbdb_id: 69115
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wLDMh1hi6SAF82Tb7rHe9t
        subject_person_id: p_hcftHKiqB3DShyYMb4bCM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉文（卒于1860年），清人物。籍贯金華，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 69115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fs-WpXz8JDQJuUF46tSOOy
          claim_id: c_wLDMh1hi6SAF82Tb7rHe9t
          source_id: s_ZztFp1GgmachyoSkyMBbnQ
          stance: supports
          locator: CBDB:69115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZztFp1GgmachyoSkyMBbnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王玉文（CBDB 69115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69115&o=json
            external_identifier: CBDB:69115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eaQjFyP2emHLsPMk6GGFxG
        subject_person_id: p_hcftHKiqB3DShyYMb4bCM2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1860-01-01
            latest: 1860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7siJUULjwjLiAVjfN97JTQ
          claim_id: c_eaQjFyP2emHLsPMk6GGFxG
          source_id: s_ZztFp1GgmachyoSkyMBbnQ
          stance: supports
          locator: CBDB:69115
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1860
          source:
            id: s_ZztFp1GgmachyoSkyMBbnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王玉文（CBDB 69115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69115&o=json
            external_identifier: CBDB:69115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZoPqMcJkXPS83xv7GRNmaA
        subject_person_id: p_hcftHKiqB3DShyYMb4bCM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AK8hbv3mh3Mk2bamzo3UhM
          claim_id: c_ZoPqMcJkXPS83xv7GRNmaA
          source_id: s_ZztFp1GgmachyoSkyMBbnQ
          stance: supports
          locator: CBDB:69115
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1860
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

# 王玉文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉文（卒于1860年），清人物。籍贯金華，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 69115） | accepted |
| death.date | 1860年 | accepted |
| name.primary | 王玉文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉文（CBDB 69115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69115&o=json)

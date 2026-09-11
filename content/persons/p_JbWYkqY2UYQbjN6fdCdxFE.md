---
schema: wang-person/v1
id: p_JbWYkqY2UYQbjN6fdCdxFE
status: active
merged_into: null
display_name: 王昱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y8hP4EBCNFoX9bZVV7jG25
        subject_person_id: p_JbWYkqY2UYQbjN6fdCdxFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FeJsPKE6s8sN5EqfeyRZRE
          claim_id: c_Y8hP4EBCNFoX9bZVV7jG25
          source_id: s_zhvDNk6oNmXSwCRVM3Ksvs
          stance: supports
          locator: CBDB:71130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71130）
          source: &a1
            id: s_zhvDNk6oNmXSwCRVM3Ksvs
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 71130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71130&o=json
            external_identifier: CBDB:71130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hhSK2BgVpvYibMUvsHvmoN
        subject_person_id: p_JbWYkqY2UYQbjN6fdCdxFE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1714年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKoBJ85mNMHQ4F93M6N81z
          claim_id: c_hhSK2BgVpvYibMUvsHvmoN
          source_id: s_zhvDNk6oNmXSwCRVM3Ksvs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6uD5PJEpmLcrv3xh3hLpGV
        subject_person_id: p_JbWYkqY2UYQbjN6fdCdxFE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHEA33woiY6AGJ9JhH94bn
          claim_id: c_6uD5PJEpmLcrv3xh3hLpGV
          source_id: s_zhvDNk6oNmXSwCRVM3Ksvs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EmZwMupVHmVRLFpAeEbDbF
        subject_person_id: p_JbWYkqY2UYQbjN6fdCdxFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱（1714年—1748年），清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 71130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCRoZ7sp8aTRbeBSJh39eD
          claim_id: c_EmZwMupVHmVRLFpAeEbDbF
          source_id: s_zhvDNk6oNmXSwCRVM3Ksvs
          stance: supports
          locator: CBDB:71130
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

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| birth.date | 1714年 | accepted |
| death.date | 1748年 | accepted |
| bio.summary | 王昱（1714年—1748年），清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 71130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 71130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71130&o=json)

---
schema: wang-person/v1
id: p_mPvn6cAvHte4h7vhugYUrv
status: merged
merged_into: p_aJyucbNuo6SKu4c6Y3x6DY
display_name: 王昭遠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Ynza5Q5P5gDv61GtiAmwU
        subject_person_id: p_mPvn6cAvHte4h7vhugYUrv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoMXgH3WfW57GnJqHaC4oY
          claim_id: c_9Ynza5Q5P5gDv61GtiAmwU
          source_id: s_yL4VGkQgxsX4icZBBBXsdo
          stance: supports
          locator: CBDB:21981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21981）
          source: &a1
            id: s_yL4VGkQgxsX4icZBBBXsdo
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遠（CBDB 21981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21981&o=json
            external_identifier: CBDB:21981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2arhhPjx8zVQYRH23C2wsG
        subject_person_id: p_mPvn6cAvHte4h7vhugYUrv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 944年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VG35DV2ezXcSRqLutXjk63
          claim_id: c_2arhhPjx8zVQYRH23C2wsG
          source_id: s_yL4VGkQgxsX4icZBBBXsdo
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
        id: c_rhssigfZv7mP6E251Z6L2F
        subject_person_id: p_mPvn6cAvHte4h7vhugYUrv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N46RH2EHFHD8i1gSCMN2hc
          claim_id: c_rhssigfZv7mP6E251Z6L2F
          source_id: s_yL4VGkQgxsX4icZBBBXsdo
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
        id: c_ybYZHdLS2M5cdu3eCgpnjQ
        subject_person_id: p_mPvn6cAvHte4h7vhugYUrv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遠（944年—999年），宋人物。籍贯阜城，身份为良吏;循吏，曾任兵馬都部署（總管）、兵馬副都部署（總管）。（中国历代人物传记资料库 CBDB 21981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6wXTht8W5NN1FII31EDiq_
          claim_id: c_ybYZHdLS2M5cdu3eCgpnjQ
          source_id: s_yL4VGkQgxsX4icZBBBXsdo
          stance: supports
          locator: CBDB:21981
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

# 王昭遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭遠 | accepted |
| birth.date | 944年 | accepted |
| death.date | 999年 | accepted |
| bio.summary | 王昭遠（944年—999年），宋人物。籍贯阜城，身份为良吏;循吏，曾任兵馬都部署（總管）、兵馬副都部署（總管）。（中国历代人物传记资料库 CBDB 21981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭遠（CBDB 21981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21981&o=json)

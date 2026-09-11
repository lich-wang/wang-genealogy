---
schema: wang-person/v1
id: p_1AqCGmtYhADgntshBYeWG5
status: active
merged_into: null
display_name: 王大年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8SAec5KC2qxHR55a71wtXL
        subject_person_id: p_1AqCGmtYhADgntshBYeWG5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5rHPuPGeF2bTQruygqpHB7
          claim_id: c_8SAec5KC2qxHR55a71wtXL
          source_id: s_BxYT51wz5U1GPXKpXqXSMc
          stance: supports
          locator: CBDB:501595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501595）
          source: &a1
            id: s_BxYT51wz5U1GPXKpXqXSMc
            source_type: api_record
            title: 中国历代人物传记资料库：王大年（CBDB 501595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501595&o=json
            external_identifier: CBDB:501595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TiUv8PUVL4nQMht6y4KtKf
        subject_person_id: p_1AqCGmtYhADgntshBYeWG5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年，明人物。入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 501595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TgIFUW_gBli5ybZs-P7_-k
          claim_id: c_TiUv8PUVL4nQMht6y4KtKf
          source_id: s_BxYT51wz5U1GPXKpXqXSMc
          stance: supports
          locator: CBDB:501595
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

# 王大年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大年 | accepted |
| bio.summary | 王大年，明人物。入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 501595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大年（CBDB 501595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501595&o=json)

---
schema: wang-person/v1
id: p_r5LpMfu559gKTZJtfZwjWt
status: active
merged_into: null
display_name: 王傘臺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Jt3qJwZbsPUcoE7nNfFXj
        subject_person_id: p_r5LpMfu559gKTZJtfZwjWt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傘臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r3enbiD3FhcUdQS915rJ6v
          claim_id: c_5Jt3qJwZbsPUcoE7nNfFXj
          source_id: s_9JCMqe3HYCfa55sNrq8Jz9
          stance: supports
          locator: CBDB:635970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635970）
          source: &a1
            id: s_9JCMqe3HYCfa55sNrq8Jz9
            source_type: api_record
            title: 中国历代人物传记资料库：王傘臺（CBDB 635970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635970&o=json
            external_identifier: CBDB:635970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97o4Jz6SXiUxXvCdioFFae
        subject_person_id: p_r5LpMfu559gKTZJtfZwjWt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傘臺，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 635970）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A2hMLiHTcVq2o-7hfBNDDf
          claim_id: c_97o4Jz6SXiUxXvCdioFFae
          source_id: s_9JCMqe3HYCfa55sNrq8Jz9
          stance: supports
          locator: CBDB:635970
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

# 王傘臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傘臺 | accepted |
| bio.summary | 王傘臺，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 635970） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傘臺（CBDB 635970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635970&o=json)

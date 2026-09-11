---
schema: wang-person/v1
id: p_3wfpF3ewzUFQzfSq3k783S
status: active
merged_into: null
display_name: 王用文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C8xsAosWEqx3rvGARKCnAd
        subject_person_id: p_3wfpF3ewzUFQzfSq3k783S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YWd2fDS5LGCMFwZfr9NxV9
          claim_id: c_C8xsAosWEqx3rvGARKCnAd
          source_id: s_XdFFHLGi9duWUP7G8LDqq3
          stance: supports
          locator: CBDB:474020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474020）
          source: &a1
            id: s_XdFFHLGi9duWUP7G8LDqq3
            source_type: api_record
            title: 中国历代人物传记资料库：王用文（CBDB 474020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474020&o=json
            external_identifier: CBDB:474020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QQc6wCWtZHNukG2jxmPXP
        subject_person_id: p_3wfpF3ewzUFQzfSq3k783S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王用文，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任知縣。（中国历代人物传记资料库 CBDB 474020）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lPCuHBiFIUqx1ocDh8HBmf
          claim_id: c_9QQc6wCWtZHNukG2jxmPXP
          source_id: s_XdFFHLGi9duWUP7G8LDqq3
          stance: supports
          locator: CBDB:474020
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

# 王用文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用文 | accepted |
| bio.summary | 王用文，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任知縣。（中国历代人物传记资料库 CBDB 474020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用文（CBDB 474020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474020&o=json)

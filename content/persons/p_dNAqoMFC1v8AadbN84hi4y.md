---
schema: wang-person/v1
id: p_dNAqoMFC1v8AadbN84hi4y
status: active
merged_into: null
display_name: 王弈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8WAzp1Amzz4yKqkPShXNHx
        subject_person_id: p_dNAqoMFC1v8AadbN84hi4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xu3sbujyA1ABjaEwYRZ2uP
          claim_id: c_8WAzp1Amzz4yKqkPShXNHx
          source_id: s_JVZpD4Yqeyc2RY9pZeaf2S
          stance: supports
          locator: CBDB:35363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35363）
          source: &a1
            id: s_JVZpD4Yqeyc2RY9pZeaf2S
            source_type: api_record
            title: 中国历代人物传记资料库：王弈（CBDB 35363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35363&o=json
            external_identifier: CBDB:35363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1KzZUGsasEfaQNycUKk1eD
        subject_person_id: p_dNAqoMFC1v8AadbN84hi4y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈，元人物。籍贯玉山，身份为收徒講學，曾任縣學教諭。（中国历代人物传记资料库 CBDB 35363）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JQrGyPkcpTaL4L2Xwd1_9D
          claim_id: c_1KzZUGsasEfaQNycUKk1eD
          source_id: s_JVZpD4Yqeyc2RY9pZeaf2S
          stance: supports
          locator: CBDB:35363
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

# 王弈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弈 | accepted |
| bio.summary | 王弈，元人物。籍贯玉山，身份为收徒講學，曾任縣學教諭。（中国历代人物传记资料库 CBDB 35363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弈（CBDB 35363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35363&o=json)

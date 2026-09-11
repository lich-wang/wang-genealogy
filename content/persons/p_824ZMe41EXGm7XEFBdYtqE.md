---
schema: wang-person/v1
id: p_824ZMe41EXGm7XEFBdYtqE
status: active
merged_into: null
display_name: 王仕煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s49VWFBfFxo6eSN2ZtKpxN
        subject_person_id: p_824ZMe41EXGm7XEFBdYtqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AKBMmSZBK8YTLMG7jtTKcy
          claim_id: c_s49VWFBfFxo6eSN2ZtKpxN
          source_id: s_NPHtGqNQPgrnCHp6LDpuoS
          stance: supports
          locator: CBDB:635902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635902）
          source: &a1
            id: s_NPHtGqNQPgrnCHp6LDpuoS
            source_type: api_record
            title: 中国历代人物传记资料库：王仕煒（CBDB 635902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635902&o=json
            external_identifier: CBDB:635902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d1D9zZcx4kb3GRXRAN9mHh
        subject_person_id: p_824ZMe41EXGm7XEFBdYtqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王仕煒，清人物。籍贯岳陽，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 635902）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tqtS9r89LYME2nvky1Ln_4
          claim_id: c_d1D9zZcx4kb3GRXRAN9mHh
          source_id: s_NPHtGqNQPgrnCHp6LDpuoS
          stance: supports
          locator: CBDB:635902
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

# 王仕煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕煒 | accepted |
| bio.summary | 王仕煒，清人物。籍贯岳陽，入仕貢生: 拔貢，曾任州判。（中国历代人物传记资料库 CBDB 635902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕煒（CBDB 635902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635902&o=json)

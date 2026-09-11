---
schema: wang-person/v1
id: p_dBALzAFfM8zHrD8TCymT5J
status: active
merged_into: null
display_name: 王應時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Zp5oxhiW4Y7NNHADXxARA
        subject_person_id: p_dBALzAFfM8zHrD8TCymT5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XLD7NtHH2YD2uarK8mog3G
          claim_id: c_2Zp5oxhiW4Y7NNHADXxARA
          source_id: s_aKec5ffhnmEaaYDKaqPtCu
          stance: supports
          locator: CBDB:456039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456039）
          source: &a1
            id: s_aKec5ffhnmEaaYDKaqPtCu
            source_type: api_record
            title: 中国历代人物传记资料库：王應時（CBDB 456039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456039&o=json
            external_identifier: CBDB:456039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F884xxHg2KPswneQKFQcQk
        subject_person_id: p_dBALzAFfM8zHrD8TCymT5J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 456039）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dq8HoEOQ2Ph0IksI8jg3pV
          claim_id: c_F884xxHg2KPswneQKFQcQk
          source_id: s_aKec5ffhnmEaaYDKaqPtCu
          stance: supports
          locator: CBDB:456039
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

# 王應時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應時 | accepted |
| bio.summary | 王應時，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 456039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應時（CBDB 456039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456039&o=json)

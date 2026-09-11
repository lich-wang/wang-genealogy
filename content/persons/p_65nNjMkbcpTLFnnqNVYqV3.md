---
schema: wang-person/v1
id: p_65nNjMkbcpTLFnnqNVYqV3
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjGiJwp6JMwNuAPE52Knmi
        subject_person_id: p_65nNjMkbcpTLFnnqNVYqV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7pryVtQCnBQTB2bd6pv5L
          claim_id: c_BjGiJwp6JMwNuAPE52Knmi
          source_id: s_5APwfKBuN4Bw6shWJK6r2L
          stance: supports
          locator: CBDB:557817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557817）
          source: &a1
            id: s_5APwfKBuN4Bw6shWJK6r2L
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 557817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557817&o=json
            external_identifier: CBDB:557817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WFi8QS2CPsJjgRqQcQ7ZAx
        subject_person_id: p_65nNjMkbcpTLFnnqNVYqV3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，清人物。籍贯信陽州，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 557817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pLjvCIgYHVhH2ra_FJJA8h
          claim_id: c_WFi8QS2CPsJjgRqQcQ7ZAx
          source_id: s_5APwfKBuN4Bw6shWJK6r2L
          stance: supports
          locator: CBDB:557817
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，清人物。籍贯信陽州，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 557817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 557817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557817&o=json)

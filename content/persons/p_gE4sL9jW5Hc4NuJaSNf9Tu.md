---
schema: wang-person/v1
id: p_gE4sL9jW5Hc4NuJaSNf9Tu
status: active
merged_into: null
display_name: 王夏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JVW61ip6N9euDUbqtgHBo8
        subject_person_id: p_gE4sL9jW5Hc4NuJaSNf9Tu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏，宋人物。CBDB 记录其籍贯记录为德安，曾任將作監主簿、三司勾當公事。中国历代人物传记资料库（CBDB）以人物编号 1814 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xk8qbv22dppBh9NEAziTQd
          claim_id: c_JVW61ip6N9euDUbqtgHBo8
          source_id: s_ewbvH2LmxxKcNZzqymwqC6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ewbvH2LmxxKcNZzqymwqC6
            source_type: api_record
            title: 维基数据：王夏（Q45359489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359489
            external_identifier: Q45359489
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
        - id: cs_bMXeS4DLEiij5EAwrAlpF5
          claim_id: c_JVW61ip6N9euDUbqtgHBo8
          source_id: s_r1Brozj1hEXVj5B7bw5sVr
          stance: supports
          locator: CBDB:1814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r1Brozj1hEXVj5B7bw5sVr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王夏（1814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1814&o=json
            external_identifier: CBDB:1814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:09.034Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCXtTMR6X112eBEuUuapZN
        subject_person_id: p_gE4sL9jW5Hc4NuJaSNf9Tu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MZ2gMWybSc9Fkm7MeDGxSt
          claim_id: c_LCXtTMR6X112eBEuUuapZN
          source_id: s_r1Brozj1hEXVj5B7bw5sVr
          stance: supports
          locator: Q45359489
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_i83yxxPQMRUJ28kPNgEapC
          claim_id: c_LCXtTMR6X112eBEuUuapZN
          source_id: s_ewbvH2LmxxKcNZzqymwqC6
          stance: supports
          locator: Q45359489
          quotation: null
          interpretation_note: null
          source:
            id: s_ewbvH2LmxxKcNZzqymwqC6
            source_type: api_record
            title: 维基数据：王夏（Q45359489）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359489
            external_identifier: Q45359489
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json: null
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

# 王夏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夏，宋人物。CBDB 记录其籍贯记录为德安，曾任將作監主簿、三司勾當公事。中国历代人物传记资料库（CBDB）以人物编号 1814 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王夏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王夏（Q45359489）](https://www.wikidata.org/wiki/Q45359489)
- [CBDB 中国历代人物传记资料库：王夏（1814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1814&o=json)

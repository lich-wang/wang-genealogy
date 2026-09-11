---
schema: wang-person/v1
id: p_xEBqEu6PQHHzr1PTdDcVxF
status: active
merged_into: null
display_name: 王之才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGANRPKKzroE7L56AxEANi
        subject_person_id: p_xEBqEu6PQHHzr1PTdDcVxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4H8KR5Q1f2HjRK7v48Q546
          claim_id: c_MGANRPKKzroE7L56AxEANi
          source_id: s_KvxuSHyumTPntozAuzBC5b
          stance: supports
          locator: CBDB:101051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101051）
          source: &a1
            id: s_KvxuSHyumTPntozAuzBC5b
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 101051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101051&o=json
            external_identifier: CBDB:101051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4wELXRwiQ9vPcKK78W1HLL
        subject_person_id: p_xEBqEu6PQHHzr1PTdDcVxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才，元人物。曾任翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 101051）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lm8kBl-VM-oNTzOUgMtMS7
          claim_id: c_4wELXRwiQ9vPcKK78W1HLL
          source_id: s_KvxuSHyumTPntozAuzBC5b
          stance: supports
          locator: CBDB:101051
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

# 王之才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之才 | accepted |
| bio.summary | 王之才，元人物。曾任翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 101051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之才（CBDB 101051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101051&o=json)

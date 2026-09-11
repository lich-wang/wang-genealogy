---
schema: wang-person/v1
id: p_gG2L1FhyApaJxJyKs8U9zB
status: active
merged_into: null
display_name: 王本立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5rPmWKjmzi9Uv5TRjYJgmw
        subject_person_id: p_gG2L1FhyApaJxJyKs8U9zB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nEUrN3tPFGctNJbgGyT3X3
          claim_id: c_5rPmWKjmzi9Uv5TRjYJgmw
          source_id: s_PPWKJ8rv5tHJ5ircenSAYA
          stance: supports
          locator: CBDB:378383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378383）
          source: &a1
            id: s_PPWKJ8rv5tHJ5ircenSAYA
            source_type: api_record
            title: 中国历代人物传记资料库：王本立（CBDB 378383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378383&o=json
            external_identifier: CBDB:378383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49aTmdawfBxfq2VgqVLKJY
        subject_person_id: p_gG2L1FhyApaJxJyKs8U9zB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378383）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y02eM_wGgvhdibGR72ISZw
          claim_id: c_49aTmdawfBxfq2VgqVLKJY
          source_id: s_PPWKJ8rv5tHJ5ircenSAYA
          stance: supports
          locator: CBDB:378383
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

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本立 | accepted |
| bio.summary | 王本立，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本立（CBDB 378383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378383&o=json)

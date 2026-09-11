---
schema: wang-person/v1
id: p_DrC6rvHLfWfJVNtYQ2AA8e
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8fTiV5332RvKTkgzMtEAxu
        subject_person_id: p_DrC6rvHLfWfJVNtYQ2AA8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntmf7vScqLB1AM2Lm99v7z
          claim_id: c_8fTiV5332RvKTkgzMtEAxu
          source_id: s_6EB1A8yJxbZq6j9VYuTVW5
          stance: supports
          locator: CBDB:377545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377545）
          source: &a1
            id: s_6EB1A8yJxbZq6j9VYuTVW5
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 377545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377545&o=json
            external_identifier: CBDB:377545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XpacDUnmHcjhgn6DspJpLw
        subject_person_id: p_DrC6rvHLfWfJVNtYQ2AA8e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0aPF1h8w0DDkBV1QUlGThf
          claim_id: c_XpacDUnmHcjhgn6DspJpLw
          source_id: s_6EB1A8yJxbZq6j9VYuTVW5
          stance: supports
          locator: CBDB:377545
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

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 377545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377545&o=json)

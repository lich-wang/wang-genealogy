---
schema: wang-person/v1
id: p_GomhBek67EEbDAHPkN8z5o
status: active
merged_into: null
display_name: 王之爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b2nsjsNiZhEhNLMMfeGrJZ
        subject_person_id: p_GomhBek67EEbDAHPkN8z5o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ns4jz1X6PjqEKvs48JP745
          claim_id: c_b2nsjsNiZhEhNLMMfeGrJZ
          source_id: s_yWDE1QjfinDNKaRy5zEcZS
          stance: supports
          locator: CBDB:635801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635801）
          source: &a1
            id: s_yWDE1QjfinDNKaRy5zEcZS
            source_type: api_record
            title: 中国历代人物传记资料库：王之爵（CBDB 635801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635801&o=json
            external_identifier: CBDB:635801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qxt7EN6d7SaScLdbaa1DRp
        subject_person_id: p_GomhBek67EEbDAHPkN8z5o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之爵，清人物。籍贯德化，曾任知縣。（中国历代人物传记资料库 CBDB 635801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IIzV4uVqZcoJzD5JNqzrFn
          claim_id: c_Qxt7EN6d7SaScLdbaa1DRp
          source_id: s_yWDE1QjfinDNKaRy5zEcZS
          stance: supports
          locator: CBDB:635801
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

# 王之爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之爵 | accepted |
| bio.summary | 王之爵，清人物。籍贯德化，曾任知縣。（中国历代人物传记资料库 CBDB 635801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之爵（CBDB 635801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635801&o=json)

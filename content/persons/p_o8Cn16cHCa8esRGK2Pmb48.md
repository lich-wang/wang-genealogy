---
schema: wang-person/v1
id: p_o8Cn16cHCa8esRGK2Pmb48
status: active
merged_into: null
display_name: 王驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcVRVQ93bABxD5Y1t77Fhc
        subject_person_id: p_o8Cn16cHCa8esRGK2Pmb48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GKJXXqX9nNB4Xe6rJ2HxNG
          claim_id: c_bcVRVQ93bABxD5Y1t77Fhc
          source_id: s_ErnKPD2WkEp67vWNKSAAy7
          stance: supports
          locator: CBDB:479960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479960）
          source: &a1
            id: s_ErnKPD2WkEp67vWNKSAAy7
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 479960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479960&o=json
            external_identifier: CBDB:479960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UriGkk6dgjsGvHmF887L5i
        subject_person_id: p_o8Cn16cHCa8esRGK2Pmb48
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 479960）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RQ9SQ5B8VjIjp3JbnUv7vZ
          claim_id: c_UriGkk6dgjsGvHmF887L5i
          source_id: s_ErnKPD2WkEp67vWNKSAAy7
          stance: supports
          locator: CBDB:479960
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

# 王驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥 | accepted |
| bio.summary | 王驥，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 479960） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥（CBDB 479960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479960&o=json)

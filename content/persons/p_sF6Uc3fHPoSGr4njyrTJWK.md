---
schema: wang-person/v1
id: p_sF6Uc3fHPoSGr4njyrTJWK
status: active
merged_into: null
display_name: 王德輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nTjkyNRyJpfYkcsQz7QDos
        subject_person_id: p_sF6Uc3fHPoSGr4njyrTJWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VjPAMxboB9uDbym7sUHpRs
          claim_id: c_nTjkyNRyJpfYkcsQz7QDos
          source_id: s_fAXuCNpy5C8zcM3fu8F75J
          stance: supports
          locator: CBDB:101427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101427）
          source: &a1
            id: s_fAXuCNpy5C8zcM3fu8F75J
            source_type: api_record
            title: 中国历代人物传记资料库：王德輔（CBDB 101427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101427&o=json
            external_identifier: CBDB:101427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJ4y3q7AT9MktyLeUYXHyN
        subject_person_id: p_sF6Uc3fHPoSGr4njyrTJWK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德輔，元人物。籍贯商水，曾任中書省右司都事。（中国历代人物传记资料库 CBDB 101427）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y7uaInykl6eKOn_m02ZJ9i
          claim_id: c_LJ4y3q7AT9MktyLeUYXHyN
          source_id: s_fAXuCNpy5C8zcM3fu8F75J
          stance: supports
          locator: CBDB:101427
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

# 王德輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德輔 | accepted |
| bio.summary | 王德輔，元人物。籍贯商水，曾任中書省右司都事。（中国历代人物传记资料库 CBDB 101427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德輔（CBDB 101427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101427&o=json)

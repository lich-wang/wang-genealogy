---
schema: wang-person/v1
id: p_57kMwcAqFuQ7fFwkM1fnYz
status: active
merged_into: null
display_name: 王世澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jji2oZzwP4PDAxDXNw9v3h
        subject_person_id: p_57kMwcAqFuQ7fFwkM1fnYz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u1qPX2u7zkiATfLrAjDbp9
          claim_id: c_jji2oZzwP4PDAxDXNw9v3h
          source_id: s_VMhMC14ETQ8MkvgQet5fy5
          stance: supports
          locator: CBDB:635693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635693）
          source: &a1
            id: s_VMhMC14ETQ8MkvgQet5fy5
            source_type: api_record
            title: 中国历代人物传记资料库：王世澤（CBDB 635693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635693&o=json
            external_identifier: CBDB:635693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwXCS5en13zSk1hv3D6d2n
        subject_person_id: p_57kMwcAqFuQ7fFwkM1fnYz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世澤，清人物。籍贯昆明，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 635693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rFvXmxoaT-Iy28w9xoJ0XG
          claim_id: c_LwXCS5en13zSk1hv3D6d2n
          source_id: s_VMhMC14ETQ8MkvgQet5fy5
          stance: supports
          locator: CBDB:635693
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

# 王世澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世澤 | accepted |
| bio.summary | 王世澤，清人物。籍贯昆明，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 635693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世澤（CBDB 635693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635693&o=json)

---
schema: wang-person/v1
id: p_h58eQop5uijq6N3v5UjL4c
status: active
merged_into: null
display_name: 王恬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S2M5kQb7HhqC3VTutDtwQr
        subject_person_id: p_h58eQop5uijq6N3v5UjL4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gAxqHPEghPE7wZvKKuJbbN
          claim_id: c_S2M5kQb7HhqC3VTutDtwQr
          source_id: s_BfG2ogqHZxwrhe4camfeLR
          stance: supports
          locator: CBDB:479145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479145）
          source: &a1
            id: s_BfG2ogqHZxwrhe4camfeLR
            source_type: api_record
            title: 中国历代人物传记资料库：王恬（CBDB 479145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479145&o=json
            external_identifier: CBDB:479145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tGYEhMbJ3Bn4WodYdAgsb8
        subject_person_id: p_h58eQop5uijq6N3v5UjL4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恬，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 479145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n5W0ac_YNMtvbC2OBnuaoJ
          claim_id: c_tGYEhMbJ3Bn4WodYdAgsb8
          source_id: s_BfG2ogqHZxwrhe4camfeLR
          stance: supports
          locator: CBDB:479145
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

# 王恬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恬 | accepted |
| bio.summary | 王恬，宋人物。曾任轉運使。（中国历代人物传记资料库 CBDB 479145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恬（CBDB 479145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479145&o=json)

---
schema: wang-person/v1
id: p_eoEXeUbti2xM7s54RedBVQ
status: active
merged_into: null
display_name: 王猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PAey7dgkXK8q5Y13jsH4j
        subject_person_id: p_eoEXeUbti2xM7s54RedBVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKnjf1G4U4rBavtFqDy34G
          claim_id: c_3PAey7dgkXK8q5Y13jsH4j
          source_id: s_4BscNK18VxPSmEQ5N7RuT1
          stance: supports
          locator: CBDB:343784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343784）
          source: &a1
            id: s_4BscNK18VxPSmEQ5N7RuT1
            source_type: api_record
            title: 中国历代人物传记资料库：王猷（CBDB 343784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343784&o=json
            external_identifier: CBDB:343784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CBk7HZqLSbwVnBaZ6ho5qR
        subject_person_id: p_eoEXeUbti2xM7s54RedBVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷，明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 343784）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TdJxfxf1Sj2y-t4lPW20w7
          claim_id: c_CBk7HZqLSbwVnBaZ6ho5qR
          source_id: s_4BscNK18VxPSmEQ5N7RuT1
          stance: supports
          locator: CBDB:343784
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

# 王猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷 | accepted |
| bio.summary | 王猷，明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 343784） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王猷（CBDB 343784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343784&o=json)

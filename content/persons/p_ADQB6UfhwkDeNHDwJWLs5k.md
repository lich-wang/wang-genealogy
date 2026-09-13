---
schema: wang-person/v1
id: p_ADQB6UfhwkDeNHDwJWLs5k
status: active
merged_into: null
display_name: 王四光
cbdb_id: 216147
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPMuc55kE2erhL7Mk7Moi6
        subject_person_id: p_ADQB6UfhwkDeNHDwJWLs5k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王四光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216147）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q9DSQ8k68qOTOpb3H4rT9o
          claim_id: c_GPMuc55kE2erhL7Mk7Moi6
          source_id: s_H9KKuwT1RXQvgkUCd1Hcdt
          stance: supports
          locator: CBDB:216147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H9KKuwT1RXQvgkUCd1Hcdt
            source_type: api_record
            title: 中国历代人物传记资料库：王四光（CBDB 216147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216147&o=json
            external_identifier: CBDB:216147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7W4NARMcdDw7tC8aUCBRoC
        subject_person_id: p_ADQB6UfhwkDeNHDwJWLs5k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王四光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C1qi6cd3gLPK4DGud35UF8
          claim_id: c_7W4NARMcdDw7tC8aUCBRoC
          source_id: s_H9KKuwT1RXQvgkUCd1Hcdt
          stance: supports
          locator: CBDB:216147
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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

# 王四光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王四光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216147） | accepted |
| name.primary | 王四光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王四光（CBDB 216147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216147&o=json)

---
schema: wang-person/v1
id: p_W2tHNBRVD1pCHXRqxW1ADG
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5yzodnArZnNMWik58zdhQ
        subject_person_id: p_W2tHNBRVD1pCHXRqxW1ADG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJLhFQ1nZJGnXr4LAGYXbx
          claim_id: c_Y5yzodnArZnNMWik58zdhQ
          source_id: s_BDDs2g9ACfaJ495fkvt2V4
          stance: supports
          locator: CBDB:253008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253008）
          source: &a1
            id: s_BDDs2g9ACfaJ495fkvt2V4
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 253008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253008&o=json
            external_identifier: CBDB:253008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMCRncb6cQroJUk8Z6BtUP
        subject_person_id: p_W2tHNBRVD1pCHXRqxW1ADG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。成化十四年進士，籍贯商水，曾任知縣。（中国历代人物传记资料库 CBDB 253008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LgjkfFeO6anee_GroCFvEe
          claim_id: c_rMCRncb6cQroJUk8Z6BtUP
          source_id: s_BDDs2g9ACfaJ495fkvt2V4
          stance: supports
          locator: CBDB:253008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nZNp5pUh5MmQY0nl6qmvti
        subject_person_id: p_W2tHNBRVD1pCHXRqxW1ADG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43oxrVydbBuY01x9FDd5UP
          claim_id: c_nZNp5pUh5MmQY0nl6qmvti
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NXxFJQ5QppEL8W3nndMu23
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 200038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json
            external_identifier: CBDB:200038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eMDP1q9C4pkhGjAYDKDRYY
        status: active
        display_name: 王相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。成化十四年進士，籍贯商水，曾任知縣。（中国历代人物传记资料库 CBDB 253008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eMDP1q9C4pkhGjAYDKDRYY | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 253008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253008&o=json)
- [中国历代人物传记资料库：王相（CBDB 200038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json)

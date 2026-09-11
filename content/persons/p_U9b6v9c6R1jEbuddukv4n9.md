---
schema: wang-person/v1
id: p_U9b6v9c6R1jEbuddukv4n9
status: active
merged_into: null
display_name: 王立德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nXQYR4ySZeFqTrzBinWnkV
        subject_person_id: p_U9b6v9c6R1jEbuddukv4n9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVpUqjmWdvSNJYkBo3ts11
          claim_id: c_nXQYR4ySZeFqTrzBinWnkV
          source_id: s_BqHyFtHt2YcdckWj72LYMx
          stance: supports
          locator: CBDB:226078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226078）
          source: &a1
            id: s_BqHyFtHt2YcdckWj72LYMx
            source_type: api_record
            title: 中国历代人物传记资料库：王立德（CBDB 226078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json
            external_identifier: CBDB:226078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7wPpj8fjNfcL8RBE3B9kd
        subject_person_id: p_U9b6v9c6R1jEbuddukv4n9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeX77qF6ZaRBy2HGBv9jAE
          claim_id: c_o7wPpj8fjNfcL8RBE3B9kd
          source_id: s_BqHyFtHt2YcdckWj72LYMx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wW9r1Gdw4tmbH2YLcY7QNY
        subject_person_id: p_4A86HEw8MTfsRuaTJeDAXg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9b6v9c6R1jEbuddukv4n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkrkTxkcTFwI4rQIHO_Y7X
          claim_id: c_wW9r1Gdw4tmbH2YLcY7QNY
          source_id: s_BqHyFtHt2YcdckWj72LYMx
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4A86HEw8MTfsRuaTJeDAXg
        status: active
        display_name: 王如堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4A86HEw8MTfsRuaTJeDAXg | 王如堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立德（CBDB 226078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226078&o=json)

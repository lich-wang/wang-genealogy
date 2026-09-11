---
schema: wang-person/v1
id: p_HK4GgyFAXo4MSTVokTaDkH
status: active
merged_into: null
display_name: 王煦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cE5sFmPLpKBo7eMNVAmuKb
        subject_person_id: p_HK4GgyFAXo4MSTVokTaDkH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfXbH8GWt4zJykuQWzkJog
          claim_id: c_cE5sFmPLpKBo7eMNVAmuKb
          source_id: s_ui5KyMLjsWnJu4Dsf6FEiU
          stance: supports
          locator: CBDB:560170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560170）
          source: &a1
            id: s_ui5KyMLjsWnJu4Dsf6FEiU
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 560170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560170&o=json
            external_identifier: CBDB:560170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ueqQERohLE9Ax8MwBJKGxx
        subject_person_id: p_HK4GgyFAXo4MSTVokTaDkH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦，清人物。籍贯信陽州，入仕鄉貢舉人，曾任未詳、會典館協修官、謄錄官。（中国历代人物传记资料库 CBDB 560170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ve6piwE3AQp4CgUNbdVQjM
          claim_id: c_ueqQERohLE9Ax8MwBJKGxx
          source_id: s_ui5KyMLjsWnJu4Dsf6FEiU
          stance: supports
          locator: CBDB:560170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yRUVTPoRKMXtGIS-yVpVA1
        subject_person_id: p_MVTcTM9siZGnQc727Uv8hS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HK4GgyFAXo4MSTVokTaDkH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2nXtVNWbHR4-Ps1-cCLXzN
          claim_id: c_yRUVTPoRKMXtGIS-yVpVA1
          source_id: s_ui5KyMLjsWnJu4Dsf6FEiU
          stance: supports
          locator: (民國)信陽縣志：三十一卷，lgid=869215：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MVTcTM9siZGnQc727Uv8hS
        status: active
        display_name: 王揚曾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| bio.summary | 王煦，清人物。籍贯信陽州，入仕鄉貢舉人，曾任未詳、會典館協修官、謄錄官。（中国历代人物传记资料库 CBDB 560170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MVTcTM9siZGnQc727Uv8hS | 王揚曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煦（CBDB 560170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560170&o=json)

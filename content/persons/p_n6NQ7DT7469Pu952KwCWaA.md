---
schema: wang-person/v1
id: p_n6NQ7DT7469Pu952KwCWaA
status: active
merged_into: null
display_name: 王易簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3RU7b2dt7NrP9sAJVS81wU
        subject_person_id: p_n6NQ7DT7469Pu952KwCWaA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92NrmrQ6YEMRjKqNjMP9zb
          claim_id: c_3RU7b2dt7NrP9sAJVS81wU
          source_id: s_WGHPnXLwGq1Fh5KjQEL2SV
          stance: supports
          locator: CBDB:22053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22053）
          source: &a1
            id: s_WGHPnXLwGq1Fh5KjQEL2SV
            source_type: api_record
            title: 中国历代人物传记资料库：王易簡（CBDB 22053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22053&o=json
            external_identifier: CBDB:22053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GP82nE5hhns5LwH6F447QH
        subject_person_id: p_n6NQ7DT7469Pu952KwCWaA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1130年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ch7Kr1fg3JNUT4egQEWLQF
          claim_id: c_GP82nE5hhns5LwH6F447QH
          source_id: s_WGHPnXLwGq1Fh5KjQEL2SV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eGDZPhBMth4rntXFda2cqi
        subject_person_id: p_n6NQ7DT7469Pu952KwCWaA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易簡（卒于1130年），宋人物。籍贯德安，曾任資政殿大學士。（中国历代人物传记资料库 CBDB 22053）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F2lFr-pTkHL-cRfGGtNhz4
          claim_id: c_eGDZPhBMth4rntXFda2cqi
          source_id: s_WGHPnXLwGq1Fh5KjQEL2SV
          stance: supports
          locator: CBDB:22053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pCftOINz6ojHXdTKYPOEnV
        subject_person_id: p_n6NQ7DT7469Pu952KwCWaA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNMzH9tye57N2hA1kpLYob
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCw_wiDt_OUNuTP-yE0TXU
          claim_id: c_pCftOINz6ojHXdTKYPOEnV
          source_id: s_UuYEQGujaqrc86gKBj2DpC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1736：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UuYEQGujaqrc86gKBj2DpC
            source_type: api_record
            title: 中国历代人物传记资料库：王㝢（CBDB 8155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8155&o=json
            external_identifier: CBDB:8155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tNMzH9tye57N2hA1kpLYob
        status: active
        display_name: 王㝢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王易簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易簡 | accepted |
| death.date | 1130年 | accepted |
| bio.summary | 王易簡（卒于1130年），宋人物。籍贯德安，曾任資政殿大學士。（中国历代人物传记资料库 CBDB 22053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tNMzH9tye57N2hA1kpLYob | 王㝢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王易簡（CBDB 22053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22053&o=json)
- [中国历代人物传记资料库：王㝢（CBDB 8155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8155&o=json)

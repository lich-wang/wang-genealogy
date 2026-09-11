---
schema: wang-person/v1
id: p_s2q5cpNfPyzybvtK1mGC3F
status: active
merged_into: null
display_name: 王寶霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDzaP4gBEmQdmgtNeVspEc
        subject_person_id: p_s2q5cpNfPyzybvtK1mGC3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dGewhHqVTf2bbvtCNt8pQH
          claim_id: c_pDzaP4gBEmQdmgtNeVspEc
          source_id: s_JBKszVE43uY5T4Lon2hD4V
          stance: supports
          locator: CBDB:637280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637280）
          source: &a1
            id: s_JBKszVE43uY5T4Lon2hD4V
            source_type: api_record
            title: 中国历代人物传记资料库：王寶霖（CBDB 637280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637280&o=json
            external_identifier: CBDB:637280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_isxFpDA4vu1fiDQ9FkL9Dz
        subject_person_id: p_s2q5cpNfPyzybvtK1mGC3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶霖，清人物。籍贯歷城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637280）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DWyqIISArjYHQGpVMSublf
          claim_id: c_isxFpDA4vu1fiDQ9FkL9Dz
          source_id: s_JBKszVE43uY5T4Lon2hD4V
          stance: supports
          locator: CBDB:637280
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

# 王寶霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶霖 | accepted |
| bio.summary | 王寶霖，清人物。籍贯歷城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶霖（CBDB 637280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637280&o=json)

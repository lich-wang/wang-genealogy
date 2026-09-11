---
schema: wang-person/v1
id: p_WUwSPQu8y39D1vbAaAq9bt
status: active
merged_into: null
display_name: 王朝鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pdTN7cQiFFaZ466WDwjaFR
        subject_person_id: p_WUwSPQu8y39D1vbAaAq9bt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gsrNzF37qaMTVzaeePRCjX
          claim_id: c_pdTN7cQiFFaZ466WDwjaFR
          source_id: s_rL2LCpRcAdoPcVSxMRNrhs
          stance: supports
          locator: CBDB:414853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414853）
          source: &a1
            id: s_rL2LCpRcAdoPcVSxMRNrhs
            source_type: api_record
            title: 中国历代人物传记资料库：王朝鼎（CBDB 414853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414853&o=json
            external_identifier: CBDB:414853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s8svfgiK45JSnhBXAeURQC
        subject_person_id: p_WUwSPQu8y39D1vbAaAq9bt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝鼎，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xRwIsmQe7pDatwDmt-k4js
          claim_id: c_s8svfgiK45JSnhBXAeURQC
          source_id: s_rL2LCpRcAdoPcVSxMRNrhs
          stance: supports
          locator: CBDB:414853
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

# 王朝鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝鼎 | accepted |
| bio.summary | 王朝鼎，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝鼎（CBDB 414853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414853&o=json)

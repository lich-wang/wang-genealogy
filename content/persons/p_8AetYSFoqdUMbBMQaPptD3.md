---
schema: wang-person/v1
id: p_8AetYSFoqdUMbBMQaPptD3
status: active
merged_into: null
display_name: 王國鑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjaSGFp5DpCWQcicHyVXxH
        subject_person_id: p_8AetYSFoqdUMbBMQaPptD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yrQ9CAtsWVE9BB9U7PWozq
          claim_id: c_MjaSGFp5DpCWQcicHyVXxH
          source_id: s_Hgf9ekbT4iC6jJh46Ru66t
          stance: supports
          locator: CBDB:576106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576106）
          source: &a1
            id: s_Hgf9ekbT4iC6jJh46Ru66t
            source_type: api_record
            title: 中国历代人物传记资料库：王國鑒（CBDB 576106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576106&o=json
            external_identifier: CBDB:576106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zcEfBVTyyQrMmJDuQaBNmK
        subject_person_id: p_8AetYSFoqdUMbBMQaPptD3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國鑒，清人物。籍贯安溪，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576106）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WsBrXA-wrizWziHE-oY2c2
          claim_id: c_zcEfBVTyyQrMmJDuQaBNmK
          source_id: s_Hgf9ekbT4iC6jJh46Ru66t
          stance: supports
          locator: CBDB:576106
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

# 王國鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國鑒 | accepted |
| bio.summary | 王國鑒，清人物。籍贯安溪，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國鑒（CBDB 576106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576106&o=json)

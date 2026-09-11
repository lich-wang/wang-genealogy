---
schema: wang-person/v1
id: p_BqxVUTRSmrX33praoogLZo
status: active
merged_into: null
display_name: 王頊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xV1zJ9Ptfz2CT3AbRydGAE
        subject_person_id: p_BqxVUTRSmrX33praoogLZo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EWg31GKHVYESUxRQXi7cEo
          claim_id: c_xV1zJ9Ptfz2CT3AbRydGAE
          source_id: s_8ZXJ51Cnq7aR9StsJbyRG8
          stance: supports
          locator: CBDB:294339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294339）
          source: &a1
            id: s_8ZXJ51Cnq7aR9StsJbyRG8
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 294339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294339&o=json
            external_identifier: CBDB:294339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_od91nPrMLHh5TLYhKEM1NX
        subject_person_id: p_BqxVUTRSmrX33praoogLZo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294339）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ha2qN7SI49EvgyL6FdFLPJ
          claim_id: c_od91nPrMLHh5TLYhKEM1NX
          source_id: s_8ZXJ51Cnq7aR9StsJbyRG8
          stance: supports
          locator: CBDB:294339
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

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| bio.summary | 王頊，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 294339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294339&o=json)

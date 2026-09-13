---
schema: wang-person/v1
id: p_rLgJVgHF8pNX8jyGiZ1uTU
status: active
merged_into: null
display_name: 王玉鼎
cbdb_id: 458442
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Db3tCuYErZL1sh9bH1WL1
        subject_person_id: p_rLgJVgHF8pNX8jyGiZ1uTU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉鼎，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 458442）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ED4tIdt6NjxZkrTZ7rsBR-
          claim_id: c_2Db3tCuYErZL1sh9bH1WL1
          source_id: s_b5pAQV316FwPed6yWovGsb
          stance: supports
          locator: CBDB:458442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b5pAQV316FwPed6yWovGsb
            source_type: api_record
            title: 中国历代人物传记资料库：王玉鼎（CBDB 458442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458442&o=json
            external_identifier: CBDB:458442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W7EgCPSENX9UzPa59W2Xat
        subject_person_id: p_rLgJVgHF8pNX8jyGiZ1uTU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z5eDZQMFS25Q2HexyGbSz5
          claim_id: c_W7EgCPSENX9UzPa59W2Xat
          source_id: s_b5pAQV316FwPed6yWovGsb
          stance: supports
          locator: CBDB:458442
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 清
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

# 王玉鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉鼎，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 458442） | accepted |
| name.primary | 王玉鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉鼎（CBDB 458442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458442&o=json)

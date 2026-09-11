---
schema: wang-person/v1
id: p_avywSKstqi4uDDdfKX8y2g
status: active
merged_into: null
display_name: 王正志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1AE24ErCwsS42Lk1ZUYTD
        subject_person_id: p_avywSKstqi4uDDdfKX8y2g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sbvJ1DFbyqz8LLWim4uChS
          claim_id: c_r1AE24ErCwsS42Lk1ZUYTD
          source_id: s_L9X8bkwEDm1wnieUGEhGHt
          stance: supports
          locator: CBDB:493522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493522）
          source: &a1
            id: s_L9X8bkwEDm1wnieUGEhGHt
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 493522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493522&o=json
            external_identifier: CBDB:493522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1b2Gwuq2J6PNk6vTcugnPK
        subject_person_id: p_avywSKstqi4uDDdfKX8y2g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 493522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kuxbbtdcFehKS3Jwa1DPWQ
          claim_id: c_1b2Gwuq2J6PNk6vTcugnPK
          source_id: s_L9X8bkwEDm1wnieUGEhGHt
          stance: supports
          locator: CBDB:493522
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

# 王正志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正志 | accepted |
| bio.summary | 王正志，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 493522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正志（CBDB 493522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493522&o=json)

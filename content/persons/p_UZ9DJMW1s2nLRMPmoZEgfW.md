---
schema: wang-person/v1
id: p_UZ9DJMW1s2nLRMPmoZEgfW
status: active
merged_into: null
display_name: 王大烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5uwBh5QG624ecK1KLdjJzh
        subject_person_id: p_UZ9DJMW1s2nLRMPmoZEgfW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KtzDnJ3UjKTMBPUBABw2mQ
          claim_id: c_5uwBh5QG624ecK1KLdjJzh
          source_id: s_1PB7Ke6B7afVAStUqZHn5E
          stance: supports
          locator: CBDB:342899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342899）
          source: &a1
            id: s_1PB7Ke6B7afVAStUqZHn5E
            source_type: api_record
            title: 中国历代人物传记资料库：王大烈（CBDB 342899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342899&o=json
            external_identifier: CBDB:342899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e58yoZN2a99a9ju2CcVi1U
        subject_person_id: p_UZ9DJMW1s2nLRMPmoZEgfW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大烈，清人物。明清進士進士，籍贯陝西省，入仕進士。（中国历代人物传记资料库 CBDB 342899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UQdzocvfHtEb-YJS08Vtvy
          claim_id: c_e58yoZN2a99a9ju2CcVi1U
          source_id: s_1PB7Ke6B7afVAStUqZHn5E
          stance: supports
          locator: CBDB:342899
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

# 王大烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大烈 | accepted |
| bio.summary | 王大烈，清人物。明清進士進士，籍贯陝西省，入仕進士。（中国历代人物传记资料库 CBDB 342899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大烈（CBDB 342899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342899&o=json)

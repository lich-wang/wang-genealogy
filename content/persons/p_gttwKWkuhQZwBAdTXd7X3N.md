---
schema: wang-person/v1
id: p_gttwKWkuhQZwBAdTXd7X3N
status: active
merged_into: null
display_name: 王遂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RdBPv9zftqLNuqbTvK8RLa
        subject_person_id: p_gttwKWkuhQZwBAdTXd7X3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xb1HohJEwq4QwDL9TWkfFs
          claim_id: c_RdBPv9zftqLNuqbTvK8RLa
          source_id: s_yzA3UsE7YPvda8Np5Sw1GB
          stance: supports
          locator: CBDB:229819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229819）
          source: &a1
            id: s_yzA3UsE7YPvda8Np5Sw1GB
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 229819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229819&o=json
            external_identifier: CBDB:229819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iydF2rpia5GP6Winn1irfu
        subject_person_id: p_gttwKWkuhQZwBAdTXd7X3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2n2_3VXdVRHzbyGsD53Poh
          claim_id: c_iydF2rpia5GP6Winn1irfu
          source_id: s_yzA3UsE7YPvda8Np5Sw1GB
          stance: supports
          locator: CBDB:229819
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

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| bio.summary | 王遂，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遂（CBDB 229819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229819&o=json)

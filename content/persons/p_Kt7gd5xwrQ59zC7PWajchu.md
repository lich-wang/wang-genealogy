---
schema: wang-person/v1
id: p_Kt7gd5xwrQ59zC7PWajchu
status: active
merged_into: null
display_name: 王明傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_guT2wwMYfSEJbDfNag9QBy
        subject_person_id: p_Kt7gd5xwrQ59zC7PWajchu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_55oyyaMJPavfjCNxM7RobN
          claim_id: c_guT2wwMYfSEJbDfNag9QBy
          source_id: s_tvxZ7xi6AAqQGuApbgT1GH
          stance: supports
          locator: CBDB:693942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693942）
          source: &a1
            id: s_tvxZ7xi6AAqQGuApbgT1GH
            source_type: api_record
            title: 中国历代人物传记资料库：王明傑（CBDB 693942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693942&o=json
            external_identifier: CBDB:693942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TgR96vY6PpMAdqZ92SsRf3
        subject_person_id: p_Kt7gd5xwrQ59zC7PWajchu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明傑，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 693942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qPjgnlYvE85Vx1JPPXVBqJ
          claim_id: c_TgR96vY6PpMAdqZ92SsRf3
          source_id: s_tvxZ7xi6AAqQGuApbgT1GH
          stance: supports
          locator: CBDB:693942
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
  descendants:
    - claim:
        id: c_NHeiIg9n79KaF71BApLAm3
        subject_person_id: p_Kt7gd5xwrQ59zC7PWajchu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RB5j5yhNIPmtMBd8HNLi3A
          claim_id: c_NHeiIg9n79KaF71BApLAm3
          source_id: s_tvxZ7xi6AAqQGuApbgT1GH
          stance: supports
          locator: 鄞縣志，lgid=243594：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZYGKLCZoLcVYvHDQ8RSk15
        status: active
        display_name: 王日章
        merged_into_person_id: null
  other: []
---

# 王明傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明傑 | accepted |
| bio.summary | 王明傑，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 693942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ZYGKLCZoLcVYvHDQ8RSk15 | 王日章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明傑（CBDB 693942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693942&o=json)

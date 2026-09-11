---
schema: wang-person/v1
id: p_UHsTkRmWgSWo7DNHu6phbE
status: active
merged_into: null
display_name: 王九齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bpwd6adJs9JKFiayrxAViK
        subject_person_id: p_UHsTkRmWgSWo7DNHu6phbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsyEa9VZQ2RYWC8YmHw5Gv
          claim_id: c_bpwd6adJs9JKFiayrxAViK
          source_id: s_svjwyd9BGVDEJ4uYiHBLe7
          stance: supports
          locator: CBDB:69049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69049）
          source: &a1
            id: s_svjwyd9BGVDEJ4uYiHBLe7
            source_type: api_record
            title: 中国历代人物传记资料库：王九齡（CBDB 69049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69049&o=json
            external_identifier: CBDB:69049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DuiKiFz36phTDDUvefqNT4
        subject_person_id: p_UHsTkRmWgSWo7DNHu6phbE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1BaXxRKsvmDsfKAAcp1ax
          claim_id: c_DuiKiFz36phTDDUvefqNT4
          source_id: s_svjwyd9BGVDEJ4uYiHBLe7
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
        id: c_Q8p21eTprqUZymyWRGLA5j
        subject_person_id: p_UHsTkRmWgSWo7DNHu6phbE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九齡（卒于1709年），清人物。明清進士進士，籍贯婁縣，入仕進士，曾任編修、兵部右侍郎、充日講起居注官。（中国历代人物传记资料库 CBDB 69049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tcYTkfykMJ5mTv0F9nYEcJ
          claim_id: c_Q8p21eTprqUZymyWRGLA5j
          source_id: s_svjwyd9BGVDEJ4uYiHBLe7
          stance: supports
          locator: CBDB:69049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H6mczMqbdOXMHEGhxLIbMd
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHsTkRmWgSWo7DNHu6phbE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oLEOm_CtgqAJUkir6ibYd9
          claim_id: c_H6mczMqbdOXMHEGhxLIbMd
          source_id: s_svjwyd9BGVDEJ4uYiHBLe7
          stance: supports
          locator: 江南通志，lgid=65760：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3HfvKJwe8oNYNwYQCppo7
        status: active
        display_name: 王广心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九齡 | accepted |
| death.date | 1709年 | accepted |
| bio.summary | 王九齡（卒于1709年），清人物。明清進士進士，籍贯婁縣，入仕進士，曾任編修、兵部右侍郎、充日講起居注官。（中国历代人物传记资料库 CBDB 69049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T3HfvKJwe8oNYNwYQCppo7 | 王广心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九齡（CBDB 69049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69049&o=json)

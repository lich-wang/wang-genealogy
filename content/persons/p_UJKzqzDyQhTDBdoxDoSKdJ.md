---
schema: wang-person/v1
id: p_UJKzqzDyQhTDBdoxDoSKdJ
status: active
merged_into: null
display_name: 王修敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1dTsst1yyCyr7VBytA6Zc
        subject_person_id: p_UJKzqzDyQhTDBdoxDoSKdJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDov9eC7jhJq3FLyiz9Cop
          claim_id: c_w1dTsst1yyCyr7VBytA6Zc
          source_id: s_wvX3v6n2yEp72sfEDv7MxA
          stance: supports
          locator: CBDB:693944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693944）
          source: &a1
            id: s_wvX3v6n2yEp72sfEDv7MxA
            source_type: api_record
            title: 中国历代人物传记资料库：王修敬（CBDB 693944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693944&o=json
            external_identifier: CBDB:693944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4qmWpMKWjJNeD1p4B87BG
        subject_person_id: p_UJKzqzDyQhTDBdoxDoSKdJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修敬，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 693944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XeEjI9O8oG84U9KghXZtv5
          claim_id: c_F4qmWpMKWjJNeD1p4B87BG
          source_id: s_wvX3v6n2yEp72sfEDv7MxA
          stance: supports
          locator: CBDB:693944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1gc6sQN-sWv1LOf2G46oJs
        subject_person_id: p_UJKzqzDyQhTDBdoxDoSKdJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKdbipvZf7A7-YrNvqKtFE
          claim_id: c_1gc6sQN-sWv1LOf2G46oJs
          source_id: s_wvX3v6n2yEp72sfEDv7MxA
          stance: supports
          locator: 鄞縣志，lgid=243594：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZYGKLCZoLcVYvHDQ8RSk15
        status: active
        display_name: 王日章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王修敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修敬 | accepted |
| bio.summary | 王修敬，清人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 693944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZYGKLCZoLcVYvHDQ8RSk15 | 王日章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王修敬（CBDB 693944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693944&o=json)

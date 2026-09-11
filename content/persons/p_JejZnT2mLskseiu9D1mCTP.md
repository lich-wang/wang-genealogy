---
schema: wang-person/v1
id: p_JejZnT2mLskseiu9D1mCTP
status: active
merged_into: null
display_name: 王鈇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ADfHCpctZMt5cegFyoQbf
        subject_person_id: p_JejZnT2mLskseiu9D1mCTP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPm6GW7Hc1Z8Rs5NysbNeo
          claim_id: c_4ADfHCpctZMt5cegFyoQbf
          source_id: s_6sLmA8ME6eQcRjVuB72xKv
          stance: supports
          locator: CBDB:331797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331797）
          source: &a1
            id: s_6sLmA8ME6eQcRjVuB72xKv
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 331797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331797&o=json
            external_identifier: CBDB:331797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_73iy3YEHY8LeazKLJS5A3L
        subject_person_id: p_JejZnT2mLskseiu9D1mCTP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈇，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_paQ2wJNTXqM4H-ci4XuUCw
          claim_id: c_73iy3YEHY8LeazKLJS5A3L
          source_id: s_6sLmA8ME6eQcRjVuB72xKv
          stance: supports
          locator: CBDB:331797
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
        id: c_JBIYmfLnZJQ51LQaONMWYa
        subject_person_id: p_JejZnT2mLskseiu9D1mCTP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Z7hwIe4IfFNoYKq2RHe2i
          claim_id: c_JBIYmfLnZJQ51LQaONMWYa
          source_id: s_6sLmA8ME6eQcRjVuB72xKv
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TugXusNFHFdTE5ayse4kLm
        status: active
        display_name: 王圻
        merged_into_person_id: null
  other: []
---

# 王鈇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈇 | accepted |
| bio.summary | 王鈇，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TugXusNFHFdTE5ayse4kLm | 王圻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈇（CBDB 331797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331797&o=json)

---
schema: wang-person/v1
id: p_R1DoHSGNfuDvy2fN5GoJTi
status: active
merged_into: null
display_name: 王時升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1WLWaBn4e3s2Wa67RDnFLv
        subject_person_id: p_R1DoHSGNfuDvy2fN5GoJTi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUMTAS5yYB2nhfLamsYXUr
          claim_id: c_1WLWaBn4e3s2Wa67RDnFLv
          source_id: s_qkJUFK7bkZQXVz842z4m3p
          stance: supports
          locator: CBDB:1874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1874）
          source: &a1
            id: s_qkJUFK7bkZQXVz842z4m3p
            source_type: api_record
            title: 中国历代人物传记资料库：王時升（CBDB 1874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1874&o=json
            external_identifier: CBDB:1874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMRpkuH5u6QqwokjQBBWgi
        subject_person_id: p_R1DoHSGNfuDvy2fN5GoJTi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時升，宋人物。籍贯益都，曾任輕車都尉、左中奉大夫、轉運副使。（中国历代人物传记资料库 CBDB 1874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WbEle58mOEAP-StRdK5WyL
          claim_id: c_oMRpkuH5u6QqwokjQBBWgi
          source_id: s_qkJUFK7bkZQXVz842z4m3p
          stance: supports
          locator: CBDB:1874
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

# 王時升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時升 | accepted |
| bio.summary | 王時升，宋人物。籍贯益都，曾任輕車都尉、左中奉大夫、轉運副使。（中国历代人物传记资料库 CBDB 1874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時升（CBDB 1874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1874&o=json)

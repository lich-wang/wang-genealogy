---
schema: wang-person/v1
id: p_hFf44wpFoLsZY483uGqi8X
status: active
merged_into: null
display_name: 王基鋐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ebt7BkAmBxxNytoa2mpZ9k
        subject_person_id: p_hFf44wpFoLsZY483uGqi8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基鋐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7qKKxbJLdo8owpduvBwUpD
          claim_id: c_Ebt7BkAmBxxNytoa2mpZ9k
          source_id: s_CJXfbv2pNbwQCXxcSv1BtA
          stance: supports
          locator: CBDB:575125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575125）
          source: &a1
            id: s_CJXfbv2pNbwQCXxcSv1BtA
            source_type: api_record
            title: 中国历代人物传记资料库：王基鋐（CBDB 575125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575125&o=json
            external_identifier: CBDB:575125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2gHBEcK3bsZamASEqBLi53
        subject_person_id: p_hFf44wpFoLsZY483uGqi8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王基鋐，清人物。籍贯東湖，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 575125）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1uAZEE_SruZA0Wc2MM6VwQ
          claim_id: c_2gHBEcK3bsZamASEqBLi53
          source_id: s_CJXfbv2pNbwQCXxcSv1BtA
          stance: supports
          locator: CBDB:575125
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

# 王基鋐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基鋐 | accepted |
| bio.summary | 王基鋐，清人物。籍贯東湖，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 575125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王基鋐（CBDB 575125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575125&o=json)

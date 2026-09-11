---
schema: wang-person/v1
id: p_SFZ4bgpN7HUNWVTQwjnX9y
status: active
merged_into: null
display_name: 王懋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9VNj24eHkLkabHXMAuYPF
        subject_person_id: p_SFZ4bgpN7HUNWVTQwjnX9y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o43N7XAskn4P12sTS2nKeR
          claim_id: c_z9VNj24eHkLkabHXMAuYPF
          source_id: s_7JqddEbZZNCZg9LXnreF7A
          stance: supports
          locator: CBDB:313107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313107）
          source: &a1
            id: s_7JqddEbZZNCZg9LXnreF7A
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 313107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313107&o=json
            external_identifier: CBDB:313107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DF4CVCUkFt95fWd1wRSi7Q
        subject_person_id: p_SFZ4bgpN7HUNWVTQwjnX9y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。天順四年進士，籍贯修武，曾任知府。（中国历代人物传记资料库 CBDB 313107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LcImBbqgMYADQNSiW8bh26
          claim_id: c_DF4CVCUkFt95fWd1wRSi7Q
          source_id: s_7JqddEbZZNCZg9LXnreF7A
          stance: supports
          locator: CBDB:313107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RExJE15Qe96bX3q3rbNpaV
        subject_person_id: p_SFZ4bgpN7HUNWVTQwjnX9y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWYnCXXq0e6so7A8ommscu
          claim_id: c_RExJE15Qe96bX3q3rbNpaV
          source_id: s_7JqddEbZZNCZg9LXnreF7A
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aeWEfBiaXEc8NBAjLdxyDe
        status: active
        display_name: 王璠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。天順四年進士，籍贯修武，曾任知府。（中国历代人物传记资料库 CBDB 313107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aeWEfBiaXEc8NBAjLdxyDe | 王璠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 313107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313107&o=json)

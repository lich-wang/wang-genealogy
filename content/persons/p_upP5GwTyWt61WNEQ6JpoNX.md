---
schema: wang-person/v1
id: p_upP5GwTyWt61WNEQ6JpoNX
status: active
merged_into: null
display_name: 王立韓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muzroyvFbLTfrXAV5vnJE4
        subject_person_id: p_upP5GwTyWt61WNEQ6JpoNX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立韓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tPt5NNgBHzt5mdCkJbfFYu
          claim_id: c_muzroyvFbLTfrXAV5vnJE4
          source_id: s_BDqwUCN2afQaBpyFmfN3XU
          stance: supports
          locator: CBDB:639701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639701）
          source: &a1
            id: s_BDqwUCN2afQaBpyFmfN3XU
            source_type: api_record
            title: 中国历代人物传记资料库：王立韓（CBDB 639701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639701&o=json
            external_identifier: CBDB:639701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZMTSgoqrfC3zBhSso4a1vK
        subject_person_id: p_upP5GwTyWt61WNEQ6JpoNX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立韓，清人物。籍贯高密，曾任知縣。（中国历代人物传记资料库 CBDB 639701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gG9EMxGb3oEuqgRzn5u3jT
          claim_id: c_ZMTSgoqrfC3zBhSso4a1vK
          source_id: s_BDqwUCN2afQaBpyFmfN3XU
          stance: supports
          locator: CBDB:639701
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

# 王立韓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立韓 | accepted |
| bio.summary | 王立韓，清人物。籍贯高密，曾任知縣。（中国历代人物传记资料库 CBDB 639701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立韓（CBDB 639701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639701&o=json)

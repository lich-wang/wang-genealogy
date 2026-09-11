---
schema: wang-person/v1
id: p_E31vnHv2SuVCD2MDQvZaji
status: active
merged_into: null
display_name: 王圻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2UNsB7qtVx1JJoJnTCxyPh
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8knKqFYE9QhDKon9fCJxe8
          claim_id: c_2UNsB7qtVx1JJoJnTCxyPh
          source_id: s_XhEzxUKDcDmvSa4jqbUxKb
          stance: supports
          locator: CBDB:236486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236486）
          source: &a1
            id: s_XhEzxUKDcDmvSa4jqbUxKb
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQEHU53aP84CfbBPfLnb5J
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XpXQNJA_GSL5imIMpz57D8
          claim_id: c_TQEHU53aP84CfbBPfLnb5J
          source_id: s_XhEzxUKDcDmvSa4jqbUxKb
          stance: supports
          locator: CBDB:236486
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

# 王圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圻 | accepted |
| bio.summary | 王圻，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王圻（CBDB 236486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json)

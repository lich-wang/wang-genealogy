---
schema: wang-person/v1
id: p_8U8voMA2BK2nr9Emcu9aBV
status: active
merged_into: null
display_name: 王瑀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A2VjUKPvEws7HjQKqb5r5c
        subject_person_id: p_8U8voMA2BK2nr9Emcu9aBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81Z6kMEfW1dVzeESvP8N4F
          claim_id: c_A2VjUKPvEws7HjQKqb5r5c
          source_id: s_15GXWKce93qJ9rAaivBf2P
          stance: supports
          locator: CBDB:227240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227240）
          source: &a1
            id: s_15GXWKce93qJ9rAaivBf2P
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 227240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227240&o=json
            external_identifier: CBDB:227240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p93qDeLxoxtfo79kWbRZ74
        subject_person_id: p_8U8voMA2BK2nr9Emcu9aBV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王瑀，明人物。萬曆丙戌科進士進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227240）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UXgf-kF-3P6y9a6yaQT4wo
          claim_id: c_p93qDeLxoxtfo79kWbRZ74
          source_id: s_15GXWKce93qJ9rAaivBf2P
          stance: supports
          locator: CBDB:227240
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

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。萬曆丙戌科進士進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227240） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 227240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227240&o=json)

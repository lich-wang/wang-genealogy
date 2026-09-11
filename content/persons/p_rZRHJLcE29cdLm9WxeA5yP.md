---
schema: wang-person/v1
id: p_rZRHJLcE29cdLm9WxeA5yP
status: active
merged_into: null
display_name: 王執中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5CeDoENE9kDanRKXJMYU13
        subject_person_id: p_rZRHJLcE29cdLm9WxeA5yP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2c22Lu4jyUtu1ubNXDkK3m
          claim_id: c_5CeDoENE9kDanRKXJMYU13
          source_id: s_51EBAuEWrT2NXWS4DcHY9L
          stance: supports
          locator: CBDB:119324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119324）
          source: &a1
            id: s_51EBAuEWrT2NXWS4DcHY9L
            source_type: api_record
            title: 中国历代人物传记资料库：王執中（CBDB 119324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119324&o=json
            external_identifier: CBDB:119324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sxr5oY8NV7ByHpE5mPyy8k
        subject_person_id: p_rZRHJLcE29cdLm9WxeA5yP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執中，清人物。曾任營遊擊。（中国历代人物传记资料库 CBDB 119324）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3NVF-gyDTl5r4yDl5WGcFr
          claim_id: c_Sxr5oY8NV7ByHpE5mPyy8k
          source_id: s_51EBAuEWrT2NXWS4DcHY9L
          stance: supports
          locator: CBDB:119324
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_l0hv3GJjQCzNPlV202jwps
        subject_person_id: p_rZRHJLcE29cdLm9WxeA5yP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgUJCmxXmDa19Lahr6npL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSAJ0mF_3dRa1kJFe98KNj
          claim_id: c_l0hv3GJjQCzNPlV202jwps
          source_id: s_wpERTvgjaSKSUZHuo2uk1i
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2285：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wpERTvgjaSKSUZHuo2uk1i
            source_type: api_record
            title: 中国历代人物传记资料库：王貞仙（CBDB 119323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119323&o=json
            external_identifier: CBDB:119323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jgUJCmxXmDa19Lahr6npL7
        status: active
        display_name: 王貞仙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王執中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執中 | accepted |
| bio.summary | 王執中，清人物。曾任營遊擊。（中国历代人物传记资料库 CBDB 119324） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jgUJCmxXmDa19Lahr6npL7 | 王貞仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞仙（CBDB 119323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119323&o=json)
- [中国历代人物传记资料库：王執中（CBDB 119324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119324&o=json)

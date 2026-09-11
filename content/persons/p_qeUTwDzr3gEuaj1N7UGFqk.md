---
schema: wang-person/v1
id: p_qeUTwDzr3gEuaj1N7UGFqk
status: active
merged_into: null
display_name: 王家筠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KwhqC2y6JjV2HGMjjPDKfA
        subject_person_id: p_qeUTwDzr3gEuaj1N7UGFqk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ymu9PMU2cryd5EyLQH7jTL
          claim_id: c_KwhqC2y6JjV2HGMjjPDKfA
          source_id: s_eEBBC72vor1Vjy15me3cs8
          stance: supports
          locator: CBDB:575231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575231）
          source: &a1
            id: s_eEBBC72vor1Vjy15me3cs8
            source_type: api_record
            title: 中国历代人物传记资料库：王家筠（CBDB 575231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575231&o=json
            external_identifier: CBDB:575231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4F8ocBgWyTMEtLUG7quwfD
        subject_person_id: p_qeUTwDzr3gEuaj1N7UGFqk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王家筠，清人物。籍贯恩始，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575231）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y8Bsh_iVZN5WF_XomyU04U
          claim_id: c_4F8ocBgWyTMEtLUG7quwfD
          source_id: s_eEBBC72vor1Vjy15me3cs8
          stance: supports
          locator: CBDB:575231
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

# 王家筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家筠 | accepted |
| bio.summary | 王家筠，清人物。籍贯恩始，入仕貢生: 拔貢。（中国历代人物传记资料库 CBDB 575231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家筠（CBDB 575231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575231&o=json)

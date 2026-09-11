---
schema: wang-person/v1
id: p_RDB8MW9iwiJBRgGYHgvnaM
status: active
merged_into: null
display_name: 王三錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2a7AVaQmBamRADcAGPpNX
        subject_person_id: p_RDB8MW9iwiJBRgGYHgvnaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kZ8rK1N1vood37LupFpLE7
          claim_id: c_P2a7AVaQmBamRADcAGPpNX
          source_id: s_sU9Wmw4hsLqzkzSyvU78UN
          stance: supports
          locator: CBDB:684882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684882）
          source: &a1
            id: s_sU9Wmw4hsLqzkzSyvU78UN
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 684882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684882&o=json
            external_identifier: CBDB:684882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZC9WFZjkdkwDjFGUod499n
        subject_person_id: p_RDB8MW9iwiJBRgGYHgvnaM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，清人物。籍贯吳縣，身份为孝子/孝女、義民/義官。（中国历代人物传记资料库 CBDB 684882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bZsBH3kUP-Aeeg50AV6Qym
          claim_id: c_ZC9WFZjkdkwDjFGUod499n
          source_id: s_sU9Wmw4hsLqzkzSyvU78UN
          stance: supports
          locator: CBDB:684882
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

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，清人物。籍贯吳縣，身份为孝子/孝女、義民/義官。（中国历代人物传记资料库 CBDB 684882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 684882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684882&o=json)

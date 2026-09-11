---
schema: wang-person/v1
id: p_58aqhmmuk5GhQM1a6ou8df
status: active
merged_into: null
display_name: 王逢吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3Du3HpyEfBLgppkB7eu8W
        subject_person_id: p_58aqhmmuk5GhQM1a6ou8df
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_awY3MrBXeB7q1vnXpHtEed
          claim_id: c_y3Du3HpyEfBLgppkB7eu8W
          source_id: s_Wu9KQKUtyDKXRTuTs4gLYA
          stance: supports
          locator: CBDB:640404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640404）
          source: &a1
            id: s_Wu9KQKUtyDKXRTuTs4gLYA
            source_type: api_record
            title: 中国历代人物传记资料库：王逢吉（CBDB 640404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640404&o=json
            external_identifier: CBDB:640404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WJEj52Kj1enQAnf2y5XMcd
        subject_person_id: p_58aqhmmuk5GhQM1a6ou8df
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢吉，清人物。籍贯宛平，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 640404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YIx3LCbTd-HoidE50yfSGU
          claim_id: c_WJEj52Kj1enQAnf2y5XMcd
          source_id: s_Wu9KQKUtyDKXRTuTs4gLYA
          stance: supports
          locator: CBDB:640404
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

# 王逢吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢吉 | accepted |
| bio.summary | 王逢吉，清人物。籍贯宛平，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 640404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢吉（CBDB 640404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640404&o=json)

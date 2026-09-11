---
schema: wang-person/v1
id: p_injMVBMnAYLsu2z4gPjagW
status: active
merged_into: null
display_name: 王文煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vURBeNov1jYwDDnPxojbmJ
        subject_person_id: p_injMVBMnAYLsu2z4gPjagW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sta3aBwd5Fqq6u81FhuLhJ
          claim_id: c_vURBeNov1jYwDDnPxojbmJ
          source_id: s_FB2NFzsN8VU72KMBihRy8L
          stance: supports
          locator: CBDB:471542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471542）
          source: &a1
            id: s_FB2NFzsN8VU72KMBihRy8L
            source_type: api_record
            title: 中国历代人物传记资料库：王文煥（CBDB 471542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471542&o=json
            external_identifier: CBDB:471542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EEAN3fsQqbJUQb3DQgdHLh
        subject_person_id: p_injMVBMnAYLsu2z4gPjagW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煥，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣、知州。（中国历代人物传记资料库 CBDB 471542）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KIb35jO5SFgvFZ4HNoIZtQ
          claim_id: c_EEAN3fsQqbJUQb3DQgdHLh
          source_id: s_FB2NFzsN8VU72KMBihRy8L
          stance: supports
          locator: CBDB:471542
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

# 王文煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文煥 | accepted |
| bio.summary | 王文煥，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣、知州。（中国历代人物传记资料库 CBDB 471542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文煥（CBDB 471542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471542&o=json)

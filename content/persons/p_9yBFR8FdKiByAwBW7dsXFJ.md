---
schema: wang-person/v1
id: p_9yBFR8FdKiByAwBW7dsXFJ
status: active
merged_into: null
display_name: 王夷簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kvyNg9h1DoiZ1F5Y6o7Bb
        subject_person_id: p_9yBFR8FdKiByAwBW7dsXFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夷簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9SCv74euMLvNiweN499H8
          claim_id: c_3kvyNg9h1DoiZ1F5Y6o7Bb
          source_id: s_ef42cFgyEF2B7NPoEN92sw
          stance: supports
          locator: CBDB:1827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1827）
          source: &a1
            id: s_ef42cFgyEF2B7NPoEN92sw
            source_type: api_record
            title: 中国历代人物传记资料库：王夷簡（CBDB 1827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1827&o=json
            external_identifier: CBDB:1827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gETjtJceyDdVwLA1vEkCoB
        subject_person_id: p_9yBFR8FdKiByAwBW7dsXFJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夷簡，宋人物。籍贯長安，曾任三司戶部勾院。（中国历代人物传记资料库 CBDB 1827）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tsBWzriOBnAsD9zfQB_Mb2
          claim_id: c_gETjtJceyDdVwLA1vEkCoB
          source_id: s_ef42cFgyEF2B7NPoEN92sw
          stance: supports
          locator: CBDB:1827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_moM4ZBUYdnd2T3JgjgFS3k
        subject_person_id: p_9yBFR8FdKiByAwBW7dsXFJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jK3nREeT6SvaqJzFFFLU38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qfoIKKDRQe3DRXBqgl7ww
          claim_id: c_moM4ZBUYdnd2T3JgjgFS3k
          source_id: s_ef42cFgyEF2B7NPoEN92sw
          stance: supports
          locator: CBDB 双向互证（子 王希哲 ⇄ 父 王夷簡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_jK3nREeT6SvaqJzFFFLU38
        status: active
        display_name: 王希哲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夷簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夷簡 | accepted |
| bio.summary | 王夷簡，宋人物。籍贯長安，曾任三司戶部勾院。（中国历代人物传记资料库 CBDB 1827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jK3nREeT6SvaqJzFFFLU38 | 王希哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夷簡（CBDB 1827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1827&o=json)

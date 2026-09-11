---
schema: wang-person/v1
id: p_ySAMwFr7FrHZjZDK9PZECC
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 702356
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kCvdhWUvANxphiqziOdGPw
        subject_person_id: p_ySAMwFr7FrHZjZDK9PZECC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 702356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEr-HlUW27XaqnVwITBmBB
          claim_id: c_kCvdhWUvANxphiqziOdGPw
          source_id: s_15FrxamywefQWXwKE0l69w
          stance: supports
          locator: CBDB:702356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_15FrxamywefQWXwKE0l69w
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王孟輝妻)（CBDB 702356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702356&o=json
            external_identifier: CBDB:702356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_I1mior6RdiSVAdmeRn_8wi
        subject_person_id: p_ySAMwFr7FrHZjZDK9PZECC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGcPLZV-6sKX_wcVBzWpb6
          claim_id: c_I1mior6RdiSVAdmeRn_8wi
          source_id: s_15FrxamywefQWXwKE0l69w
          stance: supports
          locator: CBDB:702356
          quotation: null
          interpretation_note: CBDB 明确记录的王孟輝配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__3t6ezswzzQZZdbCe9eWYk
        subject_person_id: p_4VsKp47S4dEaQLEugXcQo7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ySAMwFr7FrHZjZDK9PZECC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jLMjmOsZgYbj5Xzg2Hd37X
          claim_id: c__3t6ezswzzQZZdbCe9eWYk
          source_id: s_15FrxamywefQWXwKE0l69w
          stance: supports
          locator: 平陰縣志，lgid=630877：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4VsKp47S4dEaQLEugXcQo7
        status: active
        display_name: 王孟輝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 702356） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4VsKp47S4dEaQLEugXcQo7 | 王孟輝 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王孟輝妻)（CBDB 702356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702356&o=json)

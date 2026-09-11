---
schema: wang-person/v1
id: p_jrio93ByUNtG6wjrgHKcL7
status: active
merged_into: null
display_name: 王德元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rUnDrasQn8VdKhk6e9RYGC
        subject_person_id: p_jrio93ByUNtG6wjrgHKcL7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EiDPp5EBe5k6tCwtEPGiMD
          claim_id: c_rUnDrasQn8VdKhk6e9RYGC
          source_id: s_45N4mksSshRddSaGTzSJxv
          stance: supports
          locator: CBDB:101410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101410）
          source: &a1
            id: s_45N4mksSshRddSaGTzSJxv
            source_type: api_record
            title: 中国历代人物传记资料库：王德元（CBDB 101410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101410&o=json
            external_identifier: CBDB:101410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oM4aL136zGszsZE4BGN4DE
        subject_person_id: p_jrio93ByUNtG6wjrgHKcL7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1265年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87JkqunJPTe3FDAWrPBBE1
          claim_id: c_oM4aL136zGszsZE4BGN4DE
          source_id: s_45N4mksSshRddSaGTzSJxv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9a4PCfgbRNJDhFuPPGhMjc
        subject_person_id: p_jrio93ByUNtG6wjrgHKcL7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1364年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SeWLpYHBMwiUDTej4ADsD9
          claim_id: c_9a4PCfgbRNJDhFuPPGhMjc
          source_id: s_45N4mksSshRddSaGTzSJxv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxZANF46aTgUBjSqkSiMrF
        subject_person_id: p_jrio93ByUNtG6wjrgHKcL7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元（1265年—1364年），元人物。籍贯東平路。（中国历代人物传记资料库 CBDB 101410）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AitYRzndAz1i0D8mAouTDO
          claim_id: c_LxZANF46aTgUBjSqkSiMrF
          source_id: s_45N4mksSshRddSaGTzSJxv
          stance: supports
          locator: CBDB:101410
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

# 王德元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德元 | accepted |
| birth.date | 1265年 | accepted |
| death.date | 1364年 | accepted |
| bio.summary | 王德元（1265年—1364年），元人物。籍贯東平路。（中国历代人物传记资料库 CBDB 101410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德元（CBDB 101410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101410&o=json)

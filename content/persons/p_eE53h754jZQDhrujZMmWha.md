---
schema: wang-person/v1
id: p_eE53h754jZQDhrujZMmWha
status: active
merged_into: null
display_name: 王阮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97ASxHdpSu5DiRAfieHuAm
        subject_person_id: p_eE53h754jZQDhrujZMmWha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ubsYMsDAoAToC4RtXr919j
          claim_id: c_97ASxHdpSu5DiRAfieHuAm
          source_id: s_LCV5Q9p4hAYjVGQwsDXtpR
          stance: supports
          locator: CBDB:640761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640761）
          source: &a1
            id: s_LCV5Q9p4hAYjVGQwsDXtpR
            source_type: api_record
            title: 中国历代人物传记资料库：王阮（CBDB 640761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640761&o=json
            external_identifier: CBDB:640761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y9Fru9ANTySW1Pw4pJhQ8p
        subject_person_id: p_eE53h754jZQDhrujZMmWha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阮，清人物。籍贯湖州府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YctoD_pbn1fc3vcgh9LCYd
          claim_id: c_y9Fru9ANTySW1Pw4pJhQ8p
          source_id: s_LCV5Q9p4hAYjVGQwsDXtpR
          stance: supports
          locator: CBDB:640761
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

# 王阮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王阮 | accepted |
| bio.summary | 王阮，清人物。籍贯湖州府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王阮（CBDB 640761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640761&o=json)

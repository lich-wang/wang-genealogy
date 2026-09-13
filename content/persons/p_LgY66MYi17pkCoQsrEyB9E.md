---
schema: wang-person/v1
id: p_LgY66MYi17pkCoQsrEyB9E
status: merged
merged_into: p_3rXpgVa7b3w2KvtV9muyJp
display_name: 王勃
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Bj2Ss4VWv8CVJxB56qse8
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3jom25GJGGEhfpCQwgPTfM
          claim_id: c_8Bj2Ss4VWv8CVJxB56qse8
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: CBDB:30982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30982）
          source: &a1
            id: s_NPG2X8ZwMAngCotJDyiN6K
            source_type: api_record
            title: 中国历代人物传记资料库：王勃（CBDB 30982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json
            external_identifier: CBDB:30982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8XxFKBkbRgJH33ke2yDzgN
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 650年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mn4hj2sH6hoPiGE8z7kSQF
          claim_id: c_8XxFKBkbRgJH33ke2yDzgN
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
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
        id: c_4WCHyARfW6M8e4eWoF32An
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3o97yQ5aQPz3a6yVP94tqJ
          claim_id: c_4WCHyARfW6M8e4eWoF32An
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
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
        id: c_aQPEdGuAxPRZVw1r9shGJk
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勃（650年—676年），唐人物。籍贯龍門，身份为詩人、文人，入仕進士，曾任朝散郎、錄事參軍、王府侍讀。（中国历代人物传记资料库 CBDB 30982）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKpdol4BrPushGDPE9x2bt
          claim_id: c_aQPEdGuAxPRZVw1r9shGJk
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: CBDB:30982
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

# 王勃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勃 | accepted |
| birth.date | 650年 | accepted |
| death.date | 676年 | accepted |
| bio.summary | 王勃（650年—676年），唐人物。籍贯龍門，身份为詩人、文人，入仕進士，曾任朝散郎、錄事參軍、王府侍讀。（中国历代人物传记资料库 CBDB 30982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勃（CBDB 30982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json)

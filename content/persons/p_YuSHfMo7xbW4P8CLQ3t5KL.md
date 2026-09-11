---
schema: wang-person/v1
id: p_YuSHfMo7xbW4P8CLQ3t5KL
status: active
merged_into: null
display_name: 王潮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7YB4EdCapmcDycqJU2YBW
        subject_person_id: p_YuSHfMo7xbW4P8CLQ3t5KL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YqNQcUq9J8NLG2ZZp5GbPd
          claim_id: c_g7YB4EdCapmcDycqJU2YBW
          source_id: s_X9nGw1i8timmNoSXCaqYFe
          stance: supports
          locator: CBDB:639215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639215）
          source: &a1
            id: s_X9nGw1i8timmNoSXCaqYFe
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 639215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639215&o=json
            external_identifier: CBDB:639215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tAr8DneC5ka66NZ2RjLrGE
        subject_person_id: p_YuSHfMo7xbW4P8CLQ3t5KL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潮，清人物。籍贯長洲，曾任典史、知縣。（中国历代人物传记资料库 CBDB 639215）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tuzQTO3ffEpPdv-IFYBb02
          claim_id: c_tAr8DneC5ka66NZ2RjLrGE
          source_id: s_X9nGw1i8timmNoSXCaqYFe
          stance: supports
          locator: CBDB:639215
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

# 王潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潮 | accepted |
| bio.summary | 王潮，清人物。籍贯長洲，曾任典史、知縣。（中国历代人物传记资料库 CBDB 639215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 639215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639215&o=json)

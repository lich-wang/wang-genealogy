---
schema: wang-person/v1
id: p_YSo2SArwH8tPtRRkmvKHNU
status: active
merged_into: null
display_name: 王罃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CH44h1N5HvQY2aQtzPxB4Q
        subject_person_id: p_YSo2SArwH8tPtRRkmvKHNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ZY8KCh4g23suuVQ5oFVfu
          claim_id: c_CH44h1N5HvQY2aQtzPxB4Q
          source_id: s_Dwp28NPLb6QMo1Jxhx75vP
          stance: supports
          locator: CBDB:438898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438898）
          source: &a1
            id: s_Dwp28NPLb6QMo1Jxhx75vP
            source_type: api_record
            title: 中国历代人物传记资料库：王罃（CBDB 438898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438898&o=json
            external_identifier: CBDB:438898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZWfFJ2cnQ1F19ZD4KLorCr
        subject_person_id: p_YSo2SArwH8tPtRRkmvKHNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王罃，明人物。籍贯鄞縣，入仕鄉貢舉人，曾任教諭、禮科給事中、刑科給事中。（中国历代人物传记资料库 CBDB 438898）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qIkwTAK9pHwxWJtsybkaWP
          claim_id: c_ZWfFJ2cnQ1F19ZD4KLorCr
          source_id: s_Dwp28NPLb6QMo1Jxhx75vP
          stance: supports
          locator: CBDB:438898
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

# 王罃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王罃 | accepted |
| bio.summary | 王罃，明人物。籍贯鄞縣，入仕鄉貢舉人，曾任教諭、禮科給事中、刑科給事中。（中国历代人物传记资料库 CBDB 438898） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王罃（CBDB 438898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438898&o=json)

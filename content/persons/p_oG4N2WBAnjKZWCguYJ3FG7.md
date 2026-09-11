---
schema: wang-person/v1
id: p_oG4N2WBAnjKZWCguYJ3FG7
status: active
merged_into: null
display_name: 王若訥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pnHYpczVgDP9vRAp7P8pVL
        subject_person_id: p_oG4N2WBAnjKZWCguYJ3FG7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NE23eQ6W2m8mYca7M5PvJs
          claim_id: c_pnHYpczVgDP9vRAp7P8pVL
          source_id: s_Men7j2rNYKYqiB2TY45DAE
          stance: supports
          locator: CBDB:688836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688836）
          source: &a1
            id: s_Men7j2rNYKYqiB2TY45DAE
            source_type: api_record
            title: 中国历代人物传记资料库：王若訥（CBDB 688836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688836&o=json
            external_identifier: CBDB:688836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hMVrAv5wqBAt4621HAwbMK
        subject_person_id: p_oG4N2WBAnjKZWCguYJ3FG7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若訥，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 688836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UiW9_ugn_vNp204pRY9VAe
          claim_id: c_hMVrAv5wqBAt4621HAwbMK
          source_id: s_Men7j2rNYKYqiB2TY45DAE
          stance: supports
          locator: CBDB:688836
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

# 王若訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若訥 | accepted |
| bio.summary | 王若訥，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 688836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若訥（CBDB 688836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688836&o=json)

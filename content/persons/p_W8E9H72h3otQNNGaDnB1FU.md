---
schema: wang-person/v1
id: p_W8E9H72h3otQNNGaDnB1FU
status: active
merged_into: null
display_name: 王景之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fs9PNeUvTeTJYVvPkksPJH
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a5okkwYZ487ruUdd6jGmPt
          claim_id: c_fs9PNeUvTeTJYVvPkksPJH
          source_id: s_45Y2AAe31Vc9KBrPyctGca
          stance: supports
          locator: CBDB:140255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140255）
          source: &a1
            id: s_45Y2AAe31Vc9KBrPyctGca
            source_type: api_record
            title: 中国历代人物传记资料库：王景之（CBDB 140255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140255&o=json
            external_identifier: CBDB:140255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oMgvet2movoPRTkQMFh2xs
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zyAJ5pNwjJpdMN2Q3b5GM2
          claim_id: c_oMgvet2movoPRTkQMFh2xs
          source_id: s_45Y2AAe31Vc9KBrPyctGca
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
        id: c_yjtdiRY6dJLLkBzhonm4Dw
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 683年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAPEx5LosCRBzi55n9tJa6
          claim_id: c_yjtdiRY6dJLLkBzhonm4Dw
          source_id: s_45Y2AAe31Vc9KBrPyctGca
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
        id: c_Urj1NFcyumveNrMwGn1RQJ
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JQ9BG68F62cQeM5c1dPXbx
          claim_id: c_Urj1NFcyumveNrMwGn1RQJ
          source_id: s_45Y2AAe31Vc9KBrPyctGca
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王景之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景之 | accepted |
| birth.date | 624年 | accepted |
| death.date | 683年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景之（CBDB 140255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140255&o=json)

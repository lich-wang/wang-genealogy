---
schema: wang-person/v1
id: p_D4HCTBKsMufgMrHgBLUuVV
status: active
merged_into: null
display_name: 王行
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qh5QgadzM9jVgn48e8sdF4
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rJKPupTDdD5FdWcn9fz4p4
          claim_id: c_qh5QgadzM9jVgn48e8sdF4
          source_id: s_pvZhsEBG998dFn6nXMVUg9
          stance: supports
          locator: CBDB:142493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142493）
          source: &a1
            id: s_pvZhsEBG998dFn6nXMVUg9
            source_type: api_record
            title: 中国历代人物传记资料库：王行（CBDB 142493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142493&o=json
            external_identifier: CBDB:142493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CJhSDqGrHyVvfgUEPbi5QH
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DA7HavWgYTXxTPuSNdRuu
          claim_id: c_CJhSDqGrHyVvfgUEPbi5QH
          source_id: s_pvZhsEBG998dFn6nXMVUg9
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
        id: c_KJGqiQfXR1E7z4RtNMLwsq
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM3C1LzriAfgWof7RQMwxw
          claim_id: c_KJGqiQfXR1E7z4RtNMLwsq
          source_id: s_pvZhsEBG998dFn6nXMVUg9
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
        id: c_UKJWhHmpoJ5x8sm9HhgLZj
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行（594年—658年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 142493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RUZo1r7DF_EnXju2anqvUH
          claim_id: c_UKJWhHmpoJ5x8sm9HhgLZj
          source_id: s_pvZhsEBG998dFn6nXMVUg9
          stance: supports
          locator: CBDB:142493
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
  spouses:
    - claim:
        id: c_avbkJK39B1FnA9kUavxFzU
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z3i1QDaVK9bKnfHPjC2LL1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiwoI8hSmGAzSQv0LtZTcQ
          claim_id: c_avbkJK39B1FnA9kUavxFzU
          source_id: s_RqO0CEqarDLQBI5wTNU_cR
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianqing39：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RqO0CEqarDLQBI5wTNU_cR
            source_type: api_record
            title: 中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162202&o=json
            external_identifier: CBDB:162202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z3i1QDaVK9bKnfHPjC2LL1
        status: active
        display_name: 雙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行 | accepted |
| birth.date | 594年 | accepted |
| death.date | 658年 | accepted |
| bio.summary | 王行（594年—658年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 142493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Z3i1QDaVK9bKnfHPjC2LL1 | 雙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162202&o=json)
- [中国历代人物传记资料库：王行（CBDB 142493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142493&o=json)

---
schema: wang-person/v1
id: p_yy4N7cp3CuKBbXVu1CigcM
status: active
merged_into: null
display_name: 王文曉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LxbXGhEy14KiHG7wsEqmp7
        subject_person_id: p_yy4N7cp3CuKBbXVu1CigcM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文曉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrpHSpY7hERnJgp4MSQg9G
          claim_id: c_LxbXGhEy14KiHG7wsEqmp7
          source_id: s_ZDB51ApX2a6JXNemRAsLH7
          stance: supports
          locator: CBDB:139718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139718）
          source: &a1
            id: s_ZDB51ApX2a6JXNemRAsLH7
            source_type: api_record
            title: 中国历代人物传记资料库：王文曉（CBDB 139718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139718&o=json
            external_identifier: CBDB:139718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rhTVDyQtFGiJLTKNdyny9A
        subject_person_id: p_yy4N7cp3CuKBbXVu1CigcM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 596年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T8UoNE9pLpTtAgzKMR5Er5
          claim_id: c_rhTVDyQtFGiJLTKNdyny9A
          source_id: s_ZDB51ApX2a6JXNemRAsLH7
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
        id: c_bXjcK5f3C9MsLz9Q7Y8AZP
        subject_person_id: p_yy4N7cp3CuKBbXVu1CigcM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3CfoUGowDp8sbwPAXCbq1D
          claim_id: c_bXjcK5f3C9MsLz9Q7Y8AZP
          source_id: s_ZDB51ApX2a6JXNemRAsLH7
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
        id: c_se4Yp4UNWXSf7psiB8aMBG
        subject_person_id: p_yy4N7cp3CuKBbXVu1CigcM
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
        - id: cs_Fb9kFMy9gUN9rCp2weFu4G
          claim_id: c_se4Yp4UNWXSf7psiB8aMBG
          source_id: s_ZDB51ApX2a6JXNemRAsLH7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cFtF5x6zypoGJlYmOF3_Sh
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yy4N7cp3CuKBbXVu1CigcM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHzFwHXAL4_2RAfoDbiRGX
          claim_id: c_cFtF5x6zypoGJlYmOF3_Sh
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4WBy56iMQbtKiuNCdXvkJD
            source_type: api_record
            title: 中国历代人物传记资料库：王勣（CBDB 148854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json
            external_identifier: CBDB:148854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4APHAkfxphUBchHMpLcHUx
        status: active
        display_name: 王勣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文曉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文曉 | accepted |
| birth.date | 596年 | accepted |
| death.date | 678年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4APHAkfxphUBchHMpLcHUx | 王勣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勣（CBDB 148854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json)
- [中国历代人物传记资料库：王文曉（CBDB 139718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139718&o=json)

---
schema: wang-person/v1
id: p_wWod2ez1UU8RSHgsFxpJFe
status: active
merged_into: null
display_name: 王小衢
cbdb_id: 185432
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aorAGtdcQsBakubi55H6Q2
        subject_person_id: p_wWod2ez1UU8RSHgsFxpJFe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王小衢（卒于855年），唐人物。籍贯樂安。（中国历代人物传记资料库 CBDB 185432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TK16fwRHIWIBF6jytfGmeH
          claim_id: c_aorAGtdcQsBakubi55H6Q2
          source_id: s_pHjFEHLRU9pS9R7hFwRkdC
          stance: supports
          locator: CBDB:185432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pHjFEHLRU9pS9R7hFwRkdC
            source_type: api_record
            title: 中国历代人物传记资料库：王小衢（CBDB 185432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185432&o=json
            external_identifier: CBDB:185432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3BHGQZgrfU7nYfU57HBg7Y
        subject_person_id: p_wWod2ez1UU8RSHgsFxpJFe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 855年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0855-01-01
            latest: 0855-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rNfLa4RtEZQJ8hjcUP2ySQ
          claim_id: c_3BHGQZgrfU7nYfU57HBg7Y
          source_id: s_pHjFEHLRU9pS9R7hFwRkdC
          stance: supports
          locator: CBDB:185432
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 855
          source:
            id: s_pHjFEHLRU9pS9R7hFwRkdC
            source_type: api_record
            title: 中国历代人物传记资料库：王小衢（CBDB 185432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185432&o=json
            external_identifier: CBDB:185432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5QCkFAu1Su89VEnXb6zVzY
        subject_person_id: p_wWod2ez1UU8RSHgsFxpJFe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王小衢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9VTuQgG8X9GrYMmSiM8Ehp
          claim_id: c_5QCkFAu1Su89VEnXb6zVzY
          source_id: s_pHjFEHLRU9pS9R7hFwRkdC
          stance: supports
          locator: CBDB:185432
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 855
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M31Dnq64jvdg8w0CA1RumL
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wWod2ez1UU8RSHgsFxpJFe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9KWSIiZqgT2xfTS49FwKU
          claim_id: c_M31Dnq64jvdg8w0CA1RumL
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45sVsGucdcRmogpRJoCZis
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王小衢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王小衢（卒于855年），唐人物。籍贯樂安。（中国历代人物传记资料库 CBDB 185432） | accepted |
| death.date | 855年 | accepted |
| name.primary | 王小衢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：王小衢（CBDB 185432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185432&o=json)

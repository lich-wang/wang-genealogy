---
schema: wang-person/v1
id: p_dehHPqBzmeR27nUp5P9VCc
status: active
merged_into: null
display_name: 凃氏
revision: 1
cbdb_id: 328852
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnI3P6dd2Qp0VFfiveLVog
        subject_person_id: p_dehHPqBzmeR27nUp5P9VCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 凃氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wniib15fCB6KS_f54-2m5j
          claim_id: c_ZnI3P6dd2Qp0VFfiveLVog
          source_id: s_dHIMtIpHSVKAuMq0XhGgJp
          stance: supports
          locator: CBDB:328852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dHIMtIpHSVKAuMq0XhGgJp
            source_type: api_record
            title: 中国历代人物传记资料库：凃氏(王廷簡妻)（CBDB 328852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328852&o=json
            external_identifier: CBDB:328852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_70X65EIaoc7P6AU46wx5pF
        subject_person_id: p_dehHPqBzmeR27nUp5P9VCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 凃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnAyOG0wbJLrnAYfock0hI
          claim_id: c_70X65EIaoc7P6AU46wx5pF
          source_id: s_dHIMtIpHSVKAuMq0XhGgJp
          stance: supports
          locator: CBDB:328852
          quotation: null
          interpretation_note: CBDB 明确记录的王廷簡配偶
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
        id: c_CbWnWNkQsxBiQRaa8A842B
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dehHPqBzmeR27nUp5P9VCc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vmepAaTq4kpljXCfSeLOEM
          claim_id: c_CbWnWNkQsxBiQRaa8A842B
          source_id: s_dHIMtIpHSVKAuMq0XhGgJp
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百六十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4DFuV6CGsBNLfJsdyJ3xiy
        status: active
        display_name: 王廷簡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 凃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 凃氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 328852） | accepted |
| name.primary | 凃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4DFuV6CGsBNLfJsdyJ3xiy | 王廷簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：凃氏(王廷簡妻)（CBDB 328852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328852&o=json)

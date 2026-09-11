---
schema: wang-person/v1
id: p_MfVeb7fgPLZUX4FfJniEs9
status: active
merged_into: null
display_name: 王錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKEXuwYrVHvD5KEBXiyR54
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZonormDHw58Za2wKEkjBU
          claim_id: c_rKEXuwYrVHvD5KEBXiyR54
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: CBDB:292741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292741）
          source: &a1
            id: s_gDVxGFCkxFcG1JYveorKZf
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 292741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json
            external_identifier: CBDB:292741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4ELjvP3Nz2qJ7HY8ekeHy
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫，明人物。嘉靖十一年進士，籍贯中江，入仕監生。（中国历代人物传记资料库 CBDB 292741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_202uKGXgthXPKtPvqHKAQn
          claim_id: c_U4ELjvP3Nz2qJ7HY8ekeHy
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: CBDB:292741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f4NvjuyahVCFx-H_WJGAF8
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__x4kScBruY3tbtDPxVe0Ni
          claim_id: c_f4NvjuyahVCFx-H_WJGAF8
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | 王錫，明人物。嘉靖十一年進士，籍贯中江，入仕監生。（中国历代人物传记资料库 CBDB 292741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 292741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json)

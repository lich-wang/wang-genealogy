---
schema: wang-person/v1
id: p_wECPBD3tB9d1ZqxV3iDY6M
status: active
merged_into: null
display_name: 王若虛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JPeZVBc4HH9LidXZyuDLz
        subject_person_id: p_wECPBD3tB9d1ZqxV3iDY6M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若虛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNSt68oXSBRLLpVL2cpyr4
          claim_id: c_2JPeZVBc4HH9LidXZyuDLz
          source_id: s_134Pi45jJ8Tw2jvp86wHKJ
          stance: supports
          locator: CBDB:29507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29507）
          source: &a1
            id: s_134Pi45jJ8Tw2jvp86wHKJ
            source_type: api_record
            title: 中国历代人物传记资料库：王若虛（CBDB 29507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json
            external_identifier: CBDB:29507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XUbMw2CB3pTK825hvNxTM8
        subject_person_id: p_wECPBD3tB9d1ZqxV3iDY6M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1174年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2kkY3FHPwvRH1JL91hHWaY
          claim_id: c_XUbMw2CB3pTK825hvNxTM8
          source_id: s_134Pi45jJ8Tw2jvp86wHKJ
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
        id: c_VPu9osFZx47EBZoQBSMKcc
        subject_person_id: p_wECPBD3tB9d1ZqxV3iDY6M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gNX8zeJasEcx8VY9n9M4hB
          claim_id: c_VPu9osFZx47EBZoQBSMKcc
          source_id: s_134Pi45jJ8Tw2jvp86wHKJ
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
        id: c_T3AszMLUSMcr1zC4mpLiq1
        subject_person_id: p_wECPBD3tB9d1ZqxV3iDY6M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若虛（1174年—1243年），金人物。籍贯槁城，身份为農民，入仕進士。（中国历代人物传记资料库 CBDB 29507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9sOJU-LP7hLcBgNLA3orXP
          claim_id: c_T3AszMLUSMcr1zC4mpLiq1
          source_id: s_134Pi45jJ8Tw2jvp86wHKJ
          stance: supports
          locator: CBDB:29507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YePaVWfD6y97EBz_FHeMqa
        subject_person_id: p_5n5BCmMC6knNH6nTbms1wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wECPBD3tB9d1ZqxV3iDY6M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F3tG6-Bza1XVfXxPMbJvU4
          claim_id: c_YePaVWfD6y97EBz_FHeMqa
          source_id: s_MMty2faMLoxrIgFxBcr__B
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29508）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_MMty2faMLoxrIgFxBcr__B
            source_type: api_record
            title: 中国历代人物传记资料库：王若虛（CBDB 29507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json
            external_identifier: CBDB:29507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5n5BCmMC6knNH6nTbms1wx
        status: active
        display_name: 王靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王若虛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若虛 | accepted |
| birth.date | 1174年 | accepted |
| death.date | 1243年 | accepted |
| bio.summary | 王若虛（1174年—1243年），金人物。籍贯槁城，身份为農民，入仕進士。（中国历代人物传记资料库 CBDB 29507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5n5BCmMC6knNH6nTbms1wx | 王靖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若虛（CBDB 29507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29507&o=json)

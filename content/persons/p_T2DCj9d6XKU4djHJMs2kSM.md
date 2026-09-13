---
schema: wang-person/v1
id: p_T2DCj9d6XKU4djHJMs2kSM
status: merged
merged_into: p_e622FY31yMzCRE9JqUsUSG
display_name: 王恕
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UdvyNuBMkkZNVtK8jqk7ny
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsGjpE2kFyVa1HoBYoApBq
          claim_id: c_UdvyNuBMkkZNVtK8jqk7ny
          source_id: s_mpKLosjwmu72pWYGf8F7EG
          stance: supports
          locator: CBDB:62505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（62505）
          source: &a1
            id: s_mpKLosjwmu72pWYGf8F7EG
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 62505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json
            external_identifier: CBDB:62505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e3HJoMwVqjgmCfK27Myn46
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaHUaTNo7mRHzVAkxP8cVp
          claim_id: c_e3HJoMwVqjgmCfK27Myn46
          source_id: s_mpKLosjwmu72pWYGf8F7EG
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
        id: c_GW53VoB2zeMpnSuS7GPj2c
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DbhWEN7QKn16rJ8VkF6Wyb
          claim_id: c_GW53VoB2zeMpnSuS7GPj2c
          source_id: s_mpKLosjwmu72pWYGf8F7EG
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
        id: c_xrwu2MRxGDf5V7o3MpwoDi
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕（1416年—1508年），明人物。弘治六年進士，籍贯三原，身份为博學之人、思想家，入仕進士。（中国历代人物传记资料库 CBDB 62505）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wPEhy2FXdgdCqHFlmV0Lvl
          claim_id: c_xrwu2MRxGDf5V7o3MpwoDi
          source_id: s_mpKLosjwmu72pWYGf8F7EG
          stance: supports
          locator: CBDB:62505
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1508年 | accepted |
| bio.summary | 王恕（1416年—1508年），明人物。弘治六年進士，籍贯三原，身份为博學之人、思想家，入仕進士。（中国历代人物传记资料库 CBDB 62505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 62505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json)

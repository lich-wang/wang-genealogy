---
schema: wang-person/v1
id: p_X2L1EgNmL3fjrNLbL6dund
status: active
merged_into: null
display_name: 王繼恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fAa76zbzayrNN9WNct1ezu
        subject_person_id: p_X2L1EgNmL3fjrNLbL6dund
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a2DkexQs4HihFf2ET2CmdJ
          claim_id: c_fAa76zbzayrNN9WNct1ezu
          source_id: s_XGp7YED9sxCnnF9bkiF2BH
          stance: supports
          locator: CBDB:38443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38443）
          source: &a1
            id: s_XGp7YED9sxCnnF9bkiF2BH
            source_type: api_record
            title: 中国历代人物传记资料库：王繼恩（CBDB 38443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38443&o=json
            external_identifier: CBDB:38443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bXa5kNEybtkXGAV7Yxrtup
        subject_person_id: p_X2L1EgNmL3fjrNLbL6dund
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1iYnGYhE2sZ3xx8ZHDHajH
          claim_id: c_bXa5kNEybtkXGAV7Yxrtup
          source_id: s_XGp7YED9sxCnnF9bkiF2BH
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
        id: c_r9KBFiJ5KGyNCPEXYh46Do
        subject_person_id: p_X2L1EgNmL3fjrNLbL6dund
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHyfT82uWB78vhGPw9aYCd
          claim_id: c_r9KBFiJ5KGyNCPEXYh46Do
          source_id: s_XGp7YED9sxCnnF9bkiF2BH
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

# 王繼恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼恩 | accepted |
| death.date | 999年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼恩（CBDB 38443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38443&o=json)

---
schema: wang-person/v1
id: p_8WWRaJGen1SNTMbfYtBkZb
status: active
merged_into: null
display_name: 丁氏
revision: 1
cbdb_id: 703232
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CFWD1H_jdPXuKrW-ui0VcG
        subject_person_id: p_8WWRaJGen1SNTMbfYtBkZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703232）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3CfZZT_QUdlZhcW-d8RjBo
          claim_id: c_CFWD1H_jdPXuKrW-ui0VcG
          source_id: s_BEoKtWeZSJRNvXEv1YIZ02
          stance: supports
          locator: CBDB:703232
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BEoKtWeZSJRNvXEv1YIZ02
            source_type: api_record
            title: 中国历代人物传记资料库：丁氏(王淑牙妻)（CBDB 703232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703232&o=json
            external_identifier: CBDB:703232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fWOgiCzDgFbdLnkZUVjs1c
        subject_person_id: p_8WWRaJGen1SNTMbfYtBkZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJkC6J2FDweSjUQqybBPn3
          claim_id: c_fWOgiCzDgFbdLnkZUVjs1c
          source_id: s_BEoKtWeZSJRNvXEv1YIZ02
          stance: supports
          locator: CBDB:703232
          quotation: null
          interpretation_note: CBDB 明确记录的王淑牙配偶
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
        id: c_hWn-fBDXNu4E_RovdMNNPD
        subject_person_id: p_ZqeJj658G5dnpkBaqE6G8k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8WWRaJGen1SNTMbfYtBkZb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0I-QFC9reEoFtcCSZ61Lp
          claim_id: c_hWn-fBDXNu4E_RovdMNNPD
          source_id: s_BEoKtWeZSJRNvXEv1YIZ02
          stance: supports
          locator: 平陰縣志，lgid=630883：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZqeJj658G5dnpkBaqE6G8k
        status: active
        display_name: 王淑牙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 丁氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 703232） | accepted |
| name.primary | 丁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZqeJj658G5dnpkBaqE6G8k | 王淑牙 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁氏(王淑牙妻)（CBDB 703232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703232&o=json)

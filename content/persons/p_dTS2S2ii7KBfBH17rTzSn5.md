---
schema: wang-person/v1
id: p_dTS2S2ii7KBfBH17rTzSn5
status: active
merged_into: null
display_name: 施氏
revision: 1
cbdb_id: 38174
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7elK_AYvoaRRAgywSdDsrP
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 施氏，宋人物。曾任郡夫人、郡君。（中国历代人物传记资料库 CBDB 38174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OMFggIHom_dNt5kIUgrr5N
          claim_id: c_7elK_AYvoaRRAgywSdDsrP
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: CBDB:38174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Uu2MYz2wbOw9gA6lew7GED
            source_type: api_record
            title: 中国历代人物传记资料库：施氏(王中正妻)（CBDB 38174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38174&o=json
            external_identifier: CBDB:38174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YiqC09Z8vZo3pPTngSRMC-
        subject_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 施氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9JlibNKe6SJcqxQ8a-8mh
          claim_id: c_YiqC09Z8vZo3pPTngSRMC-
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: CBDB:38174
          quotation: null
          interpretation_note: CBDB 明确记录的王中正配偶
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
        id: c_TXoLCfN1STEBObOCUmyjJE
        subject_person_id: p_HmkBbL3A8MpbWct9UhADAQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dTS2S2ii7KBfBH17rTzSn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kp-K4Xp6BnJ_4HqjQtN_Sy
          claim_id: c_TXoLCfN1STEBObOCUmyjJE
          source_id: s_Uu2MYz2wbOw9gA6lew7GED
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1441;1442：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HmkBbL3A8MpbWct9UhADAQ
        status: active
        display_name: 王中正
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 施氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 施氏，宋人物。曾任郡夫人、郡君。（中国历代人物传记资料库 CBDB 38174） | accepted |
| name.primary | 施氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HmkBbL3A8MpbWct9UhADAQ | 王中正 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王中正妻)（CBDB 38174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38174&o=json)

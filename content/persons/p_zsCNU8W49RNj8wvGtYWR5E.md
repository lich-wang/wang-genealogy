---
schema: wang-person/v1
id: p_zsCNU8W49RNj8wvGtYWR5E
status: active
merged_into: null
display_name: 王會清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3H4EsLg162a1yidDtpPvBw
        subject_person_id: p_zsCNU8W49RNj8wvGtYWR5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oRycFo6ugQ4QCLzTN9kX1D
          claim_id: c_3H4EsLg162a1yidDtpPvBw
          source_id: s_4TPhT7TZfNLiV34ZQsEwzL
          stance: supports
          locator: CBDB:343754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343754）
          source: &a1
            id: s_4TPhT7TZfNLiV34ZQsEwzL
            source_type: api_record
            title: 中国历代人物传记资料库：王會清（CBDB 343754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343754&o=json
            external_identifier: CBDB:343754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wyb1iiBw88gVAVhkEtVaHT
        subject_person_id: p_zsCNU8W49RNj8wvGtYWR5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會清，清人物。明清進士進士，籍贯蒙自，入仕進士。（中国历代人物传记资料库 CBDB 343754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CamLk_8D9sOGxWK7_T4mMh
          claim_id: c_Wyb1iiBw88gVAVhkEtVaHT
          source_id: s_4TPhT7TZfNLiV34ZQsEwzL
          stance: supports
          locator: CBDB:343754
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

# 王會清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會清 | accepted |
| bio.summary | 王會清，清人物。明清進士進士，籍贯蒙自，入仕進士。（中国历代人物传记资料库 CBDB 343754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會清（CBDB 343754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343754&o=json)

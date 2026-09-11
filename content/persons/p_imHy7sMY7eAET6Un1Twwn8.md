---
schema: wang-person/v1
id: p_imHy7sMY7eAET6Un1Twwn8
status: active
merged_into: null
display_name: 許氏
revision: 1
cbdb_id: 554915
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6230y_6_s_bsv4L4gjPmfh
        subject_person_id: p_imHy7sMY7eAET6Un1Twwn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBzh8MfXBxDLL_Ob8D3eKQ
          claim_id: c_6230y_6_s_bsv4L4gjPmfh
          source_id: s_lkzC6qpJs7NSLdYHPimtfM
          stance: supports
          locator: CBDB:554915
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_lkzC6qpJs7NSLdYHPimtfM
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王瑄妻)（CBDB 554915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554915&o=json
            external_identifier: CBDB:554915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_IiiDKMvZY20IbThW6idXCh
        subject_person_id: p_imHy7sMY7eAET6Un1Twwn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_COXO2TJMHeiuUdQ6dCxJAj
          claim_id: c_IiiDKMvZY20IbThW6idXCh
          source_id: s_lkzC6qpJs7NSLdYHPimtfM
          stance: supports
          locator: CBDB:554915
          quotation: null
          interpretation_note: CBDB 明确记录的王瑄配偶
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
        id: c_Rq_-gfb8pE5RMjfFesLIyM
        subject_person_id: p_rTuYWMJgLCJWdaptzm8h5s
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_imHy7sMY7eAET6Un1Twwn8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAjfJIcS2Okf1TP3bA2kqA
          claim_id: c_Rq_-gfb8pE5RMjfFesLIyM
          source_id: s_lkzC6qpJs7NSLdYHPimtfM
          stance: supports
          locator: 南陽府志，lgid=878676：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rTuYWMJgLCJWdaptzm8h5s
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 許氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 許氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554915） | accepted |
| name.primary | 許氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rTuYWMJgLCJWdaptzm8h5s | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：許氏(王瑄妻)（CBDB 554915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554915&o=json)

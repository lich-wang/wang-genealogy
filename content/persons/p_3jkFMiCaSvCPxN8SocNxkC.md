---
schema: wang-person/v1
id: p_3jkFMiCaSvCPxN8SocNxkC
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 556228
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_00IMfQl3dsInx4F9omXW-b
        subject_person_id: p_3jkFMiCaSvCPxN8SocNxkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_OSEp4uzd8PspAG9ugEQk
          claim_id: c_00IMfQl3dsInx4F9omXW-b
          source_id: s_j-jpeABAlsid2Gh0_1ggH5
          stance: supports
          locator: CBDB:556228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_j-jpeABAlsid2Gh0_1ggH5
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王心哲妻)（CBDB 556228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556228&o=json
            external_identifier: CBDB:556228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hv_M-5Xo7REH9WeTFhvdRu
        subject_person_id: p_3jkFMiCaSvCPxN8SocNxkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l73EsAz6T9JFuun4a19wic
          claim_id: c_Hv_M-5Xo7REH9WeTFhvdRu
          source_id: s_j-jpeABAlsid2Gh0_1ggH5
          stance: supports
          locator: CBDB:556228
          quotation: null
          interpretation_note: CBDB 明确记录的王心哲配偶
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
        id: c_wCR0Tmor73qXpGqyWtnrbZ
        subject_person_id: p_6ZpMJvzpYEhLetjGgeTNut
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3jkFMiCaSvCPxN8SocNxkC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qAstLJNMGWsP__21DBJ_kB
          claim_id: c_wCR0Tmor73qXpGqyWtnrbZ
          source_id: s_j-jpeABAlsid2Gh0_1ggH5
          stance: supports
          locator: 南陽府志，lgid=878721：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6ZpMJvzpYEhLetjGgeTNut
        status: active
        display_name: 王心哲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊氏，清人物。籍贯唐縣，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556228） | accepted |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6ZpMJvzpYEhLetjGgeTNut | 王心哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王心哲妻)（CBDB 556228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556228&o=json)

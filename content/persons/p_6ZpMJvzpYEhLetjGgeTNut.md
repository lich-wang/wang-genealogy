---
schema: wang-person/v1
id: p_6ZpMJvzpYEhLetjGgeTNut
status: active
merged_into: null
display_name: 王心哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bbzy9kVNaoPMpJ1am1tudV
        subject_person_id: p_6ZpMJvzpYEhLetjGgeTNut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B3hoWU2o3higCWezMcEtQT
          claim_id: c_Bbzy9kVNaoPMpJ1am1tudV
          source_id: s_ti4RaxFyomBsXFJRFNPD27
          stance: supports
          locator: CBDB:556227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556227）
          source: &a1
            id: s_ti4RaxFyomBsXFJRFNPD27
            source_type: api_record
            title: 中国历代人物传记资料库：王心哲（CBDB 556227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556227&o=json
            external_identifier: CBDB:556227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7pfb5UovMbXb9TrFrkdsRW
        subject_person_id: p_6ZpMJvzpYEhLetjGgeTNut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心哲，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BrbQb2pLS0cnz8ftLhjmp_
          claim_id: c_7pfb5UovMbXb9TrFrkdsRW
          source_id: s_ti4RaxFyomBsXFJRFNPD27
          stance: supports
          locator: CBDB:556227
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
          source:
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
      object_person:
        id: p_3jkFMiCaSvCPxN8SocNxkC
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王心哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心哲 | accepted |
| bio.summary | 王心哲，清人物。籍贯唐縣。（中国历代人物传记资料库 CBDB 556227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3jkFMiCaSvCPxN8SocNxkC | 楊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王心哲（CBDB 556227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556227&o=json)
- [中国历代人物传记资料库：楊氏(王心哲妻)（CBDB 556228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556228&o=json)

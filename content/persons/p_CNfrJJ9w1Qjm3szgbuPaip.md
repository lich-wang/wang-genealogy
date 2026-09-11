---
schema: wang-person/v1
id: p_CNfrJJ9w1Qjm3szgbuPaip
status: active
merged_into: null
display_name: 王萬祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5AnM2Z8m7nCpjMZjpdHDtp
        subject_person_id: p_CNfrJJ9w1Qjm3szgbuPaip
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TceeCGUCqo8j1mAe851qx2
          claim_id: c_5AnM2Z8m7nCpjMZjpdHDtp
          source_id: s_zdgTEYHSG1dDHf8xbkUHgx
          stance: supports
          locator: CBDB:126761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126761）
          source: &a1
            id: s_zdgTEYHSG1dDHf8xbkUHgx
            source_type: api_record
            title: 中国历代人物传记资料库：王萬祚（CBDB 126761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126761&o=json
            external_identifier: CBDB:126761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V5BWaB7LXafSR2C3P5Ecui
        subject_person_id: p_CNfrJJ9w1Qjm3szgbuPaip
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬祚，明人物。籍贯臨海，身份为詩人、經學家，入仕進士，曾任監察御史、知縣、丁父憂。（中国历代人物传记资料库 CBDB 126761）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NNb3UKNzzGOVED_c7uXyM7
          claim_id: c_V5BWaB7LXafSR2C3P5Ecui
          source_id: s_zdgTEYHSG1dDHf8xbkUHgx
          stance: supports
          locator: CBDB:126761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__exCDUk2TLiGj28ZeFKIAB
        subject_person_id: p_CNfrJJ9w1Qjm3szgbuPaip
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ePpqtpVTyuQH995U4wANGn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZC3mUpL4dFdPgfk2xGSEIE
          claim_id: c__exCDUk2TLiGj28ZeFKIAB
          source_id: s_zdgTEYHSG1dDHf8xbkUHgx
          stance: supports
          locator: 臨海縣志，lgid=353230：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ePpqtpVTyuQH995U4wANGn
        status: active
        display_name: 王思難
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬祚 | accepted |
| bio.summary | 王萬祚，明人物。籍贯臨海，身份为詩人、經學家，入仕進士，曾任監察御史、知縣、丁父憂。（中国历代人物传记资料库 CBDB 126761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ePpqtpVTyuQH995U4wANGn | 王思難 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬祚（CBDB 126761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126761&o=json)

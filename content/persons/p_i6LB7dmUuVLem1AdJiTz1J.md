---
schema: wang-person/v1
id: p_i6LB7dmUuVLem1AdJiTz1J
status: active
merged_into: null
display_name: 王適
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_goAaEfELHxGHFxgCpw9QSZ
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1m4mLPsqPCp6b54Ppon5Q6
          claim_id: c_goAaEfELHxGHFxgCpw9QSZ
          source_id: s_E5diWQB2WY19tCbQAVC8zx
          stance: supports
          locator: CBDB:145738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145738）
          source: &a1
            id: s_E5diWQB2WY19tCbQAVC8zx
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 145738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145738&o=json
            external_identifier: CBDB:145738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nPWTDG1kzqTTSA82AFZDnR
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 771年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CnfRtZrM2hvLntv4Xo8F9L
          claim_id: c_nPWTDG1kzqTTSA82AFZDnR
          source_id: s_E5diWQB2WY19tCbQAVC8zx
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
        id: c_Qp7U2vHyqDXPFqqWE6MjKS
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 814年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2Eb8gdv2jrcGhYDMQrL79
          claim_id: c_Qp7U2vHyqDXPFqqWE6MjKS
          source_id: s_E5diWQB2WY19tCbQAVC8zx
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
        id: c_G1JJWfi4p9PKm6XtsrzE3u
        subject_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適（771年—814年），唐人物。籍贯長安，曾任大理評事、觀察判官。（中国历代人物传记资料库 CBDB 145738）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uKi8qQg6LITwZmgQBWGATz
          claim_id: c_G1JJWfi4p9PKm6XtsrzE3u
          source_id: s_E5diWQB2WY19tCbQAVC8zx
          stance: supports
          locator: CBDB:145738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GLLzpcPKTZjf4TTV8YHu09
        subject_person_id: p_5kuHajLKusqxx5JvUhh1Cx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i6LB7dmUuVLem1AdJiTz1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x9xYxbGB4gY7Q0yqArTZCC
          claim_id: c_GLLzpcPKTZjf4TTV8YHu09
          source_id: s_nBVP4dFA1MA6CCHEuPvitg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nBVP4dFA1MA6CCHEuPvitg
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 190822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190822&o=json
            external_identifier: CBDB:190822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5kuHajLKusqxx5JvUhh1Cx
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王適 | accepted |
| birth.date | 771年 | accepted |
| death.date | 814年 | accepted |
| bio.summary | 王適（771年—814年），唐人物。籍贯長安，曾任大理評事、觀察判官。（中国历代人物传记资料库 CBDB 145738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5kuHajLKusqxx5JvUhh1Cx | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王適（CBDB 145738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145738&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 190822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190822&o=json)

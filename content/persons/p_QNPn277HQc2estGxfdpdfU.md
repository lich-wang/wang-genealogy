---
schema: wang-person/v1
id: p_QNPn277HQc2estGxfdpdfU
status: active
merged_into: null
display_name: 王大勇
cbdb_id: 69086
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cienTEwaXhnMtWknGQEBB7
        subject_person_id: p_QNPn277HQc2estGxfdpdfU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大勇（卒于1799年），清人物。籍贯邵陽，入仕武舉進士，曾任城守營。（中国历代人物传记资料库 CBDB 69086）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ICfBi2D7UBziHjn_6yGMzj
          claim_id: c_cienTEwaXhnMtWknGQEBB7
          source_id: s_4B3x8F1kfF94biq8bdUyPd
          stance: supports
          locator: CBDB:69086
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4B3x8F1kfF94biq8bdUyPd
            source_type: api_record
            title: 中国历代人物传记资料库：王大勇（CBDB 69086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69086&o=json
            external_identifier: CBDB:69086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g5MsK7yrW3Y3rPL6sV43P1
        subject_person_id: p_QNPn277HQc2estGxfdpdfU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1799年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1799-01-01
            latest: 1799-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJ8Yru3EZ4yJdkF8KFc13e
          claim_id: c_g5MsK7yrW3Y3rPL6sV43P1
          source_id: s_4B3x8F1kfF94biq8bdUyPd
          stance: supports
          locator: CBDB:69086
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source:
            id: s_4B3x8F1kfF94biq8bdUyPd
            source_type: api_record
            title: 中国历代人物传记资料库：王大勇（CBDB 69086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69086&o=json
            external_identifier: CBDB:69086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q4FGTAsmbHYnsAwJqsoPLA
        subject_person_id: p_QNPn277HQc2estGxfdpdfU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大勇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dTdhCX5QuAiupi8cKvDSBC
          claim_id: c_Q4FGTAsmbHYnsAwJqsoPLA
          source_id: s_4B3x8F1kfF94biq8bdUyPd
          stance: supports
          locator: CBDB:69086
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AUOM9wz2xgcvZDZalLi-9r
        subject_person_id: p_QNPn277HQc2estGxfdpdfU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qgn5Es6vkX9R4a5Xd73Ec6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHayVz377DJ5o_U5s8ORjQ
          claim_id: c_AUOM9wz2xgcvZDZalLi-9r
          source_id: s_o5x4CGEDF2YnSUZjVSy6Lv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12784：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o5x4CGEDF2YnSUZjVSy6Lv
            source_type: api_record
            title: 中国历代人物传记资料库：王傳宣（CBDB 526692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526692&o=json
            external_identifier: CBDB:526692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Qgn5Es6vkX9R4a5Xd73Ec6
        status: active
        display_name: 王傳宣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大勇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大勇（卒于1799年），清人物。籍贯邵陽，入仕武舉進士，曾任城守營。（中国历代人物传记资料库 CBDB 69086） | accepted |
| death.date | 1799年 | accepted |
| name.primary | 王大勇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Qgn5Es6vkX9R4a5Xd73Ec6 | 王傳宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳宣（CBDB 526692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526692&o=json)
- [中国历代人物传记资料库：王大勇（CBDB 69086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69086&o=json)

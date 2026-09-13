---
schema: wang-person/v1
id: p_HDyRTiaAGZCqHG86QTQWZE
status: active
merged_into: null
display_name: 王清弼
cbdb_id: 69337
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XnPUkyxBFCzyHfGX6Bbv97
        subject_person_id: p_HDyRTiaAGZCqHG86QTQWZE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清弼（卒于1799年），清人物。籍贯雄縣，入仕武舉進士，曾任協副將、營都司、營守備。（中国历代人物传记资料库 CBDB 69337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_z9zIGQIFA1o-k7vv3kNsPW
          claim_id: c_XnPUkyxBFCzyHfGX6Bbv97
          source_id: s_Gg62ba4wJgKUNA9uDizo2o
          stance: supports
          locator: CBDB:69337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gg62ba4wJgKUNA9uDizo2o
            source_type: api_record
            title: 中国历代人物传记资料库：王清弼（CBDB 69337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69337&o=json
            external_identifier: CBDB:69337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_P8FgF7vNRgXXkLrtyxJQD5
        subject_person_id: p_HDyRTiaAGZCqHG86QTQWZE
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
        - id: cs_gCshA2GXRaTTvCRYDC5nY4
          claim_id: c_P8FgF7vNRgXXkLrtyxJQD5
          source_id: s_Gg62ba4wJgKUNA9uDizo2o
          stance: supports
          locator: CBDB:69337
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source:
            id: s_Gg62ba4wJgKUNA9uDizo2o
            source_type: api_record
            title: 中国历代人物传记资料库：王清弼（CBDB 69337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69337&o=json
            external_identifier: CBDB:69337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UMbAq42UaXTGkEtDoZHLLJ
        subject_person_id: p_HDyRTiaAGZCqHG86QTQWZE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cJBnTYnRctH2jURnT3xuTd
          claim_id: c_UMbAq42UaXTGkEtDoZHLLJ
          source_id: s_Gg62ba4wJgKUNA9uDizo2o
          stance: supports
          locator: CBDB:69337
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1799
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_U24I7EEjEwoqzyY_IfFuXS
        subject_person_id: p_HDyRTiaAGZCqHG86QTQWZE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q78NHTK4vooe11bgCyMrsD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zO2IyOpUVPnussNP50pFe
          claim_id: c_U24I7EEjEwoqzyY_IfFuXS
          source_id: s_aZ3Y3C68Ad7bWYQ21yNPPV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13041：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aZ3Y3C68Ad7bWYQ21yNPPV
            source_type: api_record
            title: 中国历代人物传记资料库：王丕（CBDB 526872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526872&o=json
            external_identifier: CBDB:526872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q78NHTK4vooe11bgCyMrsD
        status: active
        display_name: 王丕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王清弼（卒于1799年），清人物。籍贯雄縣，入仕武舉進士，曾任協副將、營都司、營守備。（中国历代人物传记资料库 CBDB 69337） | accepted |
| death.date | 1799年 | accepted |
| name.primary | 王清弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q78NHTK4vooe11bgCyMrsD | 王丕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丕（CBDB 526872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526872&o=json)
- [中国历代人物传记资料库：王清弼（CBDB 69337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69337&o=json)

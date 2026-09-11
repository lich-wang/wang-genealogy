---
schema: wang-person/v1
id: p_hDMEBENPW78b4jLLVDro5V
status: active
merged_into: null
display_name: 王詩正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o7frWjckPvJYTCML9v2HAo
        subject_person_id: p_hDMEBENPW78b4jLLVDro5V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cBRS4GE8pf4zf8mZL499E8
          claim_id: c_o7frWjckPvJYTCML9v2HAo
          source_id: s_RZNmeGmEFtFJ1eod7wh9eY
          stance: supports
          locator: CBDB:527007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527007）
          source: &a1
            id: s_RZNmeGmEFtFJ1eod7wh9eY
            source_type: api_record
            title: 中国历代人物传记资料库：王詩正（CBDB 527007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527007&o=json
            external_identifier: CBDB:527007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QcK64SzpPr3ihgmf5JmSzn
        subject_person_id: p_hDMEBENPW78b4jLLVDro5V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hHNThCoPZLmBn8kUzhBa5D
          claim_id: c_QcK64SzpPr3ihgmf5JmSzn
          source_id: s_RZNmeGmEFtFJ1eod7wh9eY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OPuGRFRdAkXUfbdp9_npQC
        subject_person_id: p_4LBcmFmaPS2VnVfdjABdKw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDMEBENPW78b4jLLVDro5V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dA0waLt_njJ0z10-Qy3d2e
          claim_id: c_OPuGRFRdAkXUfbdp9_npQC
          source_id: s_ap7EabmaHPEY44fFFf3zJY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13171：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ap7EabmaHPEY44fFFf3zJY
            source_type: api_record
            title: 中国历代人物传记资料库：王錱（CBDB 69460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69460&o=json
            external_identifier: CBDB:69460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4LBcmFmaPS2VnVfdjABdKw
        status: active
        display_name: 王錱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詩正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詩正 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4LBcmFmaPS2VnVfdjABdKw | 王錱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詩正（CBDB 527007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527007&o=json)
- [中国历代人物传记资料库：王錱（CBDB 69460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69460&o=json)

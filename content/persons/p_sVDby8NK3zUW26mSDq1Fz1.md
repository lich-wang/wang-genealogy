---
schema: wang-person/v1
id: p_sVDby8NK3zUW26mSDq1Fz1
status: active
merged_into: null
display_name: 王國良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3DWunRQgNSJaprVBfM7X8
        subject_person_id: p_sVDby8NK3zUW26mSDq1Fz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CQU7yzNoJ1L6jGvok6Z68
          claim_id: c_i3DWunRQgNSJaprVBfM7X8
          source_id: s_PyWMuYXp4GLgFzQdWuE5Zm
          stance: supports
          locator: CBDB:558509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558509）
          source: &a1
            id: s_PyWMuYXp4GLgFzQdWuE5Zm
            source_type: api_record
            title: 中国历代人物传记资料库：王國良（CBDB 558509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558509&o=json
            external_identifier: CBDB:558509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dDgWUTzkdbijuEvh5Rtoxu
        subject_person_id: p_sVDby8NK3zUW26mSDq1Fz1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國良，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558509）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_juu8w907xGdKdXFtStUMpj
          claim_id: c_dDgWUTzkdbijuEvh5Rtoxu
          source_id: s_PyWMuYXp4GLgFzQdWuE5Zm
          stance: supports
          locator: CBDB:558509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E0GfsfdLOWy3f5qcXA4eWp
        subject_person_id: p_9rzXYbkJA2dqMivPhhBtNU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVDby8NK3zUW26mSDq1Fz1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Et7dLnKtexB-mj_YRgbrUB
          claim_id: c_E0GfsfdLOWy3f5qcXA4eWp
          source_id: s_2opoNkEX2YS6FPHonGvFq2
          stance: supports
          locator: (乾隆)信陽州志，lgid=868525：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2opoNkEX2YS6FPHonGvFq2
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 558506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558506&o=json
            external_identifier: CBDB:558506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9rzXYbkJA2dqMivPhhBtNU
        status: active
        display_name: 王翼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國良 | accepted |
| bio.summary | 王國良，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 558509） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9rzXYbkJA2dqMivPhhBtNU | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國良（CBDB 558509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558509&o=json)
- [中国历代人物传记资料库：王翼（CBDB 558506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558506&o=json)

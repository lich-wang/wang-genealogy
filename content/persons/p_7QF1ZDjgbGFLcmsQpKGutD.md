---
schema: wang-person/v1
id: p_7QF1ZDjgbGFLcmsQpKGutD
status: active
merged_into: null
display_name: 王睦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCHonufKHArZx96fpnsjj9
        subject_person_id: p_7QF1ZDjgbGFLcmsQpKGutD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HZEDxzuTvcvLPokKpEBLLL
          claim_id: c_NCHonufKHArZx96fpnsjj9
          source_id: s_LVMkX5femUk8otDZhi3hTG
          stance: supports
          locator: CBDB:38948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38948）
          source: &a1
            id: s_LVMkX5femUk8otDZhi3hTG
            source_type: api_record
            title: 中国历代人物传记资料库：王睦（CBDB 38948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38948&o=json
            external_identifier: CBDB:38948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cYtnbbJKSY7zAqo6N9NTze
        subject_person_id: p_7QF1ZDjgbGFLcmsQpKGutD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睦，宋人物。籍贯莘縣。（中国历代人物传记资料库 CBDB 38948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r9rhM28yJaCa0HpH-ODnov
          claim_id: c_cYtnbbJKSY7zAqo6N9NTze
          source_id: s_LVMkX5femUk8otDZhi3hTG
          stance: supports
          locator: CBDB:38948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vVANJTS1GNv8nxYLYz1Rud
        subject_person_id: p_XcKs2bGERUGdK6cYqHFdDh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7QF1ZDjgbGFLcmsQpKGutD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kT651nITwJloW4b7fChfK1
          claim_id: c_vVANJTS1GNv8nxYLYz1Rud
          source_id: s_LVMkX5femUk8otDZhi3hTG
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XcKs2bGERUGdK6cYqHFdDh
        status: active
        display_name: 王懿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睦 | accepted |
| bio.summary | 王睦，宋人物。籍贯莘縣。（中国历代人物传记资料库 CBDB 38948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XcKs2bGERUGdK6cYqHFdDh | 王懿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王睦（CBDB 38948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38948&o=json)

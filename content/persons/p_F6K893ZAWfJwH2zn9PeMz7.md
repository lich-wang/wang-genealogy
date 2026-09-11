---
schema: wang-person/v1
id: p_F6K893ZAWfJwH2zn9PeMz7
status: active
merged_into: null
display_name: 王文炳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gpy6AP8K3s6dGwkP274SZu
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nj9sJowcRwsjvJs432HTPk
          claim_id: c_gpy6AP8K3s6dGwkP274SZu
          source_id: s_H9jmnw3PYmgkWnnoF3eXnE
          stance: supports
          locator: CBDB:216545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216545）
          source: &a1
            id: s_H9jmnw3PYmgkWnnoF3eXnE
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 216545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216545&o=json
            external_identifier: CBDB:216545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oZ5J1WMuRuHtFnrKtDKya
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳，明人物。萬曆五年進士，籍贯廬陵，曾任通政使司右通政。（中国历代人物传记资料库 CBDB 216545）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0-o3Ig6iLJGtyQ50wxs1OH
          claim_id: c_8oZ5J1WMuRuHtFnrKtDKya
          source_id: s_H9jmnw3PYmgkWnnoF3eXnE
          stance: supports
          locator: CBDB:216545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0yBrG5dN3WsIQKZipFyN68
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LAdrvndGjALBLJ57yl5qib
          claim_id: c_0yBrG5dN3WsIQKZipFyN68
          source_id: s_H9jmnw3PYmgkWnnoF3eXnE
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fSRoLzmGTyVibfPFCP5xFh
        status: active
        display_name: 王命爵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文炳 | accepted |
| bio.summary | 王文炳，明人物。萬曆五年進士，籍贯廬陵，曾任通政使司右通政。（中国历代人物传记资料库 CBDB 216545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fSRoLzmGTyVibfPFCP5xFh | 王命爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文炳（CBDB 216545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216545&o=json)

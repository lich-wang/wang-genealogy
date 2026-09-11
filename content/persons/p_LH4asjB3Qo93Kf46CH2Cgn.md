---
schema: wang-person/v1
id: p_LH4asjB3Qo93Kf46CH2Cgn
status: active
merged_into: null
display_name: 王尚賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPWbHMX1D3B21QA7FZ4BJw
        subject_person_id: p_LH4asjB3Qo93Kf46CH2Cgn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tude38AQjdR2C7xPxY28ne
          claim_id: c_UPWbHMX1D3B21QA7FZ4BJw
          source_id: s_3qG6ZeE9ha1596cW8VG2hG
          stance: supports
          locator: CBDB:466570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466570）
          source: &a1
            id: s_3qG6ZeE9ha1596cW8VG2hG
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賓（CBDB 466570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466570&o=json
            external_identifier: CBDB:466570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLMftcARC72Li1ihvRasR1
        subject_person_id: p_LH4asjB3Qo93Kf46CH2Cgn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王尚賓，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 466570）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GyrLuHqK4DFpZPuwXFPLcA
          claim_id: c_yLMftcARC72Li1ihvRasR1
          source_id: s_3qG6ZeE9ha1596cW8VG2hG
          stance: supports
          locator: CBDB:466570
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賓 | accepted |
| bio.summary | 王尚賓，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任教諭。（中国历代人物传记资料库 CBDB 466570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚賓（CBDB 466570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466570&o=json)

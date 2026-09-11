---
schema: wang-person/v1
id: p_67qMPLTYasCb3s1pUyvhCX
status: active
merged_into: null
display_name: 王珉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFJWj8nLNB6sAdgwawr2nn
        subject_person_id: p_67qMPLTYasCb3s1pUyvhCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_51GWFcQaKmXEWDxR9L3CSg
          claim_id: c_hFJWj8nLNB6sAdgwawr2nn
          source_id: s_MKaRW9zgQpUTx4EoCJCiUV
          stance: supports
          locator: CBDB:281722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281722）
          source: &a1
            id: s_MKaRW9zgQpUTx4EoCJCiUV
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 281722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281722&o=json
            external_identifier: CBDB:281722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i6cPXHBXr7J7yyE4TmgHoi
        subject_person_id: p_67qMPLTYasCb3s1pUyvhCX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉，明人物。正德十二年進士，曾任教諭。（中国历代人物传记资料库 CBDB 281722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c4_v4gorLCh_cZDSCF4WGy
          claim_id: c_i6cPXHBXr7J7yyE4TmgHoi
          source_id: s_MKaRW9zgQpUTx4EoCJCiUV
          stance: supports
          locator: CBDB:281722
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
  descendants:
    - claim:
        id: c_CLmKZj3yR3AtBRGFoFA4iN
        subject_person_id: p_67qMPLTYasCb3s1pUyvhCX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAurUdnifLSPHlXwCwZE8H
          claim_id: c_CLmKZj3yR3AtBRGFoFA4iN
          source_id: s_MKaRW9zgQpUTx4EoCJCiUV
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gzcyEWpUCr5gNzCxFVcs3X
        status: active
        display_name: 王冕
        merged_into_person_id: null
  other: []
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | 王珉，明人物。正德十二年進士，曾任教諭。（中国历代人物传记资料库 CBDB 281722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gzcyEWpUCr5gNzCxFVcs3X | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 281722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281722&o=json)

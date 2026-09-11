---
schema: wang-person/v1
id: p_JwEaq79pvhejygp4rNvhpM
status: active
merged_into: null
display_name: 王禹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CubMXmMZ1u3ssucLbMw1jn
        subject_person_id: p_JwEaq79pvhejygp4rNvhpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d2jxza96wcrLzYV2sU5EYu
          claim_id: c_CubMXmMZ1u3ssucLbMw1jn
          source_id: s_T6zA3DgeYdSdwtU56qs5bK
          stance: supports
          locator: CBDB:137671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137671）
          source: &a1
            id: s_T6zA3DgeYdSdwtU56qs5bK
            source_type: api_record
            title: 中国历代人物传记资料库：王禹（CBDB 137671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137671&o=json
            external_identifier: CBDB:137671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_16HUKHJWF8Jg66dhWDWeF1
        subject_person_id: p_JwEaq79pvhejygp4rNvhpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹，宋人物。寶祐進士，籍贯新建。（中国历代人物传记资料库 CBDB 137671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_svGXL_L6qBlFy6Bbo3tiGo
          claim_id: c_16HUKHJWF8Jg66dhWDWeF1
          source_id: s_T6zA3DgeYdSdwtU56qs5bK
          stance: supports
          locator: CBDB:137671
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
        id: c_0Jkybg06oHagEtCEklxoj4
        subject_person_id: p_JwEaq79pvhejygp4rNvhpM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ud28RLKE4Aj4vbujngiZW1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sB5V_LcZJdjadUF6PbWd4H
          claim_id: c_0Jkybg06oHagEtCEklxoj4
          source_id: s_T6zA3DgeYdSdwtU56qs5bK
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ud28RLKE4Aj4vbujngiZW1
        status: active
        display_name: 王申之
        merged_into_person_id: null
    - claim:
        id: c_py7q9U4AYywCIOCasypQHL
        subject_person_id: p_JwEaq79pvhejygp4rNvhpM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eCF7v6xydLTPB7tAn3nDN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nsf0cz3F91wsHnP-LVUF8O
          claim_id: c_py7q9U4AYywCIOCasypQHL
          source_id: s_T6zA3DgeYdSdwtU56qs5bK
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5eCF7v6xydLTPB7tAn3nDN
        status: active
        display_name: 王景倓
        merged_into_person_id: null
  other: []
---

# 王禹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹 | accepted |
| bio.summary | 王禹，宋人物。寶祐進士，籍贯新建。（中国历代人物传记资料库 CBDB 137671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Ud28RLKE4Aj4vbujngiZW1 | 王申之 | accepted |
| descendants | p_5eCF7v6xydLTPB7tAn3nDN | 王景倓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禹（CBDB 137671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137671&o=json)

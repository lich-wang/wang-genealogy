---
schema: wang-person/v1
id: p_fVWCspCFwJnj5sBz8z7Ce4
status: active
merged_into: null
display_name: 王文美
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rU1LQ3mwrMaYY3L7UdDjyb
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TVyWn8gq1eRTkuLsmcaFYH
          claim_id: c_rU1LQ3mwrMaYY3L7UdDjyb
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
          stance: supports
          locator: CBDB:316254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316254）
          source: &a1
            id: s_bdDMZnsa3QCFaPp5z4CC18
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 316254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json
            external_identifier: CBDB:316254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pj64j1sQiAdqC2K9cRhnao
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文美，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wq2iLfnuh6RQUxEkrEgxne
          claim_id: c_Pj64j1sQiAdqC2K9cRhnao
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
          stance: supports
          locator: CBDB:316254
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
        id: c_yzVnCLXofS3x9fd_WbBrK4
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fzi5FYdhnOfb_YeAr4qE17
          claim_id: c_yzVnCLXofS3x9fd_WbBrK4
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
  other: []
---

# 王文美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文美 | accepted |
| bio.summary | 王文美，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文美（CBDB 316254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json)

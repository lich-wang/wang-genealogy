---
schema: wang-person/v1
id: p_75587XqogBQaW5G74KzAUa
status: active
merged_into: null
display_name: 王延祚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_znwgzXxk3M4jPjCpLYrgpR
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_foFfN8eNetgVoBT1tjqZ6K
          claim_id: c_znwgzXxk3M4jPjCpLYrgpR
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: CBDB:22069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22069）
          source: &a1
            id: s_fPj9F5vVSoDjTWHQZskLG1
            source_type: api_record
            title: 中国历代人物传记资料库：王延祚（CBDB 22069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json
            external_identifier: CBDB:22069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_coy9gHqqgGVQEuUdni3W8V
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延祚，五代人物。籍贯祁縣，身份为武將，曾任刺史、國公、防禦使。（中国历代人物传记资料库 CBDB 22069）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_umzXDryxZztlyiRyisgZTx
          claim_id: c_coy9gHqqgGVQEuUdni3W8V
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: CBDB:22069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kXzuYefU9p_nSyUIcEkxfK
        subject_person_id: p_JCa3R39d4XcRY2MuE9xDyZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_75587XqogBQaW5G74KzAUa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJkyEIXlrGabQoFgKtLBcG
          claim_id: c_kXzuYefU9p_nSyUIcEkxfK
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，822;823：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JCa3R39d4XcRY2MuE9xDyZ
        status: active
        display_name: 王建福
        merged_into_person_id: null
  children:
    - claim:
        id: c_IXf84VUIPmRLUKOMYOEfNA
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3erZD3RnetiUi-13Cdslp
          claim_id: c_IXf84VUIPmRLUKOMYOEfNA
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1026：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KwbmAJ2D4cYa2NFwUSg9RA
        status: active
        display_name: 王溥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_WfaFiwKg4HtVIiIBpDObVa
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XD2Qo3N9eiAD7S7HxAbavF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpsbYyAMey_Qk49ma03wJs
          claim_id: c_WfaFiwKg4HtVIiIBpDObVa
          source_id: s_1TED0ERp4uhwYJEst2VHqR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，822;825：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1TED0ERp4uhwYJEst2VHqR
            source_type: api_record
            title: 中国历代人物传记资料库：嚴氏(王延祚妻)（CBDB 38354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38354&o=json
            external_identifier: CBDB:38354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XD2Qo3N9eiAD7S7HxAbavF
        status: active
        display_name: 嚴氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_-E57S4rXlbdWNCQ1E2lPC-
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LWouE38zrijcXXQPG5ma9Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KTXRRMYaiC5NhasipRJ0I5
          claim_id: c_-E57S4rXlbdWNCQ1E2lPC-
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二三 王貽矩墓誌：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LWouE38zrijcXXQPG5ma9Z
        status: active
        display_name: 王貽矩
        merged_into_person_id: null
  other: []
---

# 王延祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延祚 | accepted |
| bio.summary | 王延祚，五代人物。籍贯祁縣，身份为武將，曾任刺史、國公、防禦使。（中国历代人物传记资料库 CBDB 22069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JCa3R39d4XcRY2MuE9xDyZ | 王建福 | accepted |
| children | p_KwbmAJ2D4cYa2NFwUSg9RA | 王溥 | accepted |
| spouses | p_XD2Qo3N9eiAD7S7HxAbavF | 嚴氏 | accepted |
| descendants | p_LWouE38zrijcXXQPG5ma9Z | 王貽矩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延祚（CBDB 22069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json)
- [中国历代人物传记资料库：嚴氏(王延祚妻)（CBDB 38354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38354&o=json)

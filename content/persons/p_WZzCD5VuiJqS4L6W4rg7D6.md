---
schema: wang-person/v1
id: p_WZzCD5VuiJqS4L6W4rg7D6
status: active
merged_into: null
display_name: 易氏
revision: 1
cbdb_id: 230475
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TIkZPhkOmtJ_ssoRq1Z1GU
        subject_person_id: p_WZzCD5VuiJqS4L6W4rg7D6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 易氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 230475）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PaeMwx74rY_1fiRhdYktsb
          claim_id: c_TIkZPhkOmtJ_ssoRq1Z1GU
          source_id: s_qU1gW4p37XZ7ZDeVxd1xET
          stance: supports
          locator: CBDB:230475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qU1gW4p37XZ7ZDeVxd1xET
            source_type: api_record
            title: 中国历代人物传记资料库：易氏(王一鳴妻)（CBDB 230475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230475&o=json
            external_identifier: CBDB:230475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zxlozISavPa6oPvJ5qnFQV
        subject_person_id: p_WZzCD5VuiJqS4L6W4rg7D6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 易氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NtXbfgKIOL9ns58lFSICx6
          claim_id: c_zxlozISavPa6oPvJ5qnFQV
          source_id: s_qU1gW4p37XZ7ZDeVxd1xET
          stance: supports
          locator: CBDB:230475
          quotation: null
          interpretation_note: CBDB 明确记录的王一鳴配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dePtiQqWVXIw2Qt7lTXUTs
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WZzCD5VuiJqS4L6W4rg7D6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RFbBl8FTEvqV40K5VfrocR
          claim_id: c_dePtiQqWVXIw2Qt7lTXUTs
          source_id: s_qU1gW4p37XZ7ZDeVxd1xET
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 易氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 易氏，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 230475） | accepted |
| name.primary | 易氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：易氏(王一鳴妻)（CBDB 230475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230475&o=json)

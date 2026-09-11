---
schema: wang-person/v1
id: p_F8NA6DNMSyjPgtdTfVsijN
status: active
merged_into: null
display_name: 王天錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRP7NoacdQBA9p9YsPxxHG
        subject_person_id: p_F8NA6DNMSyjPgtdTfVsijN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zwf4puF6YMyCSuvkW2NjhH
          claim_id: c_WRP7NoacdQBA9p9YsPxxHG
          source_id: s_yfHPWTAGWPnaf13HbAsHHw
          stance: supports
          locator: CBDB:215046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215046）
          source: &a1
            id: s_yfHPWTAGWPnaf13HbAsHHw
            source_type: api_record
            title: 中国历代人物传记资料库：王天錫（CBDB 215046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215046&o=json
            external_identifier: CBDB:215046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kBjy88J813hnkcAQ7mJygc
        subject_person_id: p_F8NA6DNMSyjPgtdTfVsijN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天錫，明人物。萬曆二年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 215046）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tEsPJ9GJKTGbEKxrWl2a3i
          claim_id: c_kBjy88J813hnkcAQ7mJygc
          source_id: s_yfHPWTAGWPnaf13HbAsHHw
          stance: supports
          locator: CBDB:215046
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
        id: c_2nglTPi7fyiqkM6-wYPXZs
        subject_person_id: p_F8NA6DNMSyjPgtdTfVsijN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcXaE9nFy8Z7Q8wcMzG619
          claim_id: c_2nglTPi7fyiqkM6-wYPXZs
          source_id: s_yfHPWTAGWPnaf13HbAsHHw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rk4ASszNDmrPYo2vAUfdsQ
        status: active
        display_name: 王懋中
        merged_into_person_id: null
  other: []
---

# 王天錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天錫 | accepted |
| bio.summary | 王天錫，明人物。萬曆二年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 215046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Rk4ASszNDmrPYo2vAUfdsQ | 王懋中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天錫（CBDB 215046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215046&o=json)

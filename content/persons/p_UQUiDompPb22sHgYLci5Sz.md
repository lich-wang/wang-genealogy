---
schema: wang-person/v1
id: p_UQUiDompPb22sHgYLci5Sz
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 558146
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0f02ryZqojv7XfY34X4vKh
        subject_person_id: p_UQUiDompPb22sHgYLci5Sz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_liUonVgF-dodEBbr1cgVPf
          claim_id: c_0f02ryZqojv7XfY34X4vKh
          source_id: s_pDSVCRpUC02eHMfbSYa8pR
          stance: supports
          locator: CBDB:558146
          quotation: null
          interpretation_note: CBDB 明确记录的王曰緒配偶
          source: &a1
            id: s_pDSVCRpUC02eHMfbSYa8pR
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王曰緒妻)（CBDB 558146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558146&o=json
            external_identifier: CBDB:558146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AR52gGoRJBDu8J8Ya1r0K6
        subject_person_id: p_EvWRm5N6tBrFtEPuuzsd2V
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UQUiDompPb22sHgYLci5Sz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2UwSFKtNDCNyofzbjN4YA
          claim_id: c_AR52gGoRJBDu8J8Ya1r0K6
          source_id: s_pDSVCRpUC02eHMfbSYa8pR
          stance: supports
          locator: 南陽府志，lgid=878823-878824：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EvWRm5N6tBrFtEPuuzsd2V
        status: active
        display_name: 王曰緒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EvWRm5N6tBrFtEPuuzsd2V | 王曰緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王曰緒妻)（CBDB 558146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558146&o=json)

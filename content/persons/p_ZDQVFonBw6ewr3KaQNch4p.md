---
schema: wang-person/v1
id: p_ZDQVFonBw6ewr3KaQNch4p
status: active
merged_into: null
display_name: 陸氏
revision: 1
cbdb_id: 158831
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcmsxv6kxecfFObTd1N77S
        subject_person_id: p_ZDQVFonBw6ewr3KaQNch4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陸氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X0iAx_sHDlCIKvp4Rf9Bam
          claim_id: c_qcmsxv6kxecfFObTd1N77S
          source_id: s_TDvJlzQudwGJw7vqY2-kwl
          stance: supports
          locator: CBDB:158831
          quotation: null
          interpretation_note: CBDB 明确记录的王林配偶
          source: &a1
            id: s_TDvJlzQudwGJw7vqY2-kwl
            source_type: api_record
            title: 中国历代人物传记资料库：陸氏(王林妻)（CBDB 158831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158831&o=json
            external_identifier: CBDB:158831
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
        id: c_d1b5BJvk8FSqxWHZ12iUuT
        subject_person_id: p_nDDaZpF9qvDxoedjU9EcGY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZDQVFonBw6ewr3KaQNch4p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAdtWkB60fWPCl0YbVCoZF
          claim_id: c_d1b5BJvk8FSqxWHZ12iUuT
          source_id: s_TDvJlzQudwGJw7vqY2-kwl
          stance: supports
          locator: CBDB 双向互证（妻子 陸氏(王林妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nDDaZpF9qvDxoedjU9EcGY
        status: active
        display_name: 王林
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陸氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陸氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nDDaZpF9qvDxoedjU9EcGY | 王林 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸氏(王林妻)（CBDB 158831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158831&o=json)

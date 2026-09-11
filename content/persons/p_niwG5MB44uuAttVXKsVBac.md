---
schema: wang-person/v1
id: p_niwG5MB44uuAttVXKsVBac
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w2W8Ytpk8MQpgyH6unzyvk
        subject_person_id: p_niwG5MB44uuAttVXKsVBac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mqdG2FmAP9MjmzgCPKZ4ar
          claim_id: c_w2W8Ytpk8MQpgyH6unzyvk
          source_id: s_DviUbandqEe4WLbCKGP46g
          stance: supports
          locator: CBDB:312762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312762）
          source: &a1
            id: s_DviUbandqEe4WLbCKGP46g
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 312762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312762&o=json
            external_identifier: CBDB:312762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QLrDnKDEpMXLPKKMsh3jSW
        subject_person_id: p_niwG5MB44uuAttVXKsVBac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 312762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UsKA-OJ6xgKchr6xGiRjjs
          claim_id: c_QLrDnKDEpMXLPKKMsh3jSW
          source_id: s_DviUbandqEe4WLbCKGP46g
          stance: supports
          locator: CBDB:312762
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
        id: c_WTIXG8exKXmK2_PLOWyfDZ
        subject_person_id: p_niwG5MB44uuAttVXKsVBac
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tBUiiaLdovkgJJmciCi2LY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SRhlF5JaJv9HJ0nOReBt4d
          claim_id: c_WTIXG8exKXmK2_PLOWyfDZ
          source_id: s_DviUbandqEe4WLbCKGP46g
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tBUiiaLdovkgJJmciCi2LY
        status: active
        display_name: 王震
        merged_into_person_id: null
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。天順四年進士。（中国历代人物传记资料库 CBDB 312762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tBUiiaLdovkgJJmciCi2LY | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 312762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312762&o=json)

---
schema: wang-person/v1
id: p_qQjh9wkA8nRsb7YY9rMuFw
status: active
merged_into: null
display_name: 王思明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxCVjnxD8fiy78Kqgh76oK
        subject_person_id: p_qQjh9wkA8nRsb7YY9rMuFw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2wFANtdnrXmLNpXUqyABax
          claim_id: c_MxCVjnxD8fiy78Kqgh76oK
          source_id: s_5NZpKpfjKM91QSLByzh4Jj
          stance: supports
          locator: CBDB:317041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317041）
          source: &a1
            id: s_5NZpKpfjKM91QSLByzh4Jj
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 317041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317041&o=json
            external_identifier: CBDB:317041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bgU1bEDutq3r1HFcJNJT19
        subject_person_id: p_qQjh9wkA8nRsb7YY9rMuFw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Du4T39iD1PF3f1z9Q2WVm
          claim_id: c_bgU1bEDutq3r1HFcJNJT19
          source_id: s_5NZpKpfjKM91QSLByzh4Jj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_nQTFmSRay16hzwev-eDAoM
        subject_person_id: p_qQjh9wkA8nRsb7YY9rMuFw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTLMXfrEl_ctwN0TlWngri
          claim_id: c_nQTFmSRay16hzwev-eDAoM
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpD9Xzyu7fDvD4yopAp4vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 198790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json
            external_identifier: CBDB:198790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  other: []
---

# 王思明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思明（CBDB 317041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317041&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 198790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json)

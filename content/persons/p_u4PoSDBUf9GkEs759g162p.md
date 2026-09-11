---
schema: wang-person/v1
id: p_u4PoSDBUf9GkEs759g162p
status: active
merged_into: null
display_name: 王哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HrvywwhomMcDSAEnbpHE1w
        subject_person_id: p_u4PoSDBUf9GkEs759g162p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKjUwJrdEaVuWmqaFMyZ3a
          claim_id: c_HrvywwhomMcDSAEnbpHE1w
          source_id: s_ZE3mjPm9W1iqQnYEWbDj7x
          stance: supports
          locator: CBDB:266074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266074）
          source: &a1
            id: s_ZE3mjPm9W1iqQnYEWbDj7x
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 266074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266074&o=json
            external_identifier: CBDB:266074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4S1PTEDPMrVwp5FB9pWF1
        subject_person_id: p_u4PoSDBUf9GkEs759g162p
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
        - id: cs_XDjvRs4jWQyi7sjQFWM8mn
          claim_id: c_F4S1PTEDPMrVwp5FB9pWF1
          source_id: s_ZE3mjPm9W1iqQnYEWbDj7x
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
        id: c_WYK4w1oo02UdfkX7vV4Lld
        subject_person_id: p_u4PoSDBUf9GkEs759g162p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zhXOauU43mI0y85cjSEKmq
          claim_id: c_WYK4w1oo02UdfkX7vV4Lld
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fB4hQ2GqSMVbEJrJj9XLEB
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 126528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json
            external_identifier: CBDB:126528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 126528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json)
- [中国历代人物传记资料库：王哲（CBDB 266074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266074&o=json)

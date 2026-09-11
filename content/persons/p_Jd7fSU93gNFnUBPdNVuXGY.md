---
schema: wang-person/v1
id: p_Jd7fSU93gNFnUBPdNVuXGY
status: active
merged_into: null
display_name: 王尺水
cbdb_id: 513589
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zgc6fG13AsPHPNw6Gu7Umy
        subject_person_id: p_Jd7fSU93gNFnUBPdNVuXGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尺水，清人物。中国历代人物传记资料库（CBDB）以人物编号 513589 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IrsqrDPYoIFBs7utRNhBZO
          claim_id: c_Zgc6fG13AsPHPNw6Gu7Umy
          source_id: s_MQDnwSJNjTb68Q1HxU7KY8
          stance: supports
          locator: CBDB:513589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_MQDnwSJNjTb68Q1HxU7KY8
            source_type: api_record
            title: 中国历代人物传记资料库：王尺水（CBDB 513589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513589&o=json
            external_identifier: CBDB:513589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t9UHmQQpLwHreqVyeh4GwN
        subject_person_id: p_Jd7fSU93gNFnUBPdNVuXGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尺水
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MAPa7mNjjtJoKfpkG6zLH9
          claim_id: c_t9UHmQQpLwHreqVyeh4GwN
          source_id: s_MQDnwSJNjTb68Q1HxU7KY8
          stance: supports
          locator: CBDB:513589
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_MQDnwSJNjTb68Q1HxU7KY8
            source_type: api_record
            title: 中国历代人物传记资料库：王尺水（CBDB 513589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513589&o=json
            external_identifier: CBDB:513589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o5qjS2NC0xGDnhwiSDJELc
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Jd7fSU93gNFnUBPdNVuXGY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1lTolVsgZhSqU0_v1yx8s
          claim_id: c_o5qjS2NC0xGDnhwiSDJELc
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vECvu4PrbhTNUTMJRckP9C
        status: active
        display_name: 王輔運
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尺水

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尺水，清人物。中国历代人物传记资料库（CBDB）以人物编号 513589 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王尺水 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vECvu4PrbhTNUTMJRckP9C | 王輔運 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尺水（CBDB 513589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513589&o=json)
- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)

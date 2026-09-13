---
schema: wang-person/v1
id: p_xFFdPdJwKEcff8qRsr4b53
status: active
merged_into: null
display_name: 王紹紀
cbdb_id: 279053
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mT1poAzpL8Z1CEmDDX125V
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹紀，明人物。正德六年進士，籍贯遂寧，曾任七品散官。（中国历代人物传记资料库 CBDB 279053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q2IaMFBQdQeK_9W2yy-SId
          claim_id: c_mT1poAzpL8Z1CEmDDX125V
          source_id: s_JU6WdxENMJvNu5xaw7DoH5
          stance: supports
          locator: CBDB:279053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JU6WdxENMJvNu5xaw7DoH5
            source_type: api_record
            title: 中国历代人物传记资料库：王紹紀（CBDB 279053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279053&o=json
            external_identifier: CBDB:279053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTPH1tyMmpHwHRgP4rDbrG
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H8a1aS41cMFJHAxRbDStDK
          claim_id: c_pTPH1tyMmpHwHRgP4rDbrG
          source_id: s_JU6WdxENMJvNu5xaw7DoH5
          stance: supports
          locator: CBDB:279053
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xSv-Ep-KvbMPH7w_QufvCv
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6aIGbMTpxw76Pze_u0g11
          claim_id: c_xSv-Ep-KvbMPH7w_QufvCv
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dd11Ucp3nBYq5pLBRoWsZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 201843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json
            external_identifier: CBDB:201843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹紀，明人物。正德六年進士，籍贯遂寧，曾任七品散官。（中国历代人物传记资料库 CBDB 279053） | accepted |
| name.primary | 王紹紀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 201843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json)
- [中国历代人物传记资料库：王紹紀（CBDB 279053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279053&o=json)

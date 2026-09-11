---
schema: wang-person/v1
id: p_qZaYNm15S5hgm7muEhEjS6
status: active
merged_into: null
display_name: 王賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8yRwb668Yz9MJALg8cdwCb
        subject_person_id: p_qZaYNm15S5hgm7muEhEjS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BhFq8MBp7PmyHFQAnTxxHk
          claim_id: c_8yRwb668Yz9MJALg8cdwCb
          source_id: s_j98AwQs3aodqf8U7mwVVTX
          stance: supports
          locator: CBDB:295464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295464）
          source: &a1
            id: s_j98AwQs3aodqf8U7mwVVTX
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 295464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295464&o=json
            external_identifier: CBDB:295464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oaatYDbBGLWZoXjKjaUtJ1
        subject_person_id: p_qZaYNm15S5hgm7muEhEjS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 295464）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JIYI22MgKdujLMJgNLxxM
          claim_id: c_oaatYDbBGLWZoXjKjaUtJ1
          source_id: s_j98AwQs3aodqf8U7mwVVTX
          stance: supports
          locator: CBDB:295464
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
        id: c_NYfxY29X4Zx7Ypo6wYgi_X
        subject_person_id: p_qZaYNm15S5hgm7muEhEjS6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__uO2oKlxoGpo4w5GpBXJpq
          claim_id: c_NYfxY29X4Zx7Ypo6wYgi_X
          source_id: s_j98AwQs3aodqf8U7mwVVTX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VucmhQBadSnMBnkJ3L6uEp
        status: active
        display_name: 王儒
        merged_into_person_id: null
  other: []
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 295464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VucmhQBadSnMBnkJ3L6uEp | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 295464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295464&o=json)

---
schema: wang-person/v1
id: p_VucmhQBadSnMBnkJ3L6uEp
status: active
merged_into: null
display_name: 王儒
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrgvP1k2AMLMQM3pEK8JNy
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Z8VNXFcav7PQpEiqy3HSM
          claim_id: c_mrgvP1k2AMLMQM3pEK8JNy
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
          stance: supports
          locator: CBDB:202837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202837）
          source: &a1
            id: s_QXUuhRPU8tPX4LxiMVDTLB
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 202837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202837&o=json
            external_identifier: CBDB:202837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y38MPh1mNWJcJt95Bc7q6t
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GW87US6xmgc6Lh8YJSrPKy
          claim_id: c_Y38MPh1mNWJcJt95Bc7q6t
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Yq2Ye5hzKu1iG1de6uwUG
        subject_person_id: p_VucmhQBadSnMBnkJ3L6uEp
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
        - id: cs_PDbK2LJEEdvQ2NkyiVcsow
          claim_id: c_4Yq2Ye5hzKu1iG1de6uwUG
          source_id: s_QXUuhRPU8tPX4LxiMVDTLB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T3Cc_NKipoghAYIYjdzH7O
        subject_person_id: p_AfNyQu6qaMb8nUDi66FfQG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufk6TIAZsFqxezmybM9Kyx
          claim_id: c_T3Cc_NKipoghAYIYjdzH7O
          source_id: s_6eKKSGD7NkJ2sQJfQwdE8i
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6eKKSGD7NkJ2sQJfQwdE8i
            source_type: api_record
            title: 中国历代人物传记资料库：王子然（CBDB 295466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295466&o=json
            external_identifier: CBDB:295466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AfNyQu6qaMb8nUDi66FfQG
        status: active
        display_name: 王子然
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pmSKbmTBHjKS3Wid0FKqxy
        subject_person_id: p_dh3GqfHKk464pd14hKtKQ6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VucmhQBadSnMBnkJ3L6uEp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NgrINBh8hKif3Rwa-PmptW
          claim_id: c_pmSKbmTBHjKS3Wid0FKqxy
          source_id: s_11GcMfaC3NzcL4D82pjvgH
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_11GcMfaC3NzcL4D82pjvgH
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 295465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295465&o=json
            external_identifier: CBDB:295465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dh3GqfHKk464pd14hKtKQ6
        status: active
        display_name: 王興
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_qZaYNm15S5hgm7muEhEjS6
        status: active
        display_name: 王賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| birth.date | 1497年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AfNyQu6qaMb8nUDi66FfQG | 王子然 | accepted |
| ancestors | p_dh3GqfHKk464pd14hKtKQ6 | 王興 | accepted |
| ancestors | p_qZaYNm15S5hgm7muEhEjS6 | 王賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 202837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202837&o=json)
- [中国历代人物传记资料库：王賢（CBDB 295464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295464&o=json)
- [中国历代人物传记资料库：王興（CBDB 295465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295465&o=json)
- [中国历代人物传记资料库：王子然（CBDB 295466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295466&o=json)

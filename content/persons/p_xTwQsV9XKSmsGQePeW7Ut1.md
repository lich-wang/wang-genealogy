---
schema: wang-person/v1
id: p_xTwQsV9XKSmsGQePeW7Ut1
status: active
merged_into: null
display_name: 王懋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LL67Zjeas7JDLwA9fXBJGW
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSW9cgkxySUjf7RZNvkSmQ
          claim_id: c_LL67Zjeas7JDLwA9fXBJGW
          source_id: s_he7oa3KBdhRZKFKodMAEUH
          stance: supports
          locator: CBDB:199698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199698）
          source: &a1
            id: s_he7oa3KBdhRZKFKodMAEUH
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 199698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199698&o=json
            external_identifier: CBDB:199698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cwvmL7asgEg6vaNh6Ey12c
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AoBSjsUN9FkTmDPQnW7U9M
          claim_id: c_cwvmL7asgEg6vaNh6Ey12c
          source_id: s_he7oa3KBdhRZKFKodMAEUH
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
        id: c_k4p1khQuJJ2mwzdG7msGPr
        subject_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
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
        - id: cs_Dwuo4CfVDYfr8gvusEm76M
          claim_id: c_k4p1khQuJJ2mwzdG7msGPr
          source_id: s_he7oa3KBdhRZKFKodMAEUH
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
        id: c_Wze8afH02p_mNB6gt7wRgE
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRKJ1bH5gakDP8eh2RHm_T
          claim_id: c_Wze8afH02p_mNB6gt7wRgE
          source_id: s_v3VAH59R5prFHTrBaLk33k
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3VAH59R5prFHTrBaLk33k
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 248664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json
            external_identifier: CBDB:248664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PEt7x529igvwnBDEaRjBZt
        status: active
        display_name: 王玘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7ToOR9z4CyoPmw4CG-QUZK
        subject_person_id: p_SwHKV5Y4jiVTDLuyMHygcN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__f83wSVtKdY8P4Wn-gh1IV
          claim_id: c_7ToOR9z4CyoPmw4CG-QUZK
          source_id: s_889tLY2mq8DhZ8pdy7PfFb
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_889tLY2mq8DhZ8pdy7PfFb
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 248663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248663&o=json
            external_identifier: CBDB:248663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SwHKV5Y4jiVTDLuyMHygcN
        status: active
        display_name: 王整
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PEt7x529igvwnBDEaRjBZt | 王玘 | accepted |
| ancestors | p_SwHKV5Y4jiVTDLuyMHygcN | 王整 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 199698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199698&o=json)
- [中国历代人物传记资料库：王玘（CBDB 248664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json)
- [中国历代人物传记资料库：王整（CBDB 248663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248663&o=json)

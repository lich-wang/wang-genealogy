---
schema: wang-person/v1
id: p_MfuJvBCLAoVuv41EkHWqmH
status: active
merged_into: null
display_name: 王某秘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C23UHCPSirvoVeP3J6m8eF
        subject_person_id: p_MfuJvBCLAoVuv41EkHWqmH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某秘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BaP4CbV4Ht3kwVE47AbHz9
          claim_id: c_C23UHCPSirvoVeP3J6m8eF
          source_id: s_DjLXcHxCqGmayhH1v5Fo9M
          stance: supports
          locator: CBDB:696162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696162）
          source: &a1
            id: s_DjLXcHxCqGmayhH1v5Fo9M
            source_type: api_record
            title: 中国历代人物传记资料库：王某秘（CBDB 696162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696162&o=json
            external_identifier: CBDB:696162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ViLPS9i3XjfbGnvDMLEyPA
        subject_person_id: p_MfuJvBCLAoVuv41EkHWqmH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某秘，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xC-b3mn-TbdN5ApNTrkKhe
          claim_id: c_ViLPS9i3XjfbGnvDMLEyPA
          source_id: s_DjLXcHxCqGmayhH1v5Fo9M
          stance: supports
          locator: CBDB:696162
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
  descendants: []
  other:
    - claim:
        id: c_vxQBCrL_NTghM6F36n88My
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MfuJvBCLAoVuv41EkHWqmH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pk-hHmCD5e-1HuyW_acEj-
          claim_id: c_vxQBCrL_NTghM6F36n88My
          source_id: s_o-YySgW_mt_g25krZ3cWIx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 696155 王誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o-YySgW_mt_g25krZ3cWIx
            source_type: api_record
            title: 中国历代人物传记资料库：王某秘（CBDB 696162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696162&o=json
            external_identifier: CBDB:696162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MRcNDk25WD9q2qKW2Sg6T2
        status: active
        display_name: 王誠
        merged_into_person_id: null
---

# 王某秘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王某秘 | accepted |
| bio.summary | 王某秘，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_MRcNDk25WD9q2qKW2Sg6T2 | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王某秘（CBDB 696162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696162&o=json)

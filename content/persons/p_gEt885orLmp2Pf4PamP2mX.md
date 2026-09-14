---
schema: wang-person/v1
id: p_gEt885orLmp2Pf4PamP2mX
status: active
merged_into: null
display_name: 王懷政
cbdb_id: 21980
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4sDuhffsYiG1R8GGySiBi
        subject_person_id: p_gEt885orLmp2Pf4PamP2mX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷政，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21980）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1BypS4hVd1efssKl3gACb_
          claim_id: c_j4sDuhffsYiG1R8GGySiBi
          source_id: s_kY7WRAwnEQsiMBY9Z8TSou
          stance: supports
          locator: CBDB:21980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kY7WRAwnEQsiMBY9Z8TSou
            source_type: api_record
            title: 中国历代人物传记资料库：王懷政（CBDB 21980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21980&o=json
            external_identifier: CBDB:21980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hcyjMdJipEsinscemMWoM
        subject_person_id: p_gEt885orLmp2Pf4PamP2mX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SfACgR8VnKePB4X2nZkGJ2
          claim_id: c_5hcyjMdJipEsinscemMWoM
          source_id: s_kY7WRAwnEQsiMBY9Z8TSou
          stance: supports
          locator: CBDB:21980
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a5ejqgSjZ5JZAU9z2F3_Cg
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEt885orLmp2Pf4PamP2mX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iqQDOxUxI7ctMJtnvFICMN
          claim_id: c_a5ejqgSjZ5JZAU9z2F3_Cg
          source_id: s_JlqqTAt6I1UzzOULcyFPRg
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_JlqqTAt6I1UzzOULcyFPRg
            source_type: api_record
            title: 中国历代人物传记资料库：王懷政（CBDB 21980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21980&o=json
            external_identifier: CBDB:21980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvEsXMQ6J7PST7ecUX2ULA
        status: active
        display_name: 王繼忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷政，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21980） | accepted |
| name.primary | 王懷政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvEsXMQ6J7PST7ecUX2ULA | 王繼忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷政（CBDB 21980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21980&o=json)

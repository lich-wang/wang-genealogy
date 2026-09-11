---
schema: wang-person/v1
id: p_FSFHNsd7jBYr9uTN9TLryA
status: active
merged_into: null
display_name: 王琦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23KU7LETdx2B2MD5PA5aPT
        subject_person_id: p_FSFHNsd7jBYr9uTN9TLryA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RA4H4FSGy8z6gqtbcK6JUj
          claim_id: c_23KU7LETdx2B2MD5PA5aPT
          source_id: s_KktkJdXN2pLYP5MneuF6TW
          stance: supports
          locator: CBDB:318405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318405）
          source: &a1
            id: s_KktkJdXN2pLYP5MneuF6TW
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 318405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318405&o=json
            external_identifier: CBDB:318405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_39tnXNsxA83B2imiurvrK8
        subject_person_id: p_FSFHNsd7jBYr9uTN9TLryA
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
        - id: cs_zFPtu4rYaCcWoXggohvPrF
          claim_id: c_39tnXNsxA83B2imiurvrK8
          source_id: s_KktkJdXN2pLYP5MneuF6TW
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
        id: c_lY0fp4tSdqqp3xfBRaZcWu
        subject_person_id: p_FSFHNsd7jBYr9uTN9TLryA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_grCSFL1quZ5BwMnyTaF-jt
          claim_id: c_lY0fp4tSdqqp3xfBRaZcWu
          source_id: s_Ku7LWpVqP3Bb5dh1yP9ouV
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ku7LWpVqP3Bb5dh1yP9ouV
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 204388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json
            external_identifier: CBDB:204388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7ZDTot2mHCYEpXe9YLwZZs
        status: active
        display_name: 王業
        merged_into_person_id: null
  other: []
---

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7ZDTot2mHCYEpXe9YLwZZs | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 318405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318405&o=json)
- [中国历代人物传记资料库：王業（CBDB 204388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json)
